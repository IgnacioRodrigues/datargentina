import { BookOpenIcon, ArrowSmRightIcon, MapIcon, BadgeCheckIcon, CalendarIcon, BookmarkAltIcon, HeartIcon, HandIcon, LibraryIcon, ShoppingCartIcon, PhotographIcon, ClipboardListIcon, FilmIcon, FlagIcon, CheckCircleIcon, UserGroupIcon } from '@heroicons/react/outline';

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
                  <BookOpenIcon className="h-8 w-8 text-blue-500" />
                </div>
                <h2 className="font-evangelina text-3xl text-gray-900 font-semibold mt-2 mb-1 text-shadow">Hechos historicos</h2>
                <p className="text-xl font-regular text-gray-700 text-shadow mb-4">Explora la historia, datos, sucesos e información relevante.</p>
                <div className="w-full flex justify-end">
                  <a className="text-black underline font-bold p-3 rounded-full transition hover:shadow-lg hover:bg-blue-100" href="#">
                    <ArrowSmRightIcon className="h-6 w-6 text-blue-500" />
                  </a>
                </div>
              </div>
            </div>
          </section>
          <section className="flex">
            <div className="cursor-pointer w-full relative text-white overflow-hidden rounded-3xl flex shadow transition rounded-3xl bg-gray-50 hover:shadow-2xl hover:bg-gray-100">
              <div className="sm:max-w-sm sm:flex-none md:w-auto md:flex-auto flex flex-col items-start relative z-10 p-6 xl:p-8">
                <div className="w-16 h-16 flex items-center justify-center rounded-xl bg-blue-100">
                  <MapIcon className="h-8 w-8 text-blue-500" />
                </div>
                <h2 className="font-evangelina text-3xl text-gray-900 font-semibold mt-2 mb-1 text-shadow">Datos geográficos</h2>
                <p className="text-xl font-regular text-gray-700 text-shadow mb-4">Accede a información geográfica del territorio argentino.</p>
                <div className="w-full flex justify-end">
                  <a className="text-black underline font-bold p-3 rounded-full transition hover:shadow-lg hover:bg-blue-100" href="#">
                    <ArrowSmRightIcon className="h-6 w-6 text-blue-500" />
                  </a>
                </div>
              </div>
            </div>
          </section>
          <section className="flex">
            <div className="cursor-pointer w-full relative text-white overflow-hidden rounded-3xl flex shadow transition rounded-3xl bg-gray-50 hover:shadow-2xl hover:bg-gray-100">
              <div className="sm:max-w-sm sm:flex-none md:w-auto md:flex-auto flex flex-col items-start relative z-10 p-6 xl:p-8">
                <div className="w-16 h-16 flex items-center justify-center rounded-xl bg-blue-100">
                  <BadgeCheckIcon className="h-8 w-8 text-blue-500" />
                </div>
                <h2 className="font-evangelina text-3xl text-gray-900 font-semibold mt-2 mb-1 text-shadow">Biografías</h2>
                <p className="text-xl font-regular text-gray-700 text-shadow mb-4">Conoce las biografías de las personas que hicieron historia.</p>
                <div className="w-full flex justify-end">
                  <a className="text-black underline font-bold p-3 rounded-full transition hover:shadow-lg hover:bg-blue-100" href="#">
                    <ArrowSmRightIcon className="h-6 w-6 text-blue-500" />
                  </a>
                </div>
              </div>
            </div>
          </section>
          <section className="flex">
            <div className="cursor-pointer w-full relative text-white overflow-hidden rounded-3xl flex shadow transition rounded-3xl bg-gray-50 hover:shadow-2xl hover:bg-gray-100">
              <div className="sm:max-w-sm sm:flex-none md:w-auto md:flex-auto flex flex-col items-start relative z-10 p-6 xl:p-8">
                <div className="w-16 h-16 flex items-center justify-center rounded-xl bg-blue-100">
                  <CalendarIcon className="h-8 w-8 text-blue-500" />
                </div>
                <h2 className="font-evangelina text-3xl text-gray-900 font-semibold mt-2 mb-1 text-shadow">Fechas importantes</h2>
                <p className="text-xl font-regular text-gray-700 text-shadow mb-4">Accede a fechas patrias, ferias y fechas claves de la Argentina.</p>
                <div className="w-full flex justify-end">
                  <a className="text-black underline font-bold p-3 rounded-full transition hover:shadow-lg hover:bg-blue-100" href="#">
                    <ArrowSmRightIcon className="h-6 w-6 text-blue-500" />
                  </a>
                </div>
              </div>
            </div>
          </section>
          <section className="flex">
            <div className="cursor-pointer w-full relative text-white overflow-hidden rounded-3xl flex shadow transition rounded-3xl bg-gray-50 hover:shadow-2xl hover:bg-gray-100">
              <div className="sm:max-w-sm sm:flex-none md:w-auto md:flex-auto flex flex-col items-start relative z-10 p-6 xl:p-8">
                <div className="w-16 h-16 flex items-center justify-center rounded-xl bg-blue-100">
                  <img src="./images/icons/education.svg" />
                </div>
                <h2 className="font-evangelina text-3xl text-gray-900 font-semibold mt-2 mb-1 text-shadow">Centros educativos</h2>
                <p className="text-xl font-regular text-gray-700 text-shadow mb-4">Conoce los centros educativos físicos y digitales de la Argentina.</p>
                <div className="w-full flex justify-end">
                  <a className="text-black underline font-bold p-3 rounded-full transition hover:shadow-lg hover:bg-blue-100" href="#">
                    <ArrowSmRightIcon className="h-6 w-6 text-blue-500" />
                  </a>
                </div>
              </div>
            </div>
          </section>
          <section className="flex">
            <div className="cursor-pointer w-full relative text-white overflow-hidden rounded-3xl flex shadow transition rounded-3xl bg-gray-50 hover:shadow-2xl hover:bg-gray-100">
              <div className="sm:max-w-sm sm:flex-none md:w-auto md:flex-auto flex flex-col items-start relative z-10 p-6 xl:p-8">
                <div className="w-16 h-16 flex items-center justify-center rounded-xl bg-blue-100">
                  <HeartIcon className="h-8 w-8 text-blue-500" />
                </div>
                <h2 className="font-evangelina text-3xl text-gray-900 font-semibold mt-2 mb-1 text-shadow">Hospitales, Guardias y Clinicas</h2>
                <p className="text-xl font-regular text-gray-700 text-shadow mb-4">Accede a los centros médicos del todo el país.</p>
                <div className="w-full flex justify-end">
                  <a className="text-black underline font-bold p-3 rounded-full transition hover:shadow-lg hover:bg-blue-100" href="#">
                    <ArrowSmRightIcon className="h-6 w-6 text-blue-500" />
                  </a>
                </div>
              </div>
            </div>
          </section>
          <section className="flex">
            <div className="cursor-pointer w-full relative text-white overflow-hidden rounded-3xl flex shadow transition rounded-3xl bg-gray-50 hover:shadow-2xl hover:bg-gray-100">
              <div className="sm:max-w-sm sm:flex-none md:w-auto md:flex-auto flex flex-col items-start relative z-10 p-6 xl:p-8">
                <div className="w-16 h-16 flex items-center justify-center rounded-xl bg-blue-100">
                  <HandIcon className="h-8 w-8 text-blue-500" />
                </div>
                <h2 className="font-evangelina text-3xl text-gray-900 font-semibold mt-2 mb-1 text-shadow">ONGs</h2>
                <p className="text-xl font-regular text-gray-700 text-shadow mb-4">Conoce los medios de comunicación de la Argentina.</p>
                <div className="w-full flex justify-end">
                  <a className="text-black underline font-bold p-3 rounded-full transition hover:shadow-lg hover:bg-blue-100" href="#">
                    <ArrowSmRightIcon className="h-6 w-6 text-blue-500" />
                  </a>
                </div>
              </div>
            </div>
          </section>
          <section className="flex">
            <div className="cursor-pointer w-full relative text-white overflow-hidden rounded-3xl flex shadow transition rounded-3xl bg-gray-50 hover:shadow-2xl hover:bg-gray-100">
              <div className="sm:max-w-sm sm:flex-none md:w-auto md:flex-auto flex flex-col items-start relative z-10 p-6 xl:p-8">
                <div className="w-16 h-16 flex items-center justify-center rounded-xl bg-blue-100">
                  <LibraryIcon className="h-8 w-8 text-blue-500"/>
                </div>
                <h2 className="font-evangelina text-3xl text-gray-900 font-semibold mt-2 mb-1 text-shadow">Instituciones Gubernamentales</h2>
                <p className="text-xl font-regular text-gray-700 text-shadow mb-4">Conoce todos sobre las Instituciones Gubernamentales de la Argentina.</p>
                <div className="w-full flex justify-end">
                  <a className="text-black underline font-bold p-3 rounded-full transition hover:shadow-lg hover:bg-blue-100" href="#">
                    <ArrowSmRightIcon className="h-6 w-6 text-blue-500" />
                  </a>
                </div>
              </div>
            </div>
          </section>
          <section className="flex">
            <div className="cursor-pointer w-full relative text-white overflow-hidden rounded-3xl flex shadow transition rounded-3xl bg-gray-50 hover:shadow-2xl hover:bg-gray-100">
              <div className="sm:max-w-sm sm:flex-none md:w-auto md:flex-auto flex flex-col items-start relative z-10 p-6 xl:p-8">
                <div className="w-16 h-16 flex items-center justify-center rounded-xl bg-blue-100">
                  <ShoppingCartIcon className="h-8 w-8 text-blue-500" />
                </div>
                <h2 className="font-evangelina text-3xl text-gray-900 font-semibold mt-2 mb-1 text-shadow">Comercios</h2>
                <p className="text-xl font-regular text-gray-700 text-shadow mb-4">Descubre todo sobre los comercios y negocios.</p>
                <div className="w-full flex justify-end">
                  <a className="text-black underline font-bold p-3 rounded-full transition hover:shadow-lg hover:bg-blue-100" href="#">
                    <ArrowSmRightIcon className="h-6 w-6 text-blue-500" />
                  </a>
                </div>
              </div>
            </div>
          </section>
          <section className="flex">
            <div className="cursor-pointer w-full relative text-white overflow-hidden rounded-3xl flex shadow transition rounded-3xl bg-gray-50 hover:shadow-2xl hover:bg-gray-100">
              <div className="sm:max-w-sm sm:flex-none md:w-auto md:flex-auto flex flex-col items-start relative z-10 p-6 xl:p-8">
                <div className="w-16 h-16 flex items-center justify-center rounded-xl bg-blue-100">
                  <PhotographIcon className="h-8 w-8 text-blue-500" />
                </div>
                <h2 className="font-evangelina text-3xl text-gray-900 font-semibold mt-2 mb-1 text-shadow">Flora y Fauna</h2>
                <p className="text-xl font-regular text-gray-700 text-shadow mb-4">Descubre la diversidad natural de todo el territorio argentino.</p>
                <div className="w-full flex justify-end">
                  <a className="text-black underline font-bold p-3 rounded-full transition hover:shadow-lg hover:bg-blue-100" href="#">
                    <ArrowSmRightIcon className="h-6 w-6 text-blue-500" />
                  </a>
                </div>
              </div>
            </div>
          </section>
          <section className="flex">
            <div className="cursor-pointer w-full relative text-white overflow-hidden rounded-3xl flex shadow transition rounded-3xl bg-gray-50 hover:shadow-2xl hover:bg-gray-100">
              <div className="sm:max-w-sm sm:flex-none md:w-auto md:flex-auto flex flex-col items-start relative z-10 p-6 xl:p-8">
                <div className="w-16 h-16 flex items-center justify-center rounded-xl bg-blue-100">
                  <ClipboardListIcon className="h-8 w-8 text-blue-500" />
                </div>
                <h2 className="font-evangelina text-3xl text-gray-900 font-semibold mt-2 mb-1 text-shadow">Deporte</h2>
                <p className="text-xl font-regular text-gray-700 text-shadow mb-4">Descubre los clubes, torneos y campeonatos de todos los deportes.</p>
                <div className="w-full flex justify-end">
                  <a className="text-black underline font-bold p-3 rounded-full transition hover:shadow-lg hover:bg-blue-100" href="#">
                    <ArrowSmRightIcon className="h-6 w-6 text-blue-500" />
                  </a>
                </div>
              </div>
            </div>
          </section>
          <section className="flex">
            <div className="cursor-pointer w-full relative text-white overflow-hidden rounded-3xl flex shadow transition rounded-3xl bg-gray-50 hover:shadow-2xl hover:bg-gray-100">
              <div className="sm:max-w-sm sm:flex-none md:w-auto md:flex-auto flex flex-col items-start relative z-10 p-6 xl:p-8">
                <div className="w-16 h-16 flex items-center justify-center rounded-xl bg-blue-100">
                  <FilmIcon className="h-8 w-8 text-blue-500" />
                </div>
                <h2 className="font-evangelina text-3xl text-gray-900 font-semibold mt-2 mb-1 text-shadow">Entretenimiento</h2>
                <p className="text-xl font-regular text-gray-700 text-shadow mb-4">Conoce los lugares de entretenimiento, centros recreativos, teatros y más.</p>
                <div className="w-full flex justify-end">
                  <a className="text-black underline font-bold p-3 rounded-full transition hover:shadow-lg hover:bg-blue-100" href="#">
                    <ArrowSmRightIcon className="h-6 w-6 text-blue-500" />
                  </a>
                </div>
              </div>
            </div>
          </section>
          <section className="flex">
            <div className="cursor-pointer w-full relative text-white overflow-hidden rounded-3xl flex shadow transition rounded-3xl bg-gray-50 hover:shadow-2xl hover:bg-gray-100">
              <div className="sm:max-w-sm sm:flex-none md:w-auto md:flex-auto flex flex-col items-start relative z-10 p-6 xl:p-8">
                <div className="w-16 h-16 flex items-center justify-center rounded-xl bg-blue-100">
                  <FlagIcon className="h-8 w-8 text-blue-500" />
                </div>
                <h2 className="font-evangelina text-3xl text-gray-900 font-semibold mt-2 mb-1 text-shadow">Símbolos nacionales</h2>
                <p className="text-xl font-regular text-gray-700 text-shadow mb-4">Conoce todos símbolos patrios de la República Argentina.</p>
                <div className="w-full flex justify-end">
                  <a className="text-black underline font-bold p-3 rounded-full transition hover:shadow-lg hover:bg-blue-100" href="#">
                    <ArrowSmRightIcon className="h-6 w-6 text-blue-500" />
                  </a>
                </div>
              </div>
            </div>
          </section>
          <section className="flex">
            <div className="cursor-pointer w-full relative text-white overflow-hidden rounded-3xl flex shadow transition rounded-3xl bg-gray-50 hover:shadow-2xl hover:bg-gray-100">
              <div className="sm:max-w-sm sm:flex-none md:w-auto md:flex-auto flex flex-col items-start relative z-10 p-6 xl:p-8">
                <div className="w-16 h-16 flex items-center justify-center rounded-xl bg-blue-100">
                  <CheckCircleIcon className="h-8 w-8 text-blue-500" />
                </div>
                <h2 className="font-evangelina text-3xl text-gray-900 font-semibold mt-2 mb-1 text-shadow">Economía</h2>
                <p className="text-xl font-regular text-gray-700 text-shadow mb-4">Accede a información crucial sobre la economía Argentina.</p>
                <div className="w-full flex justify-end">
                  <a className="text-black underline font-bold p-3 rounded-full transition hover:shadow-lg hover:bg-blue-100" href="#">
                    <ArrowSmRightIcon className="h-6 w-6 text-blue-500" />
                  </a>
                </div>
              </div>
            </div>
          </section>
          <section className="flex">
            <div className="cursor-pointer w-full relative text-white overflow-hidden rounded-3xl flex shadow transition rounded-3xl bg-gray-50 hover:shadow-2xl hover:bg-gray-100">
              <div className="sm:max-w-sm sm:flex-none md:w-auto md:flex-auto flex flex-col items-start relative z-10 p-6 xl:p-8">
                <div className="w-16 h-16 flex items-center justify-center rounded-xl bg-blue-100">
                  <UserGroupIcon className="h-8 w-8 text-blue-500" />
                </div>
                <h2 className="font-evangelina text-3xl text-gray-900 font-semibold mt-2 mb-1 text-shadow">Población y cultura</h2>
                <p className="text-xl font-regular text-gray-700 text-shadow mb-4">Accede a información sobre la población y la diversidad cultural del país.</p>
                <div className="w-full flex justify-end">
                  <a className="text-black underline font-bold p-3 rounded-full transition hover:shadow-lg hover:bg-blue-100" href="#">
                    <ArrowSmRightIcon className="h-6 w-6 text-blue-500" />
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