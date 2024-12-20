// app/layout.js

'use client';
import './globals.css';
import { Poppins } from 'next/font/google';
import ReduxProvider from '../redux/Provider';
import AuthProvider from '../components/AuthProvider';
import Header from '../components/Header';
import SubHeader from '../components/SubHeader';
import { usePathname } from 'next/navigation';
import Footer from '@/components/Footer';

// Load all font weights
const poppins = Poppins({
  subsets: ['latin'],
  weight: ['100', '200', '300', '400', '500', '600', '700', '800', '900'],
  display: 'swap',
});

export default function RootLayout({ children }) {
  const pathname = usePathname();

  // Check if current path is dashboard or auth related
  const isDashboardOrAuth =
    pathname.includes('/dashboard') ||
    pathname.includes('/admin-sign-in') ||
    pathname.includes('/super-admin-sign-in') ||
    pathname.includes('/super-admin-dashboard') ||
    pathname.includes('/sign-in') ||
    pathname.includes('/sign-up') ||
    pathname.includes('/email-verification');

  // Only show header and footer for non-dashboard/auth pages
  const showHeaderFooter = !isDashboardOrAuth;

  // Hide subheader on category and product detail pages
  const hideSubHeader =
    pathname.includes('/products/') ||
    (pathname.includes('/services/') && pathname.split('/').length > 2);

  return (
    <html lang="en" className={poppins.className}>
      <body className="min-h-screen w-full overflow-x-hidden transition-colors duration-300 dark:bg-[#1a1a1a] dark:text-white">
        <ReduxProvider>
          <AuthProvider>
            <div className="flex flex-col min-h-screen w-full">
              {showHeaderFooter && (
                <div className="flex-none">
                  <Header />
                  {!hideSubHeader && <SubHeader />}
                </div>
              )}
              <main className="flex-grow w-full dark:bg-[#1a1a1a]">
                {children}
              </main>
              {showHeaderFooter && (
                <div className="flex-none mt-auto  dark:bg-[#0e1b0f]">
                  <Footer />
                </div>
              )}
            </div>
          </AuthProvider>
        </ReduxProvider>
      </body>
    </html>
  );
}
