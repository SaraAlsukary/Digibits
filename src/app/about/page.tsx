"use client";

import { FaUserFriends, FaHandshake, FaFlag, FaHeart } from "react-icons/fa";
import Image from "next/image";

export default function AboutPage() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-[#0d1125] to-[#1b1f3a] text-white flex items-center justify-center px-10 py-20">
      <div className="max-w-7xl w-full grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
        
        <div className="space-y-6">
          <h2 className="text-4xl font-bold text-white">
            Solatronics Team
          </h2>
          <h3 className="text-xl text-[#b0b3ff] font-medium">
            Innovation through Technology
          </h3>
          <p className="text-gray-300 leading-relaxed">
            At <span className="text-[#70d0ff] font-semibold">Solatronics</span>, we are a technical team specializing in developing innovative digital solutions that combine programming, design, and data analysis to deliver integrated digital experiences. We aim to help businesses and individuals achieve digital transformation in a smart and effective manner.
          </p>
          <p className="text-gray-400 leading-relaxed">
            We offer a variety of services, including website and mobile app development, as well as artificial intelligence solutions, management systems, and enterprise technology integration. Our vision is to be partners in building the digital future through innovation and sustainable technology.
          </p>

          <div className="flex gap-8 pt-6">
            {[
              { Icon: FaUserFriends, label: "Our team", color: "#a18bff" },
              { Icon: FaHandshake, label: "Our clients", color: "#70d0ff" },
              { Icon: FaFlag, label: "Our vision", color: "#ff8bd6" },
              { Icon: FaHeart, label: "Our values", color: "#ff6fb0" },
            ].map(({ Icon, label, color }, index) => (
              <div key={index} className="flex flex-col items-center space-y-2">
                <div
                  className={`w-14 h-14 rounded-full flex items-center justify-center border-2`}
                  style={{
                    borderColor: color,
                    color: color,
                  }}
                >
                  <Icon size={26} />
                </div>
                <p className="text-sm">{label}</p>
              </div>
            ))}
          </div>
        </div>

        <div className="flex justify-center relative">
          <Image
            src="/about.png"
            alt="Solatronics Illustration"
            width={700}
            height={700}
            className="object-cover animate-float"
          />

          <style jsx global>{`
            @keyframes float {
              0%, 100% { transform: translateY(0px); }
              50% { transform: translateY(-15px); }
            }
            .animate-float {
              animation: float 4s ease-in-out infinite;
            }
          `}</style>
        </div>
      </div>
    </div>
  );
}
