import { NextResponse } from "next/server"
import type { NextRequest } from "next/server"
import { jwtDecode } from "jwt-decode"

function isTokenExpired(token: string): boolean {
  try {
    const decodedToken = jwtDecode<{ exp: number }>(token)
    const currentTime = Math.floor(Date.now() / 1000)

    return decodedToken.exp < currentTime
  } catch {
    return true
  }
}

export function middleware(request: NextRequest) {
  if (request.nextUrl.pathname === "/") {
    return NextResponse.next()
  }

  const accessToken = request.cookies.get("accessToken")

  if (!accessToken || isTokenExpired(accessToken.value)) {
    return NextResponse.redirect(new URL("/", request.url))
  }

  return NextResponse.next()
}

export const config = {
  matcher: [
    "/((?!api|_next/static|_next/image|favicon.ico|icon|images|util).*)",
  ],
}
