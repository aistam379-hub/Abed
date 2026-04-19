import { Phone } from 'lucide-react';

export default function ConsultationCard() {
  return (
    <div
      className="w-full max-w-sm p-5 md:p-6 rounded-xl border border-white/12 text-white transition-all duration-300 hover:border-white/30 hover:shadow-2xl"
      style={{
        backdropFilter: 'blur(40px) saturate(180%)',
        backgroundColor: 'rgba(255, 255, 255, 0.08)',
        boxShadow: `
          inset 0 1px 0 rgba(255, 255, 255, 0.2),
          0 8px 32px rgba(0, 0, 0, 0.3)
        `,
        backgroundImage: `linear-gradient(135deg, rgba(255, 255, 255, 0.15) 0%, rgba(255, 255, 255, 0) 100%)`,
      }}
    >
      <div className="flex items-start gap-4">
        <div className="flex-shrink-0 mt-1">
          <div className="flex items-center justify-center w-10 h-10 rounded-lg bg-[#EE3F2C]/20 transition-all duration-300 hover:bg-[#EE3F2C]/30">
            <Phone className="w-5 h-5 text-[#EE3F2C]" />
          </div>
        </div>
        <div className="flex-1 min-w-0">
          <h3 className="font-bold text-base mb-1" style={{ fontFamily: 'Rubik, sans-serif' }}>
            Book a Free Consultation
          </h3>
          <p className="text-white/70 text-sm leading-relaxed" style={{ fontFamily: 'Rubik, sans-serif' }}>
            Get expert advice on your logistics needs. Our team is ready to help.
          </p>
          <button
            className="mt-4 px-4 py-2 bg-white text-black font-bold text-sm rounded transition-all duration-300 hover:bg-white/90 active:scale-95 shadow-md hover:shadow-lg"
            style={{
              fontFamily: 'Rubik, sans-serif',
              clipPath: 'polygon(0 8px, calc(100% - 8px) 0, 100% calc(100% - 8px), 8px 100%)',
            }}
          >
            Book a Call
          </button>
        </div>
      </div>
    </div>
  );
}
