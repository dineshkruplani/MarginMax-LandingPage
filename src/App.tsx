import { lazy, Suspense } from 'react';
import Header from './components/Header';
import Hero from './components/Hero';

// Lazy load non-critical components
const OneClickExecution = lazy(() => import('./components/OneClickExecution'));
const TradingCompanion = lazy(() => import('./components/TradingCompanion'));
const MoreFeatures = lazy(() => import('./components/MoreFeatures'));
const TelegramSection = lazy(() => import('./components/TelegramSection'));
const Footer = lazy(() => import('./components/Footer'));

function App() {
  return (
    <div className="min-h-screen bg-gray-900">
      <Header />
      <main>
        <Hero />
        <Suspense fallback={<div className="h-32 bg-gray-800 animate-pulse rounded-lg mx-4 my-8"></div>}>
          <OneClickExecution />
        </Suspense>
        <Suspense fallback={<div className="h-32 bg-gray-800 animate-pulse rounded-lg mx-4 my-8"></div>}>
          <TradingCompanion />
        </Suspense>
        <Suspense fallback={<div className="h-32 bg-gray-800 animate-pulse rounded-lg mx-4 my-8"></div>}>
          <MoreFeatures />
        </Suspense>
        <Suspense fallback={<div className="h-32 bg-gray-800 animate-pulse rounded-lg mx-4 my-8"></div>}>
          <TelegramSection />
        </Suspense>
      </main>
      <Suspense fallback={<div className="h-16 bg-gray-800 animate-pulse"></div>}>
        <Footer />
      </Suspense>
    </div>
  );
}

export default App;
