import Image from 'next/image'

export default function Hero() {
  return (
    <div className="relative z-10 max-w-screen-lg xl:max-w-screen-xl mx-auto">
      <div className="px-4 sm:px-6 md:px-8 mb-14 sm:mb-20 xl:mb-8">
        <div className="flex flex-col justify-center items-center md:justify-start md:flex-row md:items-start">
          <div className="flex flex-1 justify-center">
            <div className="block">
              <img src="./images/logo.png" className="h-15" alt="Data Argentina" />
            </div>
          </div>
          <div className="max-w-4xl mt-10 md:mt-0 md:pl-10 text-center md:text-left ">
            <h1 className="font-evangelina text-4xl sm:text-6xl lg:text-7xl leading-none font-extrabold tracking-tight text-gray-900 mb-8 sm:mb-10">Información sobre<br/> la República Argentina</h1>
            <p className="max-w-screen-lg text-gray-7 text-lg sm:text-2xl sm:leading-10 font-normal mb-10 sm:mb-11">Organizamos la Información del país para que puedas acceder de forma fácil y sencilla. Encontrarás <span className="font-medium">hechos historicos</span>, <span className="font-medium">fechas relevantes</span>, <span className="font-medium">datos geográficos</span>, <span className="font-medium">biografías</span>, <span className="font-medium">instituciones</span>, <span className="font-medium">datos naturales</span> y mucho más.</p>
            <a className="w-full sm:w-auto flex-none bg-blue-400 hover:bg-blue-500 text-white text-lg leading-6 font-semibold py-3 px-6 border border-transparent rounded-xl focus:ring-2 focus:ring-offset-2 focus:ring-offset-white focus:ring-blue-600 focus:outline-none transition-colors duration-200" href="#">Ir a la biblioteca</a>
          </div>
        </div>
      </div>
      <style jsx>{`
      @font-face {
        font-family: 'Evangelina';
        src: url('/fonts/evangelina/EvangelinaRegular.woff2') format('woff2'),
            url('/fonts/evangelina/EvangelinaRegular.woff') format('woff'),
            url('/fonts/evangelina/EvangelinaRegular.ttf') format('truetype'),
            url('/fonts/evangelina/EvangelinaRegular.svg#EvangelinaRegular') format('svg');
        font-weight: normal;
        font-style: normal;
        font-display: swap;
      }
      .font-evangelina {
        font-family: 'Evangelina';
      }
      `}</style>
    </div>
  )
}