'use client';

export default function Footer() {
  return (
    <footer className="bg-gray-900 text-white py-16 px-4">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-12">
          <h3 className="text-3xl font-bold mb-6">外卖商战：数据背后的故事</h3>
          <p className="text-xl text-gray-300 max-w-4xl mx-auto leading-relaxed">
            从美团的霸主地位到京东的稳步发展，再到闪购的快速崛起，外卖行业的竞争远未结束。
            在监管引导和行业自律的双重作用下，各平台正在探索可持续发展的新路径，
            共同构建和谐有序的市场环境，推动行业向更高质量发展迈进。
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8 mb-12">
          <div className="text-center">
            <div className="w-16 h-16 flex items-center justify-center mx-auto mb-4">
              <i className="ri-lightbulb-line text-4xl text-yellow-400"></i>
            </div>
            <h4 className="text-xl font-bold mb-3">核心洞察</h4>
            <p className="text-gray-300">美团凭借先发优势和生态建设保持领先，但新入局者正在改变游戏规则，行业竞争趋于理性</p>
          </div>
          <div className="text-center">
            <div className="w-16 h-16 flex items-center justify-center mx-auto mb-4">
              <div className="flex items-center justify-center gap-1">
                <i className="ri-handshake-line text-3xl text-green-400"></i>
                <span className="text-2xl">♻️</span>
              </div>
            </div>
            <h4 className="text-xl font-bold mb-3">和谐发展</h4>
            <p className="text-gray-300">在监管引导下，各平台积极响应合规要求，推动行业从无序竞争向良性发展转变</p>
          </div>
          <div className="text-center">
            <div className="w-16 h-16 flex items-center justify-center mx-auto mb-4">
              <i className="ri-rocket-line text-4xl text-blue-400"></i>
            </div>
            <h4 className="text-xl font-bold mb-3">未来趋势</h4>
            <p className="text-gray-300">技术创新、绿色配送、数字化治理将成为推动外卖行业可持续发展的关键驱动力</p>
          </div>
        </div>

        <div className="border-t border-gray-700 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <div className="text-gray-400 text-sm leading-relaxed">
              © 2025 外卖商战数据新闻 | 数据来源：艾媒咨询《2025中国外卖市场研究报告》、QuestMobile《中国移动互联网发展报告》、CNNIC《第53次中国互联网络发展状况统计报告》、比达咨询《在线外卖行业分析》、易观分析《外卖市场趋势报告》、Trustdata《移动互联网行业发展分析报告》、德勤《中国外卖行业数字化发展报告》、普华永道《外卖平台竞争力评估》、中国互联网协会《外卖行业安全保障白皮书》、中国人工智能产业发展联盟《中国外卖行业AI技术应用白皮书》、中国连锁经营协会《中国外卖商家生态报告》、中国电子商务研究中心《外卖竞争市场影响评估报告》、市场监管总局、商务部、人社部等政府部门公开资料、美团财报、京东财报、华兴资本研究报告、国信证券行业分析
            </div>
            <div className="flex gap-6">
              <a href="#" className="text-gray-400 hover:text-white transition-colors">
                <i className="ri-share-line text-xl"></i>
              </a>
              <a href="#" className="text-gray-400 hover:text-white transition-colors">
                <i className="ri-bookmark-line text-xl"></i>
              </a>
              <a href="#" className="text-gray-400 hover:text-white transition-colors">
                <i className="ri-download-line text-xl"></i>
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}