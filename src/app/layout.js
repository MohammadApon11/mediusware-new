import { Inter } from "next/font/google";
import "./globals.css";
import NavBar from "@/components/shared/NavBar";
import { InfoProvider } from "@/providers/context";
import Footer from "@/components/shared/Footer";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Mediusware || Home",
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
            <Footer />
          </div>
        </body>
      </InfoProvider>
    </html>
  );
};
export default RootLayout;
