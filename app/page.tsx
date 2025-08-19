'use client';

import Hero from '../components/Hero';
import MarketShareChart from '../components/MarketShareChart';
import DeliveryStats from '../components/DeliveryStats';
import InteractiveDataViz from '../components/InteractiveDataViz';
import UserBehavior from '../components/UserBehavior';
import CompetitionTimeline from '../components/CompetitionTimeline';
import RegionalAnalysis from '../components/RegionalAnalysis';
import MarketHarmony from '../components/MarketHarmony';
import Footer from '../components/Footer';

export default function Home() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-orange-50 to-red-50">
      <Hero />
      <MarketShareChart />
      <DeliveryStats />
      <InteractiveDataViz />
      <UserBehavior />
      <CompetitionTimeline />
      <RegionalAnalysis />
      <MarketHarmony />
      <Footer />
    </div>
  );
}