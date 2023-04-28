export default function SampleList() {
  return (
    <div className="w-full rounded-md bg-white p-8">
      <div className=" flex items-center justify-between pb-6">
        <div>
          <h2 className="font-semibold text-gray-600">Products Oder</h2>
          <span className="text-xs">All products item</span>
        </div>
        <div className="flex items-center justify-between">
          <div className="flex items-center rounded-md bg-gray-50 p-2">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-5 w-5 text-gray-400"
              viewBox="0 0 20 20"
              fill="currentColor"
            >
              <path
                fill-rule="evenodd"
                d="M8 4a4 4 0 100 8 4 4 0 000-8zM2 8a6 6 0 1110.89 3.476l4.817 4.817a1 1 0 01-1.414 1.414l-4.816-4.816A6 6 0 012 8z"
                clip-rule="evenodd"
              />
            </svg>
            <input
              className="ml-1 block bg-gray-50 outline-none "
              type="text"
              name=""
              id=""
              placeholder="search..."
            />
          </div>
          <div className="ml-10 space-x-8 lg:ml-40">
            <button className="cursor-pointer rounded-md bg-indigo-600 px-4 py-2 font-semibold tracking-wide text-white">
              New Report
            </button>
            <button className="cursor-pointer rounded-md bg-indigo-600 px-4 py-2 font-semibold tracking-wide text-white">
              Create
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
