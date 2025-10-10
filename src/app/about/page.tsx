"use client";

// import { FaUserFriends, FaHandshake, FaFlag, FaHeart } from "react-icons/fa";
import Image from "next/image";

export default function AboutPage() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-[#0d1125] to-[#1b1f3a] text-white flex items-center justify-center px-10 py-20">
      <div className="max-w-7xl w-full grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
        
        {/* النصوص على اليسار */}
        <div className="space-y-6">
          <h2 className="text-4xl font-bold text-white">
            Solatronics
          </h2>
          <h3 className="text-xl text-[#b0b3ff] font-medium">
            “Our Commitment”
          </h3>
          <p className="text-gray-300 leading-relaxed">
            نحن في Solatronics ملتزمون بابتكار حلول تكنولوجية متقدمة تجمع بين الإبداع والاستدامة.
            نعمل على تطوير تجارب رقمية تفاعلية تجعل التكنولوجيا أقرب إلى الإنسان وأكثر فائدة للمجتمع.
          </p>
          <p className="text-gray-400 leading-relaxed">
            رؤيتنا هي بناء مستقبل يعتمد على الذكاء الاصطناعي والتقنيات الخضراء لتحقيق تأثير إيجابي في العالم.
          </p>

          {/* الأيقونات */}
          {/* <div className="flex gap-8 pt-6">
            {[
              { Icon: FaUserFriends, label: "فريقنا", color: "#a18bff" },
              { Icon: FaHandshake, label: "شراكاتنا", color: "#70d0ff" },
              { Icon: FaFlag, label: "رؤيتنا", color: "#ff8bd6" },
              { Icon: FaHeart, label: "قيمنا", color: "#ff6fb0" },
            ].map(({ Icon, label, color }, index) => (
              <div key={index} className="flex flex-col items-center space-y-2">
                <Icon size={28} style={{ color }} />
                <p className="text-sm">{label}</p>
              </div>
            ))}
          </div> */}
        </div>

        {/* الصورة على اليمين */}
        <div className="flex justify-center relative">
          <div className="bg-gradient-to-tr from-[#a18bff] via-[#70d0ff] to-[#ff8bd6] rounded-3xl p-1 shadow-[0_0_40px_rgba(173,110,255,0.4)]">
            <div className="bg-[#0d1125] rounded-3xl overflow-hidden">
              <Image
                src="/about.jpg"
                alt="Solatronics Illustration"
                width={500}
                height={500}
                className="object-cover"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
