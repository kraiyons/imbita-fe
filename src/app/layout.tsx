import "./globals.css";
import { Cinzel_Decorative, Raleway } from "next/font/google";

const cinzelDeco = Cinzel_Decorative({
  subsets: ["latin"],
  weight: ["400", "700", "900"],
  display: "swap",
  variable: "--font-cinzel-decorative",
});

const raleway = Raleway({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-raleway",
});

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body
        className={`${cinzelDeco.variable} ${raleway.variable} text-[#333333] font-raleway`}
      >
        {children}
      </body>
    </html>
  );
}
