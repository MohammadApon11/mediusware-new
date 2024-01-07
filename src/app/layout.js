import { Inter } from "next/font/google";
import "./globals.css";
import NavBar from "@/components/shared/NavBar";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Mediusware || Blog-details",
  description: "Medius Family",
};

const RootLayout = ({ children }) => {
  return (
    <html lang="en">
      <body className={`${inter.className}`}>
        <div className=" bg-gradient-to-r from-indigo-500 from-10% via-sky-500 via-30% to-emerald-500 to-90% bg-no-repeat h-[3000px] overflow-x-hidden">
          <NavBar />
          {children}
        </div>
      </body>
    </html>
  );
};
export default RootLayout;
