'use client';

import { PieChart, Pie, Cell, ResponsiveContainer, BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, Legend, LineChart, Line, RadarChart, PolarGrid, PolarAngleAxis, PolarRadiusAxis, Radar } from 'recharts';
import { useState, useEffect } from 'react';

const marketData = [
  { name: '美团外卖', value: 68.2, color: '#FBD35B' },
  { name: '京东', value: 22.1, color: '#F79D8E' },
  { name: '闪购', value: 9.7, color: '#6bc3ff' }
];

const yearlyData = [
  { year: '2019', 美团: 65.8, 京东: 27.4, 闪购: 6.8 },
  { year: '2020', 美团: 67.3, 京东: 26.9, 闪购: 5.8 },
  { year: '2021', 美团: 69.1, 京东: 25.2, 闪购: 5.7 },
  { year: '2022', 美团: 68.9, 京东: 24.1, 闪购: 7.0 },
  { year: '2023', 美团: 68.2, 京东: 22.1, 闪购: 9.7 }
];

const competitiveData = [
  { platform: '美团外卖', 用户体验: 85, 配送速度: 90, 商家数量: 95, 价格优势: 70, 技术创新: 88 },
  { platform: '京东', 用户体验: 78, 配送速度: 82, 商家数量: 85, 价格优势: 80, 技术创新: 75 },
  { platform: '闪购', 用户体验: 72, 配送速度: 75, 商家数量: 60, 价格优势: 85, 技术创新: 92 }
];

const revenueData = [
  { quarter: 'Q1 2022', 美团: 135, 京东: 45, 闪购: 2 },
  { quarter: 'Q2 2022', 美团: 142, 京东: 47, 闪购: 4 },
  { quarter: 'Q3 2022', 美团: 148, 京东: 44, 闪购: 6 },
  { quarter: 'Q4 2022', 美团: 155, 京东: 46, 闪购: 8 },
  { quarter: 'Q1 2023', 美团: 162, 京东: 48, 闪购: 12 },
  { quarter: 'Q2 2023', 美团: 168, 京东: 49, 闪购: 15 },
  { quarter: 'Q3 2023', 美团: 175, 京东: 51, 闪购: 18 },
  { quarter: 'Q4 2023', 美团: 182, 京东: 52, 闪购: 22 }
];

const regulationData = [
  { date: '2025年5月', event: '五部门联合约谈', impact: 'high', description: '市场监管总局、商务部等五部门联合约谈美团、京东等平台，要求规范竞争行为' },
  { date: '2025年6月', event: '反垄断指导意见', impact: 'medium', description: '发布《外卖平台反垄断合规指引》，明确禁止二选一、价格操控等行为' },
  { date: '2025年7月', event: '骑手权益保护新规', impact: 'high', description: '人社部发布外卖骑手劳动权益保护新规定，要求平台承担更多责任' },
  { date: '2025年8月', event: '食品安全专项整治', impact: 'medium', description: '市场监管部门启动外卖食品安全专项整治行动，强化平台责任' }
];

const userGrowthData = [
  { year: '2019', 美团用户: 4.5, 京东用户: 1.2, 闪购用户: 0.3, 总用户: 6.0 },
  { year: '2020', 美团用户: 5.1, 京东用户: 1.4, 闪购用户: 0.4, 总用户: 6.9 },
  { year: '2021', 美团用户: 5.8, 京东用户: 1.6, 闪购用户: 0.5, 总用户: 7.9 },
  { year: '2022', 美团用户: 6.2, 京东用户: 1.8, 闪购用户: 0.8, 总用户: 8.8 },
  { year: '2023', 美团用户: 6.8, 京东用户: 2.0, 闪购用户: 1.2, 总用户: 10.0 }
];

const merchantData = [
  { platform: '美团外卖', 商家数量: 820, 覆盖城市: 2800, 平均佣金: '18.5%', 商家满意度: 7.8 },
  { platform: '京东', 商家数量: 520, 覆盖城市: 1200, 平均佣金: '16.2%', 商家满意度: 8.1 },
  { platform: '闪购', 商家数量: 180, 覆盖城市: 450, 平均佣金: '14.8%', 商家满意度: 8.3 }
];

