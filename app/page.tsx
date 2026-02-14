"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { FaTiktok, FaInstagram, FaWhatsapp, FaMapMarkerAlt } from "react-icons/fa";
import { SiShopee } from "react-icons/si";

type LinkItem = {
  id: string;
  label: string;
  url: string;
  desc: string;
};

const LINKS: LinkItem[] = [
  // {
  //   id: "tiktok",
  //   label: "TikTok",
  //   url: "https://www.tiktok.com/@fazarizqy",
  //   desc: "Video promo & behind the scene",
  // },
  // {
  //   id: "shopee",
  //   label: "Shopee",
  //   url: "https://shopee.co.id/your_shop",
  //   desc: "Order via Shopee",
  // },
  {
    id: "instagram",
    label: "Instagram",
    url: "https://www.instagram.com/dimsum.fazbila?utm_source=ig_web_button_share_sheet&igsh=ZDNlZDc0MzIxNw==",
    desc: "Lihat menu & testimoni",
  },
  {
    id: "maps",
    label: "Google Maps",
    url: "https://maps.app.goo.gl/vEM2kQUFFJ1UmbET8",
    desc: "Lihat lokasi kami",
  },
  {
    id: "catalog",
    label: "Price List",
    url: "https://drive.google.com/drive/folders/1CVPu-03VaUonCKr9XyffeOvzFRhh6i8o?usp=sharing",
    desc: "Download daftar menu lengkap",
  },
];

