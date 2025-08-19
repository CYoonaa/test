
'use client';

import { useState } from 'react';
import { PieChart, Pie, Cell, ResponsiveContainer, BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, Legend, LineChart, Line, RadarChart, PolarGrid, PolarAngleAxis, PolarRadiusAxis, Radar } from 'recharts';

const platformStatements = [
  {
    platform: '美团外卖',
    date: '2025年8月1日',
    title: '关于推进行业良性竞争的倡议',
    content: '美团外卖承诺将严格遵守市场竞争秩序，抵制恶意低价竞争，保障商家和消费者权益，推动外卖行业健康可持续发展。',
    keyPoints: [
      '严格遵守反垄断法律法规',
      '保障商家合理利润空间',
      '提升服务质量而非恶性竞争',
      '加强食品安全监管'
    ],
    icon: 'ri-trophy-fill',
    color: '#FBD35B',
    commitment: '推动行业规范化发展'
  },
  {
    platform: '京东',
    date: '2025年8月1日',
    title: '京东外卖良性竞争承诺书',
    content: '京东外卖将以用户体验为核心，通过技术创新和服务提升参与市场竞争，坚决抵制不正当竞争行为，维护市场公平秩序。',
    keyPoints: [
      '坚持技术驱动发展模式',
      '维护商家合法权益',
      '提供优质配送服务',
      '建立透明收费标准'
    ],
    icon: 'ri-shield-star-fill',
    color: '#F79D8E',
    commitment: '以品质服务赢得市场'
  },
  {
    platform: '闪购',
    date: '2025年8月1日',
    title: '闪购平台规范经营声明',
    content: '闪购平台将严格按照监管要求规范经营，通过提升效率和创新服务模式参与竞争，共同营造健康有序的市场环境。',
    keyPoints: [
      '创新配送服务模式',
      '合规透明运营',
      '保护消费者权益',
      '支持中小商家发展'
    ],
    icon: 'ri-flashlight-fill',
    color: '#6bc3ff',
    commitment: '创新驱动可持续发展'
  }
];

const harmonyIndicators = [
  { indicator: '市场公平度', 美团: 85, 京东: 88, 闪购: 82 },
  { indicator: '商家满意度', 美团: 78, 京东: 81, 闪购: 83 },
  { indicator: '服务质量', 美团: 90, 京东: 85, 闪购: 75 },
  { indicator: '价格透明度', 美团: 72, 京东: 85, 闪购: 88 },
  { indicator: '合规程度', 美团: 92, 京东: 90, 闪购: 86 },
  { indicator: '创新能力', 美团: 88, 京东: 75, 闪购: 92 }
];

const cooperationAreas = [
  {
    area: '食品安全标准',
    description: '建立统一的食品安全监管标准，保障消费者权益',
    progress: 85,
    participants: ['美团', '京东', '闪购', '监管部门'],
    icon: 'ri-restaurant-2-fill',
    color: 'green'
  },
  {
    area: '骑手权益保护',
    description: '共同制定骑手劳动保障标准，提升从业人员待遇',
    progress: 78,
    participants: ['各大平台', '人社部', '工会组织'],
    icon: 'ri-user-heart-fill',
    color: 'blue'
  },
  {
    area: '数据安全合规',
    description: '建立数据保护和隐私安全的行业标准',
    progress: 92,
    participants: ['平台企业', '网信办', '工信部'],
    icon: 'ri-shield-keyhole-fill',
    color: 'purple'
  },
  {
    area: '公平竞争环境',
    description: '维护市场公平竞争，抵制恶意低价和垄断行为',
    progress: 80,
    participants: ['市场监管总局', '各平台', '商家协会'],
    icon: 'ri-scales-3-fill',
    color: 'orange'
  }
];

