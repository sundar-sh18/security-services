import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import Nav from "./components/nav/nav";
import Footer from "./components/footer/footer";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata = {
  title: "Alert Security Services & Labour Contract",
  description: "",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com"/>
      {/* <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin/> */}
      <link href="https://fonts.googleapis.com/css2?family=Archivo+Black&family=Comfortaa:wght@300..700&family=Genos:ital,wght@0,100..900;1,100..900&family=MuseoModerno:ital,wght@0,100..900;1,100..900&family=Pathway+Gothic+One&family=Rubik+Mono+One&family=Squada+One&family=Staatliches&family=Sulphur+Point:wght@300;400;700&family=Teko:wght@300..700&family=Tilt+Neon&family=Tilt+Warp&display=swap" rel="stylesheet"/>
      </head>
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        <Nav/>
        {children}
        <Footer/>
      </body>
    </html>
  );
}
