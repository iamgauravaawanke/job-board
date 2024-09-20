import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { Suspense } from "react";
import CommonLayout from "@/components/common-layout";
import Loading from "./loading";
import { ClerkProvider } from "@clerk/nextjs";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Create Next App",import { Inter } from "next/font/google";
  import "./globals.css";
  import { Suspense } from "react";
  import Loading from "./loading";
  import CommonLayout from "@/components/common-layout";
  import { ClerkProvider } from "@clerk/nextjs";
  import { Toaster } from "@/components/ui/toaster";
  
  const inter = Inter({ subsets: ["latin"] });
  
  export const metadata = {
    title: "Create Next App",
    description: "Generated by create next app",
  };
  
  export default function RootLayout({ children }) {
    return (
      <ClerkProvider>
        <html lang="en">
          <body className={inter.className}>
            <Suspense fallback={<Loading />}>
              <CommonLayout
                attribute="class"
                defaultTheme="system"
                children={children}
              />
            </Suspense>
            <Toaster />
          </body>
        </html>
      </ClerkProvider>
    );
  }
  description: "Generated by create next app",
};

export default function RootLayout({children}) 
{
  return (
   <ClerkProvider>
     <html lang="en">
      <body className={inter.className}>
        <Suspense fallback={<Loading/>}>
        <CommonLayout children={children}/>
          
        </Suspense>
      </body>
    </html>
   </ClerkProvider>
  );
}