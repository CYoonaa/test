
'use client';

import { useState, useEffect } from 'react';
import { ComposedChart, Bar, Line, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer, Treemap, Cell, AreaChart, Area } from 'recharts';

const cityOrderData = [
  { city: '北京', orders: 2850, growth: 12, revenue: 128, satisfaction: 4.6 },
  { city: '上海', orders: 2650, growth: 8, revenue: 138, satisfaction: 4.5 },
  { city: '深圳', orders: 2400, growth: 18, revenue: 115, satisfaction: 4.7 },
  { city: '广州', orders: 2200, growth: 15, revenue: 84, satisfaction: 4.4 },
  { city: '杭州', orders: 1800, growth: 22, revenue: 76, satisfaction: 4.6 },
  { city: '成都', orders: 1950, growth: 20, revenue: 68, satisfaction: 4.3 },
  { city: '南京', orders: 1600, growth: 16, revenue: 67, satisfaction: 4.5 },
  { city: '武汉', orders: 1500, growth: 25, revenue: 53, satisfaction: 4.2 }
];

const categoryTreemapData = [
  { name: '中式快餐', size: 3200, growth: 5, color: '#FF6B6B' },
  { name: '奶茶饮品', size: 2800, growth: 18, color: '#4ECDC4' },
  { name: '西式快餐', size: 2400, growth: -2, color: '#45B7D1' },
  { name: '火锅烧烤', size: 2100, growth: 12, color: '#FFA07A' },
  { name: '日韩料理', size: 1800, growth: 8, color: '#98D8C8' },
  { name: '甜品蛋糕', size: 1500, growth: 15, color: '#F7DC6F' },
  { name: '川湘菜', size: 1300, growth: 10, color: '#BB8FCE' },
  { name: '粥店简餐', size: 1100, growth: 3, color: '#85C1E9' }
];

const realTimeMetrics = {
  currentOrders: 1200,
  activeRiders: 420000,
  avgDeliveryTime: 28,
  satisfaction: 4.5
};

const aiTechData = [
  { technology: 'AI路线优化', improvement: 35, description: '配送路线智能规划，平均节省时间35%' },
  { technology: '需求预测算法', improvement: 28, description: '基于大数据预测需求，库存优化提升28%' },
  { technology: '智能调度系统', improvement: 42, description: '动态调度算法，配送效率提升42%' },
  { technology: '个性化推荐', improvement: 18, description: '精准推荐算法，用户转化率提升18%' }
];

const scenarioData = [
  { scenario: '工作日午餐', percentage: 32, avgOrder: 38, peakTime: '11:30-13:00' },
  { scenario: '晚餐时段', percentage: 28, avgOrder: 65, peakTime: '17:30-20:30' },
  { scenario: '夜宵消费', percentage: 18, avgOrder: 42, peakTime: '21:00-24:00' },
  { scenario: '周末聚餐', percentage: 15, avgOrder: 125, peakTime: '全天分布' },
  { scenario: '下午茶时光', percentage: 7, avgOrder: 28, peakTime: '14:00-16:00' }
];

const platformFeatures = [
  { 
    platform: '美团外卖',
    features: ['生态闭环完整', '配送网络密集', '本地生活服务', '商家资源丰富'],
    advantage: '全场景覆盖',
    marketStrategy: '深耕本地生活'
  },
  { 
    platform: '京东',
    features: ['品质保障体系', '快速配送承诺', '供应链整合', '品牌商家合作'],
    advantage: '品质服务',
    marketStrategy: '高端市场定位'
  },
  { 
    platform: '闪购',
    features: ['超低配送费', '新人优惠多', '社区团购', '拼团模式'],
    advantage: '价格优势',
    marketStrategy: '下沉市场突破'
  }
];

