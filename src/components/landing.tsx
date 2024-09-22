import { Link } from 'react-router-dom'
import { Button } from "@/components/ui/button"

export default function LandingPage() {
  return (
    <div className="flex flex-col min-h-screen bg-gray-900 text-gray-100">
      <header className="py-6 px-4 sm:px-6 lg:px-8">
        <nav className="max-w-7xl mx-auto flex items-center justify-between">
          <div className="flex items-center">
            <span className="text-2xl font-bold">YannAI</span>
          </div>
          
        </nav>
      </header>

      <main className="flex-grow flex items-center justify-center px-4 sm:px-6 lg:px-8">
        <div className="text-center">
          <h1 className="text-4xl sm:text-5xl md:text-6xl font-extrabold mb-4">
            Chat with Yann LeCun AI
          </h1>
          <p className="text-xl sm:text-2xl text-gray-400 mb-8 max-w-3xl mx-auto">
            Experience the wisdom and insights of AI pioneer Yann LeCun through our advanced AI chatbot.
          </p>
          <Link to="/chat">
            <Button size="lg" className="bg-blue-600 hover:bg-blue-700 text-white px-8 py-3 rounded-full text-lg font-semibold transition-colors duration-300">
              Try Now
            </Button>
          </Link>
        </div>
      </main>

      <footer className="py-8 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto text-center">
          <p className="text-gray-500 text-sm">
            Powered by the Gaianet decentralized AI node API
          </p>
          <div className="mt-4 flex justify-center space-x-6">
            
          </div>
        </div>
      </footer>
    </div>
  )
}