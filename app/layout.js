import { Inter } from "next/font/google";
import "./globals.css";
import Header from "@/components/header";
import { ClerkProvider } from "@clerk/nextjs";

export const metadata = {
  title: "Doctor App",
  description: "Get easy appointment in seconds",
};

const inter = Inter({ subsets: ["latin"] });

export default function RootLayout({ children }) {
  return (
    <ClerkProvider>
      <html lang="en" className="dark" suppressHydrationWarning>
        {/* Header */}
        <body className={`${inter.className} `}>
          <Header />
          <main className="min-h-screen">{children}</main>

          {/* footer */}
          <footer className="bg-muted/50 py-12">
            <div className="container mx-auto px-4 text-center text-gray-200">
              <p>Created By Tejsva pandey</p>
            </div>
          </footer>
        </body>
      </html>
    </ClerkProvider>
  );
}