export default function Page() {
  const renderIcon = (id: string) => {
    switch (id) {
      case "tiktok":
        return <div className="icon tiktok"><FaTiktok size={20} /></div>;
      case "shopee":
        return <div className="icon shopee"><SiShopee size={20} /></div>;
      case "instagram":
        return <div className="icon instagram"><FaInstagram size={20} /></div>;
      case "maps":
        return <div className="icon maps"><FaMapMarkerAlt size={20} /></div>;
      default:
        return null;
    }
  };

  return (
    <main className="relative min-h-screen bg-gradient-to-br from-[#7A1414] via-[#8B1E1E] to-[#5C1010] flex items-center justify-center p-4 overflow-hidden">

      {/* Floating Background Glow */}
      <div className="absolute top-16 left-6 w-56 h-56 bg-orange-400 rounded-full blur-[140px] opacity-20 animate-blob1" />
      <div className="absolute bottom-16 right-6 w-64 h-64 bg-red-500 rounded-full blur-[160px] opacity-20 animate-blob2" />

      {/* Background Text */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none select-none">
        <div className="whitespace-nowrap animate-marquee text-white text-[80px] font-black tracking-[10px] opacity-[0.03]">
          {Array.from({ length: 8 }).map((_, i) => (
            <span key={i} className="mx-8">DELICIOUS</span>
          ))}
        </div>
      </div>

      {/* CARD */}
      <motion.div
        whileHover={{ rotateX: 3, rotateY: -3, scale: 1.02 }}
        transition={{ type: "spring", stiffness: 200 }}
        className="relative w-full max-w-sm bg-white/95 backdrop-blur-xl rounded-3xl shadow-[0_20px_40px_rgba(0,0,0,0.3)] overflow-hidden border border-white/30"
      >

        {/* HEADER */}
        <div className="bg-gradient-to-b from-[#8B1E1E] to-[#A61F1F] text-white text-center p-6">
          <div className="w-24 h-24 mx-auto rounded-full overflow-hidden border-4 border-white shadow-xl">
            <Image
              src="/avatar.jpg"
              alt="Dimsum Fazbila"
              width={200}
              height={200}
              className="object-cover w-full h-full"
            />
          </div>

          <h1 className="text-2xl font-extrabold mt-3 tracking-wide">DIMSUM FAZBILA</h1>
          <p className="text-xs opacity-90 mt-1">
            Homemade Premium Dimsum <br />
            Fresh Setiap Hari • Tanpa Pengawet
          </p>

          <div className="flex justify-center gap-3 text-[10px] mt-3 opacity-80">
            <div>⭐ 4.8 Rating</div>
            <div>🔥 500+ Orders</div>
            <div>🥟 Best Seller</div>
          </div>
        </div>

        <div className="h-[3px] bg-gradient-to-r from-transparent via-orange-400 to-transparent" />

        {/* OPEN */}
        <div className="p-4 text-center bg-gradient-to-b from-white to-[#FFF5F5]">
          <h2 className="text-[#8B1E1E] font-black text-2xl animate-fadeUp">We're Open 🔥</h2>
          <p className="text-xs text-gray-600 mt-2">IT'S TIME TO ORDER YOUR DIMSUM</p>
        </div>

        {/* LINKS */}
        <div className="px-4 pb-6 flex flex-col gap-3">
          {LINKS.map(link => (
            <a
              key={link.id}
              href={link.url}
              target="_blank"
              rel="noopener noreferrer"
              className="group relative bg-[#8B1E1E] text-white p-3 rounded-xl flex items-center gap-3 hover:scale-[1.03] hover:-translate-y-1 hover:shadow-lg transition-all"
            >
              {renderIcon(link.id)}
              <div>
                <div className="font-semibold text-sm">{link.label}</div>
                <div className="text-[10px] opacity-80 mt-1">{link.desc}</div>
              </div>
            </a>
          ))}

          {/* MAIN CTA */}
          <a
            href="https://wa.me/6289672296961?text=Halo%20Dimsum%20Fazbila,%20saya%20mau%20order"
            target="_blank"
            rel="noopener noreferrer"
            className="mt-3 bg-gradient-to-r from-orange-500 to-orange-600 text-white font-bold py-3 rounded-xl shadow-lg hover:scale-105 hover:shadow-2xl transition-all text-center tracking-wide"
          >
            ORDER VIA WHATSAPP 🚀
          </a>
        </div>

        {/* FOOTER */}
        <div className="bg-[#8B1E1E] text-center text-white text-[10px] py-3">
          © 2026 Dimsum Fazbila — All Rights Reserved
        </div>
      </motion.div>

      {/* Floating WhatsApp */}
      {/* <a
        href="https://wa.me/6281234567890?text=Halo%20Dimsum%20Fazbila,%20saya%20mau%20order"
        target="_blank"
        rel="noopener noreferrer"
        className="fixed bottom-4 right-4 bg-green-500 text-white p-4 rounded-full shadow-xl hover:scale-110 transition-all z-50"
      >
        <FaWhatsapp size={22} />
      </a> */}

      {/* ANIMATION STYLE */}
      <style jsx global>{`
        @keyframes marquee { 0% { transform: translateX(0); } 100% { transform: translateX(-50%); } }
        .animate-marquee { animation: marquee 40s linear infinite; }

        @keyframes blob1 { 0% { transform: translate(0,0) scale(1); } 50% { transform: translate(20px,-15px) scale(1.1); } 100% { transform: translate(0,0) scale(1); } }
        .animate-blob1 { animation: blob1 12s ease-in-out infinite; }

        @keyframes blob2 { 0% { transform: translate(0,0) scale(1); } 50% { transform: translate(-15px,20px) scale(1.1); } 100% { transform: translate(0,0) scale(1); } }
        .animate-blob2 { animation: blob2 15s ease-in-out infinite; }

        @keyframes fadeUp { from { opacity: 0; transform: translateY(15px); } to { opacity: 1; transform: translateY(0); } }
        .animate-fadeUp { animation: fadeUp 1s ease forwards; }

        @keyframes float { 0% { transform: translateY(0px); } 50% { transform: translateY(-5px); } 100% { transform: translateY(0px); } }

        .icon { padding: 8px; border-radius: 10px; display: flex; align-items: center; justify-content: center; animation: float 3s ease-in-out infinite; }
        .tiktok { background: black; color: white; }
        .shopee { background: #ee4d2d; color: white; }
        .instagram { background: linear-gradient(45deg,#f58529,#dd2a7b,#8134af,#515bd4); color: white; }
        .maps { background: #34a853; color: white; }
      `}</style>
    </main>
  );
}
