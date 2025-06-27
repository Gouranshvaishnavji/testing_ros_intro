import React from 'react';
import { HeroCarousel, FourPiller, HowROSWorks, AboutRos, ImpactStats, Testimonials, ProcessFlow, BenefitsGrid, TrustSecurity } from '../components/home';

const HomePage: React.FC = () => {
    return (
        <main className="homepage">
            <HeroCarousel />
            <AboutRos />
            <ImpactStats />
            <FourPiller />
            <HowROSWorks />
            <ProcessFlow />
            <BenefitsGrid />
            <TrustSecurity />
            <Testimonials />
        </main>
    );
};

export default HomePage;
