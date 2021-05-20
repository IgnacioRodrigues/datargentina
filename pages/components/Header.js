export default function Header() {
  return (
    <div className="w-full border-b border-gray-200 fixed top-0 background-header">
      <style jsx>{`
        .background-header {
          background: rgba(255,255,255,0.8);
          -webkit-backdrop-filter: saturate(180%) blur(5px);
          backdrop-filter: saturate(180%) blur(5px);
          z-index: 101;
        }
      `}</style>
      <div className="relative z-10 max-w-screen-lg xl:max-w-screen-xl mx-auto">
        <div className="py-6 flex items-center justify-between sm:mx-0px-4 px-4">
          <button type="button" className="group leading-6 font-medium flex items-center space-x-3 sm:space-x-4 hover:text-gray-600 transition-colors duration-200">
            <svg width="24" height="24" fill="none" className="text-gray-400 group-hover:text-gray-500 transition-colors duration-200">
              <path d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"></path>
            </svg>
            <span>Buscar<span className="hidden sm:inline"> información</span></span>
            <span className="hidden sm:block text-gray-400 text-sm leading-5 py-0.5 px-1.5 border border-gray-300 rounded-md">
              <span className="sr-only">Presiona </span><kbd className="font-sans"><abbr title="Command" className="no-underline">⌘</abbr></kbd><span className="sr-only"> y </span><kbd className="font-sans">K</kbd><span className="sr-only"> para buscar</span>
            </span>
          </button>
        </div>
      </div>
    </div>
  )
}