import "./globals.css";
import { Plus_Jakarta_Sans } from "next/font/google";
import { Footer, Navbar } from "../components";

const plusJakartaSans = Plus_Jakarta_Sans({ subsets: ["latin"] });

export const metadata = {
  title: "Create Next App",
  description: "Generated by create next app",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={`${plusJakartaSans.className} text-black-100`}>
        <Navbar />
        <main className="md:[6rem] mt-[7.5rem]">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