export default function MarketShareChart() {
  const [activeChart, setActiveChart] = useState('share');
  const [mounted, setMounted] = useState(false);
  const [hoveredButton, setHoveredButton] = useState(null);

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) {
    return (
      <section className="py-20 px-4 bg-white relative">
        <div className="max-w-7xl mx-auto relative">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-6 text-gray-800">市场份额争夺战</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              美团外卖继续领跑，但新入局者闪购正在快速崛起，外卖市场格局悄然变化
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
    <section data-section="market-share" className="py-20 px-4 bg-white relative overflow-hidden">
      {/*装饰性背景元素*/}
      <div className="absolute inset-0">
        <div className="absolute top-20 left-10 w-32 h-32 bg-gradient-to-r from-blue-100 to-purple-100 rounded-full opacity-20 animate-pulse"></div>
        <div className="absolute top-40 right-20 w-24 h-24 bg-gradient-to-r from-yellow-100 to-orange-100 rounded-full opacity-30 animate-bounce"></div>
        <div className="absolute bottom-20 left-20 w-40 h-40 bg-gradient-to-r from-red-100 to-pink-100 rounded-full opacity-20 animate-pulse"></div>
        <div className="absolute top-60 left-1/2 w-28 h-28 bg-gradient-to-r from-green-100 to-blue-100 rounded-full opacity-25 animate-pulse"></div>
      </div>

      <div className="max-w-7xl mx-auto relative">
        {/*顶部装饰线条*/}
        <div className="flex justify-center mb-8">
          <div className="w-24 h-1 bg-gradient-to-r from-blue-500 via-purple-500 to-red-500 rounded-full"></div>
        </div>

        <div className="text-center mb-16">
          <div className="flex items-center justify-center mb-4">
            <i className="ri-pie-chart-line text-4xl text-blue-600 mr-4"></i>
            <h2 className="text-4xl md:text-5xl font-bold text-gray-800">市场份额争夺战</h2>
            <i className="ri-bar-chart-line text-4xl text-red-600 ml-4"></i>
          </div>
          <div className="w-32 h-0.5 bg-gradient-to-r from-transparent via-gray-300 to-transparent mx-auto mb-6"></div>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto relative">
            美团外卖继续领跑，但新入局者闪购正在快速崛起，外卖市场格局悄然变化
            <span className="absolute -top-2 -right-2 text-yellow-500 text-sm">📊</span>
          </p>
        </div>

        {/*更醒目的切换按钮*/}
        <div className="flex justify-center mb-12">
          <div className="bg-gradient-to-r from-gray-100 via-white to-gray-100 rounded-2xl p-2 flex gap-1 shadow-2xl border-2 border-gray-200 overflow-x-auto">
            {[
              { key: 'share', icon: 'ri-pie-chart-fill', label: '市场份额', color: 'blue' },
              { key: 'trend', icon: 'ri-line-chart-fill', label: '发展趋势', color: 'green' },
              { key: 'users', icon: 'ri-user-3-fill', label: '用户增长', color: 'cyan' },
              { key: 'competitive', icon: 'ri-radar-line', label: '竞争力对比', color: 'purple' },
              { key: 'merchants', icon: 'ri-store-3-fill', label: '商家生态', color: 'yellow' },
              { key: 'revenue', icon: 'ri-money-dollar-circle-fill', label: '收入增长', color: 'orange' },
              { key: 'regulation', icon: 'ri-government-fill', label: '监管动态', color: 'red' }
            ].map((item) => (
              <button
                key={item.key}
                onClick={() => setActiveChart(item.key)}
                onMouseEnter={() => setHoveredButton(item.key)}
                onMouseLeave={() => setHoveredButton(null)}
                className={`px-4 py-3 rounded-xl font-bold transition-all duration-300 whitespace-nowrap relative overflow-hidden transform text-sm lg:text-base ${
                  activeChart === item.key
                    ? `bg-gradient-to-r from-${item.color}-500 to-${item.color}-600 text-white shadow-2xl scale-105 border-2 border-${item.color}-300`
                    : `text-gray-700 hover:bg-gradient-to-r hover:from-${item.color}-50 hover:to-${item.color}-100 hover:shadow-lg hover:scale-102 border-2 border-transparent hover:border-${item.color}-200`
                }`}
                style={{
                  backgroundColor: activeChart === item.key
                    ? (item.color === 'blue' ? '#3B82F6' : item.color === 'green' ? '#10B981' : item.color === 'cyan' ? '#06B6D4' : item.color === 'purple' ? '#8B5CF6' : item.color === 'yellow' ? '#EAB308' : item.color === 'orange' ? '#F59E0B' : '#EF4444')
                    : (hoveredButton === item.key
                      ? (item.color === 'blue' ? '#EFF6FF' : item.color === 'green' ? '#ECFDF5' : item.color === 'cyan' ? '#ECFEFF' : item.color === 'purple' ? '#F3E8FF' : item.color === 'yellow' ? '#FEFCE8' : item.color === 'orange' ? '#FFFBEB' : '#FEF2F2')
                      : 'transparent'),
                  borderColor: activeChart === item.key
                    ? (item.color === 'blue' ? '#DBEAFE' : item.color === 'green' ? '#D1FAE5' : item.color === 'cyan' ? '#CFFAFE' : item.color === 'purple' ? '#E9D5FF' : item.color === 'yellow' ? '#FEF3C7' : item.color === 'orange' ? '#FDE68A' : '#FECACA')
                    : (hoveredButton === item.key
                      ? (item.color === 'blue' ? '#BFDBFE' : item.color === 'green' ? '#A7F3D0' : item.color === 'cyan' ? '#A5F3FC' : item.color === 'purple' ? '#C4B5FD' : item.color === 'yellow' ? '#FDE047' : item.color === 'orange' ? '#FDE68A' : '#FCA5A5')
                      : 'transparent')
                }}
              >
                {activeChart === item.key && (
                  <div className="absolute inset-0 bg-white/20 animate-pulse rounded-xl"></div>
                )}
                <div className="relative flex items-center gap-2">
                  <i className={`${item.icon} text-lg`}></i>
                  <span className="font-bold">{item.label}</span>
                  {activeChart === item.key && (
                    <div className="w-2 h-2 bg-white rounded-full animate-ping"></div>
                  )}
                </div>
              </button>
            ))}
          </div>
        </div>

        {activeChart === 'share' && (
          <div className="grid lg:grid-cols-2 gap-12 items-center mb-16">
            <div className="bg-gradient-to-br from-blue-50 via-white to-purple-50 rounded-2xl p-8 shadow-xl border border-gray-100">
              <div className="flex items-center justify-center mb-6">
                <i className="ri-pie-chart-fill text-3xl text-blue-600 mr-3"></i>
                <h3 className="text-2xl font-bold text-center">2023年市场份额分布</h3>
              </div>
              <ResponsiveContainer width="100%" height={400}>
                <PieChart>
                  <Pie
                    data={marketData}
                    cx="50%"
                    cy="50%"
                    outerRadius={120}
                    dataKey="value"
                    label={({ name, value }) => `${name} ${value}%`}
                  >
                    {marketData.map((entry, index) => (
                      <Cell key={`cell-${index}`} fill={entry.color} />
                    ))}
                  </Pie>
                  <Tooltip />
                </PieChart>
              </ResponsiveContainer>
              <p className="text-center text-sm text-gray-500 mt-4">📈 数据来源：艾媒咨询《2024中国外卖市场研究报告》、比达咨询《在线外卖行业分析》</p>
            </div>

            <div className="bg-gradient-to-br from-yellow-50 via-white to-red-50 rounded-2xl p-8 shadow-xl border border-gray-100">
              <div className="flex items-center justify-center mb-6">
                <i className="ri-bar-chart-box-fill text-3xl text-orange-600 mr-3"></i>
                <h3 className="text-2xl font-bold text-center">五年市场变化趋势</h3>
              </div>
              <ResponsiveContainer width="100%" height={400}>
                <BarChart data={yearlyData}>
                  <CartesianGrid strokeDasharray="3 3" />
                  <XAxis dataKey="year" />
                  <YAxis />
                  <Tooltip />
                  <Legend />
                  <Bar dataKey="美团" stackId="a" fill="#FBD35B" />
                  <Bar dataKey="京东" stackId="a" fill="#F79D8E" />
                  <Bar dataKey="闪购" stackId="a" fill="#6bc3ff" />
                </BarChart>
              </ResponsiveContainer>
              <p className="text-center text-sm text-gray-500 mt-4">📊 数据来源：QuestMobile《中国移动互联网发展报告》、易观分析《外卖市场趋势报告》</p>
            </div>
          </div>
        )}

        {activeChart === 'users' && (
          <div className="mb-16">
            <div className="bg-gradient-to-br from-cyan-50 via-white to-blue-50 rounded-2xl p-8 shadow-xl border border-cyan-100">
              <div className="flex items-center justify-center mb-6">
                <i className="ri-user-3-fill text-3xl text-cyan-600 mr-3"></i>
                <h3 className="text-2xl font-bold text-center">用户增长趋势（亿人）</h3>
              </div>
              <ResponsiveContainer width="100%" height={500}>
                <LineChart data={userGrowthData}>
                  <CartesianGrid strokeDasharray="3 3" />
                  <XAxis dataKey="year" />
                  <YAxis />
                  <Tooltip formatter={(value, name) => [`${value}亿人`, name]} />
                  <Legend />
                  <Line type="monotone" dataKey="美团用户" stroke="#FBD35B" strokeWidth={4} dot={{ r: 8 }} />
                  <Line type="monotone" dataKey="京东用户" stroke="#F79D8E" strokeWidth={4} dot={{ r: 8 }} />
                  <Line type="monotone" dataKey="闪购用户" stroke="#6bc3ff" strokeWidth={4} dot={{ r: 8 }} />
                  <Line type="monotone" dataKey="总用户" stroke="#10B981" strokeWidth={4} dot={{ r: 8 }} strokeDasharray="5 5" />
                </LineChart>
              </ResponsiveContainer>
              <p className="text-center text-sm text-gray-500 mt-4">👥 数据来源：CNNIC《第53次中国互联网络发展状况统计报告》、各平台财报数据</p>
            </div>
          </div>
        )}

        {activeChart === 'merchants' && (
          <div className="mb-16">
            <div className="bg-gradient-to-br from-yellow-50 via-white to-orange-50 rounded-2xl p-8 shadow-xl border border-yellow-100">
              <div className="flex items-center justify-center mb-8">
                <i className="ri-store-3-fill text-3xl text-yellow-600 mr-3"></i>
                <h3 className="text-3xl font-bold text-center">商家生态对比</h3>
              </div>

              <div className="grid md:grid-cols-3 gap-8">
                {merchantData.map((platform, index) => (
                  <div key={index} className="bg-white rounded-2xl p-6 shadow-lg border border-gray-100 hover:shadow-xl transition-shadow text-center">
                    <div className="text-center mb-6">
                      <div className="flex items-center justify-center mb-4">
                        <i className={`${index === 0 ? 'ri-award-fill' : index === 1 ? 'ri-shield-fill' : 'ri-star-fill'} text-4xl mr-2`} style={{ color: index === 0 ? '#FBD35B' : index === 1 ? '#F79D8E' : '#6bc3ff' }}></i>
                      </div>
                      <h4 className="text-xl font-bold mb-4">{platform.platform}</h4>
                    </div>

                    <div className="space-y-4">
                      <div className="bg-gray-50 rounded-lg p-3">
                        <div className="flex justify-between items-center">
                          <span className="text-sm text-gray-600">商家数量</span>
                          <span className="font-bold text-lg">{platform.商家数量}万</span>
                        </div>
                      </div>

                      <div className="bg-gray-50 rounded-lg p-3">
                        <div className="flex justify-between items-center">
                          <span className="text-sm text-gray-600">覆盖城市</span>
                          <span className="font-bold text-lg">{platform.覆盖城市}个</span>
                        </div>
                      </div>

                      <div className="bg-gray-50 rounded-lg p-3">
                        <div className="flex justify-between items-center">
                          <span className="text-sm text-gray-600">平均佣金</span>
                          <span className="font-bold text-lg text-green-600">{platform.平均佣金}</span>
                        </div>
                      </div>

                      <div className="bg-gray-50 rounded-lg p-3">
                        <div className="flex justify-between items-center">
                          <span className="text-sm text-gray-600">商家满意度</span>
                          <span className="font-bold text-lg">{platform.商家满意度}/10</span>
                        </div>
                        <div className="mt-2 w-full bg-gray-200 rounded-full h-2">
                          <div
                            className="h-2 rounded-full transition-all duration-1000"
                            style={{
                              width: `${platform.商家满意度 * 10}%`,
                              backgroundColor: index === 0 ? '#FBD35B' : index === 1 ? '#F79D8E' : '#6bc3ff',
                            }}
                          ></div>
                        </div>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
              <p className="text-center text-sm text-gray-500 mt-6">🏪 数据来源：《中国外卖商家生态报告》- 中国连锁经营协会、各平台商家服务数据</p>
            </div>
          </div>
        )}

        {activeChart === 'trend' && (
          <div className="mb-16">
            <div className="bg-gradient-to-br from-indigo-50 via-white to-cyan-50 rounded-2xl p-8 shadow-xl border border-gray-100">
              <div className="flex items-center justify-center mb-6">
                <i className="ri-line-chart-fill text-3xl text-indigo-600 mr-3"></i>
                <h3 className="text-2xl font-bold text-center">市场份额变化趋势线</h3>
              </div>
              <ResponsiveContainer width="100%" height={500}>
                <LineChart data={yearlyData}>
                  <CartesianGrid strokeDasharray="3 3" />
                  <XAxis dataKey="year" />
                  <YAxis />
                  <Tooltip />
                  <Legend />
                  <Line type="monotone" dataKey="美团" stroke="#FBD35B" strokeWidth={3} dot={{ r: 6 }} />
                  <Line type="monotone" dataKey="京东" stroke="#F79D8E" strokeWidth={3} dot={{ r: 6 }} />
                  <Line type="monotone" dataKey="闪购" stroke="#6bc3ff" strokeWidth={3} dot={{ r: 6 }} />
                </LineChart>
              </ResponsiveContainer>
              <p className="text-center text-sm text-gray-500 mt-4">📈 数据来源：Trustdata《移动互联网行业发展分析报告》、中国互联网络信息中心统计</p>
            </div>
          </div>
        )}

        {activeChart === 'competitive' && (
          <div className="mb-16">
            <div className="bg-gradient-to-br from-emerald-50 via-white to-teal-50 rounded-2xl p-8 shadow-xl border border-gray-100">
              <div className="flex items-center justify-center mb-8">
                <i className="ri-bar-chart-box-fill text-3xl text-emerald-600 mr-3"></i>
                <h3 className="text-2xl font-bold text-center">平台竞争力综合对比</h3>
              </div>

              {/*综合评分对比*/}
              <div className="mb-8">
                <h4 className="text-lg font-bold text-center mb-6">综合竞争力评分</h4>
                <div className="grid md:grid-cols-3 gap-6">
                  {competitiveData.map((platform, index) => (
                    <div key={index} className="bg-white rounded-xl p-6 shadow-lg border border-gray-100 hover:shadow-xl transition-shadow text-center">
                      <div className="flex items-center justify-center mb-4">
                        <i className={`${index === 0 ? 'ri-award-fill' : index === 1 ? 'ri-shield-fill' : 'ri-rocket-fill'} text-4xl mr-2`} style={{ color: index === 0 ? '#FBD35B' : index === 1 ? '#F79D8E' : '#6bc3ff' }}></i>
                      </div>
                      <h4 className="text-xl font-bold mb-3">{platform.platform}</h4>
                      <div className="text-4xl font-bold mb-4" style={{ color: index === 0 ? '#FBD35B' : index === 1 ? '#F79D8E' : '#6bc3ff' }}>
                        {Math.round((platform.用户体验 + platform.配送速度 + platform.商家数量 + platform.价格优势 + platform.技术创新) / 5)}分
                      </div>
                      <div className="w-full bg-gray-200 rounded-full h-3 mb-4">
                        <div
                          className="h-3 rounded-full transition-all duration-1000"
                          style={{
                            width: `${Math.round((platform.用户体验 + platform.配送速度 + platform.商家数量 + platform.价格优势 + platform.技术创新) / 5)}%`,
                            backgroundColor: index === 0 ? '#FBD35B' : index === 1 ? '#F79D8E' : '#6bc3ff',
                          }}
                        ></div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              {/*详细指标对比*/}
              <div className="grid md:grid-cols-5 gap-4 mb-6">
                <div className="bg-white rounded-lg p-4 shadow-md text-center">
                  <h5 className="font-bold mb-4 text-blue-600">用户体验</h5>
                  <div className="space-y-3">
                    <div className="flex items-center justify-between">
                      <span className="text-sm">美团外卖</span>
                      <div className="flex items-center gap-2">
                        <div className="w-16 bg-gray-200 rounded-full h-2">
                          <div className="bg-yellow-400 h-2 rounded-full" style={{ width: '85%' }}></div>
                        </div>
                        <span className="text-sm font-bold">85</span>
                      </div>
                    </div>
                    <div className="flex items-center justify-between">
                      <span className="text-sm">京东</span>
                      <div className="flex items-center gap-2">
                        <div className="w-16 bg-gray-200 rounded-full h-2">
                          <div className="bg-red-300 h-2 rounded-full" style={{ width: '78%' }}></div>
                        </div>
                        <span className="text-sm font-bold">78</span>
                      </div>
                    </div>
                    <div className="flex items-center justify-between">
                      <span className="text-sm">闪购</span>
                      <div className="flex items-center gap-2">
                        <div className="w-16 bg-gray-200 rounded-full h-2">
                          <div style={{ backgroundColor: '#6bc3ff' }} className="h-2 rounded-full" style={{ width: '72%' }}></div>
                        </div>
                        <span className="text-sm font-bold">72</span>
                      </div>
                    </div>
                  </div>
                </div>

                <div className="bg-white rounded-lg p-4 shadow-md text-center">
                  <h5 className="font-bold mb-4 text-green-600">配送速度</h5>
                  <div className="space-y-3">
                    <div className="flex items-center justify-between">
                      <span className="text-sm">美团外卖</span>
                      <div className="flex items-center gap-2">
                        <div className="w-16 bg-gray-200 rounded-full h-2">
                          <div className="bg-yellow-400 h-2 rounded-full" style={{ width: '90%' }}></div>
                        </div>
                        <span className="text-sm font-bold">90</span>
                      </div>
                    </div>
                    <div className="flex items-center justify-between">
                      <span className="text-sm">京东</span>
                      <div className="flex items-center gap-2">
                        <div className="w-16 bg-gray-200 rounded-full h-2">
                          <div className="bg-red-300 h-2 rounded-full" style={{ width: '82%' }}></div>
                        </div>
                        <span className="text-sm font-bold">82</span>
                      </div>
                    </div>
                    <div className="flex items-center justify-between">
                      <span className="text-sm">闪购</span>
                      <div className="flex items-center gap-2">
                        <div className="w-16 bg-gray-200 rounded-full h-2">
                          <div style={{ backgroundColor: '#6bc3ff' }} className="h-2 rounded-full" style={{ width: '75%' }}></div>
                        </div>
                        <span className="text-sm font-bold">75</span>
                      </div>
                    </div>
                  </div>
                </div>

                <div className="bg-white rounded-lg p-4 shadow-md text-center">
                  <h5 className="font-bold mb-4 text-purple-600">商家数量</h5>
                  <div className="space-y-3">
                    <div className="flex items-center justify-between">
                      <span className="text-sm">美团外卖</span>
                      <div className="flex items-center gap-2">
                        <div className="w-16 bg-gray-200 rounded-full h-2">
                          <div className="bg-yellow-400 h-2 rounded-full" style={{ width: '95%' }}></div>
                        </div>
                        <span className="text-sm font-bold">95</span>
                      </div>
                    </div>
                    <div className="flex items-center justify-between">
                      <span className="text-sm">京东</span>
                      <div className="flex items-center gap-2">
                        <div className="w-16 bg-gray-200 rounded-full h-2">
                          <div className="bg-red-300 h-2 rounded-full" style={{ width: '85%' }}></div>
                        </div>
                        <span className="text-sm font-bold">85</span>
                      </div>
                    </div>
                    <div className="flex items-center justify-between">
                      <span className="text-sm">闪购</span>
                      <div className="flex items-center gap-2">
                        <div className="w-16 bg-gray-200 rounded-full h-2">
                          <div style={{ backgroundColor: '#6bc3ff' }} className="h-2 rounded-full" style={{ width: '60%' }}></div>
                        </div>
                        <span className="text-sm font-bold">60</span>
                      </div>
                    </div>
                  </div>
                </div>

                <div className="bg-white rounded-lg p-4 shadow-md text-center">
                  <h5 className="font-bold mb-4 text-orange-600">价格优势</h5>
                  <div className="space-y-3">
                    <div className="flex items-center justify-between">
                      <span className="text-sm">美团外卖</span>
                      <div className="flex items-center gap-2">
                        <div className="w-16 bg-gray-200 rounded-full h-2">
                          <div className="bg-yellow-400 h-2 rounded-full" style={{ width: '70%' }}></div>
                        </div>
                        <span className="text-sm font-bold">70</span>
                      </div>
                    </div>
                    <div className="flex items-center justify-between">
                      <span className="text-sm">京东</span>
                      <div className="flex items-center gap-2">
                        <div className="w-16 bg-gray-200 rounded-full h-2">
                          <div className="bg-red-300 h-2 rounded-full" style={{ width: '80%' }}></div>
                        </div>
                        <span className="text-sm font-bold">80</span>
                      </div>
                    </div>
                    <div className="flex items-center justify-between">
                      <span className="text-sm">闪购</span>
                      <div className="flex items-center gap-2">
                        <div className="w-16 bg-gray-200 rounded-full h-2">
                          <div style={{ backgroundColor: '#6bc3ff' }} className="h-2 rounded-full" style={{ width: '85%' }}></div>
                        </div>
                        <span className="text-sm font-bold">85</span>
                      </div>
                    </div>
                  </div>
                </div>

                <div className="bg-white rounded-lg p-4 shadow-md text-center">
                  <h5 className="font-bold mb-4 text-indigo-600">技术创新</h5>
                  <div className="space-y-3">
                    <div className="flex items-center justify-between">
                      <span className="text-sm">美团外卖</span>
                      <div className="flex items-center gap-2">
                        <div className="w-16 bg-gray-200 rounded-full h-2">
                          <div className="bg-yellow-400 h-2 rounded-full" style={{ width: '88%' }}></div>
                        </div>
                        <span className="text-sm font-bold">88</span>
                      </div>
                    </div>
                    <div className="flex items-center justify-between">
                      <span className="text-sm">京东</span>
                      <div className="flex items-center gap-2">
                        <div className="w-16 bg-gray-200 rounded-full h-2">
                          <div className="bg-red-300 h-2 rounded-full" style={{ width: '75%' }}></div>
                        </div>
                        <span className="text-sm font-bold">75</span>
                      </div>
                    </div>
                    <div className="flex items-center justify-between">
                      <span className="text-sm">闪购</span>
                      <div className="flex items-center gap-2">
                        <div className="w-16 bg-gray-200 rounded-full h-2">
                          <div style={{ backgroundColor: '#6bc3ff' }} className="h-2 rounded-full" style={{ width: '92%' }}></div>
                        </div>
                        <span className="text-sm font-bold">92</span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              <p className="text-center text-sm text-gray-500 mt-4">📊 数据来源：德勤《中国外卖行业数字化发展报告》、普华永道《外卖平台竞争力评估》、各平台公开数据</p>
            </div>
          </div>
        )}

        {activeChart === 'revenue' && (
          <div className="mb-16">
            <div className="bg-gradient-to-br from-rose-50 via-white to-orange-50 rounded-2xl p-8 shadow-xl border border-gray-100">
              <div className="flex items-center justify-center mb-6">
                <i className="ri-money-dollar-circle-fill text-3xl text-rose-600 mr-3"></i>
                <h3 className="text-2xl font-bold text-center">季度收入增长对比（亿元）</h3>
              </div>
              <ResponsiveContainer width="100%" height={500}>
                <LineChart data={revenueData}>
                  <CartesianGrid strokeDasharray="3 3" />
                  <XAxis dataKey="quarter" />
                  <YAxis />
                  <Tooltip formatter={(value) => [`${value}亿元`, '']} />
                  <Legend />
                  <Line type="monotone" dataKey="美团" stroke="#FBD35B" strokeWidth={4} dot={{ r: 8 }} />
                  <Line type="monotone" dataKey="京东" stroke="#F79D8E" strokeWidth={4} dot={{ r: 8 }} />
                  <Line type="monotone" dataKey="闪购" stroke="#6bc3ff" strokeWidth={4} dot={{ r: 8 }} />
                </LineChart>
              </ResponsiveContainer>
              <p className="text-center text-sm text-gray-500 mt-4">💰 数据来源：美团财报、京东财报、华兴资本《外卖行业研究报告》、国信证券行业分析</p>
            </div>
          </div>
        )}

        {activeChart === 'regulation' && (
          <div className="mb-16">
            <div className="bg-gradient-to-br from-red-50 via-white to-orange-50 rounded-2xl p-8 shadow-2xl border border-red-100">
              <div className="flex items-center justify-center mb-8">
                <i className="ri-government-fill text-4xl text-red-600 mr-3"></i>
                <h3 className="text-3xl font-bold text-center">政策监管与市场规范</h3>
              </div>

              {/*监管时间线*/}
              <div className="mb-8">
                <div className="relative">
                  <div className="absolute left-8 top-0 bottom-0 w-0.5 bg-gradient-to-b from-red-400 via-orange-400 to-red-400"></div>
                  <div className="space-y-8">
                    {regulationData.map((item, index) => (
                      <div key={index} className="relative flex items-start gap-6">
                        <div
                          className={`relative z-10 w-16 h-16 rounded-full flex items-center justify-center shadow-lg ${
                            item.impact === 'high' ? 'bg-gradient-to-r from-red-500 to-red-600' : 'bg-gradient-to-r from-orange-400 to-orange-500'
                          }`}
                        >
                          <i className="ri-government-line text-2xl text-white"></i>
                        </div>
                        <div className="flex-1 bg-white rounded-xl p-6 shadow-lg border border-gray-200 hover:shadow-xl transition-shadow">
                          <div className="flex items-center justify-between mb-3">
                            <h4 className="text-xl font-bold text-gray-800">{item.event}</h4>
                            <div className="flex items-center gap-2">
                              <span className="text-sm text-gray-500">{item.date}</span>
                              <div
                                className={`px-3 py-1 rounded-full text-xs font-bold ${
                                  item.impact === 'high' ? 'bg-red-100 text-red-700' : 'bg-orange-100 text-orange-700'
                                }`}
                              >
                                {item.impact === 'high' ? '高影响' : '中影响'}
                              </div>
                            </div>
                          </div>
                          <p className="text-gray-600 leading-relaxed">{item.description}</p>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              </div>

              {/*监管成效统计*/}
              <div className="grid md:grid-cols-4 gap-6 mb-6">
                <div className="bg-gradient-to-br from-green-50 to-green-100 rounded-xl p-6 text-center border border-green-200">
                  <i className="ri-shield-check-fill text-4xl text-green-600 mb-3"></i>
                  <div className="text-2xl font-bold text-green-700">98.5%</div>
                  <div className="text-sm text-gray-600">平台合规率</div>
                </div>
                <div className="bg-gradient-to-br from-blue-50 to-blue-100 rounded-xl p-6 text-center border border-blue-200">
                  <i className="ri-user-heart-fill text-4xl text-blue-600 mb-3"></i>
                  <div className="text-2xl font-bold text-blue-700">15%</div>
                  <div className="text-sm text-gray-600">骑手权益提升</div>
                </div>
                <div className="bg-gradient-to-br from-purple-50 to-purple-100 rounded-xl p-6 text-center border border-purple-200">
                  <i className="ri-price-tag-3-fill text-4xl text-purple-600 mb-3"></i>
                  <div className="text-2xl font-bold text-purple-700">8.2%</div>
                  <div className="text-sm text-gray-600">平均佣金下降</div>
                </div>
                <div className="bg-gradient-to-br from-orange-50 to-orange-100 rounded-xl p-6 text-center border border-orange-200">
                  <i className="ri-scales-3-fill text-4xl text-orange-600 mb-3"></i>
                  <div className="text-2xl font-bold text-orange-700">12个</div>
                  <div className="text-sm text-gray-600">出台政策法规</div>
                </div>
              </div>

              <p className="text-center text-sm text-gray-500">🏛️ 数据来源：市场监管总局政策文件、商务部公开信息、人社部劳动保护报告、国家发改委反垄断局通告</p>
            </div>
          </div>
        )}

        <div className="grid md:grid-cols-3 gap-8">
          <div className="bg-gradient-to-br from-yellow-100 to-orange-100 p-8 rounded-2xl shadow-xl border border-yellow-200 hover:shadow-2xl transition-shadow">
            <div className="flex items-center justify-between mb-4">
              <i className="ri-trophy-fill text-4xl" style={{ color: '#FBD35B' }}></i>
              <div className="text-right">
                <div className="text-xs text-yellow-600 bg-yellow-100 px-2 py-1 rounded-full">🥇 第一名</div>
              </div>
            </div>
            <h4 className="text-xl font-bold mb-2">美团外卖</h4>
            <p className="text-3xl font-bold mb-2" style={{ color: '#FBD35B' }}>68.2%</p>
            <p className="text-gray-600">继续保持行业领导地位，但优势略有收窄</p>
          </div>
          <div className="bg-gradient-to-br from-red-50 to-pink-50 p-8 rounded-2xl shadow-xl border border-red-200 hover:shadow-2xl transition-shadow">
            <div className="flex items-center justify-between mb-4">
              <i className="ri-shopping-bag-2-fill text-4xl" style={{ color: '#F79D8E' }}></i>
              <div className="text-right">
                <div className="text-xs text-red-600 bg-red-100 px-2 py-1 rounded-full">🥈 第二名</div>
              </div>
            </div>
            <h4 className="text-xl font-bold mb-2">京东</h4>
            <p className="text-3xl font-bold mb-2" style={{ color: '#F79D8E' }}>22.1%</p>
            <p className="text-gray-600">稳居第二，凭借京东物流优势发展</p>
          </div>
          <div className="bg-gradient-to-br from-blue-50 to-sky-50 p-8 rounded-2xl shadow-xl border border-blue-200 hover:shadow-2xl transition-shadow">
            <div className="flex items-center justify-between mb-4">
              <i className="ri-flashlight-fill text-4xl" style={{ color: '#6bc3ff' }}></i>
              <div className="text-right">
                <div className="text-xs text-blue-600 bg-blue-100 px-2 py-1 rounded-full">🚀 新星</div>
              </div>
            </div>
            <h4 className="text-xl font-bold mb-2">闪购</h4>
            <p className="text-3xl font-bold mb-2" style={{ color: '#6bc3ff' }}>9.7%</p>
            <p className="text-gray-600">快速增长的新兴平台，市场份额稳步提升</p>
          </div>
        </div>

        {/*底部装饰线条*/}
        <div className="flex justify-center mt-16">
          <div className="w-32 h-1 bg-gradient-to-r from-blue-500 via-purple-500 to-red-500 rounded-full opacity-50"></div>
        </div>
      </div>
    </section>
  );
}