const timelineData = [
  {
    date: '2025年5月13日',
    event: '五部门联合约谈',
    impact: '监管政策',
    description: '市场监管总局等五部门约谈各大外卖平台，要求规范竞争行为',
    type: 'regulation'
  },
  {
    date: '2025年6月15日',
    event: '反垄断合规指引发布',
    impact: '政策指导',
    description: '《外卖平台反垄断合规指引》正式发布，明确行业红线',
    type: 'policy'
  },
  {
    date: '2025年7月20日',
    event: '骑手权益保护新规',
    impact: '权益保障',
    description: '人社部发布外卖骑手劳动权益保护新规定',
    type: 'protection'
  },
  {
    date: '2025年8月1日',
    event: '三平台联合声明',
    impact: '行业自律',
    description: '美团、京东、闪购共同发布良性竞争倡议书',
    type: 'cooperation'
  }
];

const futureVision = [
  {
    vision: '技术驱动创新',
    description: '以人工智能、大数据等技术提升服务效率和用户体验',
    target: '2026年',
    metrics: ['配送效率提升30%', 'AI覆盖率达90%', '用户满意度4.8+'],
    icon: 'ri-brain-fill'
  },
  {
    vision: '绿色环保配送',
    description: '推广电动车、无人配送等环保配送方式，减少碳排放',
    target: '2027年',
    metrics: ['电动车比例80%', '碳排放减少50%', '绿色包装90%'],
    icon: 'ri-leaf-fill'
  },
  {
    vision: '数字化治理',
    description: '建立透明、公平的数字化市场治理体系',
    target: '2028年',
    metrics: ['合规指数95+', '透明度指数90+', '争议处理效率95%'],
    icon: 'ri-government-fill'
  },
  {
    vision: '共享生态圈',
    description: '构建多方共赢的生态系统，实现可持续发展',
    target: '2030年',
    metrics: ['生态伙伴1000+', '中小商家增长200%', '就业岗位500万+'],
    icon: 'ri-community-fill'
  }
];

