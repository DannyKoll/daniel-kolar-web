import { NextResponse } from "next/server";

const gonePathPrefixes = [
  "/blog",
  "/services",
  "/about",
  "/co-ode-me-cekat",
  "/branding",
  "/web-design",
];

export function middleware(request) {
  const { pathname } = request.nextUrl;

  const isGonePath = gonePathPrefixes.some(
    (path) => pathname === path || pathname.startsWith(`${path}/`)
  );

  if (isGonePath) {
    return new NextResponse("Gone", {
      status: 410,
      headers: {
        "Content-Type": "text/plain; charset=utf-8",
      },
    });
  }

  return NextResponse.next();
}

export const config = {
  matcher: [
    "/blog/:path*",
    "/services/:path*",
    "/about/:path*",
    "/co-ode-me-cekat/:path*",
    "/branding/:path*",
    "/web-design/:path*",
  ],
};
