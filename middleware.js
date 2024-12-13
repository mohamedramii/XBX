// middleware.js

import { NextResponse } from 'next/server';

const publicRoutes = [
  '/sign-in',
  '/sign-up',
  '/email-verification',
  '/admin-sign-in',
  '/super-admin-sign-in'
];

export function middleware(request) {
  const { pathname } = request.nextUrl;

  // Get both tokens
  const superAdminToken = request.cookies.get('superAdminToken')?.value;
  const adminToken = request.cookies.get('adminToken')?.value;

  // Super Admin routes protection
  if (pathname.startsWith('/super-admin-dashboard')) {
    if (!superAdminToken) {
      return NextResponse.redirect(new URL('/super-admin-sign-in', request.url));
    }
    return NextResponse.next();
  }

  // Admin routes protection
  if (pathname.startsWith('/dashboard')) {
    if (!adminToken) {
      return NextResponse.redirect(new URL('/admin-sign-in', request.url));
    }
    return NextResponse.next();
  }

  // Handle sign-in pages access
  if (pathname === '/super-admin-sign-in') {
    if (superAdminToken) {
      return NextResponse.redirect(new URL('/super-admin-dashboard/overview', request.url));
    }
    // If user is logged in as regular admin, log them out
    if (adminToken) {
      const response = NextResponse.next();
      response.cookies.delete('adminToken');
      return response;
    }
    return NextResponse.next();
  }

  if (pathname === '/admin-sign-in') {
    if (adminToken) {
      return NextResponse.redirect(new URL('/dashboard/overview', request.url));
    }
    // If user is logged in as super admin, log them out
    if (superAdminToken) {
      const response = NextResponse.next();
      response.cookies.delete('superAdminToken');
      return response;
    }
    return NextResponse.next();
  }

  // Allow access to public routes
  if (publicRoutes.includes(pathname)) {
    return NextResponse.next();
  }

  // For other protected routes
  const token = request.cookies.get('token')?.value;
  if (!token && !publicRoutes.includes(pathname)) {
    return NextResponse.redirect(new URL('/sign-in', request.url));
  }

  return NextResponse.next();
}

export const config = {
  matcher: [
    '/dashboard/:path*',
    '/super-admin-dashboard/:path*',
    '/admin-sign-in',
    '/super-admin-sign-in'
  ]
};

