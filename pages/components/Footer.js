import Image from 'next/image'

export default function Footer() {
  return (
  <>
    <footer class="bg-gray-50 pt-16 pb-12 sm:pt-20 md:pt-24 xl:pt-32 sm:pb-20">
      <div class="max-w-screen-lg xl:max-w-screen-xl mx-auto divide-y divide-gray-200 px-4 sm:px-6 md:px-8">
          <ul class="Footer_nav__2rFid text-sm font-medium pb-14 sm:pb-20 grid sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-y-10">
            <li class="space-y-5 row-span-2">
                <h2 class="text-xs font-semibold tracking-wide text-gray-900 uppercase">Empezando</h2>
                <ul class="space-y-4">
                  <li>
                      <a class="hover:text-gray-900 transition-colors duration-200" href="#">Biblioteca</a>
                  </li>
                  <li>
                      <a class="hover:text-gray-900 transition-colors duration-200" href="#">Notas de lanzamiento</a>
                  </li>
                  <li><a class="hover:text-gray-900 transition-colors duration-200" href="#">Guía de actualización</a></li>
                  <li><a class="hover:text-gray-900 transition-colors duration-200" href="#">Soporte</a></li>
                </ul>
            </li>
            <li class="space-y-5 row-span-2">
                <h2 class="text-xs font-semibold tracking-wide text-gray-900 uppercase">Conceptos centrales</h2>
                <ul class="space-y-4">
                  <li><a class="hover:text-gray-900 transition-colors duration-200" href="#">Principios</a></li>
                  <li><a class="hover:text-gray-900 transition-colors duration-200" href="#">Colaboración</a></li>
                  <li><a class="hover:text-gray-900 transition-colors duration-200" href="#">Libre acceso</a></li>
                </ul>
            </li>
            <li class="space-y-5">
                <h2 class="text-xs font-semibold tracking-wide text-gray-900 uppercase">Comunidad</h2>
                <ul class="space-y-4">
                  <li><a class="hover:text-gray-900 transition-colors duration-200" href="#">GitHub</a></li>
                  <li><a class="hover:text-gray-900 transition-colors duration-200" href="#">Discord</a></li>
                  <li><a class="hover:text-gray-900 transition-colors duration-200" href="#">Twitter</a></li>
                  <li><a class="hover:text-gray-900 transition-colors duration-200" href="#">YouTube</a></li>
                </ul>
            </li>
          </ul>
          <div class="pt-10 sm:pt-12">
            <Image
              src="/logo.png"
              alt="Data Argentina"
              width={100}
              height={100}
            />
          </div>
      </div>
    </footer>
  </>
  )
}