import Image from 'next/image'

import profilePic from '../public/images/pp.jpeg'

export default function HomePage() {
    return (
        <div className="flex lg:flex-row items-center flex-col w-full">
        <div className="flex justify-center mb-5 lg:mb-0 lg:mr-10 lg:min-w-max">
          <Image className="max-w-xs max-h-80 rounded-full select-none pointer-events-none dark:brightness-90" src={profilePic} alt="Profile picture" ></Image>
        </div>
        <div className="flex flex-col w-full">
          <h1 className="text-6xl leading-none select-text text-gray-500 dark:text-gray-100">
            Rodrigo
            <strong className="block text-7xl text-primary dark:text-gray-300">Brolese</strong>
          </h1>
          <div className="flex justify-between items-center mt-3">
            <h2 className="text-gray-500 dark:text-gray-100">FULL STACK WEB DEVELOPER</h2>
            <div className="flex">
              <a className="shadow-md dark:shadow-none dark:bg-gray-100 flex items-center mr-3 w-8 h-8 rounded" href="https://github.com/RodrigoBrolese" target="blank">
                <svg xmlns="http://www.w3.org/2000/svg" className="m-auto w-6" viewBox="0 0 20 20" fill="none">
                  <path fillRule="evenodd" clipRule="evenodd" d="M10.026 0C4.517 0 0.052002 4.465 0.052002 9.974C0.052002 14.38 2.909 18.119 6.873 19.439C7.372 19.529 7.552 19.222 7.552 18.958C7.552 18.721 7.544 18.093 7.541 17.262C4.766 17.864 4.18 15.924 4.18 15.924C3.728 14.772 3.073 14.465 3.073 14.465C2.168 13.846 3.142 13.86 3.142 13.86C4.144 13.93 4.669 14.888 4.669 14.888C5.559 16.412 7.005 15.972 7.571 15.717C7.662 15.072 7.922 14.632 8.206 14.383C5.992 14.132 3.664 13.276 3.664 9.453C3.664 8.366 4.053 7.474 4.688 6.778C4.587 6.525 4.242 5.51 4.787 4.138C4.787 4.138 5.624 3.869 7.529 5.159C8.327 4.938 9.178 4.827 10.025 4.823C10.874 4.827 11.726 4.938 12.521 5.159C14.427 3.868 15.263 4.138 15.263 4.138C15.808 5.51 15.466 6.525 15.362 6.778C16.002 7.474 16.386 8.365 16.386 9.453C16.386 13.286 14.056 14.128 11.834 14.375C12.189 14.683 12.509 15.291 12.509 16.221C12.509 17.555 12.497 18.631 12.497 18.958C12.497 19.225 12.675 19.535 13.184 19.437C17.146 18.115 20 14.379 20 9.974C20 4.465 15.535 0 10.026 0Z" fill="#2E3A59"/>
                </svg>
              </a>
              <a className="shadow-md dark:shadow-none dark:bg-gray-100 flex items-center	w-8 h-8 rounded" href="https://www.linkedin.com/in/rodrigo-carara-brolese-96a170164/" target="blank">
                <svg xmlns="http://www.w3.org/2000/svg" className="m-auto w-6" viewBox="0 0 18 18" fill="none">
                  <path d="M18 18H14V11.25C14 10.1914 12.8121 9.3058 11.7535 9.3058C10.6949 9.3058 10 10.1914 10 11.25V18H6.00001V6H10V8C10.6623 6.92857 12.3564 6.23727 13.525 6.23727C15.9965 6.23727 18 8.2786 18 10.75V18ZM4 18H0V6H4V18ZM2.00001 0C3.10458 0 4.00001 0.89543 4.00001 2C4.00001 3.10457 3.10458 4 2.00001 4C0.89544 4 1.00136e-05 3.10457 1.00136e-05 2C1.00136e-05 0.89543 0.89544 0 2.00001 0Z" fill="#2E3A59"/>
                </svg>
              </a>
            </div>
          </div>
          <div className="flex sm:flex-row mt-6 flex-col">
            <div className="mb-4 sm:mb-0 sm:pr-4 sm:mr-4 sm:border-r-4">
              <h3 className="text-gray-500 dark:text-gray-100">Localização</h3>
              <p className="font-semibold text-primary dark:text-gray-300">Tubarão, SC - Brasil</p>
            </div>
            <div>
              <h3 className="text-gray-500 dark:text-gray-100">E-mail</h3>
              <p className="font-semibold text-primary dark:text-gray-300">digo.brolese@gmail.com</p>
            </div>
          </div>
        </div>
      </div>
    );
  }