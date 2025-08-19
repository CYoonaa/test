'use client';

import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer, PieChart, Pie, Cell } from 'recharts';

const ageData = [
  { age: '18-25岁', 美团: 35, 京东: 32, 闪购: 28 },
  { age: '26-35岁', 美团: 42, 京东: 38, 闪购: 35 },
  { age: '36-45岁', 美团: 18, 京东: 22, 闪购: 25 },
  { age: '46岁以上', 美团: 5, 京东: 8, 闪购: 12 }
];

const cityData = [
  { name: '一线城市', value: 45, color: '#FF6B6B' },
  { name: '新一线城市', value: 32, color: '#4ECDC4' },
  { name: '二线城市', value: 18, color: '#45B7D1' },
  { name: '三线及以下', value: 5, color: '#96CEB4' }
];

const orderFrequency = [
  { frequency: '每天', percentage: 22 },
  { frequency: '每周2-3次', percentage: 35 },
  { frequency: '每周1次', percentage: 28 },
  { frequency: '每月几次', percentage: 15 }
];

const preferences = [
  { category: '中式快餐', popularity: 85, growth: 5 },
  { category: '西式快餐', popularity: 72, growth: -2 },
  { category: '火锅烧烤', popularity: 68, growth: 12 },
  { category: '奶茶饮品', popularity: 78, growth: 18 },
  { category: '日韩料理', popularity: 45, growth: 8 },
  { category: '甜品蛋糕', popularity: 38, growth: 15 }
];

