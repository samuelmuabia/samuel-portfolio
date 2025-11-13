import { NextResponse } from 'next/server';
import type { NextRequest } from 'next/server';

export function middleware(request: NextRequest) {
  const pathname = request.nextUrl.pathname;
  
  // Check if pathname is missing locale
  const pathnameIsMissingLocale = ['en', 'de'].every(
    (locale) => !pathname.startsWith(`/${locale}/`) && pathname !== `/${locale}`
  );

  // Redirect if there is no locale
  if (pathnameIsMissingLocale) {
    const locale = 'en'; // Default locale
    return NextResponse.redirect(
      new URL(`/${locale}${pathname.startsWith('/') ? '' : '/'}${pathname}`, request.url)
    );
  }
}

export const config = {
  matcher: [
    // Skip all internal paths (_next), API routes, static files, and CV PDF
    '/((?!_next|api|favicon.png|cv_samuel_planet.pdf|.*\\.(?:ico|png|jpg|jpeg|svg|pdf|css|js)).*)',
  ],
};

