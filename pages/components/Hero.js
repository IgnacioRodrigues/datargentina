import Image from 'next/image'

export default function Hero() {
  return (
    <div className="relative z-10 max-w-screen-lg xl:max-w-screen-xl mx-auto">
      <div className="px-4 sm:px-6 md:px-8 mb-14 sm:mb-20 xl:mb-8">
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
            <a class="w-full sm:w-auto flex-none bg-blue-500 hover:bg-blue-600 text-white text-lg leading-6 font-semibold py-3 px-6 border border-transparent rounded-xl focus:ring-2 focus:ring-offset-2 focus:ring-offset-white focus:ring-blue-600 focus:outline-none transition-colors duration-200" href="/docs">Ir a la biblioteca</a>
          </div>
        </div>
      </div>
    </div>
  )
}