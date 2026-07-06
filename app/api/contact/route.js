import { NextResponse } from "next/server";

const RESEND_ENDPOINT = "https://api.resend.com/emails";
const DEFAULT_TO_EMAIL = "d.kolar@westfair.cz";
const DEFAULT_FROM_EMAIL = "Web Daniela Koláře <onboarding@resend.dev>";

function clean(value) {
  return typeof value === "string" ? value.trim() : "";
}

function limit(value, maxLength) {
  return value.length > maxLength ? value.slice(0, maxLength) : value;
}

function isEmail(value) {
  return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(value);
}

function escapeHtml(value) {
  return value
    .replaceAll("&", "&amp;")
    .replaceAll("<", "&lt;")
    .replaceAll(">", "&gt;")
    .replaceAll('"', "&quot;")
    .replaceAll("'", "&#039;");
}

function paragraph(value) {
  const safeValue = escapeHtml(value || "Neuvedeno");
  return safeValue.replace(/\n/g, "<br />");
}

export async function POST(request) {
  let body;

  try {
    body = await request.json();
  } catch {
    return NextResponse.json(
      { message: "Zprávu se nepodařilo přečíst." },
      { status: 400 }
    );
  }

  if (!body || typeof body !== "object") {
    return NextResponse.json(
      { message: "Zprávu se nepodařilo přečíst." },
      { status: 400 }
    );
  }

  const name = limit(clean(body.name), 120);
  const phone = limit(clean(body.phone), 40);
  const email = limit(clean(body.email), 160);
  const message = limit(clean(body.message), 4000);
  const source = limit(clean(body.source), 80);
  const topic = limit(clean(body.topic), 160);
  const advisorContext = limit(clean(body.advisorContext), 6000);
  const consent = Boolean(body.consent);
  const website = clean(body.website);
  const isRentgen = source === "financni-rentgen";

  if (website) {
    return NextResponse.json({ ok: true });
  }

  if ((!isRentgen && !name) || !email || !consent || !isEmail(email)) {
    return NextResponse.json(
      {
        message: isRentgen
          ? "Doplňte prosím platný e-mail a souhlas."
          : "Doplňte prosím jméno, platný e-mail a souhlas.",
      },
      { status: 400 }
    );
  }

  if (!process.env.RESEND_API_KEY) {
    return NextResponse.json(
      { message: "Odesílání zatím není nastavené." },
      { status: 503 }
    );
  }

  const toEmail = process.env.CONTACT_TO_EMAIL || DEFAULT_TO_EMAIL;
  const fromEmail = process.env.CONTACT_FROM_EMAIL || DEFAULT_FROM_EMAIL;

  const displayName = name || "Neuvedeno";
  const subjectName = displayName.replace(/[\r\n]+/g, " ");
  const subject = isRentgen
    ? `Finanční rentgen - ${subjectName}`
    : `Nový dotaz z webu - ${subjectName}`;
  const html = `
    <div style="font-family: Arial, sans-serif; line-height: 1.6; color: #111827;">
      <h1 style="font-size: 20px; margin: 0 0 16px;">${isRentgen ? "Nový výsledek finančního rentgenu" : "Nový dotaz z webu"}</h1>
      <p><strong>Jméno:</strong> ${paragraph(displayName)}</p>
      <p><strong>E-mail:</strong> ${paragraph(email)}</p>
      <p><strong>Telefon:</strong> ${paragraph(phone)}</p>
      ${isRentgen ? `<p><strong>Téma:</strong> ${paragraph(topic)}</p>` : ""}
      <p><strong>Zpráva:</strong><br />${paragraph(message)}</p>
      ${
        isRentgen
          ? `<p><strong>Podklad z rentgenu:</strong><br />${paragraph(advisorContext)}</p>`
          : ""
      }
      <hr style="border: none; border-top: 1px solid #e5e7eb; margin: 24px 0;" />
      <p style="font-size: 13px; color: #6b7280;">
        ${
          isRentgen
            ? "Zpráva byla odeslána z formuláře ve finančním rentgenu na webu Daniela Koláře."
            : "Zpráva byla odeslána z kontaktního formuláře na webu Daniela Koláře."
        }
      </p>
    </div>
  `;

  try {
    const response = await fetch(RESEND_ENDPOINT, {
      method: "POST",
      headers: {
        Authorization: `Bearer ${process.env.RESEND_API_KEY}`,
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        from: fromEmail,
        to: [toEmail],
        reply_to: email,
        subject,
        html,
      }),
    });

    if (!response.ok) {
      const errorBody = await response.text();
      console.error("Contact form email failed:", response.status, errorBody);

      return NextResponse.json(
        { message: "Zprávu se nepodařilo odeslat." },
        { status: 502 }
      );
    }

    return NextResponse.json({ ok: true });
  } catch (error) {
    console.error("Contact form email error:", error);

    return NextResponse.json(
      { message: "Zprávu se nepodařilo odeslat." },
      { status: 502 }
    );
  }
}
