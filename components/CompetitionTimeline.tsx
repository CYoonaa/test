'use client';

import { useState } from 'react';

const timelineEvents = [
  {
    year: '2月11日',
    title: '京东进军外卖市场',
    description: '京东正式进军外卖市场并推出0佣金招商政策，向商家抛出橄榄枝',
    company: '京东',
    color: 'blue',
    icon: 'ri-rocket-line'
  },
  {
    year: '4月10日',
    title: '京东外卖百亿补贴上线',
    description: '京东外卖正式启动百亿补贴计划，加大用户获取力度',
    company: '京东',
    color: 'blue',
    icon: 'ri-money-dollar-circle-line'
  },
  {
    year: '4月15日',
    title: '美团闪购发布，京东订单破500万',
    description: '美团发布"美团闪购"业务，同日京东外卖订单量突破500万单',
    company: '美团',
    color: 'yellow',
    icon: 'ri-flashlight-line'
  },
  {
    year: '4月30日',
    title: '闪购平台集中发力',
    description: '饿了么启动超百亿补贴，淘宝闪购正式入局外卖市场',
    company: '闪购',
    color: 'red',
    icon: 'ri-shopping-bag-line'
  },
  {
    year: '5月5日',
    title: '淘宝闪购日单破千万',
    description: '饿了么宣布淘宝闪购日订单量突破千万，展现强劲增长势头',
    company: '闪购',
    color: 'red',
    icon: 'ri-bar-chart-line'
  },
  {
    year: '5月13日',
    title: '五部门约谈划定红线',
    description: '市场监管总局等五部门约谈各大平台，为外卖竞争划定红线，禁止恶意竞争、价格操控等行为',
    company: '全行业',
    color: 'green',
    icon: 'ri-shield-check-line',
    isRegulation: true
  },
  {
    year: '6月1日',
    title: '京东外卖日单破2500万',
    description: '京东外卖日订单量突破2500万单，市场份额快速提升',
    company: '京东',
    color: 'blue',
    icon: 'ri-trophy-line'
  },
  {
    year: '6月15日',
    title: '反垄断合规指引发布',
    description: '市场监管总局发布《外卖平台反垄断合规指引》，进一步规范市场竞争秩序',
    company: '全行业',
    color: 'green',
    icon: 'ri-book-open-line',
    isRegulation: true
  },
  {
    year: '6月23日',
    title: '淘宝闪购日单超6000万',
    description: '饿了么等并入阿里电商群，淘宝闪购日订单量突破6000万单',
    company: '闪购',
    color: 'red',
    icon: 'ri-rocket-2-line'
  },
  {
    year: '7月5日',
    title: '美团即时零售单破1.2亿',
    description: '美团即时零售业务订单量突破1.2亿单，巩固市场领先地位',
    company: '美团',
    color: 'yellow',
    icon: 'ri-line-chart-line'
  },
  {
    year: '7月20日',
    title: '骑手权益保护新规出台',
    description: '人社部联合多部门发布外卖骑手劳动权益保护新规定，要求平台承担更多社会责任',
    company: '全行业',
    color: 'green',
    icon: 'ri-user-heart-line',
    isRegulation: true
  },
  {
    year: '8月1日',
    title: '三家平台呼吁良性竞争',
    description: '三家平台共同呼吁抵制无序竞争，推动行业健康发展，响应监管要求',
    company: '全行业',
    color: 'purple',
    icon: 'ri-handshake-line'
  }
];

const competitionData = [
  {
    period: '2月-3月',
    title: '入局阶段',
    description: '京东强势入局，0佣金政策搅动市场格局',
    keyEvents: ['0佣金招商', '百亿补贴', '市场入局']
  },
  {
    period: '4月-5月',
    title: '激战阶段',
    description: '各平台全面发力，补贴大战白热化',
    keyEvents: ['闪购发布', '订单暴增', '监管约谈']
  },
  {
    period: '6月-7月',
    title: '规范阶段',
    description: '监管政策密集出台，行业竞争逐步规范',
    keyEvents: ['合规指引', '权益保护', '有序竞争']
  },
  {
    period: '8月至今',
    title: '发展阶段',
    description: '行业呼吁理性竞争，探索良性发展路径',
    keyEvents: ['理性竞争', '商户扶持', '行业规范']
  }
];

