"use client";

import { SiteThemeProvider } from '@/components/sections/ThemeProvider';
import NavbarBase from '@/components/navigation/NavbarBase';
import BillboardHero from '@/components/sections/layouts/hero/BillboardHero';
import CtaAbout from '@/components/sections/layouts/about/CtaAbout';
import HowToBuy3D from '@/components/sections/layouts/howtobuy/3DHTB';
import TextGridTokenomics from '@/components/sections/layouts/tokenomics/TextGridTokenomics';
import FooterLogoEmphasisBackgroundGradient from '@/components/footer/FooterLogoEmphasisBackgroundGradient';

export default function Home() {
  return (
    <SiteThemeProvider theme={{ styleVariant: 'futuristicAndOutOfBox', colorTemplate: 2, textAnimation: 'slide' }}>
      <NavbarBase
        logoSrc="/images/logo.svg"
        logoAlt="NovaLaunch Logo"
        leftButtonText="Get Early Access"
        rightButtonText=""
        className=""
        containerClassName=""
        logoClassName=""
        buttonClassName=""
      />

      <div id="hero" data-section="hero" className="scroll-mt-24">
        <BillboardHero title="Welcome to NovaLaunch" subtitle="Your gateway to innovative solutions" />
      </div>

      <div id="about" data-section="about" className="scroll-mt-24">
        <CtaAbout title="About Us" descriptions={["We offer cutting-edge solutions for your business needs.", "Join us on our journey to innovation."]} />
      </div>

      <div id="how-to-buy" data-section="how-to-buy" className="scroll-mt-24">
        <HowToBuy3D title="How to Buy" steps={[{ title: "Step 1", description: "Sign up for an account", image: "/images/placeholder1.avif", position: "left", isCenter: false }, { title: "Step 2", description: "Verify your identity", image: "/images/placeholder2.avif", position: "center", isCenter: true }, { title: "Step 3", description: "Complete your purchase", image: "/images/placeholder3.avif", position: "right", isCenter: false }]} />
      </div>

      <div id="tokenomics" data-section="tokenomics" className="scroll-mt-24">
        <TextGridTokenomics title="Tokenomics Overview" description="Our tokenomics model is designed for stability and growth." tokenData={[{ value: "100M", description: "Total Supply" }, { value: "30M", description: "Circulating Supply" }, { value: "50%", description: "Community Allocation" }]} />
      </div>

      <div id="footer" data-section="footer" className="scroll-mt-24">
        <FooterLogoEmphasisBackgroundGradient logoSrc="/images/logowhite.svg" logoAlt="NovaLaunch Logo" logoText="NovaLaunch" items={[{ label: "Home", onClick: () => {} }, { label: "About", onClick: () => {} }, { label: "Contact", onClick: () => {} }]} className="" containerClassName="" gradientClassName="" gradientStyle={{}} />
      </div>
    </SiteThemeProvider>
  );
}