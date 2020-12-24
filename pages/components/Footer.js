import Image from 'next/image'

export default function Footer() {
  return (
  <>
    <footer class="bg-gray-50 pt-6 pb-4 border border-t-2 border-solid border-gray-200">
      <div class="max-w-screen-lg xl:max-w-screen-xl mx-auto divide-y divide-gray-200 px-4 sm:px-6 md:px-8">
          <ul class="text-sm font-medium flex justify-between">
            <li class="space-y-5 row-span-2">
              <div className="flex items-center">
                <Image
                  src="/logo.png"
                  alt="Data Argentina"
                  width={50}
                  height={50}
                />
                <a class="hover:text-gray-900 transition-colors duration-200 ml-4" href="#">Data Argentina</a>
              </div>
            </li>
            <li class="space-y-5 row-span-2">
                <ul class="space-y-4">
                  <li><a class="hover:text-gray-900 transition-colors duration-200" href="https://github.com/ignaciorodrigues/datargentina">Github</a></li>
                  <li><a class="hover:text-gray-900 transition-colors duration-200" href="https://github.com/ignaciorodrigues/datargentina">Colaboración</a></li>
                </ul>
            </li>
          </ul>
      </div>
    </footer>
  </>
  )
}