const marketImpactData = [
  { metric: '商户佣金', before: '18-22%', after: '15-18%', change: '下降3-4%' },
  { metric: '用户补贴', before: '5-8元', after: '8-15元', change: '增加60-88%' },
  { metric: '骑手收入', before: '6000-8000元', after: '7000-9500元', change: '提升15-19%' },
  { metric: '配送效率', before: '35-40分钟', after: '28-32分钟', change: '提升20-25%' }
];

export default function CompetitionTimeline() {
  const [selectedPeriod, setSelectedPeriod] = useState(0);
  const [selectedEvent, setSelectedEvent] = useState(0);
  const [hoveredPeriod, setHoveredPeriod] = useState(null);

  const getColorClass = (color: string) => {
    const colorMap: { [key: string]: string } = {
      blue: '#3B82F6',
      yellow: '#FBD35B',
      green: '#10B981',
      red: '#F79D8E',
      purple: '#8B5CF6'
    };
    return colorMap[color] || '#6B7280';
  };

  return (
    <section data-section="competition" className="py-20 px-4 relative overflow-hidden" style={{backgroundColor: '#ddf3ff'}}>
      {/* 装饰性背景元素 */}
      <div className="absolute inset-0">
        <div className="absolute top-20 left-16 w-32 h-32 bg-gradient-to-r from-blue-200 to-cyan-200 rounded-full opacity-30 animate-pulse"></div>
        <div className="absolute top-60 right-20 w-24 h-24 bg-gradient-to-r from-cyan-200 to-blue-200 rounded-full opacity-40 animate-bounce"></div>
        <div className="absolute bottom-32 left-32 w-40 h-40 bg-gradient-to-r from-sky-200 to-blue-200 rounded-full opacity-25 animate-pulse"></div>
      </div>

      <div className="max-w-7xl mx-auto relative">
        {/* 顶部装饰线条 */}
        <div className="flex justify-center mb-8">
          <div className="w-32 h-1 bg-gradient-to-r from-blue-500 via-cyan-500 to-blue-600 rounded-full"></div>
        </div>

        <div className="text-center mb-16">
          <div className="flex items-center justify-center mb-4">
            <i className="ri-time-line text-4xl text-blue-700 mr-4"></i>
            <h2 className="text-4xl md:text-5xl font-bold text-gray-800">2025年外卖大战时间线</h2>
            <i className="ri-calendar-event-line text-4xl text-cyan-700 ml-4"></i>
          </div>
          <div className="w-24 h-0.5 bg-gradient-to-r from-transparent via-blue-500 to-transparent mx-auto mb-6"></div>
          <p className="text-xl text-gray-700 max-w-3xl mx-auto">
            回顾2025年外卖行业激烈竞争历程，见证三大平台商战风云与监管规范并行
          </p>
        </div>

        {/* 交互式时间线 */}
        <div className="mb-16">
          <div className="bg-white/90 backdrop-blur-lg rounded-3xl p-8 shadow-2xl border border-white/50">
            <h3 className="text-3xl font-bold text-center mb-8 text-gray-800 flex items-center justify-center gap-3">
              <i className="ri-calendar-check-line text-blue-600"></i>
              互动时间线
              <i className="ri-mouse-line text-cyan-600"></i>
            </h3>
            
            {/* 更醒目的时间线导航 */}
            <div className="flex justify-center mb-8 overflow-x-auto">
              <div className="flex gap-2 bg-gradient-to-r from-blue-100 via-cyan-50 to-blue-100 rounded-2xl p-3 min-w-max shadow-inner border border-blue-200">
                {timelineEvents.map((event, index) => (
                  <button
                    key={index}
                    onClick={() => setSelectedEvent(index)}
                    className={`px-5 py-3 rounded-xl text-sm font-bold transition-all duration-300 whitespace-nowrap relative overflow-hidden transform ${
                      selectedEvent === index
                        ? 'bg-gradient-to-r from-blue-600 to-cyan-600 text-white shadow-2xl scale-110 border-2 border-blue-300'
                        : `text-blue-700 hover:bg-gradient-to-r hover:from-blue-200 hover:to-cyan-200 hover:shadow-lg hover:scale-105 border-2 border-transparent ${event.isRegulation ? 'bg-green-100 hover:bg-green-200' : ''}`
                    }`}
                  >
                    {selectedEvent === index && (
                      <div className="absolute inset-0 bg-white/20 animate-pulse rounded-xl"></div>
                    )}
                    <div className="relative flex items-center gap-2">
                      {event.isRegulation && <i className="ri-government-line text-xs"></i>}
                      <span>{event.year}</span>
                      {selectedEvent === index && (
                        <div className="w-1.5 h-1.5 bg-white rounded-full animate-ping"></div>
                      )}
                    </div>
                  </button>
                ))}
              </div>
            </div>

            {/* 当前选中事件详情 */}
            <div className="bg-gradient-to-br from-white via-gray-50 to-white rounded-2xl p-8 shadow-xl border border-gray-100">
              <div className="flex items-center gap-6 mb-6">
                <div className={`w-20 h-20 rounded-full flex items-center justify-center shadow-2xl border-4 ${
                  timelineEvents[selectedEvent].isRegulation ? 'border-green-300' : 'border-white'
                }`} 
                     style={{ backgroundColor: timelineEvents[selectedEvent].color === 'yellow' ? '#FBD35B' : 
                              timelineEvents[selectedEvent].color === 'red' ? '#F79D8E' : 
                              timelineEvents[selectedEvent].color === 'blue' ? '#3B82F6' : 
                              timelineEvents[selectedEvent].color === 'green' ? '#10B981' : '#8B5CF6' }}>
                  <i className={`${timelineEvents[selectedEvent].icon} text-3xl text-white`}></i>
                </div>
                <div className="flex-1">
                  <div className="flex items-center gap-3 mb-3">
                    <span className={`px-4 py-2 rounded-full text-sm font-bold ${
                      timelineEvents[selectedEvent].isRegulation 
                        ? 'bg-green-100 text-green-700 border-2 border-green-300' 
                        : 'bg-blue-100 text-blue-700 border-2 border-blue-300'
                    }`}>
                      {timelineEvents[selectedEvent].isRegulation ? '🏛️ 监管政策' : timelineEvents[selectedEvent].company}
                    </span>
                    <span className="text-xl font-bold text-gray-800 bg-gray-100 px-4 py-2 rounded-full">
                      {timelineEvents[selectedEvent].year}
                    </span>
                  </div>
                  <h4 className="text-3xl font-bold text-gray-800 mb-3">
                    {timelineEvents[selectedEvent].title}
                  </h4>
                </div>
              </div>
              <div className="bg-gradient-to-r from-blue-50 via-white to-blue-50 rounded-xl p-6 border border-blue-100">
                <p className="text-gray-700 text-lg leading-relaxed">
                  {timelineEvents[selectedEvent].description}
                </p>
              </div>
            </div>

            {/* 进度指示器 */}
            <div className="mt-8">
              <div className="w-full bg-blue-200 rounded-full h-4 overflow-hidden shadow-inner">
                <div 
                  className="bg-gradient-to-r from-blue-500 via-cyan-500 to-blue-600 h-4 rounded-full transition-all duration-500 relative overflow-hidden"
                  style={{ width: `${((selectedEvent + 1) / timelineEvents.length) * 100}%` }}
                >
                  <div className="absolute inset-0 bg-white/30 animate-pulse"></div>
                </div>
              </div>
              <div className="flex justify-between mt-3 text-sm text-gray-600">
                <span>事件进度</span>
                <span className="font-bold">{selectedEvent + 1} / {timelineEvents.length}</span>
              </div>
            </div>
          </div>
          <p className="text-center text-sm text-gray-600 mt-4">📅 数据来源：《2025年中国外卖行业发展报告》- 艾媒咨询、比达咨询、市场监管总局公开资料</p>
        </div>

        {/* 竞争阶段分析 */}
        <div className="mb-16">
          <div className="bg-white/90 backdrop-blur-lg rounded-3xl p-8 shadow-2xl border border-white/50">
            <h3 className="text-3xl font-bold mb-12 text-center text-gray-800 flex items-center justify-center gap-3">
              <i className="ri-line-chart-fill text-purple-600"></i>
              竞争阶段分析
              <i className="ri-trending-up-line text-green-600"></i>
            </h3>
            <div className="grid lg:grid-cols-4 gap-4 mb-8">
              {competitionData.map((period, index) => (
                <button
                  key={index}
                  onClick={() => setSelectedPeriod(index)}
                  onMouseEnter={() => setHoveredPeriod(index)}
                  onMouseLeave={() => setHoveredPeriod(null)}
                  className={`p-6 rounded-2xl transition-all duration-300 whitespace-nowrap relative overflow-hidden transform ${
                    selectedPeriod === index
                      ? 'bg-gradient-to-r from-blue-500 to-cyan-600 text-white shadow-2xl scale-105 border-2 border-blue-300'
                      : 'bg-gradient-to-br from-white via-gray-50 to-white text-gray-700 hover:bg-gradient-to-br hover:from-blue-50 hover:to-cyan-50 shadow-lg border-2 border-gray-200 hover:border-blue-300 hover:scale-102'
                  }`}
                >
                  {selectedPeriod === index && (
                    <div className="absolute inset-0 bg-white/20 animate-pulse rounded-2xl"></div>
                  )}
                  <div className="relative">
                    <div className="text-lg font-bold mb-2">{period.period}</div>
                    <div className="text-base font-medium">{period.title}</div>
                    {selectedPeriod === index && (
                      <div className="w-2 h-2 bg-white rounded-full animate-ping absolute -top-1 -right-1"></div>
                    )}
                  </div>
                </button>
              ))}
            </div>

            <div className="bg-gradient-to-br from-white via-blue-50 to-white rounded-2xl p-8 shadow-xl border border-blue-100">
              <h4 className="text-2xl font-bold mb-4 text-gray-800 flex items-center gap-3">
                <i className="ri-flag-fill text-blue-600"></i>
                {competitionData[selectedPeriod].title}
              </h4>
              <p className="text-gray-600 text-lg mb-6 leading-relaxed">{competitionData[selectedPeriod].description}</p>
              <div className="grid md:grid-cols-3 gap-4">
                {competitionData[selectedPeriod].keyEvents.map((event, index) => (
                  <div key={index} className="bg-gradient-to-br from-blue-50 via-white to-cyan-50 rounded-xl p-5 text-center border-2 border-blue-200 hover:shadow-lg transition-shadow">
                    <i className="ri-check-double-line text-green-500 text-2xl mb-3"></i>
                    <div className="font-bold text-gray-800">{event}</div>
                  </div>
                ))}
              </div>
            </div>
          </div>
          <p className="text-center text-sm text-gray-600 mt-4">📈 数据来源：《外卖竞争格局深度分析》- QuestMobile、易观分析、商务部市场监测</p>
        </div>

        {/* 新增市场影响统计 */}
        <div>
          <div className="bg-white/90 backdrop-blur-lg rounded-3xl p-8 shadow-2xl border border-white/50">
            <h3 className="text-3xl font-bold mb-8 text-center text-gray-800 flex items-center justify-center gap-3">
              <i className="ri-pulse-line text-red-500"></i>
              市场竞争影响评估
              <i className="ri-bar-chart-grouped-line text-blue-600"></i>
            </h3>
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
              {marketImpactData.map((item, index) => (
                <div key={index} className="bg-gradient-to-br from-white via-gray-50 to-white rounded-2xl p-6 shadow-xl border-2 border-gray-200 hover:shadow-2xl transition-all hover:scale-105">
                  <div className="text-center">
                    <div className="bg-gradient-to-r from-blue-100 to-cyan-100 rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4">
                      <i className={`${index === 0 ? 'ri-price-tag-3-fill' : index === 1 ? 'ri-gift-fill' : index === 2 ? 'ri-money-dollar-circle-fill' : 'ri-timer-fill'} text-2xl text-blue-600`}></i>
                    </div>
                    <h4 className="text-lg font-bold text-gray-800 mb-3">{item.metric}</h4>
                    <div className="space-y-2 text-sm">
                      <div className="flex justify-between">
                        <span className="text-gray-600">竞争前:</span>
                        <span className="font-medium">{item.before}</span>
                      </div>
                      <div className="flex justify-between">
                        <span className="text-gray-600">竞争后:</span>
                        <span className="font-medium">{item.after}</span>
                      </div>
                      <div className={`font-bold text-center px-3 py-1 rounded-full ${
                        item.change.includes('增加') || item.change.includes('提升') 
                          ? 'bg-green-100 text-green-700' 
                          : 'bg-blue-100 text-blue-700'
                      }`}>
                        {item.change}
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
            <p className="text-center text-sm text-gray-600 mt-6">📊 数据来源：《外卖竞争市场影响评估报告》- 中国电子商务研究中心、艾瑞咨询</p>
          </div>
        </div>

        {/* 底部装饰线条 */}
        <div className="flex justify-center mt-16">
          <div className="w-24 h-1 bg-gradient-to-r from-blue-500 via-cyan-500 to-blue-600 rounded-full opacity-60"></div>
        </div>
      </div>
    </section>
  );
}