export default function UserBehavior() {
  return (
    <section className="py-20 px-4 bg-white relative overflow-hidden">
      {/* 装饰性背景元素 */}
      <div className="absolute inset-0">
        <div className="absolute top-24 left-16 w-20 h-20 bg-gradient-to-r from-pink-200 to-purple-200 rounded-full opacity-30 animate-pulse"></div>
        <div className="absolute top-60 right-20 w-16 h-16 bg-gradient-to-r from-blue-200 to-cyan-200 rounded-full opacity-40 animate-bounce"></div>
        <div className="absolute bottom-32 left-32 w-24 h-24 bg-gradient-to-r from-orange-200 to-yellow-200 rounded-full opacity-25 animate-pulse"></div>
        <div className="absolute top-80 right-40 w-18 h-18 bg-gradient-to-r from-green-200 to-teal-200 rounded-full opacity-35 animate-pulse"></div>
      </div>

      <div className="max-w-7xl mx-auto relative">
        {/* 顶部装饰线条 */}
        <div className="flex justify-center mb-8">
          <div className="w-32 h-1 bg-gradient-to-r from-pink-500 via-purple-500 to-blue-500 rounded-full"></div>
        </div>

        <div className="text-center mb-16">
          <div className="flex items-center justify-center mb-4">
            <i className="ri-user-heart-line text-4xl text-purple-600 mr-4"></i>
            <h2 className="text-4xl md:text-5xl font-bold text-gray-800">用户画像解析</h2>
            <i className="ri-group-line text-4xl text-pink-600 ml-4"></i>
          </div>
          <div className="w-24 h-0.5 bg-gradient-to-r from-transparent via-purple-400 to-transparent mx-auto mb-6"></div>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto relative">
            深入了解外卖用户的消费习惯、偏好变化和行为特征
            <span className="absolute -top-2 -right-2 text-purple-500 text-lg">👥</span>
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 mb-16">
          <div className="bg-gradient-to-br from-blue-50 via-white to-purple-50 rounded-2xl p-8 shadow-2xl border border-blue-100">
            <div className="flex items-center justify-center mb-6">
              <i className="ri-team-fill text-3xl text-blue-600 mr-3"></i>
              <h3 className="text-2xl font-bold">年龄分布对比</h3>
            </div>
            <ResponsiveContainer width="100%" height={400}>
              <BarChart data={ageData}>
                <CartesianGrid strokeDasharray="3 3" />
                <XAxis dataKey="age" />
                <YAxis />
                <Tooltip formatter={(value) => `${value}%`} />
                <Bar dataKey="美团" fill="#FBD35B" />
                <Bar dataKey="京东" fill="#F79D8E" />
                <Bar dataKey="闪购" fill="#6bc3ff" />
              </BarChart>
            </ResponsiveContainer>
            <div className="mt-4 flex justify-center gap-6 text-sm">
              <div className="flex items-center gap-2">
                <div className="w-3 h-3 rounded-full" style={{backgroundColor: '#FBD35B'}}></div>
                <span>美团外卖</span>
              </div>
              <div className="flex items-center gap-2">
                <div className="w-3 h-3 rounded-full" style={{backgroundColor: '#F79D8E'}}></div>
                <span>京东</span>
              </div>
              <div className="flex items-center gap-2">
                <div className="w-3 h-3 rounded-full" style={{backgroundColor: '#6bc3ff'}}></div>
                <span>闪购</span>
              </div>
            </div>
            <p className="text-center text-sm text-gray-500 mt-4">👨‍👩‍👧‍👦 数据来源：用户调研报告</p>
          </div>

          <div className="bg-gradient-to-br from-orange-50 via-white to-pink-50 rounded-2xl p-8 shadow-2xl border border-orange-100">
            <div className="flex items-center justify-center mb-6">
              <i className="ri-building-2-fill text-3xl text-orange-600 mr-3"></i>
              <h3 className="text-2xl font-bold">城市分布</h3>
            </div>
            <ResponsiveContainer width="100%" height={400}>
              <PieChart>
                <Pie
                  data={cityData}
                  cx="50%"
                  cy="50%"
                  outerRadius={120}
                  dataKey="value"
                  label={({ name, value }) => `${name} ${value}%`}
                >
                  {cityData.map((entry, index) => (
                    <Cell key={`cell-${index}`} fill={entry.color} />
                  ))}
                </Pie>
                <Tooltip />
              </PieChart>
            </ResponsiveContainer>
            <div className="mt-4 grid grid-cols-2 gap-2 text-sm">
              {cityData.map((city, index) => (
                <div key={index} className="flex items-center gap-2">
                  <div className="w-3 h-3 rounded-full" style={{backgroundColor: city.color}}></div>
                  <span>{city.name}</span>
                </div>
              ))}
            </div>
            <p className="text-center text-sm text-gray-500 mt-4">🏙️ 数据来源：城市消费者分布统计</p>
          </div>
        </div>

        <div className="mb-16">
          <div className="bg-gradient-to-br from-purple-50 via-white to-indigo-50 rounded-2xl p-8 shadow-2xl border border-purple-100">
            <div className="flex items-center justify-center mb-8">
              <i className="ri-calendar-check-fill text-3xl text-purple-600 mr-3"></i>
              <h3 className="text-2xl font-bold">用户订餐频率</h3>
            </div>
            <div className="grid md:grid-cols-4 gap-6">
              {orderFrequency.map((item, index) => (
                <div key={index} className="bg-gradient-to-br from-white via-gray-50 to-white p-8 rounded-2xl text-center shadow-xl border border-gray-200 hover:shadow-2xl transition-shadow group">
                  <div className="bg-gradient-to-r from-purple-100 to-indigo-100 rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform">
                    <i className={`${index === 0 ? 'ri-calendar-2-fill' : index === 1 ? 'ri-calendar-fill' : index === 2 ? 'ri-calendar-line' : 'ri-calendar-event-line'} text-2xl text-purple-600`}></i>
                  </div>
                  <div className="text-4xl font-bold text-purple-600 mb-3">{item.percentage}%</div>
                  <div className="text-gray-700 font-medium">{item.frequency}</div>
                  <div className="mt-3 w-full bg-gray-200 rounded-full h-2">
                    <div className="bg-gradient-to-r from-purple-400 to-indigo-500 h-2 rounded-full transition-all duration-1000" 
                         style={{width: `${item.percentage}%`}}></div>
                  </div>
                </div>
              ))}
            </div>
            <p className="text-center text-sm text-gray-500 mt-6">📅 数据来源：消费频率调研</p>
          </div>
        </div>

        <div>
          <div className="bg-gradient-to-br from-green-50 via-white to-teal-50 rounded-2xl p-8 shadow-2xl border border-green-100">
            <div className="flex items-center justify-center mb-8">
              <i className="ri-restaurant-2-fill text-3xl text-green-600 mr-3"></i>
              <h3 className="text-2xl font-bold">热门品类偏好趋势</h3>
            </div>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              {preferences.map((item, index) => (
                <div key={index} className="bg-white border border-gray-200 rounded-xl p-6 hover:shadow-2xl transition-shadow group relative overflow-hidden">
                  {/* 装饰性背景元素 */}
                  <div className="absolute top-0 right-0 w-20 h-20 bg-gradient-to-bl from-orange-100 to-transparent rounded-bl-full opacity-50"></div>
                  
                  <div className="flex items-center justify-between mb-6 relative">
                    <div className="flex items-center gap-3">
                      <div className="bg-gradient-to-r from-orange-100 to-red-100 rounded-full w-10 h-10 flex items-center justify-center group-hover:scale-110 transition-transform">
                        <i className={`${index === 0 ? 'ri-restaurant-fill' : index === 1 ? 'ri-cup-fill' : index === 2 ? 'ri-fire-fill' : index === 3 ? 'ri-goblet-fill' : index === 4 ? 'ri-cake-3-fill' : 'ri-bowl-fill'} text-lg text-orange-600`}></i>
                      </div>
                      <h4 className="text-lg font-semibold">{item.category}</h4>
                    </div>
                    <div className={`flex items-center gap-1 text-sm font-bold px-3 py-1 rounded-full ${
                      item.growth > 0 ? 'text-green-700 bg-green-100' : item.growth < 0 ? 'text-red-700 bg-red-100' : 'text-gray-700 bg-gray-100'
                    }`}>
                      <i className={`ri-arrow-${item.growth > 0 ? 'up' : item.growth < 0 ? 'down' : 'right'}-line`}></i>
                      {Math.abs(item.growth)}%
                    </div>
                  </div>
                  <div className="mb-4">
                    <div className="flex justify-between text-sm mb-2">
                      <span className="text-gray-600">受欢迎程度</span>
                      <span className="font-bold text-gray-800">{item.popularity}%</span>
                    </div>
                    <div className="w-full bg-gray-200 rounded-full h-3 overflow-hidden">
                      <div
                        className="bg-gradient-to-r from-orange-400 to-red-500 h-3 rounded-full transition-all duration-1000 relative"
                        style={{ width: `${item.popularity}%` }}
                      >
                        <div className="absolute inset-0 bg-white opacity-30 animate-pulse"></div>
                      </div>
                    </div>
                  </div>
                  
                  {/* 人气指示器 */}
                  <div className="flex items-center justify-between text-xs text-gray-500">
                    <span>人气指数</span>
                    <div className="flex gap-1">
                      {[...Array(5)].map((_, i) => (
                        <i key={i} className={`ri-star-${i < Math.floor(item.popularity/20) ? 'fill' : 'line'} text-yellow-500`}></i>
                      ))}
                    </div>
                  </div>
                </div>
              ))}
            </div>
            <p className="text-center text-sm text-gray-500 mt-6">🍔 数据来源：品类偏好调研分析</p>
          </div>
        </div>

        {/* 底部装饰线条 */}
        <div className="flex justify-center mt-16">
          <div className="w-24 h-1 bg-gradient-to-r from-pink-500 via-purple-500 to-blue-500 rounded-full opacity-60"></div>
        </div>
      </div>
    </section>
  );
}