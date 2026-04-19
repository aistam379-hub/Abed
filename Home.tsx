import Header from '@/components/Header';
import HeroSection from '@/components/HeroSection';

/**
 * Targo Hero Section - High-end logistics brand landing page
 * 
 * Design Philosophy:
 * - Dark, premium aesthetic with deep black background (#000000)
 * - Vibrant brand red (#EE3F2C) for primary CTAs and accents
 * - Clean white typography for maximum contrast and readability
 * - Rubik font family with tight letter-spacing (-4%) for bold headlines
 * - Video background with glassmorphism effects for depth
 * - Clipped-corner buttons for geometric sophistication
 */
export default function Home() {
  return (
    <div className="min-h-screen bg-black">
      <Header />
      <HeroSection />
    </div>
  );
}
