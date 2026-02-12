"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { FaTiktok, FaInstagram, FaWhatsapp } from "react-icons/fa";
import { SiShopee } from "react-icons/si";

type LinkItem = {
  id: string;
  label: string;
  url: string;
  desc: string;
};

const LINKS: LinkItem[] = [
  {
    id: "tiktok",
    label: "TikTok",
    url: "https://www.tiktok.com/@your_username",
    desc: "Video promo & behind the scene",
  },
  {
    id: "shopee",
    label: "Shopee",
    url: "https://shopee.co.id/your_shop",
    desc: "Order via Shopee",
  },
  {
    id: "instagram",
    label: "Instagram",
    url: "https://instagram.com/your_username",
    desc: "Lihat menu & testimoni",
  },
  {
    id: "catalog",
    label: "Katalog Menu",
    url: "https://drive.google.com/drive/folders/your-folder-id",
    desc: "Download daftar menu lengkap",
  },
];

export default function Page() {
  const renderIcon = (id: string) => {
    switch (id) {
      case "tiktok":
        return (
          <div className="icon tiktok">
            <FaTiktok size={18} />
          </div>
        );
      case "shopee":
        return (
          <div className="icon shopee">
            <SiShopee size={18} />
          </div>
        );
      case "instagram":
        return (
          <div className="icon instagram">
            <FaInstagram size={18} />
          </div>
        );
      default:
        return null;
    }
  };

  return (
    <main className="relative min-h-screen bg-gradient-to-br from-[#7A1414] via-[#8B1E1E] to-[#5C1010] flex items-center justify-center p-6 overflow-hidden">

      {/* Floating Sauce Glow */}
      <div className="absolute top-20 left-10 w-72 h-72 bg-orange-400 rounded-full blur-[160px] opacity-20 animate-blob1" />
      <div className="absolute bottom-20 right-10 w-80 h-80 bg-red-500 rounded-full blur-[180px] opacity-20 animate-blob2" />

      {/* Background DELICIOUS */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none select-none">
        <div className="whitespace-nowrap animate-marquee text-white text-[140px] font-black tracking-[25px] opacity-[0.03]">
          {Array.from({ length: 8 }).map((_, i) => (
            <span key={i} className="mx-12">
              DELICIOUS
            </span>
          ))}
        </div>
      </div>

      {/* CARD */}
      <motion.div
        whileHover={{ rotateX: 4, rotateY: -4 }}
        transition={{ type: "spring", stiffness: 200 }}
        className="relative w-full max-w-md bg-white/95 backdrop-blur-xl rounded-3xl shadow-[0_20px_60px_rgba(0,0,0,0.35)] overflow-hidden border border-white/30"
      >
        {/* HEADER */}
        <div className="bg-gradient-to-b from-[#8B1E1E] to-[#A61F1F] text-white text-center p-8 relative">
          <div className="w-28 h-28 mx-auto rounded-full overflow-hidden border-4 border-white shadow-xl">
            <Image
              src="/avatar.jpg"
              alt="Dimsum Fazbila"
              width={200}
              height={200}
              className="object-cover w-full h-full"
            />
          </div>

          <h1 className="text-3xl font-extrabold mt-4 tracking-wide">
            DIMSUM FAZBILA
          </h1>

          <p className="text-sm opacity-90 mt-2">
            Fresh • Homemade • Premium Quality
          </p>

          {/* Social Stats */}
          <div className="flex justify-center gap-6 text-xs mt-4 opacity-80">
            <div>⭐ 4.8 Rating</div>
            <div>🔥 500+ Orders</div>
            <div>🥟 Best Seller</div>
          </div>
        </div>

        {/* Divider */}
        <div className="h-[3px] bg-gradient-to-r from-transparent via-orange-400 to-transparent" />

        {/* OPEN */}
        <div className="p-6 text-center bg-gradient-to-b from-white to-[#FFF5F5]">
          <h2 className="text-[#8B1E1E] font-black text-3xl tracking-wide animate-fadeUp">
            We're Open 🔥
          </h2>
          <p className="text-sm text-gray-600 mt-3">
            IT'S TIME TO ORDER YOUR DIMSUM
          </p>
        </div>

        {/* LINKS */}
        <div className="px-6 pb-8 flex flex-col gap-4">
          {LINKS.map((link) => (
            <a
              key={link.id}
              href={link.url}
              target="_blank"
              rel="noopener noreferrer"
              className="group relative bg-[#8B1E1E] text-white p-4 rounded-xl overflow-hidden transition-all duration-500 hover:scale-[1.04] flex items-center gap-4"
            >
              {renderIcon(link.id)}

              <div>
                <div className="font-semibold text-base">
                  {link.label}
                </div>
                <div className="text-xs opacity-80 mt-1">
                  {link.desc}
                </div>
              </div>
            </a>
          ))}

          {/* ORDER BUTTON */}
          <a
            href="https://wa.me/628xxxxxxxxxx"
            target="_blank"
            className="mt-4 bg-gradient-to-r from-orange-500 to-orange-600 text-white font-bold py-4 rounded-xl shadow-lg hover:scale-105 hover:shadow-2xl transition-all text-center tracking-wide"
          >
            ORDER NOW 🚀
          </a>
        </div>

        {/* FOOTER */}
        <div className="bg-[#8B1E1E] text-center text-white text-xs py-4">
          © 2026 Dimsum Fazbila — All Rights Reserved
        </div>
      </motion.div>

      {/* Floating WhatsApp */}
      <a
        href="https://wa.me/628xxxxxxxxxx"
        target="_blank"
        className="fixed bottom-6 right-6 bg-green-500 text-white p-4 rounded-full shadow-xl hover:scale-110 transition-all z-50"
      >
        <FaWhatsapp size={22} />
      </a>

      {/* ANIMATION STYLE */}
      <style jsx global>{`
        @keyframes marquee {
          0% { transform: translateX(0); }
          100% { transform: translateX(-50%); }
        }
        .animate-marquee {
          animation: marquee 40s linear infinite;
        }

        @keyframes blob1 {
          0% { transform: translate(0px, 0px) scale(1); }
          50% { transform: translate(30px, -20px) scale(1.1); }
          100% { transform: translate(0px, 0px) scale(1); }
        }
        .animate-blob1 {
          animation: blob1 12s ease-in-out infinite;
        }

        @keyframes blob2 {
          0% { transform: translate(0px, 0px) scale(1); }
          50% { transform: translate(-20px, 30px) scale(1.1); }
          100% { transform: translate(0px, 0px) scale(1); }
        }
        .animate-blob2 {
          animation: blob2 15s ease-in-out infinite;
        }

        @keyframes fadeUp {
          from { opacity: 0; transform: translateY(15px); }
          to { opacity: 1; transform: translateY(0); }
        }
        .animate-fadeUp {
          animation: fadeUp 1s ease forwards;
        }

        @keyframes float {
          0% { transform: translateY(0px); }
          50% { transform: translateY(-6px); }
          100% { transform: translateY(0px); }
        }

        .icon {
          padding: 10px;
          border-radius: 12px;
          display: flex;
          align-items: center;
          justify-content: center;
          animation: float 3s ease-in-out infinite;
        }

        .tiktok {
          background: black;
          color: white;
        }

        .shopee {
          background: #ee4d2d;
          color: white;
        }

        .instagram {
          background: linear-gradient(
            45deg,
            #f58529,
            #dd2a7b,
            #8134af,
            #515bd4
          );
          color: white;
        }
      `}</style>
    </main>
  );
}
