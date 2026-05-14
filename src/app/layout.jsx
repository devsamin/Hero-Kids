import { Geist, Geist_Mono, Poppins } from "next/font/google";
import localFont from "next/font/local";
import "./globals.css";
import Navbar from "@/components/layouts/Navbar";
import Footer from "@/components/layouts/Footer";

const poppins = Poppins({
  weight: ["100", "200", "400", "500", "600", "800"],
});

export const BanglaFont = localFont({
  src: "../fonts/mayaboti-Italic.ttf",
});

export const metadata = {
  metadataBase: new URL("https://hero-kids-iota.vercel.app"),

  title: {
    default: "Hero Kids | Best Toys for Kids in Bangladesh",
    template: "%s | Hero Kids",
  },

  description:
    "Hero Kids - বাংলাদেশের সেরা অনলাইন টয় স্টোর। বাচ্চাদের জন্য নিরাপদ, শিক্ষামূলক ও মজার খেলনা কিনুন সহজেই।",

  keywords: [
    "kids toys Bangladesh",
    "toy shop BD",
    "baby toys",
    "educational toys",
    "online toy store",
  ],

  authors: [{ name: "Abdulla Al Samin" }],

  openGraph: {
    title: "Hero Kids | Best Toys for Kids",
    description:
      "Buy safe, fun and educational toys for kids. Fast delivery all over Bangladesh.",
    url: "https://hero-kids-iota.vercel.app",
    siteName: "Hero Kids",

    images: [
      {
        url: "https://i.ibb.co.com/zhrbc6C7/image.png", // 🏠 home preview
        width: 1200,
        height: 630,
        alt: "Hero Kids Home Preview",
      },
      {
        url: "https://i.ibb.co.com/BHTZf9Nh/image.png", // 🛒 products preview
        width: 1200,
        height: 630,
        alt: "Hero Kids Products",
      },
    ],

    locale: "en_US",
    type: "website",
  },

  twitter: {
    card: "summary_large_image",
    title: "Hero Kids Toy Store",
    description: "Explore fun toys for kids in Bangladesh.",
    images: ["https://i.ibb.co.com/zhrbc6C7/image.png"],
  },

  icons: {
    icon: "https://i.ibb.co.com/gLTRnxNJ/image.png", // 🎯 logo
  },

  robots: {
    index: true,
    follow: true,
  },
};

export default function RootLayout({ children }) {
  return (
    <html
      lang="en"
      data-theme="light"
      className={`${poppins.className} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col">
        <header className="py-2 md:w-11/12 mx-auto">
          <Navbar />
        </header>

        {/* ✅ FIXED HERE */}
        <main className="flex-1 py-2 md:w-11/12 mx-auto">{children}</main>

        <Footer />
      </body>
    </html>
  );
}
