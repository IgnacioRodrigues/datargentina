import Head from 'next/head'
import Image from 'next/image'

export default function Home() {
  return (
    <div className="space-y-20 sm:space-y-32 md:space-y-40 lg:space-y-44 overflow-hidden">
      <header className="relative z-10 max-w-screen-lg xl:max-w-screen-xl mx-auto">
        <div className="px-4 sm:px-6 md:px-8 mb-14 sm:mb-20 xl:mb-8">
          <div className="border-b border-gray-200 py-6 flex items-center justify-between mb-16 sm:mb-20 -mx-4 px-4 sm:mx-0 sm:px-0">
            <button type="button" class="group leading-6 font-medium flex items-center space-x-3 sm:space-x-4 hover:text-gray-600 transition-colors duration-200">
              <svg width="24" height="24" fill="none" class="text-gray-400 group-hover:text-gray-500 transition-colors duration-200">
                <path d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"></path>
              </svg>
              <span>Buscar<span class="hidden sm:inline"> información</span></span>
              <span class="hidden sm:block text-gray-400 text-sm leading-5 py-0.5 px-1.5 border border-gray-300 rounded-md">
                <span class="sr-only">Presiona </span><kbd class="font-sans"><abbr title="Command" class="no-underline">⌘</abbr></kbd><span class="sr-only"> y </span><kbd class="font-sans">K</kbd><span class="sr-only"> para buscar</span>
              </span>
            </button>
            <div class="flex space-x-6 sm:space-x-10">
              <a class="text-base leading-6 font-medium hover:text-gray-600 transition-colors duration-200" href="/docs">
                <span class="sm:hidden">Docs</span>
                <span class="hidden sm:inline">Documentación</span>
              </a>
              <a href="https://github.com/ignaciorodrigues/datargentina" class="text-gray-400 hover:text-gray-500 transition-colors duration-200">
                <span class="sr-only">Data Argentina en GitHub</span>
                <svg width="24" height="24" viewBox="0 0 16 16" fill="currentColor">
                  <path fill-rule="evenodd" d="M8 0C3.58 0 0 3.58 0 8c0 3.54 2.29 6.53 5.47 7.59.4.07.55-.17.55-.38 0-.19-.01-.82-.01-1.49-2.01.37-2.53-.49-2.69-.94-.09-.23-.48-.94-.82-1.13-.28-.15-.68-.52-.01-.53.63-.01 1.08.58 1.23.82.72 1.21 1.87.87 2.33.66.07-.52.28-.87.51-1.07-1.78-.2-3.64-.89-3.64-3.95 0-.87.31-1.59.82-2.15-.08-.2-.36-1.02.08-2.12 0 0 .67-.21 2.2.82.64-.18 1.32-.27 2-.27.68 0 1.36.09 2 .27 1.53-1.04 2.2-.82 2.2-.82.44 1.1.16 1.92.08 2.12.51.56.82 1.27.82 2.15 0 3.07-1.87 3.75-3.65 3.95.29.25.54.73.54 1.48 0 1.07-.01 1.93-.01 2.2 0 .21.15.46.55.38A8.013 8.013 0 0016 8c0-4.42-3.58-8-8-8z"></path>
                </svg>
              </a>
            </div>
          </div>
            <div className="flex flex-col justify-center items-center md:justify-start md:flex-row md:items-start">
              <div className="flex flex-1 justify-center">
                <Image
                  src="/logo.png"
                  alt="Data Argentina"
                  width={200}
                  height={200}
                />
              </div>
              <div className="flex-auto mt-10 md:mt-0 md:pl-10 text-center md:text-left ">
                <h1 class="text-4xl sm:text-6xl lg:text-7xl leading-none font-extrabold tracking-tight text-gray-900 mb-8 sm:mb-10">Información libre sobre la República Argentina.</h1>
                <p class="max-w-screen-lg text-lg sm:text-2xl sm:leading-10 font-normal mb-10 sm:mb-11">Biblioteca de libre acceso sobre información o datos sobre la República Argentina. Entre ellos se encuentrán <span className="font-medium">fechas relevantes</span>, <span className="font-medium">hechos históricos</span>, <span className="font-medium">datos geográficos</span>, <span className="font-medium">biografías de personas</span>, <span className="font-medium">cultura</span>, <span className="font-medium">datos naturales</span> y mucho más.</p>
                <a class="w-full sm:w-auto flex-none bg-blue-400 hover:bg-blue-500 text-white text-lg leading-6 font-semibold py-3 px-6 border border-transparent rounded-xl focus:ring-2 focus:ring-offset-2 focus:ring-offset-white focus:ring-blue-600 focus:outline-none transition-colors duration-200" href="/docs">Ir a la biblioteca</a>
              </div>
            </div>
          </div>
      </header>
    </div>
  )
}
