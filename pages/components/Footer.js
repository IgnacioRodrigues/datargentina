import Image from 'next/image'

export default function Footer() {
  return (
  <>
    <footer className="bg-gray-50 pt-6 pb-4 border border-t-2 border-solid border-gray-200">
      <div className="max-w-screen-lg xl:max-w-screen-xl mx-auto divide-y divide-gray-200 px-4 sm:px-6 md:px-8">
          <ul className="text-sm font-medium flex justify-between">
            <li className="space-y-5 row-span-2">
              <div className="flex items-center">
                <img src="./images/logo.png" className="w-10 h-10" alt="Data Argentina" />
                <a className="hover:text-gray-900 transition-colors duration-200 ml-4" href="#">Data Argentina</a>
              </div>
            </li>
            <li className="space-y-5 row-span-2">
                <ul className="space-y-4">
                  <li><a className="hover:text-gray-900 transition-colors duration-200" href="https://github.com/ignaciorodrigues/datargentina">Github</a></li>
                  <li><a className="hover:text-gray-900 transition-colors duration-200" href="https://github.com/ignaciorodrigues/datargentina">Colaboración</a></li>
                </ul>
            </li>
          </ul>
      </div>
    </footer>
  </>
  )
}