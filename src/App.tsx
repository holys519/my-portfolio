import HeroAnimation from './components/HeroAnimation'
import xLogo from './assets/logo/x.svg'
import noteLogo from './assets/logo/note.svg'

function App() {
  return (
    <div className="bg-gray-900 text-white min-h-screen font-sans">
      <header className="bg-gray-800/80 backdrop-blur-sm p-4 fixed w-full z-10">
        <div className="container mx-auto flex justify-between items-center">
          <h1 className="text-2xl md:text-3xl font-bold">ホーリーデイ's Portfolio</h1>
          <nav>
            <a href="#about" className="text-lg hover:text-blue-400 transition-colors duration-300 mr-4">About</a>
            <a href="#projects" className="text-lg hover:text-blue-400 transition-colors duration-300">Projects</a>
          </nav>
        </div>
      </header>

      <main>
        <section id="hero" className="relative h-screen flex items-center justify-center text-center overflow-hidden">
          <div className="absolute top-0 left-0 w-full h-full bg-black">
            <HeroAnimation />
          </div>
          <div className="relative z-10 p-4">
            <h2 className="text-4xl md:text-6xl font-bold">ホーリーデイ</h2>
            <p className="text-lg md:text-2xl mt-4">臨床工学技士からソフトウェアエンジニアへ</p>
          </div>
        </section>

        <section id="about" className="py-20 md:py-32 bg-gray-900">
          <div className="container mx-auto px-6 md:px-8">
            <h3 className="text-3xl md:text-4xl font-bold text-center mb-12">About Me</h3>
            <div className="max-w-3xl mx-auto text-base md:text-lg bg-gray-800/50 p-8 rounded-lg">
              <p className="mb-6">
                臨床工学技士として医療現場でキャリアをスタートし、生命を支える最前線で経験を積みました。その後、テクノロジーでより多くの人々の課題を解決したいという思いから、ソフトウェアエンジニアへと転身しました。
              </p>
              <p className="mb-6">
                現在は、これまでの経験で培った問題解決能力と、新たに習得した技術力を活かし、信頼性の高いソフトウェア開発に取り組んでいます。
              </p>
              <p>
                AI/機械学習分野にも強い関心を持ち、E資格の取得や、GCP Professional Cloud Architect認定資格を活かして、クラウドベースのインテリジェントなシステム構築にも貢献したいと考えています。
              </p>
            </div>
          </div>
        </section>

        <section id="projects" className="py-20 md:py-32">
          <div className="container mx-auto px-6 md:px-8">
            <h3 className="text-3xl md:text-4xl font-bold text-center mb-12">Projects</h3>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              <div className="bg-gray-800 rounded-lg p-6 transform hover:scale-105 transition-transform duration-300">
                <h4 className="text-xl font-bold">Project 1</h4>
                <p className="mt-2">Project description...</p>
              </div>
              <div className="bg-gray-800 rounded-lg p-6 transform hover:scale-105 transition-transform duration-300">
                <h4 className="text-xl font-bold">Project 2</h4>
                <p className="mt-2">Project description...</p>
              </div>
              <div className="bg-gray-800 rounded-lg p-6 transform hover:scale-105 transition-transform duration-300">
                <h4 className="text-xl font-bold">Project 3</h4>
                <p className="mt-2">Project description...</p>
              </div>
            </div>
          </div>
        </section>
      </main>

      <footer className="bg-gray-800 p-6 text-center">
        <div className="flex justify-center items-center space-x-6 mb-4">
          <a href="https://x.com/holy519" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-white transition-colors duration-300">
            <img src={xLogo} alt="X Logo" className="w-8 h-8" />
          </a>
          <a href="https://note.com/holyday_mylife" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-white transition-colors duration-300">
            <img src={noteLogo} alt="note Logo" className="w-8 h-8" />
          </a>
        </div>
        <p>&copy; 2025 ホーリーデイ</p>
      </footer>
    </div>
  )
}

export default App
