
'use client';

import { useState, useEffect } from 'react';

const stats = [
  { value: 1200, label: '日订单量', unit: '万', icon: 'ri-shopping-cart-line', color: 'blue' },
  { value: 680, label: '年交易额', unit: '亿元', icon: 'ri-coins-line', color: 'green' },
  { value: 560, label: '配送骑手', unit: '万人', icon: 'ri-user-2-line', color: 'orange' },
  { value: 120, label: '覆盖城市', unit: '个', icon: 'ri-map-pin-line', color: 'purple' }
];

const navigationItems = [
  { id: 'market-share', label: '市场份额', icon: 'ri-pie-chart-line' },
  { id: 'delivery-stats', label: '配送数据', icon: 'ri-truck-line' },
  { id: 'data-viz', label: '数据大屏', icon: 'ri-dashboard-line' },
  { id: 'competition', label: '竞争时间线', icon: 'ri-time-line' },
  { id: 'regional', label: '区域分析', icon: 'ri-map-2-line' },
  { id: 'market-harmony', label: '和谐市场', icon: 'ri-handshake-line' }
];

export default function Hero() {
  const [animatedStats, setAnimatedStats] = useState(stats.map(() => 0));
  const [mounted, setMounted] = useState(false);
  const [showNavigation, setShowNavigation] = useState(false);

  useEffect(() => {
    setMounted(true);
    const duration = 3000;
    const steps = 60;
    const stepDuration = duration / steps;

    const increments = stats.map(stat => stat.value / steps);

    let currentStep = 0;
    const timer = setInterval(() => {
      currentStep++;
      setAnimatedStats(prev =>
        prev.map((_, index) => Math.floor(increments[index] * currentStep))
      );

      if (currentStep >= steps) {
        clearInterval(timer);
        setAnimatedStats(stats.map(stat => stat.value));
      }
    }, stepDuration);

    return () => clearInterval(timer);
  }, []);

  const scrollToSection = (sectionId: string) => {
    const element = document.querySelector(`[data-section="${sectionId}"]`);
    if (element) {
      element.scrollIntoView({ 
        behavior: 'smooth',
        block: 'start'
      });
    }
    setShowNavigation(false);
  };

  if (!mounted) {
    return (
      <section className="relative min-h-screen flex items-center justify-center bg-gradient-to-br from-orange-100 via-red-50 to-pink-100">
        <div className="animate-pulse text-center">
          <div className="h-12 w-96 bg-gray-300 rounded mb-4 mx-auto"></div>
          <div className="h-6 w-72 bg-gray-200 rounded mx-auto"></div>
        </div>
      </section>
    );
  }

  return (
    <section
      className="relative min-h-screen flex items-center justify-center overflow-hidden"
      style={{
        backgroundImage: `url('https://static.readdy.ai/image/52dea98eeddd07929a4ea33a7857433c/2ad45fc53cc8f2fb427ba98a44e2977b.jfif')`,
        backgroundSize: 'cover',
        backgroundPosition: 'center'
      }}
    >
      <div className="absolute inset-0 bg-gradient-to-r from-orange-900/60 via-red-900/40 to-orange-900/60"></div>

      {/* 右上角导航 */}
      <div className="fixed top-8 right-8 z-50">
        <div className="relative">
          {/* 主导航按钮 */}
          <button
            onClick={() => setShowNavigation(!showNavigation)}
            className="bg-white/20 backdrop-blur-lg border border-white/30 rounded-full w-14 h-14 flex items-center justify-center text-white hover:bg-white/30 transition-all duration-300 shadow-2xl group"
          >
            <i className={`${showNavigation ? 'ri-close-line' : 'ri-menu-line'} text-xl transition-transform duration-300 ${showNavigation ? 'rotate-90' : 'rotate-0'}`}></i>
          </button>

          {/* 导航菜单 */}
          <div className={`absolute top-full right-0 mt-4 transition-all duration-500 origin-top-right ${
            showNavigation ? 'opacity-100 scale-100' : 'opacity-0 scale-75 pointer-events-none'
          }`}>
            <div className="bg-white/15 backdrop-blur-xl rounded-2xl border border-white/20 shadow-2xl overflow-hidden min-w-48">
              <div className="p-3">
                <div className="text-white text-sm font-medium mb-3 text-center px-3 py-2 bg-white/10 rounded-lg">
                  <i className="ri-compass-line mr-2"></i>
                  快速导航
                </div>
                <div className="space-y-1">
                  {navigationItems.map((item, index) => (
                    <button
                      key={item.id}
                      onClick={() => scrollToSection(item.id)}
                      className="w-full flex items-center gap-3 px-4 py-3 text-white hover:bg-white/20 rounded-xl transition-all duration-200 group hover:scale-105"
                      style={{ transitionDelay: `${index * 50}ms` }}
                    >
                      <div className="w-8 h-8 flex items-center justify-center bg-white/20 rounded-lg group-hover:bg-white/30 transition-colors">
                        <i className={`${item.icon} text-sm`}></i>
                      </div>
                      <span className="text-sm font-medium">{item.label}</span>
                      <i className="ri-arrow-right-s-line text-sm ml-auto opacity-60 group-hover:opacity-100 group-hover:translate-x-1 transition-all"></i>
                    </button>
                  ))}
                </div>
              </div>
              {/* 底部装饰 */}
              <div className="h-1 bg-gradient-to-r from-orange-400 via-red-400 to-orange-400"></div>
            </div>
          </div>
        </div>
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 text-center text-white">
        <div className="mb-16">
          <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold mb-8 leading-tight drop-shadow-2xl">
            《舌尖上的"圈地运动"： 
            <span className="block text-3xl md:text-5xl lg:text-6xl text-orange-300 mt-4">
              外卖商战下的竞争博弈与市场秩序重构》
            </span>
          </h1>
          <p className="text-lg md:text-xl lg:text-2xl max-w-4xl mx-auto leading-relaxed mb-12 drop-shadow-lg">
            深入剖析美团、京东、闪购三大平台的激烈角逐，以精准的数据可视化呈现千亿市场背后的商业逻辑，同时结合政府约谈等相关事件，共同呼吁构建和谐有序的市场竞争生态环境。
          </p>
        </div>

        <div className="grid grid-cols-2 lg:grid-cols-4 gap-6 lg:gap-8">
          {stats.map((stat, index) => (
            <div key={index} className="bg-white/90 backdrop-blur-sm rounded-2xl p-6 lg:p-8 border border-white/30 shadow-2xl">
              <div className={`text-4xl lg:text-5xl mb-4 text-${stat.color}-600`}>
                <i className={stat.icon}></i>
              </div>
              <div className="text-3xl lg:text-4xl font-bold mb-2 text-gray-900">
                {animatedStats[index].toLocaleString()}{stat.unit}
              </div>
              <div className="text-sm lg:text-base text-gray-600">
                {stat.label}
              </div>
            </div>
          ))}
        </div>

        <div className="mt-16">
          <div className="flex flex-col items-center gap-6">
            <button className="bg-gradient-to-r from-orange-500 to-red-600 text-white px-12 py-5 rounded-full font-bold text-xl hover:from-orange-600 hover:to-red-700 transition-all transform hover:scale-105 shadow-lg whitespace-nowrap">
              <i className="ri-book-open-line mr-3 text-xl"></i>
              开始阅读
            </button>
          </div>
        </div>

        <div className="mt-20 animate-bounce">
          <i className="ri-arrow-down-line text-3xl text-white/80"></i>
        </div>
      </div>
    </section>
  );
}
