
'use client';

import { useState } from 'react';

const cityData = [
  {
    city: '北京',
    totalOrders: 2850,
    meituan: 68,
    jingdong: 23,
    shangou: 9,
    avgPrice: 45,
    topCategory: '中式快餐',
    growth: 12
  },
  {
    city: '上海',
    totalOrders: 2650,
    meituan: 65,
    jingdong: 27,
    shangou: 8,
    avgPrice: 52,
    topCategory: '日韩料理',
    growth: 8
  },
  {
    city: '广州',
    totalOrders: 2200,
    meituan: 70,
    jingdong: 21,
    shangou: 9,
    avgPrice: 38,
    topCategory: '粤式茶餐',
    growth: 15
  },
  {
    city: '深圳',
    totalOrders: 2400,
    meituan: 72,
    jingdong: 19,
    shangou: 9,
    avgPrice: 48,
    topCategory: '西式快餐',
    growth: 18
  },
  {
    city: '杭州',
    totalOrders: 1800,
    meituan: 66,
    jingdong: 25,
    shangou: 9,
    avgPrice: 42,
    topCategory: '奶茶饮品',
    growth: 22
  },
  {
    city: '成都',
    totalOrders: 1950,
    meituan: 69,
    jingdong: 22,
    shangou: 9,
    avgPrice: 35,
    topCategory: '川菜火锅',
    growth: 20
  }
];

const regionalInsights = [
  {
    region: '华北地区',
    characteristics: ['订单量大', '客单价高', '品牌集中度高'],
    trend: '稳定增长',
    icon: 'ri-building-line'
  },
  {
    region: '华东地区',
    characteristics: ['消费多元化', '新品牌活跃', '配送效率高'],
    trend: '快速发展',
    icon: 'ri-ship-line'
  },
  {
    region: '华南地区',
    characteristics: ['夜宵文化浓厚', '茶餐厅受欢迎', '配送时间长'],
    trend: '持续升温',
    icon: 'ri-sun-line'
  },
  {
    region: '西南地区',
    characteristics: ['火锅麻辣占主导', '下沉市场潜力大', '价格敏感度高'],
    trend: '潜力巨大',
    icon: 'ri-fire-line'
  }
];

