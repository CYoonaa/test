'use client';

import { AreaChart, Area, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer, LineChart, Line, BarChart, Bar, PieChart, Pie, Cell } from 'recharts';
import { useState } from 'react';

const dailyOrderData = [
  { hour: '6:00', 美团: 120, 京东: 45, 闪购: 18 },
  { hour: '7:00', 美团: 280, 京东: 95, 闪购: 38 },
  { hour: '8:00', 美团: 450, 京东: 150, 闪购: 62 },
  { hour: '9:00', 美团: 380, 京东: 125, 闪购: 48 },
  { hour: '10:00', 美团: 320, 京东: 105, 闪购: 40 },
  { hour: '11:00', 美团: 680, 京东: 230, 闪购: 85 },
  { hour: '12:00', 美团: 1200, 京东: 420, 闪购: 165 },
  { hour: '13:00', 美团: 980, 京东: 340, 闪购: 132 },
  { hour: '14:00', 美团: 450, 京东: 160, 闪购: 62 },
  { hour: '15:00', 美团: 380, 京东: 135, 闪购: 52 },
  { hour: '16:00', 美团: 420, 京东: 150, 闪购: 58 },
  { hour: '17:00', 美团: 750, 京东: 280, 闪购: 108 },
  { hour: '18:00', 美团: 1150, 京东: 450, 闪购: 172 },
  { hour: '19:00', 美团: 1380, 京东: 520, 闪购: 195 },
  { hour: '20:00', 美团: 1200, 京东: 480, 闪购: 178 },
  { hour: '21:00', 美团: 850, 京东: 320, 闪购: 125 },
  { hour: '22:00', 美团: 520, 京东: 195, 闪购: 78 },
  { hour: '23:00', 美团: 280, 京东: 105, 闪购: 42 }
];

const deliveryTimeData = [
  { platform: '美团外卖', avgTime: 28, satisfaction: 4.6 },
  { platform: '京东', avgTime: 32, satisfaction: 4.4 },
  { platform: '闪购', avgTime: 35, satisfaction: 4.3 }
];

const weeklyTrendData = [
  { day: '周一', 美团: 850, 京东: 320, 闪购: 125 },
  { day: '周二', 美团: 920, 京东: 350, 闪购: 142 },
  { day: '周三', 美团: 1050, 京东: 380, 闪购: 158 },
  { day: '周四', 美团: 1180, 京东: 420, 闪购: 175 },
  { day: '周五', 美团: 1450, 京东: 520, 闪购: 205 },
  { day: '周六', 美团: 1680, 京东: 580, 闪购: 235 },
  { day: '周日', 美团: 1520, 京东: 550, 闪购: 218 }
];

const deliveryDistanceData = [
  { range: '0-1公里', percentage: 35, avgTime: 18 },
  { range: '1-3公里', percentage: 42, avgTime: 28 },
  { range: '3-5公里', percentage: 18, avgTime: 42 },
  { range: '5公里以上', percentage: 5, avgTime: 58 }
];

const weatherImpactData = [
  { weather: '晴天', orders: 100, delay: 0 },
  { weather: '小雨', orders: 85, delay: 8 },
  { weather: '大雨', orders: 65, delay: 25 },
  { weather: '雪天', orders: 45, delay: 40 },
  { weather: '高温', orders: 120, delay: 5 }
];

const safetyData = [
  { metric: '骑手安全培训覆盖率', value: 98.5, unit: '%' },
  { metric: '平均保险理赔时间', value: 2.3, unit: '小时' },
  { metric: '交通违章率下降', value: 25, unit: '%' },
  { metric: '食品安全事故率', value: 0.02, unit: '‰' }
];

