import { type NextRequest, NextResponse } from "next/server"

export const config = {
  matcher: [
    /*
     * Match all paths except for:
     * 1. /api routes
     * 2. /_next (Next.js internals)
     * 3. /_static (inside /public)
     * 4. all root files inside /public (e.g. /favicon.ico)
     */
    "/((?!api/|_next/|_static/|_vercel|[\\w-]+\\.\\w+).*)",
  ],
}

export default async function middleware(
  req: NextRequest
): Promise<NextResponse<unknown> | undefined> {
  const url = req.nextUrl
  // Get hostname of request (e.g. demo.vercel.pub, demo.localhost:3000)
  let hostname = req.headers.get("host")

  if (hostname != null) {
    hostname = hostname.replace(
      ".localhost:3000",
      `.${process.env.NEXT_PUBLIC_ROOT_DOMAIN}`
    )

    // Handle specific subdomain redirects

    switch (hostname.split(".")[0]) {
      case "service":
        return await handleService(req, url)
      case "brands":
        return await handleBrand(req, url)
      case "admin":
        return await handleAdmin(req, url)
    }
  }
}

async function handleService(
  req: NextRequest,
  url: URL
): Promise<NextResponse<unknown>> {
  // Redirect or rewrite logic for 'service' subdomain
  // Example: Redirect to /service/page
  return NextResponse.rewrite(new URL(`/service${url.pathname}`, req.url))
}

async function handleBrand(
  req: NextRequest,
  url: URL
): Promise<NextResponse<unknown>> {
  // Redirect or rewrite logic for 'brand' subdomain
  // Example: Redirect to /brand/page
  return NextResponse.rewrite(new URL(`/brands${url.pathname}`, req.url))
}

async function handleAdmin(
  req: NextRequest,
  url: URL
): Promise<NextResponse<unknown>> {
  // Redirect or rewrite logic for 'admin' subdomain
  // Example: Redirect to /admin/page
  return NextResponse.rewrite(new URL(`/admin${url.pathname}`, req.url))
}
