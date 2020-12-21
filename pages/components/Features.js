export default function Features() {
  return (
    <div className="w-full">
      <div className="relative max-w-screen-lg xl:max-w-screen-xl mx-auto w-full">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 xl:gap-8 px-4 pb-10">
          <section className="flex">
            <div className="w-full relative text-white overflow-hidden rounded-3xl flex shadow-lg">
              <div className="w-full flex md:flex-col bg-gradient-to-br from-blue-400 to-blue-500">
                <div className="sm:max-w-sm sm:flex-none md:w-auto md:flex-auto flex flex-col items-start relative z-10 p-6 xl:p-8">
                  <h2 className="text-xl font-semibold mb-2 text-shadow">Hechos historicos</h2>
                  <p className="font-medium text-violet-100 text-shadow mb-4">Explora la historia, datos, información importante.</p>
                  <a className="bg-white text-blue-500 rounded-xl p-4 font-bold hover:bg-gray-100" href="#">Explorar</a>
                </div>
              </div>
            </div>
          </section>
          <section className="flex">
            <div className="w-full relative text-white overflow-hidden rounded-3xl flex shadow-lg">
              <div className="w-full flex md:flex-col bg-gradient-to-br from-purple-500 to-purple-700">
                <div className="sm:max-w-sm sm:flex-none md:w-auto md:flex-auto flex flex-col items-start relative z-10 p-6 xl:p-8">
                  <h2 className="text-xl font-semibold mb-2 text-shadow">Datos geograficos</h2>
                  <p className="font-medium text-violet-100 text-shadow mb-4">Explora la historia, datos, información importante.</p>
                  <a className="bg-white text-purple-700 rounded-xl p-4 font-bold hover:bg-gray-100" href="#">Explorar</a>
                </div>
              </div>
            </div>
          </section>
          <section className="flex">
            <div className="w-full relative text-white overflow-hidden rounded-3xl flex shadow-lg">
              <div className="w-full flex md:flex-col bg-gradient-to-br from-pink-500 to-pink-700">
                <div className="sm:max-w-sm sm:flex-none md:w-auto md:flex-auto flex flex-col items-start relative z-10 p-6 xl:p-8">
                  <h2 className="text-xl font-semibold mb-2 text-shadow">Biografías</h2>
                  <p className="font-medium text-violet-100 text-shadow mb-4">Explora la historia, datos, información importante.</p>
                  <a className="bg-white text-pink-700 rounded-xl p-4 font-bold hover:bg-gray-100" href="#">Explorar</a>
                </div>
              </div>
            </div>
          </section>
          <section className="flex">
            <div className="w-full relative text-white overflow-hidden rounded-3xl flex shadow-lg">
              <div className="w-full flex md:flex-col bg-gradient-to-br from-yellow-400 to-yellow-600">
                <div className="sm:max-w-sm sm:flex-none md:w-auto md:flex-auto flex flex-col items-start relative z-10 p-6 xl:p-8">
                  <h2 className="text-xl font-semibold mb-2 text-shadow">Fechas importantes</h2>
                  <p className="font-medium text-violet-100 text-shadow mb-4">Explora la historia, datos, información importante.</p>
                  <a className="bg-white text-yellow-600 rounded-xl p-4 font-bold hover:bg-gray-100" href="#">Explorar</a>
                </div>
              </div>
            </div>
          </section>
          <section className="flex">
            <div className="w-full relative text-white overflow-hidden rounded-3xl flex shadow-lg">
              <div className="w-full flex md:flex-col bg-gradient-to-br from-red-500 to-red-700">
                <div className="sm:max-w-sm sm:flex-none md:w-auto md:flex-auto flex flex-col items-start relative z-10 p-6 xl:p-8">
                  <h2 className="text-xl font-semibold mb-2 text-shadow">Centros de educación</h2>
                  <p className="font-medium text-violet-100 text-shadow mb-4">Explora la historia, datos, información importante.</p>
                  <a className="bg-white text-red-700 rounded-xl p-4 font-bold hover:bg-gray-100" href="#">Explorar</a>
                </div>
              </div>
            </div>
          </section>
          <section className="flex">
            <div className="w-full relative text-white overflow-hidden rounded-3xl flex shadow-lg">
              <div className="w-full flex md:flex-col bg-gradient-to-br from-green-500 to-green-700">
                <div className="sm:max-w-sm sm:flex-none md:w-auto md:flex-auto flex flex-col items-start relative z-10 p-6 xl:p-8">
                  <h2 className="text-xl font-semibold mb-2 text-shadow">Hospitales, Guardias y Clinicas</h2>
                  <p className="font-medium text-violet-100 text-shadow mb-4">Explora la historia, datos, información importante.</p>
                  <a className="bg-white text-green-700 rounded-xl p-4 font-bold hover:bg-gray-100" href="#">Explorar</a>
                </div>
              </div>
            </div>
          </section>
        </div>
      </div>
    </div>
  )
}