export default function DeliveryStats() {
  const [activeView, setActiveView] = useState('daily');
  const [hoveredView, setHoveredView] = useState(null);

  return (
    <section data-section="delivery-stats" className="py-20 px-4 bg-gradient-to-b from-gray-50 to-white relative overflow-hidden">
      {/* 装饰性背景元素 */}
      <div className="absolute inset-0">
        <div className="absolute top-32 left-16 w-20 h-20 bg-gradient-to-r from-blue-200 to-purple-200 rounded-full opacity-30 animate-pulse"></div>
        <div className="absolute top-80 right-32 w-16 h-16 bg-gradient-to-r from-yellow-200 to-orange-200 rounded-full opacity-40 animate-bounce"></div>
        <div className="absolute bottom-40 left-32 w-24 h-24 bg-gradient-to-r from-green-200 to-teal-200 rounded-full opacity-25 animate-pulse"></div>
      </div>

      <div className="max-w-7xl mx-auto relative">
        {/* 顶部装饰线条 */}
        <div className="flex justify-center mb-8">
          <div className="w-32 h-1 bg-gradient-to-r from-orange-500 via-red-500 to-purple-500 rounded-full"></div>
        </div>

        <div className="text-center mb-16">
          <div className="flex items-center justify-center mb-4">
            <i className="ri-truck-line text-4xl text-orange-600 mr-4"></i>
            <h2 className="text-4xl md:text-5xl font-bold text-gray-800">配送效率大比拼</h2>
            <i className="ri-time-line text-4xl text-blue-600 ml-4"></i>
          </div>
          <div className="w-24 h-0.5 bg-gradient-to-r from-transparent via-gray-400 to-transparent mx-auto mb-6"></div>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto relative">
            从订单分布到配送时效，数据揭示各平台的运营实力与安全保障
            <span className="absolute -top-2 -right-2 text-orange-500 text-lg">⚡</span>
          </p>
        </div>

        {/* 更醒目的视图切换 */}
        <div className="flex justify-center mb-12">
          <div className="bg-gradient-to-r from-white via-gray-50 to-white rounded-2xl shadow-2xl p-3 flex gap-2 border-2 border-gray-200">
            {[
              { key: 'daily', icon: 'ri-sun-fill', label: '24小时分布', color: 'yellow' },
              { key: 'weekly', icon: 'ri-calendar-fill', label: '一周趋势', color: 'blue' },
              { key: 'distance', icon: 'ri-map-pin-fill', label: '配送距离', color: 'purple' },
              { key: 'weather', icon: 'ri-cloudy-fill', label: '天气影响', color: 'green' },
              { key: 'safety', icon: 'ri-shield-check-fill', label: '安全保障', color: 'red' }
            ].map((item) => (
              <button
                key={item.key}
                onClick={() => setActiveView(item.key)}
                onMouseEnter={() => setHoveredView(item.key)}
                onMouseLeave={() => setHoveredView(null)}
                className={`px-6 py-4 rounded-xl font-bold transition-all duration-300 whitespace-nowrap relative overflow-hidden transform ${
                  activeView === item.key
                    ? 'bg-gradient-to-r from-blue-500 to-blue-600 text-white shadow-2xl scale-110 border-2 border-blue-300'
                    : `text-gray-700 hover:bg-gradient-to-r hover:shadow-lg hover:scale-105 border-2 border-transparent`
                }`}
                style={{
                  backgroundColor: activeView === item.key ? '#3B82F6' : hoveredView === item.key ? (item.color === 'yellow' ? '#FEF3C7' : item.color === 'blue' ? '#EFF6FF' : item.color === 'purple' ? '#F3E8FF' : item.color === 'green' ? '#ECFDF5' : '#FEF2F2') : 'transparent',
                  borderColor: activeView === item.key ? '#DBEAFE' : hoveredView === item.key ? (item.color === 'yellow' ? '#FDE68A' : item.color === 'blue' ? '#BFDBFE' : item.color === 'purple' ? '#C4B5FD' : item.color === 'green' ? '#A7F3D0' : '#FCA5A5') : 'transparent'
                }}
              >
                {activeView === item.key && (
                  <div className="absolute inset-0 bg-white/20 animate-pulse rounded-xl"></div>
                )}
                <div className="relative flex items-center gap-2">
                  <i className={`${item.icon} text-lg`}></i>
                  <span>{item.label}</span>
                  {activeView === item.key && (
                    <div className="w-2 h-2 bg-white rounded-full animate-ping"></div>
                  )}
                </div>
              </button>
            ))}
          </div>
        </div>

        {activeView === 'daily' && (
          <div className="mb-16">
            <div className="bg-gradient-to-br from-blue-50 via-white to-purple-50 rounded-2xl p-8 shadow-2xl border border-blue-100">
              <div className="flex items-center justify-center mb-6">
                <i className="ri-bar-chart-fill text-3xl text-blue-600 mr-3"></i>
                <h3 className="text-2xl font-bold">24小时订单分布热力图</h3>
              </div>
              <ResponsiveContainer width="100%" height={400}>
                <AreaChart data={dailyOrderData}>
                  <CartesianGrid strokeDasharray="3 3" />
                  <XAxis dataKey="hour" />
                  <YAxis />
                  <Tooltip formatter={(value, name) => [`${value}万单`, name]} />
                  <Area type="monotone" dataKey="美团" stackId="1" stroke="#FBD35B" fill="#FBD35B" fillOpacity={0.8} />
                  <Area type="monotone" dataKey="京东" stackId="1" stroke="#F79D8E" fill="#F79D8E" fillOpacity={0.8} />
                  <Area type="monotone" dataKey="闪购" stackId="1" stroke="#6bc3ff" fill="#6bc3ff" fillOpacity={0.8} />
                </AreaChart>
              </ResponsiveContainer>
              <p className="text-center text-sm text-gray-500 mt-4"> 数据来源：各平台公开数据及行业报告</p>
            </div>
          </div>
        )}

        {activeView === 'weekly' && (
          <div className="mb-16">
            <div className="bg-gradient-to-br from-green-50 via-white to-teal-50 rounded-2xl p-8 shadow-2xl border border-green-100">
              <div className="flex items-center justify-center mb-6">
                <i className="ri-line-chart-fill text-3xl text-green-600 mr-3"></i>
                <h3 className="text-2xl font-bold">一周订单趋势对比</h3>
              </div>
              <ResponsiveContainer width="100%" height={400}>
                <LineChart data={weeklyTrendData}>
                  <CartesianGrid strokeDasharray="3 3" />
                  <XAxis dataKey="day" />
                  <YAxis />
                  <Tooltip formatter={(value) => [`${value}万单`]} />
                  <Line type="monotone" dataKey="美团" stroke="#FBD35B" strokeWidth={4} dot={{ r: 6 }} />
                  <Line type="monotone" dataKey="京东" stroke="#F79D8E" strokeWidth={4} dot={{ r: 6 }} />
                  <Line type="monotone" dataKey="闪购" stroke="#6bc3ff" strokeWidth={4} dot={{ r: 6 }} />
                </LineChart>
              </ResponsiveContainer>
              <p className="text-center text-sm text-gray-500 mt-4"> 数据来源：第三方监测机构</p>
            </div>
          </div>
        )}

        {activeView === 'distance' && (
          <div className="mb-16">
            <div className="bg-gradient-to-br from-purple-50 via-white to-pink-50 rounded-2xl p-8 shadow-2xl border border-purple-100">
              <div className="flex items-center justify-center mb-6">
                <i className="ri-map-2-fill text-3xl text-purple-600 mr-3"></i>
                <h3 className="text-2xl font-bold">配送距离分布与时效</h3>
              </div>
              <div className="grid lg:grid-cols-2 gap-8">
                <div className="bg-white rounded-xl p-6 shadow-lg">
                  <h4 className="text-lg font-bold mb-4 text-center"> 距离分布</h4>
                  <ResponsiveContainer width="100%" height={300}>
                    <PieChart>
                      <Pie
                        data={deliveryDistanceData}
                        cx="50%"
                        cy="50%"
                        outerRadius={100}
                        dataKey="percentage"
                        label={({ range, percentage }) => `${range}: ${percentage}%`}
                      >
                        {deliveryDistanceData.map((entry, index) => (
                          <Cell key={`cell-${index}`} fill={['#FF6B6B', '#4ECDC4', '#45B7D1', '#FFA07A'][index]} />
                        ))}
                      </Pie>
                      <Tooltip />
                    </PieChart>
                  </ResponsiveContainer>
                </div>
                <div className="bg-white rounded-xl p-6 shadow-lg">
                  <h4 className="text-lg font-bold mb-4 text-center"> 配送时效</h4>
                  <ResponsiveContainer width="100%" height={300}>
                    <BarChart data={deliveryDistanceData}>
                      <CartesianGrid strokeDasharray="3 3" />
                      <XAxis dataKey="range" />
                      <YAxis />
                      <Tooltip formatter={(value) => [`${value}分钟`, '平均配送时间']} />
                      <Bar dataKey="avgTime" fill="#8884d8" />
                    </BarChart>
                  </ResponsiveContainer>
                </div>
              </div>
              <p className="text-center text-sm text-gray-500 mt-4"> 数据来源：配送时效监测报告</p>
            </div>
          </div>
        )}

        {activeView === 'weather' && (
          <div className="mb-16">
            <div className="bg-gradient-to-br from-cyan-50 via-white to-blue-50 rounded-2xl p-8 shadow-2xl border border-cyan-100">
              <div className="flex items-center justify-center mb-6">
                <i className="ri-cloud-rain-fill text-3xl text-cyan-600 mr-3"></i>
                <h3 className="text-2xl font-bold">天气对配送的影响</h3>
              </div>
              <div className="grid md:grid-cols-2 gap-8">
                <div className="bg-white rounded-xl p-6 shadow-lg">
                  <h4 className="text-lg font-bold mb-4 flex items-center">
                    <i className="ri-shopping-cart-2-fill text-blue-600 mr-2"></i>
                    订单量影响
                  </h4>
                  <ResponsiveContainer width="100%" height={300}>
                    <BarChart data={weatherImpactData}>
                      <CartesianGrid strokeDasharray="3 3" />
                      <XAxis dataKey="weather" />
                      <YAxis />
                      <Tooltip formatter={(value) => [`${value}%`, '订单量变化']} />
                      <Bar dataKey="orders" fill="#4F46E5" />
                    </BarChart>
                  </ResponsiveContainer>
                </div>
                <div className="bg-white rounded-xl p-6 shadow-lg">
                  <h4 className="text-lg font-bold mb-4 flex items-center">
                    <i className="ri-alarm-warning-fill text-red-600 mr-2"></i>
                    配送延迟情况
                  </h4>
                  <ResponsiveContainer width="100%" height={300}>
                    <BarChart data={weatherImpactData}>
                      <CartesianGrid strokeDasharray="3 3" />
                      <XAxis dataKey="weather" />
                      <YAxis />
                      <Tooltip formatter={(value) => [`+${value}分钟`, '平均延迟']} />
                      <Bar dataKey="delay" fill="#EF4444" />
                    </BarChart>
                  </ResponsiveContainer>
                </div>
              </div>
              <p className="text-center text-sm text-gray-500 mt-4"> 数据来源：气象局数据、平台运营数据</p>
            </div>
          </div>
        )}

        {activeView === 'safety' && (
          <div className="mb-16">
            <div className="bg-gradient-to-br from-red-50 via-white to-orange-50 rounded-2xl p-8 shadow-2xl border border-red-100">
              <div className="flex items-center justify-center mb-8">
                <i className="ri-shield-check-fill text-4xl text-red-600 mr-3"></i>
                <h3 className="text-3xl font-bold text-center">安全保障体系</h3>
              </div>

              {/* 安全指标统计 */}
              <div className="grid md:grid-cols-4 gap-6 mb-8">
                {safetyData.map((item, index) => (
                  <div key={index} className="bg-gradient-to-br from-white via-gray-50 to-white rounded-xl p-6 shadow-lg text-center hover:shadow-xl transition-shadow border border-gray-200">
                    <div className="bg-gradient-to-r from-red-100 to-orange-100 rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4">
                      <i className={`${index === 0 ? 'ri-graduation-cap-fill' : index === 1 ? 'ri-time-fill' : index === 2 ? 'ri-shield-fill' : 'ri-restaurant-2-fill'} text-2xl text-red-600`}></i>
                    </div>
                    <div className="text-3xl font-bold text-red-600 mb-2">{item.value}{item.unit}</div>
                    <div className="text-sm text-gray-600 leading-tight">{item.metric}</div>
                    <div className="mt-3 w-full bg-gray-200 rounded-full h-2">
                      <div
                        className="bg-gradient-to-r from-red-400 to-orange-500 h-2 rounded-full transition-all duration-1000"
                        style={{ width: `${Math.min(item.value, 100)}%` }}
                      ></div>
                    </div>
                  </div>
                ))}
              </div>

              {/* 安全措施展示 */}
              <div className="grid lg:grid-cols-3 gap-6">
                <div className="bg-white rounded-xl p-6 shadow-lg border border-gray-200">
                  <div className="flex items-center gap-3 mb-4">
                    <i className="ri-user-heart-fill text-2xl text-blue-600"></i>
                    <h4 className="text-xl font-bold">骑手安全</h4>
                  </div>
                  <div className="space-y-3">
                    <div className="flex items-center gap-2 text-sm">
                      <i className="ri-check-line text-green-500"></i>
                      <span>智能头盔配发率100%</span>
                    </div>
                    <div className="flex items-center gap-2 text-sm">
                      <i className="ri-check-line text-green-500"></i>
                      <span>定期安全培训考核</span>
                    </div>
                    <div className="flex items-center gap-2 text-sm">
                      <i className="ri-check-line text-green-500"></i>
                      <span>意外伤害保险覆盖</span>
                    </div>
                    <div className="flex items-center gap-2 text-sm">
                      <i className="ri-check-line text-green-500"></i>
                      <span>疲劳驾驶智能提醒</span>
                    </div>
                  </div>
                </div>

                <div className="bg-white rounded-xl p-6 shadow-lg border border-gray-200">
                  <div className="flex items-center gap-3 mb-4">
                    <i className="ri-restaurant-fill text-2xl text-green-600"></i>
                    <h4 className="text-xl font-bold">食品安全</h4>
                  </div>
                  <div className="space-y-3">
                    <div className="flex items-center gap-2 text-sm">
                      <i className="ri-check-line text-green-500"></i>
                      <span>商家资质严格审核</span>
                    </div>
                    <div className="flex items-center gap-2 text-sm">
                      <i className="ri-check-line text-green-500"></i>
                      <span>食品温度实时监控</span>
                    </div>
                    <div className="flex items-center gap-2 text-sm">
                      <i className="ri-check-line text-green-500"></i>
                      <span>配送箱定期消毒</span>
                    </div>
                    <div className="flex items-center gap-2 text-sm">
                      <i className="ri-check-line text-green-500"></i>
                      <span>食品安全保险保障</span>
                    </div>
                  </div>
                </div>

                <div className="bg-white rounded-xl p-6 shadow-lg border border-gray-200">
                  <div className="flex items-center gap-3 mb-4">
                    <i className="ri-shield-keyhole-fill text-2xl text-purple-600"></i>
                    <h4 className="text-xl font-bold">数据安全</h4>
                  </div>
                  <div className="space-y-3">
                    <div className="flex items-center gap-2 text-sm">
                      <i className="ri-check-line text-green-500"></i>
                      <span>用户信息加密保护</span>
                    </div>
                    <div className="flex items-center gap-2 text-sm">
                      <i className="ri-check-line text-green-500"></i>
                      <span>支付安全多重验证</span>
                    </div>
                    <div className="flex items-center gap-2 text-sm">
                      <i className="ri-check-line text-green-500"></i>
                      <span>隐私保护严格遵循</span>
                    </div>
                    <div className="flex items-center gap-2 text-sm">
                      <i className="ri-check-line text-green-500"></i>
                      <span>数据合规定期审计</span>
                    </div>
                  </div>
                </div>
              </div>
              <p className="text-center text-sm text-gray-500 mt-6"> 数据来源：《外卖行业安全保障白皮书》- 中国互联网协会、各平台安全报告</p>
            </div>
          </div>
        )}

        <div className="grid lg:grid-cols-2 gap-12">
          <div className="bg-gradient-to-br from-orange-50 via-white to-red-50 rounded-2xl p-8 shadow-2xl border border-orange-100">
            <div className="flex items-center justify-center mb-6">
              <i className="ri-timer-fill text-3xl text-orange-600 mr-3"></i>
              <h3 className="text-2xl font-bold">配送时效对比</h3>
            </div>
            <div className="space-y-6">
              {deliveryTimeData.map((item, index) => (
                <div key={index} className="bg-white rounded-xl p-6 shadow-lg border border-gray-100 hover:shadow-xl transition-shadow">
                  <div className="flex items-center justify-between mb-4">
                    <div className="flex items-center gap-3">
                      <i className={`${index === 0 ? 'ri-medal-fill' : index === 1 ? 'ri-award-fill' : 'ri-star-fill'} text-2xl`} style={{ color: index === 0 ? '#FBD35B' : index === 1 ? '#F79D8E' : '#6bc3ff' }}></i>
                      <h4 className="text-lg font-semibold">{item.platform}</h4>
                    </div>
                    <div className="flex items-center gap-2">
                      <i className="ri-star-fill text-yellow-500"></i>
                      <span className="font-bold">{item.satisfaction}</span>
                    </div>
                  </div>
                  <div className="flex items-center gap-4">
                    <div className="flex-1">
                      <div className="flex justify-between mb-2">
                        <span>平均配送时间</span>
                        <span className="font-bold">{item.avgTime}分钟</span>
                      </div>
                      <div className="w-full bg-gray-200 rounded-full h-3 overflow-hidden">
                        <div
                          className="bg-gradient-to-r from-green-400 to-blue-500 h-3 rounded-full transition-all duration-1000"
                          style={{ width: `${(50 - item.avgTime) * 2}%` }}
                        ></div>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
            <p className="text-center text-sm text-gray-500 mt-4"> 用户体验调研</p>
          </div>

          <div>
            <div className="bg-gradient-to-br from-indigo-50 via-white to-purple-50 rounded-2xl p-8 shadow-2xl border border-indigo-100 mb-6">
              <div className="flex items-center justify-center mb-6">
                <i className="ri-dashboard-fill text-3xl text-indigo-600 mr-3"></i>
                <h3 className="text-2xl font-bold">关键指标对比</h3>
              </div>
              <div className="grid grid-cols-2 gap-4">
                <div className="bg-white rounded-xl p-6 shadow-lg text-center hover:shadow-xl transition-shadow border border-blue-100">
                  <i className="ri-time-line text-3xl text-blue-600 mb-3"></i>
                  <div className="text-2xl font-bold text-blue-600">28分钟</div>
                  <div className="text-sm text-gray-600">美团平均配送</div>
                </div>
                <div className="bg-white rounded-xl p-6 shadow-lg text-center hover:shadow-xl transition-shadow border border-green-100">
                  <i className="ri-user-smile-line text-3xl text-green-600 mb-3"></i>
                  <div className="text-2xl font-bold text-green-600">4.6分</div>
                  <div className="text-sm text-gray-600">用户满意度</div>
                </div>
                <div className="bg-white rounded-xl p-6 shadow-lg text-center hover:shadow-xl transition-shadow border border-orange-100">
                  <i className="ri-motorcycle-line text-3xl text-orange-600 mb-3"></i>
                  <div className="text-2xl font-bold text-orange-600">560万</div>
                  <div className="text-sm text-gray-600">骑手总数</div>
                </div>
                <div className="bg-white rounded-xl p-6 shadow-lg text-center hover:shadow-xl transition-shadow border border-purple-100">
                  <i className="ri-store-2-line text-3xl text-purple-600 mb-3"></i>
                  <div className="text-2xl font-bold text-purple-600">80万+</div>
                  <div className="text-sm text-gray-600">合作商家</div>
                </div>
              </div>
            </div>

            <div className="bg-white rounded-xl p-6 shadow-2xl border border-gray-100">
              <div className="flex items-center justify-center mb-4">
                <i className="ri-trophy-line text-2xl text-yellow-600 mr-2"></i>
                <h4 className="text-lg font-bold text-center">配送效率综合对比</h4>
              </div>
              <div className="grid grid-cols-3 gap-4 text-center">
                <div className="p-4 rounded-lg bg-gradient-to-br from-yellow-50 to-orange-50 border border-yellow-200">
                  <div className="font-bold text-lg" style={{ color: '#FBD35B' }}>美团外卖</div>
                  <div className="text-sm text-gray-600 mt-1">综合评分</div>
                  <div className="text-xl font-bold text-yellow-600">92分</div>
                </div>
                <div className="p-4 rounded-lg bg-gradient-to-br from-red-50 to-pink-50 border border-red-200">
                  <div className="font-bold text-lg" style={{ color: '#F79D8E' }}>京东</div>
                  <div className="text-sm text-gray-600 mt-1">综合评分</div>
                  <div className="text-xl font-bold text-red-400">85分</div>
                </div>
                <div className="p-4 rounded-lg bg-gradient-to-br from-blue-50 to-sky-50 border border-blue-200">
                  <div className="font-bold text-lg" style={{ color: '#6bc3ff' }}>闪购</div>
                  <div className="text-sm text-gray-600 mt-1">综合评分</div>
                  <div className="text-xl font-bold" style={{ color: '#6bc3ff' }}>78分</div>
                </div>
              </div>
            </div>
            <p className="text-center text-sm text-gray-500 mt-4"> 数据来源：行业效率评估报告</p>
          </div>
        </div>

        {/* 底部装饰线条 */}
        <div className="flex justify-center mt-16">
          <div className="w-24 h-1 bg-gradient-to-r from-orange-500 via-red-500 to-purple-500 rounded-full opacity-60"></div>
        </div>
      </div>
    </section>
  );
}
