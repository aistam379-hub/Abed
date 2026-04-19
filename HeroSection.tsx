import ConsultationCard from './ConsultationCard';

export default function HeroSection() {
  return (
    <section className="relative w-full h-screen overflow-hidden bg-black">
      {/* Video Background */}
      <video
        autoPlay
        muted
        loop
        playsInline
        className="absolute inset-0 w-full h-full object-cover opacity-100"
      >
        <source
          src="https://d8j0ntlcm91z4.cloudfront.net/user_38xzZboKViGWJOttwIXH07lWA1P/hf_20260227_042027_c4b2f2ea-1c7c-4d6e-9e3d-81a78063703f.mp4"
          type="video/mp4"
        />
      </video>

      {/* Content Overlay */}
      <div className="absolute inset-0 flex flex-col justify-between">
        {/* Main Content - Upper Third */}
        <div className="flex-1 flex items-start pt-24 md:pt-32 px-6 md:px-12 lg:px-16">
          <div className="max-w-2xl">
            {/* Headline */}
            <h1
              className="text-4xl sm:text-5xl md:text-6xl font-bold text-white mb-6 md:mb-8 leading-tight"
              style={{
                fontFamily: 'Rubik, sans-serif',
                letterSpacing: '-0.04em',
                textTransform: 'uppercase',
              }}
            >
              Swift and Simple Transport
            </h1>

            {/* Get Started Button */}
            <button
              className="px-6 md:px-8 py-3 md:py-4 bg-[#EE3F2C] text-white font-bold text-base md:text-lg transition-all duration-300 hover:bg-[#d63820] active:scale-95 shadow-lg hover:shadow-xl"
              style={{
                fontFamily: 'Rubik, sans-serif',
                clipPath: 'polygon(0 12px, calc(100% - 12px) 0, 100% calc(100% - 12px), 12px 100%)',
              }}
            >
              Get Started
            </button>
          </div>
        </div>

        {/* Consultation Card - Bottom Left */}
        <div className="relative px-6 md:px-12 lg:px-16 pb-12 md:pb-16">
          <ConsultationCard />
        </div>
      </div>
    </section>
  );
}
