export default function Dashboard() {
  return (
    <div className="bg-white">
      <div className="fixed bottom-4 right-4 xl:right-20">
        <a
          href="https://www.buymeacoffee.com/ejulfaey"
          target="_blank"
          className="flex transform animate-bounce items-center justify-between gap-4 rounded-lg bg-yellow-400 px-4 py-3 font-mono font-semibold shadow duration-500 ease-in-out hover:shadow-xl"
        >
          <img
            className="h-8 w-8 rounded"
            src="https://img.buymeacoffee.com/api/?name=Ejul&size=300&bg-image=bmc&background=5F7FFF"
            alt="buymeacoffee"
          />
          Buy Me A Coffee
        </a>
      </div>
      <nav className="md:mx-w-6xl p-4 md:container md:mx-auto md:py-8 xl:px-0">
        <div className="hidden lg:flex lg:items-center lg:justify-between">
          <a href="#" className="group flex items-start gap-2">
            <div className="rounded-md bg-blue-600 p-2 text-white group-hover:bg-blue-800">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-6 w-6"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="2"
                  d="M9.75 17L9 20l-1 1h8l-1-1-.75-3M3 13h18M5 17h14a2 2 0 002-2V5a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
                />
              </svg>
            </div>
            <p className="text-sm font-light uppercase">
              Dashboard
              <span className="block text-base font-bold tracking-widest">
                Atom
              </span>
            </p>
          </a>
          <ul className="flex items-center space-x-4 text-sm font-semibold">
            <li>
              <a
                href="#"
                className="rounded-md px-2 py-2 text-gray-800 hover:bg-gray-200 xl:px-4"
              >
                My Account
              </a>
            </li>
            <li className="relative" x-data="{ open: false }">
              <a
                href="#"
                className="flex items-center gap-2 rounded-md px-2 py-2 text-gray-600 hover:bg-gray-200 xl:px-4"
              >
                Transactions
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-4 w-4 transform stroke-current stroke-2 text-gray-800 duration-500 ease-in-out"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    stroke-width="2"
                    d="M9 5l7 7-7 7"
                  />
                </svg>{" "}
              </a>
              <ul
                x-cloak
                x-show="open"
                x-transition
                className="absolute left-0 top-10 w-64 overflow-hidden rounded-md bg-white p-4 shadow"
              >
                <li>
                  <a
                    href="#"
                    className="block flex items-center gap-2 rounded p-4 text-sm text-gray-600 hover:bg-gray-100"
                  >
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      className="h-4 w-4"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                    >
                      <path
                        stroke-linecap="round"
                        stroke-linejoin="round"
                        stroke-width="2"
                        d="M9 5l7 7-7 7"
                      />
                    </svg>
                    Transaction ABC
                  </a>
                </li>
                <li>
                  <a
                    href="#"
                    className="block flex items-center gap-2 rounded p-4 text-sm text-gray-600 hover:bg-gray-100"
                  >
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      className="h-4 w-4"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                    >
                      <path
                        stroke-linecap="round"
                        stroke-linejoin="round"
                        stroke-width="2"
                        d="M9 5l7 7-7 7"
                      />
                    </svg>
                    Transaction DEF
                  </a>
                </li>
                <li>
                  <a
                    href="#"
                    className="block flex items-center gap-2 rounded p-4 text-sm text-gray-600 hover:bg-gray-100"
                  >
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      className="h-4 w-4"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                    >
                      <path
                        stroke-linecap="round"
                        stroke-linejoin="round"
                        stroke-width="2"
                        d="M9 5l7 7-7 7"
                      />
                    </svg>
                    Transaction GHI
                  </a>
                </li>
              </ul>
            </li>
            <li>
              <a
                href="#"
                className="rounded-md px-2 py-2 text-gray-600 hover:bg-gray-200 xl:px-4"
              >
                Cards{" "}
              </a>
            </li>
            <li>
              <a
                href="#"
                className="rounded-md px-2 py-2 text-gray-600 hover:bg-gray-200 xl:px-4"
              >
                Offers
              </a>
            </li>
          </ul>
          <ul className="flex space-x-2 text-sm font-semibold xl:space-x-4">
            <li>
              <a href="#">
                <div className="rounded p-2 hover:bg-gray-200">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-4 w-4 stroke-current text-gray-800"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      stroke-width="2"
                      d="M10.325 4.317c.426-1.756 2.924-1.756 3.35 0a1.724 1.724 0 002.573 1.066c1.543-.94 3.31.826 2.37 2.37a1.724 1.724 0 001.065 2.572c1.756.426 1.756 2.924 0 3.35a1.724 1.724 0 00-1.066 2.573c.94 1.543-.826 3.31-2.37 2.37a1.724 1.724 0 00-2.572 1.065c-.426 1.756-2.924 1.756-3.35 0a1.724 1.724 0 00-2.573-1.066c-1.543.94-3.31-.826-2.37-2.37a1.724 1.724 0 00-1.065-2.572c-1.756-.426-1.756-2.924 0-3.35a1.724 1.724 0 001.066-2.573c-.94-1.543.826-3.31 2.37-2.37.996.608 2.296.07 2.572-1.065z"
                    />
                    <path
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      stroke-width="2"
                      d="M15 12a3 3 0 11-6 0 3 3 0 016 0z"
                    />
                  </svg>
                </div>
              </a>
            </li>
            <li>
              <a href="#">
                <div className="rounded p-2 hover:bg-gray-200">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-4 w-4 stroke-current text-gray-800"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      stroke-width="2"
                      d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
                    />
                  </svg>
                </div>
              </a>
            </li>
            <li>
              <a href="#">
                <div className="rounded p-2 hover:bg-gray-200">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-4 w-4 stroke-current text-gray-800"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      stroke-width="2"
                      d="M15 17h5l-1.405-1.405A2.032 2.032 0 0118 14.158V11a6.002 6.002 0 00-4-5.659V5a2 2 0 10-4 0v.341C7.67 6.165 6 8.388 6 11v3.159c0 .538-.214 1.055-.595 1.436L4 17h5m6 0v1a3 3 0 11-6 0v-1m6 0H9"
                    />
                  </svg>
                </div>
              </a>
            </li>
          </ul>
          <ul className="flex items-center gap-6">
            <li>
              <a
                href="#"
                className="font-sans text-sm font-semibold tracking-wider text-gray-800"
              >
                Derol Hakim
              </a>
            </li>
            <li>
              <a href="#">
                <div className="rounded p-2 hover:bg-gray-200">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-5 w-5 stroke-current text-gray-800"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      stroke-width="2"
                      d="M17 16l4-4m0 0l-4-4m4 4H7m6 4v1a3 3 0 01-3 3H6a3 3 0 01-3-3V7a3 3 0 013-3h4a3 3 0 013 3v1"
                    />
                  </svg>
                </div>
              </a>
            </li>
          </ul>
        </div>
        <div
          x-data="{ open: false }"
          className="relative flex w-full justify-between lg:hidden"
        >
          <a href="#" className="group flex items-start gap-2">
            <div className="rounded-md bg-blue-600 p-3 text-white group-hover:bg-blue-800">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-6 w-6"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="2"
                  d="M9.75 17L9 20l-1 1h8l-1-1-.75-3M3 13h18M5 17h14a2 2 0 002-2V5a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
                />
              </svg>
            </div>
            <p className="text-sm font-light uppercase">
              Dashboard
              <span className="block text-base font-bold tracking-widest">
                Atom
              </span>
            </p>
          </a>
          <button type="button" className="rounded-md bg-gray-200 p-3">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-6 w-6"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="2"
                d="M4 6h16M4 12h16M4 18h7"
              />
            </svg>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-6 w-6"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="2"
                d="M6 18L18 6M6 6l12 12"
              />
            </svg>
          </button>
          <div
            x-show="open"
            x-transition
            className="absolute left-0 right-0 top-14 w-full rounded-md border bg-white"
          >
            <ul className="p-4">
              <li className="rounded px-4 py-2 hover:bg-gray-200">
                <a href="#" className="flex items-center gap-4">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-3 w-3"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      stroke-width="2"
                      d="M9 5l7 7-7 7"
                    />
                  </svg>
                  My Account
                </a>
              </li>
              <li className="rounded px-4 py-2 hover:bg-gray-200">
                <a href="#" className="flex items-center gap-4">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-3 w-3"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      stroke-width="2"
                      d="M9 5l7 7-7 7"
                    />
                  </svg>
                  Transactions
                </a>
              </li>
              <li className="rounded px-4 py-2 hover:bg-gray-200">
                <a href="#" className="flex items-center gap-4">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-3 w-3"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      stroke-width="2"
                      d="M9 5l7 7-7 7"
                    />
                  </svg>
                  Cards
                </a>
              </li>
              <li className="rounded px-4 py-2 hover:bg-gray-200">
                <a href="#" className="flex items-center gap-4">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-3 w-3"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      stroke-width="2"
                      d="M9 5l7 7-7 7"
                    />
                  </svg>
                  Offers
                </a>
              </li>
            </ul>
          </div>
        </div>
      </nav>

      <main className="mx-w-6xl container mx-auto py-4">
        <div className="flex flex-col space-y-8">
          <div className="grid grid-cols-1 gap-y-4 px-4 md:grid-cols-4 md:gap-6 xl:grid-cols-5 xl:p-0">
            <div className="rounded-2xl border border-gray-50 bg-white p-6 md:col-span-2 xl:col-span-3">
              <div className="flex flex-col space-y-6 md:h-full md:justify-between">
                <div className="flex justify-between">
                  <span className="text-xs font-semibold uppercase tracking-wider text-gray-500">
                    Main Account
                  </span>
                  <span className="text-xs font-semibold uppercase tracking-wider text-gray-500">
                    Available Funds
                  </span>
                </div>
                <div className="flex items-center justify-between gap-2 md:gap-4">
                  <div className="flex flex-col space-y-4">
                    <h2 className="font-bold leading-tight tracking-widest text-gray-800">
                      Derol's Savings Account
                    </h2>
                    <div className="flex items-center gap-4">
                      <p className="text-lg tracking-wider text-gray-600">
                        **** **** *321
                      </p>
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        className="h-4 w-4"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                      >
                        <path
                          stroke-linecap="round"
                          stroke-linejoin="round"
                          stroke-width="2"
                          d="M17 8l4 4m0 0l-4 4m4-4H3"
                        />
                      </svg>
                    </div>
                  </div>
                  <h2 className="text-lg font-black tracking-wider text-gray-700 md:text-xl xl:text-3xl">
                    <span className="md:text-xl">$</span>
                    92,817.45
                  </h2>
                </div>
                <div className="flex gap-2 md:gap-4">
                  <a
                    href="#"
                    className="w-full rounded-lg bg-blue-600 px-5 py-3 text-center text-xs font-semibold tracking-wider text-white hover:bg-blue-800 md:w-auto"
                  >
                    Transfer Money
                  </a>
                  <a
                    href="#"
                    className="w-full rounded-lg bg-blue-50 px-5 py-3 text-center text-xs font-semibold tracking-wider text-blue-600 hover:bg-blue-600 hover:text-white md:w-auto"
                  >
                    Link Account
                  </a>
                </div>
              </div>
            </div>
            <div className="col-span-2 flex flex-col justify-between rounded-2xl bg-gradient-to-r from-blue-500 to-blue-800 p-6">
              <div className="flex flex-col">
                <p className="font-bold text-white">
                  Lorem ipsum dolor sit amet
                </p>
                <p className="mt-1 max-w-sm text-xs font-light leading-tight text-gray-50 md:text-sm">
                  Lorem ipsum dolor sit amet consectetur adipisicing elit. Odio
                  soluta saepe consequuntur facilis ab a. Molestiae ad saepe
                  assumenda praesentium rem dolore? Exercitationem, neque
                  obcaecati?
                </p>
              </div>
              <div className="flex items-end justify-between">
                <a
                  href="#"
                  className="rounded-lg bg-blue-800 px-4 py-3 text-xs font-semibold tracking-wider text-white hover:bg-blue-600 hover:text-white"
                >
                  Learn More
                </a>
                <img
                  src="https://atom.dzulfarizan.com/assets/calendar.png"
                  alt="calendar"
                  className="h-24 w-auto object-cover"
                />
              </div>
            </div>
          </div>

          <div className="grid grid-cols-1 items-start gap-y-4 px-4 md:grid-cols-5 md:gap-6 xl:p-0">
            <div className="col-start-1 col-end-5">
              <h2 className="text-xs font-bold tracking-wide text-gray-800 md:text-sm">
                Summary Transactions
              </h2>
            </div>
            <div className="col-span-2 flex flex-col space-y-6 rounded-xl border border-gray-50 bg-white p-6">
              <div className="flex grid grid-cols-1 items-center justify-between md:grid-cols-2 xl:grid-cols-3">
                <div className="cursor-pointer border p-4">
                  <span className="text-xs font-semibold text-gray-500">
                    Daily
                  </span>
                  <h2 className="font-bold tracking-wider text-gray-800">
                    $ 27.80
                  </h2>
                </div>
                <div className="cursor-pointer border p-4">
                  <span className="text-xs font-semibold text-gray-500">
                    Weekly
                  </span>
                  <h2 className="font-bold tracking-wider text-gray-800">
                    $ 192.92
                  </h2>
                </div>
                <div className="cursor-pointer border p-4">
                  <span className="text-xs font-semibold text-gray-500">
                    Monthly
                  </span>
                  <h2 className="font-bold tracking-wider text-gray-800">
                    $ 501.10
                  </h2>
                </div>
              </div>
              <canvas id="myChart"></canvas>
            </div>
            <div className="col-span-3 flex flex-col space-y-6 rounded-xl border border-gray-50 bg-white p-6">
              <div className="flex items-center justify-between">
                <h2 className="text-sm font-bold tracking-wide text-gray-600">
                  Latest Transactions
                </h2>
                <a
                  href="#"
                  className="rounded bg-blue-100 px-4 py-2 text-xs font-semibold uppercase tracking-wider text-blue-500 hover:bg-blue-300"
                >
                  More
                </a>
              </div>
              <ul className="w-full divide-y-2 divide-gray-100 overflow-x-auto">
                <li className="flex justify-between py-3 text-sm font-semibold text-gray-500">
                  <p className="px-4 font-semibold">Today</p>
                  <p className="px-4 text-gray-600">McDonald</p>
                  <p className="px-4 tracking-wider">Cash</p>
                  <p className="px-4 text-blue-600">Food</p>
                  <p className="flex items-center gap-2 text-gray-800 md:text-base">
                    16.90
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      className="h-4 w-4"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                    >
                      <path
                        stroke-linecap="round"
                        stroke-linejoin="round"
                        stroke-width="2"
                        d="M19 9l-7 7-7-7"
                      />
                    </svg>
                  </p>
                </li>
                <li className="flex justify-between py-3 text-sm font-semibold text-gray-500">
                  <p className="px-4 font-semibold">Today</p>
                  <p className="px-4 text-gray-600">McDonald</p>
                  <p className="px-4 tracking-wider">Cash</p>
                  <p className="px-4 text-blue-600">Food</p>
                  <p className="flex items-center gap-2 text-gray-800 md:text-base">
                    16.90
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      className="h-4 w-4"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                    >
                      <path
                        stroke-linecap="round"
                        stroke-linejoin="round"
                        stroke-width="2"
                        d="M19 9l-7 7-7-7"
                      />
                    </svg>
                  </p>
                </li>
                <li className="flex justify-between py-3 text-sm font-semibold text-gray-500">
                  <p className="px-4 font-semibold">Today</p>
                  <p className="px-4 text-gray-600">McDonald</p>
                  <p className="px-4 tracking-wider">Cash</p>
                  <p className="px-4 text-blue-600">Food</p>
                  <p className="flex items-center gap-2 text-gray-800 md:text-base">
                    16.90
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      className="h-4 w-4"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                    >
                      <path
                        stroke-linecap="round"
                        stroke-linejoin="round"
                        stroke-width="2"
                        d="M19 9l-7 7-7-7"
                      />
                    </svg>
                  </p>
                </li>
                <li className="flex justify-between py-3 text-sm font-semibold text-gray-500">
                  <p className="px-4 font-semibold">Today</p>
                  <p className="px-4 text-gray-600">McDonald</p>
                  <p className="px-4 tracking-wider">Cash</p>
                  <p className="px-4 text-blue-600">Food</p>
                  <p className="flex items-center gap-2 text-gray-800 md:text-base">
                    16.90
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      className="h-4 w-4"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                    >
                      <path
                        stroke-linecap="round"
                        stroke-linejoin="round"
                        stroke-width="2"
                        d="M19 9l-7 7-7-7"
                      />
                    </svg>
                  </p>
                </li>
                <li className="flex justify-between py-3 text-sm font-semibold text-gray-500">
                  <p className="px-4 font-semibold">Today</p>
                  <p className="px-4 text-gray-600">McDonald</p>
                  <p className="px-4 tracking-wider">Cash</p>
                  <p className="px-4 text-blue-600">Food</p>
                  <p className="flex items-center gap-2 text-gray-800 md:text-base">
                    16.90
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      className="h-4 w-4"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                    >
                      <path
                        stroke-linecap="round"
                        stroke-linejoin="round"
                        stroke-width="2"
                        d="M19 9l-7 7-7-7"
                      />
                    </svg>
                  </p>
                </li>
                <li className="flex justify-between py-3 text-sm font-semibold text-gray-500">
                  <p className="px-4 font-semibold">Today</p>
                  <p className="px-4 text-gray-600">McDonald</p>
                  <p className="px-4 tracking-wider">Cash</p>
                  <p className="px-4 text-blue-600">Food</p>
                  <p className="flex items-center gap-2 text-gray-800 md:text-base">
                    16.90
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      className="h-4 w-4"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                    >
                      <path
                        stroke-linecap="round"
                        stroke-linejoin="round"
                        stroke-width="2"
                        d="M19 9l-7 7-7-7"
                      />
                    </svg>
                  </p>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
}