export default function RegionalAnalysis() {
  const [selectedCity, setSelectedCity] = useState(0);

  return (
    <section data-section="regional" className="py-20 px-4 bg-gradient-to-b from-blue-50 to-purple-50 relative overflow-hidden">
      {/* 装饰性背景元素 */}
      <div className="absolute inset-0">
        <div className="absolute top-32 left-12 w-28 h-28 bg-gradient-to-r from-blue-200 to-indigo-200 rounded-full opacity-30 animate-pulse"></div>
        <div className="absolute top-64 right-20 w-20 h-20 bg-gradient-to-r from-purple-200 to-pink-200 rounded-full opacity-40 animate-bounce"></div>
        <div className="absolute bottom-32 left-40 w-24 h-24 bg-gradient-to-r from-teal-200 to-cyan-200 rounded-full opacity-35 animate-pulse"></div>
        <div className="absolute top-80 right-40 w-16 h-16 bg-gradient-to-r from-indigo-200 to-purple-200 rounded-full opacity-30 animate-pulse"></div>
      </div>

      <div className="max-w-7xl mx-auto relative">
        {/* 顶部装饰线条 */}
        <div className="flex justify-center mb-8">
          <div className="w-32 h-1 bg-gradient-to-r from-blue-500 via-purple-500 to-indigo-500 rounded-full"></div>
        </div>

        <div className="text-center mb-16">
          <div className="flex items-center justify-center mb-4">
            <i className="ri-map-2-line text-4xl text-blue-600 mr-4"></i>
            <h2 className="text-4xl md:text-5xl font-bold text-gray-800">区域竞争格局</h2>
            <i className="ri-global-line text-4xl text-purple-600 ml-4"></i>
          </div>
          <div className="w-24 h-0.5 bg-gradient-to-r from-transparent via-blue-400 to-transparent mx-auto mb-6"></div>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto relative">
            不同城市的外卖消费习惯和竞争态势存在显著差异
            <span className="absolute -top-2 -right-2 text-blue-500 text-lg">🗺️</span>
          </p>
        </div>

        <div className="grid lg:grid-cols-3 gap-8 mb-16">
          <div className="lg:col-span-2">
            <div 
              className="relative w-full h-96 bg-cover bg-center rounded-2xl overflow-hidden shadow-2xl border border-blue-200"
              style={{
                backgroundImage: `url('https://readdy.ai/api/search-image?query=China%20map%20with%20major%20cities%20highlighted%2C%20modern%20data%20visualization%20style%20with%20colorful%20dots%20representing%20delivery%20orders%2C%20digital%20interface%20elements%20showing%20statistics%2C%20clean%20minimalist%20design%20with%20blue%20and%20purple%20color%20scheme%2C%20geographic%20data%20visualization&width=800&height=400&seq=china-delivery-map&orientation=landscape')`
              }}
            >
              <div className="absolute inset-0 bg-gradient-to-r from-black/40 via-black/20 to-black/40"></div>
              <div className="absolute inset-0 flex items-center justify-center">
                <div className="text-white text-center">
                  <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-8 border border-white/20">
                    <i className="ri-map-pin-fill text-4xl mb-4 text-blue-300"></i>
                    <h3 className="text-3xl font-bold mb-4">全国外卖热力分布</h3>
                    <p className="text-lg">一二线城市占据主要市场份额</p>
                  </div>
                </div>
              </div>
              {/* 装饰性地图点 */}
              <div className="absolute top-20 left-32 w-3 h-3 bg-yellow-400 rounded-full animate-ping"></div>
              <div className="absolute top-28 left-48 w-2 h-2 bg-red-400 rounded-full animate-pulse"></div>
              <div className="absolute bottom-32 right-40 w-4 h-4 bg-blue-400 rounded-full animate-ping"></div>
            </div>
            <p className="text-center text-sm text-gray-500 mt-4">🌏 数据来源：全国城市外卖订单统计</p>
          </div>

          <div className="space-y-4">
            <div className="flex items-center justify-center mb-6">
              <i className="ri-trophy-line text-2xl text-orange-600 mr-2"></i>
              <h3 className="text-xl font-bold">重点城市排行</h3>
            </div>
            {cityData.slice(0, 6).map((city, index) => (
              <div 
                key={index}
                onClick={() => setSelectedCity(index)}
                className={`p-4 rounded-xl cursor-pointer transition-all relative overflow-hidden ${
                  selectedCity === index ? 'bg-gradient-to-r from-blue-500 to-blue-600 text-white shadow-xl' : 'bg-white hover:bg-blue-50 shadow-lg border border-gray-100'
                }`}
              >
                {selectedCity === index && (
                  <div className="absolute inset-0 bg-blue-200 opacity-20 animate-pulse"></div>
                )}
                <div className="flex justify-between items-center relative">
                  <div className="flex items-center gap-3">
                    <div className={`w-8 h-8 rounded-full flex items-center justify-center text-sm font-bold ${
                      selectedCity === index ? 'bg-white/20' : 'bg-blue-100 text-blue-600'
                    }`}>
                      #{index + 1}
                    </div>
                    <div>
                      <div className="font-bold flex items-center gap-2">
                        <i className="ri-map-pin-2-fill text-lg"></i>
                        {city.city}
                      </div>
                      <div className={`text-sm flex items-center gap-1 ${selectedCity === index ? 'text-blue-200' : 'text-gray-500'}`}>
                        <i className="ri-shopping-cart-2-line"></i>
                        日订单 {city.totalOrders}万
                      </div>
                    </div>
                  </div>
                  <div className="text-right">
                    <div className={`text-sm flex items-center gap-1 ${selectedCity === index ? 'text-green-300' : 'text-green-600'}`}>
                      <i className="ri-trending-up-line"></i>
                      +{city.growth}%
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        <div className="bg-gradient-to-br from-white via-gray-50 to-white rounded-2xl p-8 shadow-2xl mb-16 border border-gray-200">
          <div className="flex items-center justify-center mb-6">
            <i className="ri-building-2-fill text-3xl text-blue-600 mr-3"></i>
            <h3 className="text-2xl font-bold">{cityData[selectedCity].city} 市场详情</h3>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
            <div className="text-center bg-gradient-to-br from-blue-50 to-blue-100 p-6 rounded-xl border border-blue-200">
              <i className="ri-shopping-cart-fill text-3xl text-blue-600 mb-3"></i>
              <div className="text-3xl font-bold text-blue-600">{cityData[selectedCity].totalOrders}万</div>
              <div className="text-sm text-gray-600">日均订单量</div>
            </div>
            <div className="text-center bg-gradient-to-br from-green-50 to-green-100 p-6 rounded-xl border border-green-200">
              <i className="ri-money-dollar-circle-fill text-3xl text-green-600 mb-3"></i>
              <div className="text-3xl font-bold text-green-600">¥{cityData[selectedCity].avgPrice}</div>
              <div className="text-sm text-gray-600">平均客单价</div>
            </div>
            <div className="text-center bg-gradient-to-br from-orange-50 to-orange-100 p-6 rounded-xl border border-orange-200">
              <i className="ri-restaurant-fill text-3xl text-orange-600 mb-3"></i>
              <div className="text-3xl font-bold text-orange-600">{cityData[selectedCity].topCategory}</div>
              <div className="text-sm text-gray-600">热门品类</div>
            </div>
            <div className="text-center bg-gradient-to-br from-purple-50 to-purple-100 p-6 rounded-xl border border-purple-200">
              <i className="ri-trending-up-fill text-3xl text-purple-600 mb-3"></i>
              <div className="text-3xl font-bold text-purple-600">+{cityData[selectedCity].growth}%</div>
              <div className="text-sm text-gray-600">年增长率</div>
            </div>
          </div>
          
          <div className="bg-white rounded-xl p-6 shadow-lg border border-gray-100">
            <div className="flex items-center mb-4">
              <i className="ri-pie-chart-fill text-2xl text-indigo-600 mr-2"></i>
              <h4 className="font-bold">平台市场份额</h4>
            </div>
            <div className="space-y-3">
              <div className="flex items-center gap-4">
                <div className="flex items-center gap-2 w-16">
                  <div className="w-3 h-3 rounded-full" style={{backgroundColor: '#FBD35B'}}></div>
                  <span className="text-sm">美团</span>
                </div>
                <div className="flex-1 bg-gray-200 rounded-full h-3 overflow-hidden">
                  <div 
                    className="h-3 rounded-full transition-all duration-1000"
                    style={{ width: `${cityData[selectedCity].meituan}%`, backgroundColor: '#FBD35B' }}
                  ></div>
                </div>
                <span className="w-12 text-sm font-bold">{cityData[selectedCity].meituan}%</span>
              </div>
              <div className="flex items-center gap-4">
                <div className="flex items-center gap-2 w-16">
                  <div className="w-3 h-3 rounded-full" style={{backgroundColor: '#F79D8E'}}></div>
                  <span className="text-sm">京东</span>
                </div>
                <div className="flex-1 bg-gray-200 rounded-full h-3 overflow-hidden">
                  <div 
                    className="h-3 rounded-full transition-all duration-1000"
                    style={{ width: `${cityData[selectedCity].jingdong}%`, backgroundColor: '#F79D8E' }}
                  ></div>
                </div>
                <span className="w-12 text-sm font-bold">{cityData[selectedCity].jingdong}%</span>
              </div>
              <div className="flex items-center gap-4">
                <div className="flex items-center gap-2 w-16">
                  <div className="w-3 h-3 rounded-full" style={{backgroundColor: '#6bc3ff'}}></div>
                  <span className="text-sm">闪购</span>
                </div>
                <div className="flex-1 bg-gray-200 rounded-full h-3 overflow-hidden">
                  <div 
                    className="h-3 rounded-full transition-all duration-1000"
                    style={{ width: `${cityData[selectedCity].shangou}%`, backgroundColor: '#6bc3ff' }}
                  ></div>
                </div>
                <span className="w-12 text-sm font-bold">{cityData[selectedCity].shangou}%</span>
              </div>
            </div>
          </div>
          <p className="text-center text-sm text-gray-500 mt-4">📊 数据来源：城市市场份额调研</p>
        </div>

        <div>
          <div className="flex items-center justify-center mb-8">
            <i className="ri-compass-3-line text-3xl text-purple-600 mr-3"></i>
            <h3 className="text-2xl font-bold">区域特色分析</h3>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {regionalInsights.map((region, index) => (
              <div key={index} className="bg-gradient-to-br from-white via-gray-50 to-white rounded-xl p-6 shadow-2xl hover:shadow-3xl transition-shadow border border-gray-200 group">
                <div className="flex items-center gap-3 mb-6">
                  <div className="bg-gradient-to-r from-blue-100 to-purple-100 rounded-full w-12 h-12 flex items-center justify-center group-hover:scale-110 transition-transform">
                    <i className={`${region.icon} text-2xl text-blue-600`}></i>
                  </div>
                  <h4 className="text-lg font-bold">{region.region}</h4>
                </div>
                <div className="mb-4 bg-green-50 rounded-lg p-3 border border-green-200">
                  <div className="text-sm font-medium text-gray-600 mb-2 flex items-center">
                    <i className="ri-line-chart-line text-green-600 mr-2"></i>
                    发展趋势
                  </div>
                  <div className="text-green-600 font-bold">{region.trend}</div>
                </div>
                <div>
                  <div className="text-sm font-medium text-gray-600 mb-3 flex items-center">
                    <i className="ri-lightbulb-line text-orange-500 mr-2"></i>
                    区域特点
                  </div>
                  <div className="space-y-2">
                    {region.characteristics.map((char, i) => (
                      <div key={i} className="flex items-center gap-2 text-sm bg-gray-50 p-2 rounded-lg">
                        <i className="ri-check-line text-green-500 text-base"></i>
                        <span>{char}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            ))}
          </div>
          <p className="text-center text-sm text-gray-500 mt-4">🗺️ 数据来源：区域特色分析报告</p>
        </div>

        {/* 底部装饰线条 */}
        <div className="flex justify-center mt-16">
          <div className="w-24 h-1 bg-gradient-to-r from-blue-500 via-purple-500 to-indigo-500 rounded-full opacity-60"></div>
        </div>
      </div>
    </section>
  );
}
