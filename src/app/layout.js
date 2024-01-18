import { Inter } from "next/font/google";
import "./globals.css";
import NavBar from "@/components/shared/NavBar";
import { InfoProvider } from "@/providers/context";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Mediusware || Blog-details",
  description: "Medius Family",
};

const RootLayout = ({ children }) => {
  return (
    <html lang="en">
      <InfoProvider>
        <body className={`${inter.className}`}>
          <div className="bg-gradient-to-l from-[#EEF4F9] from-10% via-[#EAF7F5] via-30% to-[#EEF4F9] to-90% bg-no-repeat">
            <NavBar />
            {children}
          </div>
        </body>
      </InfoProvider>
    </html>
  );
};
export default RootLayout;
