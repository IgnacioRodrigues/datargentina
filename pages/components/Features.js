export default function Features() {
  return (
    <div className="w-full">
      <div className="py-10 text-center">
        <h2 className="font-analogue text-3xl sm:text-4xl lg:text-5xl leading-none font-extrabold tracking-tight text-gray-900">Filtrar por categoría</h2>
      </div>
      <div className="relative max-w-screen-lg xl:max-w-screen-xl mx-auto w-full">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 xl:gap-8 px-4 pb-10">
          <section className="flex">
            <div className="cursor-pointer w-full relative text-white overflow-hidden rounded-3xl flex shadow transition rounded-3xl bg-gray-50 hover:shadow-2xl hover:bg-gray-100">
              <div className="sm:max-w-sm sm:flex-none md:w-auto md:flex-auto flex flex-col items-start relative z-10 p-6 xl:p-8">
                <div className="w-16 h-16 flex items-center justify-center rounded-xl bg-blue-100">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8 text-blue-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253" />
                  </svg>
                </div>
                <h2 className="font-evangelina text-3xl text-black font-semibold mt-2 mb-1 text-shadow">Hechos historicos</h2>
                <p className="text-xl font-regular text-gray-700 text-shadow mb-4">Explora la historia, datos, sucesos e información relevante.</p>
                <div className="w-full flex justify-end">
                  <a className="text-black underline font-bold p-3 rounded-full transition hover:shadow-lg hover:bg-blue-100" href="#">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-blue-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M13 7l5 5m0 0l-5 5m5-5H6" />
                    </svg>
                  </a>
                </div>
              </div>
            </div>
          </section>
          <section className="flex">
            <div className="cursor-pointer w-full relative text-white overflow-hidden rounded-3xl flex shadow transition rounded-3xl bg-gray-50 hover:shadow-2xl hover:bg-gray-100">
              <div className="sm:max-w-sm sm:flex-none md:w-auto md:flex-auto flex flex-col items-start relative z-10 p-6 xl:p-8">
                <div className="w-16 h-16 flex items-center justify-center rounded-xl bg-blue-100">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8 text-blue-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 20l-5.447-2.724A1 1 0 013 16.382V5.618a1 1 0 011.447-.894L9 7m0 13l6-3m-6 3V7m6 10l4.553 2.276A1 1 0 0021 18.382V7.618a1 1 0 00-.553-.894L15 4m0 13V4m0 0L9 7" />
                  </svg>
                </div>
                <h2 className="font-evangelina text-3xl  text-black font-semibold mt-2 mb-1 text-shadow">Datos geográficos</h2>
                <p className="text-xl font-regular text-gray-700 text-shadow mb-4">Accede a información geográfica del territorio argentino.</p>
                <div className="w-full flex justify-end">
                  <a className="text-black underline font-bold p-3 rounded-full transition hover:shadow-lg hover:bg-blue-100" href="#">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-blue-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M13 7l5 5m0 0l-5 5m5-5H6" />
                    </svg>
                  </a>
                </div>
              </div>
            </div>
          </section>
          <section className="flex">
            <div className="cursor-pointer w-full relative text-white overflow-hidden rounded-3xl flex shadow transition rounded-3xl bg-gray-50 hover:shadow-2xl hover:bg-gray-100">
              <div className="sm:max-w-sm sm:flex-none md:w-auto md:flex-auto flex flex-col items-start relative z-10 p-6 xl:p-8">
                <div className="w-16 h-16 flex items-center justify-center rounded-xl bg-blue-100">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8 text-blue-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 12l2 2 4-4M7.835 4.697a3.42 3.42 0 001.946-.806 3.42 3.42 0 014.438 0 3.42 3.42 0 001.946.806 3.42 3.42 0 013.138 3.138 3.42 3.42 0 00.806 1.946 3.42 3.42 0 010 4.438 3.42 3.42 0 00-.806 1.946 3.42 3.42 0 01-3.138 3.138 3.42 3.42 0 00-1.946.806 3.42 3.42 0 01-4.438 0 3.42 3.42 0 00-1.946-.806 3.42 3.42 0 01-3.138-3.138 3.42 3.42 0 00-.806-1.946 3.42 3.42 0 010-4.438 3.42 3.42 0 00.806-1.946 3.42 3.42 0 013.138-3.138z" />
                  </svg>
                </div>
                <h2 className="font-evangelina text-3xl  text-black font-semibold mt-2 mb-1 text-shadow">Biografías</h2>
                <p className="text-xl font-regular text-gray-700 text-shadow mb-4">Conoce las biografías de las personas que hicieron historia.</p>
                <div className="w-full flex justify-end">
                  <a className="text-black underline font-bold p-3 rounded-full transition hover:shadow-lg hover:bg-blue-100" href="#">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-blue-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M13 7l5 5m0 0l-5 5m5-5H6" />
                    </svg>
                  </a>
                </div>
              </div>
            </div>
          </section>
          <section className="flex">
            <div className="cursor-pointer w-full relative text-white overflow-hidden rounded-3xl flex shadow transition rounded-3xl bg-gray-50 hover:shadow-2xl hover:bg-gray-100">
              <div className="sm:max-w-sm sm:flex-none md:w-auto md:flex-auto flex flex-col items-start relative z-10 p-6 xl:p-8">
                <div className="w-16 h-16 flex items-center justify-center rounded-xl bg-blue-100">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8 text-blue-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
                  </svg>
                </div>
                <h2 className="font-evangelina text-3xl  text-black font-semibold mt-2 mb-1 text-shadow">Fechas importantes</h2>
                <p className="text-xl font-regular text-gray-700 text-shadow mb-4">Accede a fechas patrias, ferias y fechas claves de la Argentina.</p>
                <div className="w-full flex justify-end">
                  <a className="text-black underline font-bold p-3 rounded-full transition hover:shadow-lg hover:bg-blue-100" href="#">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-blue-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M13 7l5 5m0 0l-5 5m5-5H6" />
                    </svg>
                  </a>
                </div>
              </div>
            </div>
          </section>
          <section className="flex">
            <div className="cursor-pointer w-full relative text-white overflow-hidden rounded-3xl flex shadow transition rounded-3xl bg-gray-50 hover:shadow-2xl hover:bg-gray-100">
              <div className="sm:max-w-sm sm:flex-none md:w-auto md:flex-auto flex flex-col items-start relative z-10 p-6 xl:p-8">
                <div className="w-16 h-16 flex items-center justify-center rounded-xl bg-blue-100">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8 text-blue-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path d="M12 14l9-5-9-5-9 5 9 5z" />
                    <path d="M12 14l6.16-3.422a12.083 12.083 0 01.665 6.479A11.952 11.952 0 0012 20.055a11.952 11.952 0 00-6.824-2.998 12.078 12.078 0 01.665-6.479L12 14z" />
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 14l9-5-9-5-9 5 9 5zm0 0l6.16-3.422a12.083 12.083 0 01.665 6.479A11.952 11.952 0 0012 20.055a11.952 11.952 0 00-6.824-2.998 12.078 12.078 0 01.665-6.479L12 14zm-4 6v-7.5l4-2.222" />
                  </svg>
                </div>
                <h2 className="font-evangelina text-3xl  text-black font-semibold mt-2 mb-1 text-shadow">Centros educativos</h2>
                <p className="text-xl font-regular text-gray-700 text-shadow mb-4">Conoce los centros educativos físicos y digitales de la Argentina.</p>
                <div className="w-full flex justify-end">
                  <a className="text-black underline font-bold p-3 rounded-full transition hover:shadow-lg hover:bg-blue-100" href="#">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-blue-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M13 7l5 5m0 0l-5 5m5-5H6" />
                    </svg>
                  </a>
                </div>
              </div>
            </div>
          </section>
          <section className="flex">
            <div className="cursor-pointer w-full relative text-white overflow-hidden rounded-3xl flex shadow transition rounded-3xl bg-gray-50 hover:shadow-2xl hover:bg-gray-100">
              <div className="sm:max-w-sm sm:flex-none md:w-auto md:flex-auto flex flex-col items-start relative z-10 p-6 xl:p-8">
                <div className="w-16 h-16 flex items-center justify-center rounded-xl bg-blue-100">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8 text-blue-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
                  </svg>
                </div>
                <h2 className="font-evangelina text-3xl  text-black font-semibold mt-2 mb-1 text-shadow">Hospitales, Guardias y Clinicas</h2>
                <p className="text-xl font-regular text-gray-700 text-shadow mb-4">Accede a los centros médicos del todo el país.</p>
                <div className="w-full flex justify-end">
                  <a className="text-black underline font-bold p-3 rounded-full transition hover:shadow-lg hover:bg-blue-100" href="#">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-blue-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M13 7l5 5m0 0l-5 5m5-5H6" />
                    </svg>
                  </a>
                </div>
              </div>
            </div>
          </section>
          <section className="flex">
            <div className="cursor-pointer w-full relative text-white overflow-hidden rounded-3xl flex shadow transition rounded-3xl bg-gray-50 hover:shadow-2xl hover:bg-gray-100">
              <div className="sm:max-w-sm sm:flex-none md:w-auto md:flex-auto flex flex-col items-start relative z-10 p-6 xl:p-8">
                <div className="w-16 h-16 flex items-center justify-center rounded-xl bg-blue-100">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8 text-blue-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M6 5c7.18 0 13 5.82 13 13M6 11a7 7 0 017 7m-6 0a1 1 0 11-2 0 1 1 0 012 0z" />
                  </svg>
                </div>
                <h2 className="font-evangelina text-3xl  text-black font-semibold mt-2 mb-1 text-shadow">Medios de comunicación</h2>
                <p className="text-xl font-regular text-gray-700 text-shadow mb-4">Conoce los medios de comunicación de la Argentina.</p>
                <div className="w-full flex justify-end">
                  <a className="text-black underline font-bold p-3 rounded-full transition hover:shadow-lg hover:bg-blue-100" href="#">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-blue-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M13 7l5 5m0 0l-5 5m5-5H6" />
                    </svg>
                  </a>
                </div>
              </div>
            </div>
          </section>
          <section className="flex">
            <div className="cursor-pointer w-full relative text-white overflow-hidden rounded-3xl flex shadow transition rounded-3xl bg-gray-50 hover:shadow-2xl hover:bg-gray-100">
              <div className="sm:max-w-sm sm:flex-none md:w-auto md:flex-auto flex flex-col items-start relative z-10 p-6 xl:p-8">
                <div className="w-16 h-16 flex items-center justify-center rounded-xl bg-blue-100">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8 text-blue-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M8 14v3m4-3v3m4-3v3M3 21h18M3 10h18M3 7l9-4 9 4M4 10h16v11H4V10z" />
                  </svg>
                </div>
                <h2 className="font-evangelina text-3xl  text-black font-semibold mt-2 mb-1 text-shadow">Instituciones Gubernamentales</h2>
                <p className="text-xl font-regular text-gray-700 text-shadow mb-4">Conoce todos sobre las Instituciones Gubernamentales de la Argentina.</p>
                <div className="w-full flex justify-end">
                  <a className="text-black underline font-bold p-3 rounded-full transition hover:shadow-lg hover:bg-blue-100" href="#">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-blue-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M13 7l5 5m0 0l-5 5m5-5H6" />
                    </svg>
                  </a>
                </div>
              </div>
            </div>
          </section>
          <section className="flex">
            <div className="cursor-pointer w-full relative text-white overflow-hidden rounded-3xl flex shadow transition rounded-3xl bg-gray-50 hover:shadow-2xl hover:bg-gray-100">
              <div className="sm:max-w-sm sm:flex-none md:w-auto md:flex-auto flex flex-col items-start relative z-10 p-6 xl:p-8">
                <div className="w-16 h-16 flex items-center justify-center rounded-xl bg-blue-100">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8 text-blue-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M3 6l3 1m0 0l-3 9a5.002 5.002 0 006.001 0M6 7l3 9M6 7l6-2m6 2l3-1m-3 1l-3 9a5.002 5.002 0 006.001 0M18 7l3 9m-3-9l-6-2m0-2v2m0 16V5m0 16H9m3 0h3" />
                  </svg>
                </div>
                <h2 className="font-evangelina text-3xl  text-black font-semibold mt-2 mb-1 text-shadow">Política</h2>
                <p className="text-xl font-regular text-gray-700 text-shadow mb-4">Descubre todo sobre la política Argentina, partidos políticos y su historia.</p>
                <div className="w-full flex justify-end">
                  <a className="text-black underline font-bold p-3 rounded-full transition hover:shadow-lg hover:bg-blue-100" href="#">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-blue-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M13 7l5 5m0 0l-5 5m5-5H6" />
                    </svg>
                  </a>
                </div>
              </div>
            </div>
          </section>
          <section className="flex">
            <div className="cursor-pointer w-full relative text-white overflow-hidden rounded-3xl flex shadow transition rounded-3xl bg-gray-50 hover:shadow-2xl hover:bg-gray-100">
              <div className="sm:max-w-sm sm:flex-none md:w-auto md:flex-auto flex flex-col items-start relative z-10 p-6 xl:p-8">
                <div className="w-16 h-16 flex items-center justify-center rounded-xl bg-blue-100">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8 text-blue-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M3.055 11H5a2 2 0 012 2v1a2 2 0 002 2 2 2 0 012 2v2.945M8 3.935V5.5A2.5 2.5 0 0010.5 8h.5a2 2 0 012 2 2 2 0 104 0 2 2 0 012-2h1.064M15 20.488V18a2 2 0 012-2h3.064M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                </div>
                <h2 className="font-evangelina text-3xl  text-black font-semibold mt-2 mb-1 text-shadow">Flora y Fauna</h2>
                <p className="text-xl font-regular text-gray-700 text-shadow mb-4">Descubre la diversidad natural de todo el territorio argentino.</p>
                <div className="w-full flex justify-end">
                  <a className="text-black underline font-bold p-3 rounded-full transition hover:shadow-lg hover:bg-blue-100" href="#">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-blue-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M13 7l5 5m0 0l-5 5m5-5H6" />
                    </svg>
                  </a>
                </div>
              </div>
            </div>
          </section>
          <section className="flex">
            <div className="cursor-pointer w-full relative text-white overflow-hidden rounded-3xl flex shadow transition rounded-3xl bg-gray-50 hover:shadow-2xl hover:bg-gray-100">
              <div className="sm:max-w-sm sm:flex-none md:w-auto md:flex-auto flex flex-col items-start relative z-10 p-6 xl:p-8">
                <div className="w-16 h-16 flex items-center justify-center rounded-xl bg-blue-100">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8 text-blue-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M13 10V3L4 14h7v7l9-11h-7z" />
                  </svg>
                </div>
                <h2 className="font-evangelina text-3xl  text-black font-semibold mt-2 mb-1 text-shadow">Deporte</h2>
                <p className="text-xl font-regular text-gray-700 text-shadow mb-4">Descubre los clubes, torneos y campeonatos de todos los deportes.</p>
                <div className="w-full flex justify-end">
                  <a className="text-black underline font-bold p-3 rounded-full transition hover:shadow-lg hover:bg-blue-100" href="#">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-blue-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M13 7l5 5m0 0l-5 5m5-5H6" />
                    </svg>
                  </a>
                </div>
              </div>
            </div>
          </section>
          <section className="flex">
            <div className="cursor-pointer w-full relative text-white overflow-hidden rounded-3xl flex shadow transition rounded-3xl bg-gray-50 hover:shadow-2xl hover:bg-gray-100">
              <div className="sm:max-w-sm sm:flex-none md:w-auto md:flex-auto flex flex-col items-start relative z-10 p-6 xl:p-8">
                <div className="w-16 h-16 flex items-center justify-center rounded-xl bg-blue-100">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8 text-blue-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15 5v2m0 4v2m0 4v2M5 5a2 2 0 00-2 2v3a2 2 0 110 4v3a2 2 0 002 2h14a2 2 0 002-2v-3a2 2 0 110-4V7a2 2 0 00-2-2H5z" />
                  </svg>
                </div>
                <h2 className="font-evangelina text-3xl  text-black font-semibold mt-2 mb-1 text-shadow">Entretenimiento</h2>
                <p className="text-xl font-regular text-gray-700 text-shadow mb-4">Conoce los lugares de entretenimiento, centros recreativos, teatros y más.</p>
                <div className="w-full flex justify-end">
                  <a className="text-black underline font-bold p-3 rounded-full transition hover:shadow-lg hover:bg-blue-100" href="#">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-blue-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M13 7l5 5m0 0l-5 5m5-5H6" />
                    </svg>
                  </a>
                </div>
              </div>
            </div>
          </section>
          <section className="flex">
            <div className="cursor-pointer w-full relative text-white overflow-hidden rounded-3xl flex shadow transition rounded-3xl bg-gray-50 hover:shadow-2xl hover:bg-gray-100">
              <div className="sm:max-w-sm sm:flex-none md:w-auto md:flex-auto flex flex-col items-start relative z-10 p-6 xl:p-8">
                <div className="w-16 h-16 flex items-center justify-center rounded-xl bg-blue-100">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8 text-blue-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M3 21v-4m0 0V5a2 2 0 012-2h6.5l1 1H21l-3 6 3 6h-8.5l-1-1H5a2 2 0 00-2 2zm9-13.5V9" />
                  </svg>
                </div>
                <h2 className="font-evangelina text-3xl  text-black font-semibold mt-2 mb-1 text-shadow">Símbolos nacionales</h2>
                <p className="text-xl font-regular text-gray-700 text-shadow mb-4">Conoce todos símbolos patrios de la República Argentina.</p>
                <div className="w-full flex justify-end">
                  <a className="text-black underline font-bold p-3 rounded-full transition hover:shadow-lg hover:bg-blue-100" href="#">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-blue-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M13 7l5 5m0 0l-5 5m5-5H6" />
                    </svg>
                  </a>
                </div>
              </div>
            </div>
          </section>
          <section className="flex">
            <div className="cursor-pointer w-full relative text-white overflow-hidden rounded-3xl flex shadow transition rounded-3xl bg-gray-50 hover:shadow-2xl hover:bg-gray-100">
              <div className="sm:max-w-sm sm:flex-none md:w-auto md:flex-auto flex flex-col items-start relative z-10 p-6 xl:p-8">
                <div className="w-16 h-16 flex items-center justify-center rounded-xl bg-blue-100">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8 text-blue-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 17v-2m3 2v-4m3 4v-6m2 10H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                  </svg>
                </div>
                <h2 className="font-evangelina text-3xl  text-black font-semibold mt-2 mb-1 text-shadow">Economía</h2>
                <p className="text-xl font-regular text-gray-700 text-shadow mb-4">Accede a información crucial sobre la economía Argentina.</p>
                <div className="w-full flex justify-end">
                  <a className="text-black underline font-bold p-3 rounded-full transition hover:shadow-lg hover:bg-blue-100" href="#">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-blue-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M13 7l5 5m0 0l-5 5m5-5H6" />
                    </svg>
                  </a>
                </div>
              </div>
            </div>
          </section>
          <section className="flex">
            <div className="cursor-pointer w-full relative text-white overflow-hidden rounded-3xl flex shadow transition rounded-3xl bg-gray-50 hover:shadow-2xl hover:bg-gray-100">
              <div className="sm:max-w-sm sm:flex-none md:w-auto md:flex-auto flex flex-col items-start relative z-10 p-6 xl:p-8">
                <div className="w-16 h-16 flex items-center justify-center rounded-xl bg-blue-100">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8 text-blue-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
                  </svg>
                </div>
                <h2 className="font-evangelina text-3xl  text-black font-semibold mt-2 mb-1 text-shadow">Población y cultura</h2>
                <p className="text-xl font-regular text-gray-700 text-shadow mb-4">Accede a información sobre la población y la diversidad cultural del país.</p>
                <div className="w-full flex justify-end">
                  <a className="text-black underline font-bold p-3 rounded-full transition hover:shadow-lg hover:bg-blue-100" href="#">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-blue-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M13 7l5 5m0 0l-5 5m5-5H6" />
                    </svg>
                  </a>
                </div>
              </div>
            </div>
          </section>
        </div>
      </div>
    </div>
  )
}