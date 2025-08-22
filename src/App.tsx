import Header from './components/Header';
import Hero from './components/Hero';
import OneClickExecution from './components/OneClickExecution';
import TradingCompanion from './components/TradingCompanion';
import MoreFeatures from './components/MoreFeatures';
import TelegramSection from './components/TelegramSection';
import Footer from './components/Footer';

function App() {
  return (
    <div className="min-h-screen bg-gray-900">
      <Header />
      <main>
        <Hero />
        <OneClickExecution />
        <TradingCompanion />
        <MoreFeatures />
        <TelegramSection />
      </main>
      <Footer />
    </div>
  );
}

export default App;