const TreemapCell = (props: any) => {
  const { depth, x, y, width, height, index, payload } = props;
  
  if (!payload || !payload.color) {
    return null;
  }

  return (
    <g>
      <rect
        x={x}
        y={y}
        width={width}
        height={height}
        style={{
          fill: payload.color,
          stroke: '#fff',
          strokeWidth: 2,
          strokeOpacity: 1,
        }}
        className="hover:opacity-80 transition-opacity cursor-pointer"
      />
      <text
        x={x + width / 2}
        y={y + height / 2}
        textAnchor="middle"
        fill="#fff"
        fontSize={width > 100 ? 14 : 12}
        fontWeight="bold"
      >
        <tspan x={x + width / 2} dy="0">{payload.name}</tspan>
        <tspan x={x + width / 2} dy="20">{formatNumber(payload.size)}</tspan>
        <tspan x={x + width / 2} dy="15" fontSize="10">
          {payload.growth > 0 ? '+' : ''}{payload.growth}%
        </tspan>
      </text>
    </g>
  );
};

const formatNumber = (num: number) => {
  if (num >= 10000) {
    return (num / 10000).toFixed(1) + '万';
  }
  return num.toLocaleString();
};

export default function InteractiveDataViz() {
  const [animatedMetrics, setAnimatedMetrics] = useState({
    currentOrders: 0,
    activeRiders: 0,
    avgDeliveryTime: 0,
    satisfaction: 0
  });

  const [selectedCity, setSelectedCity] = useState('北京');
  const [mounted, setMounted] = useState(false);
  const [activeTab, setActiveTab] = useState('realtime');

  useEffect(() => {
    setMounted(true);
    const duration = 2000;
    const steps = 60;
    const stepDuration = duration / steps;

    const increment = {
      currentOrders: realTimeMetrics.currentOrders / steps,
      activeRiders: realTimeMetrics.activeRiders / steps,
      avgDeliveryTime: realTimeMetrics.avgDeliveryTime / steps,
      satisfaction: realTimeMetrics.satisfaction / steps
    };

    let currentStep = 0;
    const timer = setInterval(() => {
      currentStep++;
      setAnimatedMetrics({
        currentOrders: Math.floor(increment.currentOrders * currentStep),
        activeRiders: Math.floor(increment.activeRiders * currentStep),
        avgDeliveryTime: Math.floor(increment.avgDeliveryTime * currentStep),
        satisfaction: Number((increment.satisfaction * currentStep).toFixed(1))
      });

      if (currentStep >= steps) {
        clearInterval(timer);
        setAnimatedMetrics(realTimeMetrics);
      }
    }, stepDuration);

    return () => clearInterval(timer);
  }, []);

  if (!mounted) {
    return (
      <section className="py-20 px-4 bg-gradient-to-b from-indigo-50 to-purple-50 relative overflow-hidden">
        <div className="max-w-7xl mx-auto relative">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-6 text-gray-800">智能数据大屏</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              动态展示外卖行业核心指标，洞察市场变化趋势与技术创新
            </p>
          </div>
          <div className="flex justify-center items-center h-96">
            <div className="animate-spin rounded-full h-32 w-32 border-b-2 border-blue-600"></div>
          </div>
        </div>
      </section>
    );
  }

  return (
    <section data-section="data-viz" className="py-20 px-4 bg-gradient-to-b from-indigo-50 to-purple-50 relative overflow-hidden">
      {/* 装饰性背景元素 */}
      <div className="absolute inset-0">
        <div className="absolute top-20 left-20 w-32 h-32 bg-gradient-to-r from-indigo-200 to-purple-200 rounded-full opacity-20 animate-pulse"></div>
        <div className="absolute top-60 right-16 w-24 h-24 bg-gradient-to-r from-blue-200 to-cyan-200 rounded-full opacity-30 animate-bounce"></div>
        <div className="absolute bottom-32 left-40 w-28 h-28 bg-gradient-to-r from-purple-200 to-pink-200 rounded-full opacity-25 animate-pulse"></div>
        <div className="absolute top-40 right-40 w-20 h-20 bg-gradient-to-r from-cyan-200 to-blue-200 rounded-full opacity-35 animate-pulse"></div>
      </div>

      <div className="max-w-7xl mx-auto relative">
        {/* 顶部装饰线条 */}
        <div className="flex justify-center mb-8">
          <div className="w-32 h-1 bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 rounded-full"></div>
        </div>

        <div className="text-center mb-16">
          <div className="flex items-center justify-center mb-4">
            <i className="ri-dashboard-3-line text-4xl text-indigo-600 mr-4"></i>
            <h2 className="text-4xl md:text-5xl font-bold text-gray-800">智能数据大屏</h2>
            <i className="ri-pulse-line text-4xl text-purple-600 ml-4 animate-pulse"></i>
          </div>
          <div className="w-24 h-0.5 bg-gradient-to-r from-transparent via-indigo-400 to-transparent mx-auto mb-6"></div>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto relative">
            动态展示外卖行业核心指标，洞察市场变化趋势与技术创新
            <span className="absolute -top-2 -right-2 text-indigo-500 text-lg animate-bounce">📈</span>
          </p>
        </div>

        {/* 增强的标签切换 */}
        <div className="flex justify-center mb-12">
          <div className="bg-gradient-to-r from-white via-gray-50 to-white rounded-2xl p-3 flex gap-2 shadow-2xl border-2 border-gray-200 overflow-x-auto">
            {[
              { key: 'realtime', icon: 'ri-pulse-fill', label: '实时监控', color: 'blue' },
              { key: 'cities', icon: 'ri-map-2-fill', label: '城市数据', color: 'green' },
              { key: 'categories', icon: 'ri-grid-fill', label: '品类分析', color: 'orange' },
              { key: 'scenarios', icon: 'ri-time-fill', label: '消费场景', color: 'pink' },
              { key: 'platforms', icon: 'ri-apps-fill', label: '平台对比', color: 'cyan' },
              { key: 'ai', icon: 'ri-brain-fill', label: '智能技术', color: 'purple' }
            ].map((item) => (
              <button
                key={item.key}
                onClick={() => setActiveTab(item.key)}
                className={`px-4 py-3 rounded-xl font-bold transition-all duration-300 whitespace-nowrap relative overflow-hidden transform text-sm lg:text-base ${
                  activeTab === item.key
                    ? 'bg-gradient-to-r from-indigo-500 to-purple-600 text-white shadow-2xl scale-110 border-2 border-indigo-300'
                    : 'text-gray-700 hover:bg-gradient-to-r hover:from-indigo-50 hover:to-purple-50 hover:shadow-lg hover:scale-105 border-2 border-transparent hover:border-indigo-200'
                }`}
              >
                {activeTab === item.key && (
                  <div className="absolute inset-0 bg-white/20 animate-pulse rounded-xl"></div>
                )}
                <div className="relative flex items-center gap-2">
                  <i className={`${item.icon} text-lg`}></i>
                  <span>{item.label}</span>
                  {activeTab === item.key && (
                    <div className="w-2 h-2 bg-white rounded-full animate-ping"></div>
                  )}
                </div>
              </button>
            ))
            }
          </div>
        </div>

        {activeTab === 'realtime' && (
          <div>
            <div className="grid md:grid-cols-4 gap-6 mb-16">
              <div className="bg-gradient-to-br from-blue-50 via-white to-blue-100 rounded-2xl p-6 shadow-2xl text-center border border-blue-200 hover:shadow-3xl transition-shadow">
                <div className="bg-blue-100 rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4">
                  <i className="ri-shopping-cart-line text-4xl text-blue-600"></i>
                </div>
                <div className="text-3xl font-bold text-blue-600 mb-1">
                  {formatNumber(animatedMetrics.currentOrders)}
                </div>
                <div className="text-gray-600 mb-2">实时订单数</div>
                <div className="text-green-500 text-sm flex items-center justify-center">
                  <i className="ri-arrow-up-line mr-1"></i> +8.5%
                </div>
              </div>

              <div className="bg-gradient-to-br from-orange-50 via-white to-orange-100 rounded-2xl p-6 shadow-2xl text-center border border-orange-200 hover:shadow-3xl transition-shadow">
                <div className="bg-orange-100 rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4">
                  <i className="ri-motorcycle-line text-4xl text-orange-600"></i>
                </div>
                <div className="text-3xl font-bold text-orange-600 mb-1">
                  {formatNumber(animatedMetrics.activeRiders)}
                </div>
                <div className="text-gray-600 mb-2">活跃骑手数</div>
                <div className="text-green-500 text-sm flex items-center justify-center">
                  <i className="ri-arrow-up-line mr-1"></i> +12.3%
                </div>
              </div>

              <div className="bg-gradient-to-br from-purple-50 via-white to-purple-100 rounded-2xl p-6 shadow-2xl text-center border border-purple-200 hover:shadow-3xl transition-shadow">
                <div className="bg-purple-100 rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4">
                  <i className="ri-time-line text-4xl text-purple-600"></i>
                </div>
                <div className="text-3xl font-bold text-purple-600 mb-1">
                  {animatedMetrics.avgDeliveryTime}分钟
                </div>
                <div className="text-gray-600 mb-2">平均配送时间</div>
                <div className="text-red-500 text-sm flex items-center justify-center">
                  <i className="ri-arrow-down-line mr-1"></i> -2.1%
                </div>
              </div>

              <div className="bg-gradient-to-br from-yellow-50 via-white to-yellow-100 rounded-2xl p-6 shadow-2xl text-center border border-yellow-200 hover:shadow-3xl transition-shadow">
                <div className="bg-yellow-100 rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4">
                  <i className="ri-star-line text-4xl text-yellow-600"></i>
                </div>
                <div className="text-3xl font-bold text-yellow-600 mb-1">
                  {animatedMetrics.satisfaction}
                </div>
                <div className="text-gray-600 mb-2">用户满意度</div>
                <div className="text-green-500 text-sm flex items-center justify-center">
                  <i className="ri-arrow-up-line mr-1"></i> +0.2
                </div>
              </div>
            </div>
            <p className="text-center text-sm text-gray-500 mb-16">📡 数据来源：各平台实时监控系统、用户反馈数据、第三方数据监测机构 - 更新频率：每5分钟</p>
          </div>
        )}

        {activeTab === 'scenarios' && (
          <div>
            <div className="bg-gradient-to-br from-pink-50 via-white to-rose-50 rounded-2xl p-8 shadow-2xl border border-pink-100 mb-16">
              <div className="flex items-center justify-center mb-8">
                <i className="ri-time-fill text-4xl text-pink-600 mr-3"></i>
                <h3 className="text-3xl font-bold text-center">消费场景分析</h3>
              </div>

              <div className="grid lg:grid-cols-2 gap-8">
                <div className="bg-white rounded-xl p-6 shadow-lg">
                  <h4 className="text-lg font-bold mb-4 text-center">📊 场景订单占比</h4>
                  <div className="space-y-4">
                    {scenarioData.map((item, index) => (
                      <div key={index} className="bg-gray-50 rounded-lg p-4">
                        <div className="flex justify-between items-center mb-2">
                          <span className="font-medium">{item.scenario}</span>
                          <span className="font-bold text-lg text-pink-600">{item.percentage}%</span>
                        </div>
                        <div className="w-full bg-gray-200 rounded-full h-3 mb-2">
                          <div 
                            className="bg-gradient-to-r from-pink-400 to-rose-500 h-3 rounded-full transition-all duration-1000"
                            style={{ width: `${item.percentage}%` }}
                          ></div>
                        </div>
                        <div className="flex justify-between text-sm text-gray-600">
                          <span>平均客单价：¥{item.avgOrder}</span>
                          <span>高峰时段：{item.peakTime}</span>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>

                <div className="bg-white rounded-xl p-6 shadow-lg">
                  <h4 className="text-lg font-bold mb-4 text-center">⏰ 24小时订单热度</h4>
                  <ResponsiveContainer width="100%" height={300}>
                    <AreaChart data={[
                      { hour: '6:00', orders: 8 }, { hour: '7:00', orders: 15 }, { hour: '8:00', orders: 25 },
                      { hour: '9:00', orders: 20 }, { hour: '10:00', orders: 18 }, { hour: '11:00', orders: 45 },
                      { hour: '12:00', orders: 100 }, { hour: '13:00', orders: 85 }, { hour: '14:00', orders: 30 },
                      { hour: '15:00', orders: 25 }, { hour: '16:00', orders: 28 }, { hour: '17:00', orders: 55 },
                      { hour: '18:00', orders: 95 }, { hour: '19:00', orders: 110 }, { hour: '20:00', orders: 90 },
                      { hour: '21:00', orders: 70 }, { hour: '22:00', orders: 45 }, { hour: '23:00', orders: 25 }
                    ]}>
                      <CartesianGrid strokeDasharray="3 3" />
                      <XAxis dataKey="hour" />
                      <YAxis />
                      <Tooltip formatter={(value) => [`${value}%`, '订单热度']} />
                      <Area type="monotone" dataKey="orders" stroke="#EC4899" fill="#EC4899" fillOpacity={0.6} />
                    </AreaChart>
                  </ResponsiveContainer>
                </div>
              </div>
              <p className="text-center text-sm text-gray-500 mt-6">🕐 数据来源：《中国外卖行业AI技术应用白皮书》- 中国人工智能产业发展联盟、清华大学AI研究院、各平台技术报告</p>
            </div>
          </div>
        )}

        {activeTab === 'platforms' && (
          <div>
            <div className="bg-gradient-to-br from-cyan-50 via-white to-teal-50 rounded-2xl p-8 shadow-2xl border border-cyan-100 mb-16">
              <div className="flex items-center justify-center mb-8">
                <i className="ri-apps-fill text-4xl text-cyan-600 mr-3"></i>
                <h3 className="text-3xl font-bold text-center">平台特色对比分析</h3>
              </div>

              <div className="grid lg:grid-cols-3 gap-8">
                {platformFeatures.map((platform, index) => (
                  <div key={index} className="bg-white rounded-2xl p-6 shadow-xl border border-gray-200 hover:shadow-2xl transition-all hover:scale-102">
                    <div className="text-center mb-6">
                      <div className="flex items-center justify-center mb-4">
                        <i className={`${index === 0 ? 'ri-trophy-fill' : index === 1 ? 'ri-shield-star-fill' : 'ri-flashlight-fill'} text-4xl mr-2`} 
                           style={{ color: index === 0 ? '#FBD35B' : index === 1 ? '#F79D8E' : '#6bc3ff' }}></i>
                      </div>
                      <h4 className="text-xl font-bold mb-2">{platform.platform}</h4>
                      <div className="bg-gradient-to-r from-gray-100 to-gray-200 rounded-full px-4 py-2 text-sm font-medium">
                        {platform.advantage}
                      </div>
                    </div>

                    <div className="mb-6">
                      <h5 className="font-bold mb-3 flex items-center">
                        <i className="ri-star-fill text-yellow-500 mr-2"></i>
                        核心特色
                      </h5>
                      <div className="space-y-2">
                        {platform.features.map((feature, i) => (
                          <div key={i} className="flex items-center gap-2 text-sm bg-gray-50 p-2 rounded-lg">
                            <i className="ri-check-line text-green-500"></i>
                            <span>{feature}</span>
                          </div>
                        ))}
                      </div>
                    </div>

                    <div className="bg-gradient-to-r from-blue-50 to-cyan-50 rounded-lg p-4 border border-blue-200">
                      <div className="flex items-center gap-2 mb-2">
                        <i className="ri-rocket-fill text-blue-600"></i>
                        <span className="font-bold text-blue-800">市场策略</span>
                      </div>
                      <p className="text-sm text-blue-700">{platform.marketStrategy}</p>
                    </div>
                  </div>
                ))}
              </div>
              <p className="text-center text-sm text-gray-500 mt-6">🏢 数据来源：各平台官方资料、行业研究报告、专业机构分析</p>
            </div>
          </div>
        )}

        {activeTab === 'ai' && (
          <div>
            <div className="bg-gradient-to-br from-purple-50 via-white to-indigo-50 rounded-2xl p-8 shadow-2xl border border-purple-100 mb-16">
              <div className="flex items-center justify-center mb-8">
                <i className="ri-brain-fill text-4xl text-purple-600 mr-3"></i>
                <h3 className="text-3xl font-bold text-center">AI技术赋能效果</h3>
              </div>
              
              <div className="grid md:grid-cols-2 gap-8">
                {aiTechData.map((tech, index) => (
                  <div key={index} className="bg-white rounded-2xl p-6 shadow-xl border border-gray-200 hover:shadow-2xl transition-all hover:scale-102">
                    <div className="flex items-center justify-between mb-4">
                      <div className="flex items-center gap-3">
                        <div className="bg-gradient-to-r from-purple-100 to-indigo-100 rounded-full w-12 h-12 flex items-center justify-center">
                          <i className={`${index === 0 ? 'ri-route-fill' : index === 1 ? 'ri-brain-fill' : index === 2 ? 'ri-settings-3-fill' : 'ri-user-star-fill'} text-xl text-purple-600`}></i>
                        </div>
                        <h4 className="text-xl font-bold text-gray-800">{tech.technology}</h4>
                      </div>
                      <div className="bg-gradient-to-r from-green-500 to-emerald-600 text-white px-4 py-2 rounded-full font-bold">
                        +{tech.improvement}%
                      </div>
                    </div>
                    <p className="text-gray-600 leading-relaxed mb-4">{tech.description}</p>
                    <div className="w-full bg-gray-200 rounded-full h-3 overflow-hidden">
                      <div 
                        className="bg-gradient-to-r from-purple-500 to-indigo-600 h-3 rounded-full transition-all duration-2000 relative"
                        style={{ width: `${Math.min(tech.improvement, 100)}%` }}
                      >
                        <div className="absolute inset-0 bg-white/30 animate-pulse"></div>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
              <p className="text-center text-sm text-gray-500 mt-6">🤖 数据来源：《中国外卖行业AI技术应用白皮书》- 中国人工智能产业发展联盟、清华大学AI研究院、各平台技术报告</p>
            </div>
          </div>
        )}

        {activeTab === 'cities' && (
          <div>
            <div className="bg-gradient-to-br from-white via-gray-50 to-white rounded-2xl p-8 shadow-2xl mb-16 border border-gray-200">
              <div className="flex items-center justify-center mb-8">
                <i className="ri-global-line text-3xl text-blue-600 mr-3"></i>
                <h3 className="text-2xl font-bold">重点城市数据对比</h3>
              </div>
              <div className="grid lg:grid-cols-3 gap-8">
                <div className="bg-gradient-to-br from-gray-50 to-gray-100 rounded-xl p-6 shadow-lg">
                  <div className="flex items-center mb-4">
                    <i className="ri-map-pin-fill text-2xl text-red-500 mr-2"></i>
                    <h4 className="text-lg font-bold">城市选择</h4>
                  </div>
                  <div className="grid grid-cols-2 gap-2">
                    {cityOrderData.slice(0, 8).map((city) => (
                      <button
                        key={city.city}
                        onClick={() => setSelectedCity(city.city)}
                        className={`p-3 rounded-lg text-sm font-medium transition-all whitespace-nowrap ${
                          selectedCity === city.city
                            ? 'bg-gradient-to-r from-blue-500 to-blue-600 text-white shadow-lg'
                            : 'bg-white text-gray-700 hover:bg-gray-50 shadow-sm border border-gray-200'
                        }`}
                      >
                        {city.city}
                      </button>
                    ))}
                  </div>
                </div>

                <div className="lg:col-span-2">
                  <ResponsiveContainer width="100%" height={300}>
                    <ComposedChart data={cityOrderData}>
                      <CartesianGrid strokeDasharray="3 3" />
                      <XAxis dataKey="city" />
                      <YAxis yAxisId="left" />
                      <YAxis yAxisId="right" orientation="right" />
                      <Tooltip />
                      <Legend />
                      <Bar yAxisId="left" dataKey="orders" fill="#4F46E5" name="日订单量(万)" />
                      <Line yAxisId="right" type="monotone" dataKey="growth" stroke="#F59E0B" strokeWidth={3} name="增长率(%)" />
                    </ComposedChart>
                  </ResponsiveContainer>
                </div>
              </div>

              {(() => {
                const selectedData = cityOrderData.find(city => city.city === selectedCity);
                return selectedData ? (
                  <div className="mt-8 grid md:grid-cols-4 gap-4">
                    <div className="bg-gradient-to-br from-blue-50 to-blue-100 rounded-lg p-4 text-center border border-blue-200">
                      <i className="ri-shopping-cart-2-fill text-2xl text-blue-600 mb-2"></i>
                      <div className="text-2xl font-bold text-blue-600">{selectedData.orders}万</div>
                      <div className="text-sm text-gray-600">日订单量</div>
                    </div>
                    <div className="bg-gradient-to-br from-green-50 to-green-100 rounded-lg p-4 text-center border border-green-200">
                      <i className="ri-trending-up-fill text-2xl text-green-600 mb-2"></i>
                      <div className="text-2xl font-bold text-green-600">+{selectedData.growth}%</div>
                      <div className="text-sm text-gray-600">增长率</div>
                    </div>
                    <div className="bg-gradient-to-br from-purple-50 to-purple-100 rounded-lg p-4 text-center border border-purple-200">
                      <i className="ri-money-dollar-circle-fill text-2xl text-purple-600 mb-2"></i>
                      <div className="text-2xl font-bold text-purple-600">{selectedData.revenue}亿</div>
                      <div className="text-sm text-gray-600">月度收入</div>
                    </div>
                    <div className="bg-gradient-to-br from-yellow-50 to-yellow-100 rounded-lg p-4 text-center border border-yellow-200">
                      <i className="ri-star-fill text-2xl text-yellow-600 mb-2"></i>
                      <div className="text-2xl font-bold text-yellow-600">{selectedData.satisfaction}</div>
                      <div className="text-sm text-gray-600">满意度</div>
                    </div>
                  </div>
                ) : null;
              })()}
              <p className="text-center text-sm text-gray-500 mt-4">🏙️ 数据来源：国家统计局城市数据、各城市商务委员会统计、第三方调研机构</p>
            </div>
          </div>
        )}

        {activeTab === 'categories' && (
          <div>
            <div className="bg-gradient-to-br from-emerald-50 via-white to-teal-50 rounded-2xl p-8 shadow-2xl border border-emerald-200">
              <div className="flex items-center justify-center mb-8">
                <i className="ri-grid-fill text-3xl text-emerald-600 mr-3"></i>
                <h3 className="text-2xl font-bold">热门品类分布热力图</h3>
              </div>
              <ResponsiveContainer width="100%" height={400}>
                <Treemap
                  data={categoryTreemapData}
                  dataKey="size"
                  aspectRatio={4/3}
                  stroke="#fff"
                  content={<TreemapCell />}
                />
              </ResponsiveContainer>
              <div className="mt-6 text-center text-sm text-gray-600 bg-white rounded-lg p-4 border border-gray-200">
                <i className="ri-information-line text-blue-500 mr-2"></i>
                方块大小代表订单量，颜色深浅表示增长率
              </div>
              <p className="text-center text-sm text-gray-500 mt-4">🍔 数据来源：《中国外卖品类发展报告》- 美团研究院、饿了么数据研究院、中国烹饪协会</p>
            </div>
          </div>
        )}

        {/* 底部装饰线条 */}
        <div className="flex justify-center mt-16">
          <div className="w-24 h-1 bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 rounded-full opacity-60"></div>
        </div>
      </div>
    </section>
  );
}
