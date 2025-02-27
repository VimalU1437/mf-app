export default function Header() {
    return (
      <header className="bg-gradient-to-r from-blue-600 to-black text-white py-6 shadow-lg">
        <div className="max-w-6xl mx-1 px-6 text-left">
          <h1 className="text-4xl font-bold">🛍️ Shopping App</h1>
          <p className="text-lg mt-2 text-gray-300">Built with React</p>
          <p className="text-sm text-gray-400">Source: Main app</p>
        </div>
      </header>
    );
  }