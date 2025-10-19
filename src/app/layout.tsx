import type { Metadata } from "next";
import localFont from "next/font/local";
import "./globals.css";
import NavBar from "@/componens/NavBar/NavBar";
import {Roboto} from "next/font/google";
import ControlPanel from "@/componens/Control_panel/ControlPanel";
import {StoreProvider} from "@/store/StoreProvider";
import RuleComponens from "@/componens/RuleComponens/RuleComponens";

const inter = Roboto({ subsets: ["latin"], weight: ["500", "400", "300", "900"]});

export const metadata: Metadata = {
    title: "JET P2P",
    icons: "image/favicon.svg"
}


export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
      <>
          <StoreProvider>
              <html lang="en">
                <body className={inter.className}>
                    <NavBar/>
                    <RuleComponens/>
                    <ControlPanel/>
                    {children}
                </body>
              </html>
          </StoreProvider>

      </>
  );
}