export default function MarketHarmony() {
  const [selectedStatement, setSelectedStatement] = useState(0);
  const [activeVision, setActiveVision] = useState(0);

  return (
    <section id="market-harmony" data-section="market-harmony" className="py-20 px-4 bg-gradient-to-b from-green-50 via-white to-blue-50 relative overflow-hidden">
      {/* 装饰性背景元素 */}
      <div className="absolute inset-0">
        <div className="absolute top-20 left-16 w-32 h-32 bg-gradient-to-r from-green-200 to-blue-200 rounded-full opacity-20 animate-pulse"></div>
        <div className="absolute top-60 right-20 w-24 h-24 bg-gradient-to-r from-blue-200 to-purple-200 rounded-full opacity-30 animate-bounce"></div>
        <div className="absolute bottom-32 left-32 w-40 h-40 bg-gradient-to-r from-teal-200 to-green-200 rounded-full opacity-25 animate-pulse"></div>
      </div>

      <div className="max-w-7xl mx-auto relative">
        {/* 顶部装饰线条 */}
        <div className="flex justify-center mb-8">
          <div className="w-32 h-1 bg-gradient-to-r from-green-500 via-blue-500 to-purple-500 rounded-full"></div>
        </div>

        <div className="text-center mb-16">
          <div className="flex items-center justify-center mb-4">
            <i className="ri-handshake-line text-4xl text-green-600 mr-4"></i>
            <h2 className="text-4xl md:text-5xl font-bold text-gray-800">共建和谐市场环境</h2>
            <i className="ri-community-line text-4xl text-blue-600 ml-4"></i>
          </div>
          <div className="w-24 h-0.5 bg-gradient-to-r from-transparent via-green-500 to-transparent mx-auto mb-6"></div>
          <p className="text-xl text-gray-600 max-w-4xl mx-auto leading-relaxed">
            在监管引导下，各大平台积极响应，共同承诺建设公平、透明、可持续的市场环境，
            推动外卖行业从无序竞争向良性发展转变，实现多方共赢的和谐生态。
          </p>
        </div>

        {/* 平台声明展示 */}
        <div className="mb-16">
          <div className="bg-gradient-to-br from-white via-gray-50 to-white rounded-2xl p-8 shadow-2xl border border-gray-200">
            <div className="flex items-center justify-center mb-8">
              <i className="ri-file-text-fill text-3xl text-blue-600 mr-3"></i>
              <h3 className="text-3xl font-bold text-gray-800">三大平台联合声明</h3>
            </div>

            {/* 平台选择器 */}
            <div className="flex justify-center mb-8">
              <div className="bg-gradient-to-r from-gray-100 via-white to-gray-100 rounded-2xl p-3 flex gap-2 shadow-inner border border-gray-200">
                {platformStatements.map((statement, index) => (
                  <button
                    key={index}
                    onClick={() => setSelectedStatement(index)}
                    className={`px-6 py-4 rounded-xl font-bold transition-all duration-300 whitespace-nowrap relative overflow-hidden transform ${
                      selectedStatement === index
                        ? 'text-white shadow-2xl scale-110 border-2'
                        : 'text-gray-700 hover:shadow-lg hover:scale-105 border-2 border-transparent'
                    }`}
                    style={{
                      backgroundColor: selectedStatement === index ? statement.color : 'transparent',
                      borderColor: selectedStatement === index ? '#ffffff80' : 'transparent'
                    }}
                  >
                    {selectedStatement === index && (
                      <div className="absolute inset-0 bg-white/20 animate-pulse rounded-xl"></div>
                    )}
                    <div className="relative flex items-center gap-3">
                      <i className={`${statement.icon} text-xl`}></i>
                      <span>{statement.platform}</span>
                      {selectedStatement === index && (
                        <div className="w-2 h-2 bg-white rounded-full animate-ping"></div>
                      )}
                    </div>
                  </button>
                ))}
              </div>
            </div>

            {/* 当前选中声明详情 */}
            <div className="bg-gradient-to-br from-white via-blue-50 to-white rounded-2xl p-8 shadow-xl border border-blue-100">
              <div className="flex items-center gap-6 mb-6">
                <div
                  className="w-20 h-20 rounded-full flex items-center justify-center shadow-2xl border-4 border-white"
                  style={{ backgroundColor: platformStatements[selectedStatement].color }}
                >
                  <i className={`${platformStatements[selectedStatement].icon} text-3xl text-white`}></i>
                </div>
                <div className="flex-1">
                  <div className="flex items-center gap-3 mb-3">
                    <span className="px-4 py-2 rounded-full text-sm font-bold bg-blue-100 text-blue-700 border-2 border-blue-300">
                      📅 {platformStatements[selectedStatement].date}
                    </span>
                  </div>
                  <h4 className="text-2xl font-bold text-gray-800 mb-3">
                    {platformStatements[selectedStatement].title}
                  </h4>
                </div>
              </div>

              <div className="grid lg:grid-cols-2 gap-8">
                <div>
                  <div className="bg-gradient-to-r from-blue-50 via-white to-blue-50 rounded-xl p-6 border border-blue-200 mb-6">
                    <h5 className="font-bold mb-4 flex items-center text-gray-800">
                      <i className="ri-file-list-3-fill text-blue-600 mr-2"></i>
                      声明内容
                    </h5>
                    <p className="text-gray-700 leading-relaxed">
                      {platformStatements[selectedStatement].content}
                    </p>
                  </div>
                  <div className="bg-gradient-to-r from-green-50 via-white to-green-50 rounded-xl p-6 border border-green-200">
                    <h5 className="font-bold mb-4 flex items-center text-gray-800">
                      <i className="ri-target-fill text-green-600 mr-2"></i>
                      核心承诺
                    </h5>
                    <p className="text-green-700 font-medium">{platformStatements[selectedStatement].commitment}</p>
                  </div>
                </div>
                <div>
                  <div className="bg-gradient-to-r from-orange-50 via-white to-orange-50 rounded-xl p-6 border border-orange-200">
                    <h5 className="font-bold mb-4 flex items-center text-gray-800">
                      <i className="ri-checkbox-multiple-fill text-orange-600 mr-2"></i>
                      关键举措
                    </h5>
                    <div className="space-y-3">
                      {platformStatements[selectedStatement].keyPoints.map((point, i) => (
                        <div key={i} className="flex items-center gap-3 bg-white p-3 rounded-lg border border-orange-200 hover:shadow-md transition-shadow">
                          <i className="ri-check-double-line text-green-500 text-lg"></i>
                          <span className="text-gray-700">{point}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <p className="text-center text-sm text-gray-500 mt-6">📝 数据来源：各平台官方声明、监管部门公开信息</p>
          </div>
        </div>

        {/* 和谐指标雷达图 */}
        <div className="mb-16">
          <div className="bg-gradient-to-br from-purple-50 via-white to-indigo-50 rounded-2xl p-8 shadow-2xl border border-purple-100">
            <div className="flex items-center justify-center mb-8">
              <i className="ri-radar-fill text-4xl text-purple-600 mr-3"></i>
              <h3 className="text-3xl font-bold text-gray-800">市场和谐度评估</h3>
            </div>

            <div className="grid lg:grid-cols-2 gap-8">
              <div className="bg-white rounded-xl p-6 shadow-lg">
                <h4 className="text-xl font-bold mb-6 text-center flex items-center justify-center">
                  <i className="ri-compass-3-fill text-blue-600 mr-2"></i>
                  平台和谐指标雷达图
                </h4>
                <ResponsiveContainer width="100%" height={400}>
                  <RadarChart data={harmonyIndicators}>
                    <PolarGrid />
                    <PolarAngleAxis dataKey="indicator" />
                    <PolarRadiusAxis domain={[0, 100]} />
                    <Radar name="美团" dataKey="美团" stroke="#FBD35B" fill="#FBD35B" fillOpacity={0.3} strokeWidth={2} />
                    <Radar name="京东" dataKey="京东" stroke="#F79D8E" fill="#F79D8E" fillOpacity={0.3} strokeWidth={2} />
                    <Radar name="闪购" dataKey="闪购" stroke="#6bc3ff" fill="#6bc3ff" fillOpacity={0.3} strokeWidth={2} />
                    <Legend />
                  </RadarChart>
                </ResponsiveContainer>
              </div>

              <div className="space-y-4">
                <h4 className="text-xl font-bold mb-6 flex items-center">
                  <i className="ri-bar-chart-grouped-fill text-green-600 mr-2"></i>
                  各项指标详细评分
                </h4>
                {harmonyIndicators.map((item, index) => (
                  <div key={index} className="bg-white rounded-lg p-4 shadow-md border border-gray-200">
                    <div className="flex justify-between items-center mb-3">
                      <span className="font-medium text-gray-800">{item.indicator}</span>
                      <div className="flex gap-2 text-sm">
                        <span className="px-2 py-1 bg-yellow-100 text-yellow-700 rounded">美团: {item.美团}</span>
                        <span className="px-2 py-1 bg-red-100 text-red-700 rounded">京东: {item.京东}</span>
                        <span className="px-2 py-1 bg-blue-100 text-blue-700 rounded">闪购: {item.闪购}</span>
                      </div>
                    </div>
                    <div className="grid grid-cols-3 gap-2">
                      <div className="bg-gray-200 rounded-full h-2">
                        <div className="bg-yellow-400 h-2 rounded-full transition-all duration-1000" style={{ width: `${item.美团}%` }}></div>
                      </div>
                      <div className="bg-gray-200 rounded-full h-2">
                        <div className="bg-red-400 h-2 rounded-full transition-all duration-1000" style={{ width: `${item.京东}%` }}></div>
                      </div>
                      <div className="bg-gray-200 rounded-full h-2">
                        <div className="bg-blue-400 h-2 rounded-full transition-all duration-1000" style={{ width: `${item.闪购}%` }}></div>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
            <p className="text-center text-sm text-gray-500 mt-6">📊 数据来源：第三方评估机构、用户满意度调研、监管部门评估</p>
          </div>
        </div>

        {/* 合作共建领域 */}
        <div className="mb-16">
          <div className="bg-gradient-to-br from-cyan-50 via-white to-teal-50 rounded-2xl p-8 shadow-2xl border border-cyan-100">
            <div className="flex items-center justify-center mb-8">
              <i className="ri-team-fill text-4xl text-cyan-600 mr-3"></i>
              <h3 className="text-3xl font-bold text-gray-800">多方合作共建领域</h3>
            </div>

            <div className="grid md:grid-cols-2 gap-8">
              {cooperationAreas.map((area, index) => (
                <div key={index} className="bg-white rounded-2xl p-6 shadow-xl border border-gray-200 hover:shadow-2xl transition-all hover:scale-102">
                  <div className="flex items-center gap-4 mb-6">
                    <div className={`w-16 h-16 rounded-full flex items-center justify-center bg-gradient-to-r shadow-lg ${area.color === 'green' ? 'from-green-400 to-green-600' : area.color === 'blue' ? 'from-blue-400 to-blue-600' : area.color === 'purple' ? 'from-purple-400 to-purple-600' : 'from-orange-400 to-orange-600'}`}>
                      <i className={`${area.icon} text-2xl text-white`}></i>
                    </div>
                    <div className="flex-1">
                      <h4 className="text-xl font-bold text-gray-800 mb-2">{area.area}</h4>
                      <div className="flex items-center gap-2 mt-2">
                        <span className="text-sm text-gray-600">进度:</span>
                        <div className="flex-1 bg-gray-200 rounded-full h-2">
                          <div
                            className={`h-2 rounded-full transition-all duration-1000 bg-gradient-to-r ${area.color === 'green' ? 'from-green-400 to-green-500' : area.color === 'blue' ? 'from-blue-400 to-blue-500' : area.color === 'purple' ? 'from-purple-400 to-purple-500' : 'from-orange-400 to-orange-500'}`}
                            style={{ width: `${area.progress}%` }}
                          ></div>
                        </div>
                        <span className="font-bold text-sm">{area.progress}%</span>
                      </div>
                    </div>
                  </div>

                  <p className="text-gray-700 mb-4 leading-relaxed">{area.description}</p>

                  <div className="bg-gray-50 rounded-lg p-4 border border-gray-200">
                    <div className="flex items-center mb-3">
                      <i className="ri-group-fill text-blue-600 mr-2"></i>
                      <span className="font-medium text-gray-800">参与方:</span>
                    </div>
                    <div className="flex flex-wrap gap-2">
                      {area.participants.map((participant, i) => (
                        <span key={i} className={`px-3 py-1 rounded-full text-xs font-medium border ${area.color === 'green' ? 'bg-green-100 text-green-700 border-green-300' : area.color === 'blue' ? 'bg-blue-100 text-blue-700 border-blue-300' : area.color === 'purple' ? 'bg-purple-100 text-purple-700 border-purple-300' : 'bg-orange-100 text-orange-700 border-orange-300'}`}>
                          {participant}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
              ))}
            </div>
            <p className="text-center text-sm text-gray-500 mt-6">🤝 数据来源：行业合作协议、政府工作报告、企业社会责任报告</p>
          </div>
        </div>

        {/* 监管与合作时间线 */}
        <div className="mb-16">
          <div className="bg-gradient-to-br from-indigo-50 via-white to-purple-50 rounded-2xl p-8 shadow-2xl border border-indigo-100">
            <div className="flex items-center justify-center mb-8">
              <i className="ri-timeline-view text-4xl text-indigo-600 mr-3"></i>
              <h3 className="text-3xl font-bold text-gray-800">监管引导与行业自律时间线</h3>
            </div>

            <div className="relative">
              <div className="absolute left-8 top-0 bottom-0 w-1 bg-gradient-to-b from-indigo-400 via-purple-400 to-indigo-400 rounded-full"></div>
              <div className="space-y-8">
                {timelineData.map((item, index) => (
                  <div key={index} className="relative flex items-start gap-6">
                    <div
                      className={`relative z-10 w-16 h-16 rounded-full flex items-center justify-center shadow-xl border-4 border-white ${item.type === 'regulation' ? 'bg-gradient-to-r from-red-500 to-red-600' : item.type === 'policy' ? 'bg-gradient-to-r from-blue-500 to-blue-600' : item.type === 'protection' ? 'bg-gradient-to-r from-green-500 to-green-600' : 'bg-gradient-to-r from-purple-500 to-purple-600'}`}
                    >
                      <i className={`${item.type === 'regulation' ? 'ri-government-fill' : item.type === 'policy' ? 'ri-book-open-fill' : item.type === 'protection' ? 'ri-shield-user-fill' : 'ri-handshake-fill'} text-2xl text-white`}></i>
                    </div>
                    <div className="flex-1 bg-white rounded-xl p-6 shadow-lg border border-gray-200 hover:shadow-xl transition-shadow">
                      <div className="flex items-center justify-between mb-3">
                        <h4 className="text-xl font-bold text-gray-800">{item.event}</h4>
                        <div className="flex items-center gap-2">
                          <span className="text-sm text-gray-500">{item.date}</span>
                          <div
                            className={`px-3 py-1 rounded-full text-xs font-bold ${item.type === 'regulation' ? 'bg-red-100 text-red-700' : item.type === 'policy' ? 'bg-blue-100 text-blue-700' : item.type === 'protection' ? 'bg-green-100 text-green-700' : 'bg-purple-100 text-purple-700'}`}
                          >
                            {item.impact}
                          </div>
                        </div>
                      </div>
                      <p className="text-gray-700 leading-relaxed">{item.description}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
            <p className="text-center text-sm text-gray-500 mt-6">📅 数据来源：政府部门公告、平台官方声明、新闻媒体报道</p>
          </div>
        </div>

        {/* 未来愿景 */}
        <div>
          <div className="bg-gradient-to-br from-rose-50 via-white to-pink-50 rounded-2xl p-8 shadow-2xl border border-rose-100">
            <div className="flex items-center justify-center mb-8">
              <i className="ri-rocket-2-fill text-4xl text-rose-600 mr-3"></i>
              <h3 className="text-3xl font-bold text-gray-800">共同愿景：可持续发展之路</h3>
            </div>

            {/* 愿景选择器 */}
            <div className="flex justify-center mb-8 overflow-x-auto">
              <div className="flex gap-2 bg-gradient-to-r from-white via-gray-50 to-white rounded-2xl p-3 shadow-inner border border-gray-200 min-w-max">
                {futureVision.map((vision, index) => (
                  <button
                    key={index}
                    onClick={() => setActiveVision(index)}
                    className={`px-4 py-3 rounded-xl font-medium transition-all duration-300 whitespace-nowrap relative overflow-hidden transform text-sm ${
                      activeVision === index
                        ? 'bg-gradient-to-r from-rose-500 to-pink-600 text-white shadow-2xl scale-110 border-2 border-rose-300'
                        : 'text-gray-700 hover:bg-gradient-to-r hover:from-rose-50 hover:to-pink-50 hover:shadow-lg hover:scale-105 border-2 border-transparent hover:border-rose-200'
                    }`}
                  >
                    {activeVision === index && (
                      <div className="absolute inset-0 bg-white/20 animate-pulse rounded-xl"></div>
                    )}
                    <div className="relative flex items-center gap-2">
                      <i className={`${vision.icon} text-lg`}></i>
                      <span>{vision.vision}</span>
                      {activeVision === index && (
                        <div className="w-2 h-2 bg-white rounded-full animate-ping"></div>
                      )}
                    </div>
                  </button>
                ))}
              </div>
            </div>

            {/* 当前愿景详情 */}
            <div className="bg-gradient-to-br from-white via-rose-50 to-white rounded-2xl p-8 shadow-xl border border-rose-100">
              <div className="grid lg:grid-cols-2 gap-8">
                <div>
                  <div className="flex items-center gap-4 mb-6">
                    <div className="w-16 h-16 rounded-full bg-gradient-to-r from-rose-400 to-pink-600 flex items-center justify-center shadow-lg">
                      <i className={`${futureVision[activeVision].icon} text-2xl text-white`}></i>
                    </div>
                    <div>
                      <h4 className="text-2xl font-bold text-gray-800">{futureVision[activeVision].vision}</h4>
                      <div className="flex items-center gap-2 mt-2">
                        <i className="ri-calendar-fill text-rose-600"></i>
                        <span className="text-rose-600 font-medium">目标时间: {futureVision[activeVision].target}</span>
                      </div>
                    </div>
                  </div>
                  <div className="bg-gradient-to-r from-rose-50 via-white to-pink-50 rounded-xl p-6 border border-rose-200">
                    <p className="text-gray-700 leading-relaxed">{futureVision[activeVision].description}</p>
                  </div>
                </div>
                <div>
                  <h5 className="font-bold mb-4 flex items-center text-gray-800">
                    <i className="ri-target-fill text-rose-600 mr-2"></i>
                    核心指标
                  </h5>
                  <div className="space-y-4">
                    {futureVision[activeVision].metrics.map((metric, i) => (
                      <div key={i} className="bg-white rounded-lg p-4 shadow-md border border-gray-200 hover:shadow-lg transition-shadow">
                        <div className="flex items-center gap-3">
                          <i className="ri-checkbox-circle-fill text-green-500 text-xl"></i>
                          <span className="text-gray-700 font-medium">{metric}</span>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>
            <p className="text-center text-sm text-gray-500 mt-6">🚀 数据来源：行业发展规划、企业战略目标、政策导向文件</p>
          </div>
        </div>

        {/* 结语 */}
        <div className="mt-16 bg-gradient-to-br from-gray-50 via-white to-gray-50 rounded-2xl p-8 shadow-xl border border-gray-200">
          <div className="text-center">
            <div className="flex items-center justify-center mb-6">
              <i className="ri-heart-3-fill text-4xl text-red-500 mr-3"></i>
              <h3 className="text-2xl font-bold text-gray-800">携手共进，共创美好</h3>
              <i className="ri-planet-fill text-4xl text-green-500 ml-3"></i>
            </div>
            <p className="text-lg text-gray-700 max-w-4xl mx-auto leading-relaxed mb-8">
              外卖行业的发展需要监管部门的有效引导、平台企业的自觉担当、商家伙伴的积极参与和消费者的理性支持。
              只有在公平竞争、合规经营、创新发展的基础上，外卖行业才能真正实现可持续发展，
              为社会创造更大价值，为人民生活带来更多便利。
            </p>

            <div className="grid md:grid-cols-4 gap-6">
              <div className="bg-gradient-to-br from-blue-50 to-blue-100 rounded-xl p-6 text-center border border-blue-200">
                <i className="ri-government-fill text-3xl text-blue-600 mb-3"></i>
                <div className="font-bold text-blue-800">监管引导</div>
                <div className="text-sm text-blue-600 mt-2">科学规范 有序发展</div>
              </div>
              <div className="bg-gradient-to-br from-green-50 to-green-100 rounded-xl p-6 text-center border border-green-200">
                <i className="ri-building-2-fill text-3xl text-green-600 mb-3"></i>
                <div className="font-bold text-green-800">企业担当</div>
                <div className="text-sm text-green-600 mt-2">诚信经营 创新服务</div>
              </div>
              <div className="bg-gradient-to-br from-purple-50 to-purple-100 rounded-xl p-6 text-center border border-purple-200">
                <i className="ri-store-3-fill text-3xl text-purple-600 mb-3"></i>
                <div className="font-bold text-purple-800">商家参与</div>
                <div className="text-sm text-purple-600 mt-2">品质保障 共同成长</div>
              </div>
              <div className="bg-gradient-to-br from-orange-50 to-orange-100 rounded-xl p-6 text-center border border-orange-200">
                <i className="ri-user-heart-fill text-3xl text-orange-600 mb-3"></i>
                <div className="font-bold text-orange-800">消费者支持</div>
                <div className="text-sm text-orange-600 mt-2">理性消费 监督促进</div>
              </div>
            </div>
          </div>
        </div>

        {/* 底部装饰线条 */}
        <div className="flex justify-center mt-16">
          <div className="w-32 h-1 bg-gradient-to-r from-green-500 via-blue-500 to-purple-500 rounded-full opacity-60"></div>
        </div>
      </div>
    </section>
  );
}
