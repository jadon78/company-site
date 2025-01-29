import type { Metadata } from "next";
import { Inter,Montserrat,Poppins  } from "next/font/google";
import { SessionProvider } from "next-auth/react";
import { auth } from "@/auth";
import { Navbar } from "@/components/navbar";
import { Footer } from "@/components/shared/footer";
import { Toaster } from "@/components/ui/toaster";
import "./globals.css";

const montserrat = Montserrat({
  subsets: ['latin'],
  weight: ['100','200','300','400','500','600','700'],
  variable: '--font-montserrat',
});

const poppins = Poppins({
  subsets: ['latin'],
  weight: ['100','200','300','400','500','600','700'],
  variable: '--font-poppins',
});

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Company Site",
  description: "Web & App Development Company",
};

export default async function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  console.log("----<<", children)

  // const session = await auth();
// console.log(session, "session");

  return (
    // <SessionProvider session={null}>
      <html suppressHydrationWarning lang="en">
        <body className={`${inter.className} ${montserrat.variable} ${poppins.variable}`}>
          <Navbar />
          <main className="flex h-full flex-col">{children}</main>
          <Toaster />
          <Footer />
        </body>
      </html>
    // </SessionProvider>
  );
}
