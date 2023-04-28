import Image from "next/image";
import { Inter } from "next/font/google";
import Link from "next/link";

const inter = Inter({ subsets: ["latin"] });

export default function Navbar() {
  return (
    <div>
      <div className="flex h-16 w-full flex-row items-center justify-between bg-white/80 p-10 text-black backdrop-blur"></div>
      <div className="sticky top-0 flex h-16 w-full flex-row items-center justify-between bg-white/80 p-10 text-black backdrop-blur">
        <div className="font-bold">
          <Link href="/">
            <img src="title_logo.svg" alt="" />
          </Link>
        </div>
        <button className="flex flex-row items-center justify-center gap-2 rounded-xl p-3 font-bold text-black transition-all hover:bg-white hover:text-youtube-red ">
          {" "}
          Logout
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="20"
            height="20"
            fill="currentColor"
            className="bi bi-box-arrow-right"
            viewBox="0 0 16 16"
          >
            <path
              fill-rule="evenodd"
              d="M10 12.5a.5.5 0 0 1-.5.5h-8a.5.5 0 0 1-.5-.5v-9a.5.5 0 0 1 .5-.5h8a.5.5 0 0 1 .5.5v2a.5.5 0 0 0 1 0v-2A1.5 1.5 0 0 0 9.5 2h-8A1.5 1.5 0 0 0 0 3.5v9A1.5 1.5 0 0 0 1.5 14h8a1.5 1.5 0 0 0 1.5-1.5v-2a.5.5 0 0 0-1 0v2z"
            />
            <path
              fill-rule="evenodd"
              d="M15.854 8.354a.5.5 0 0 0 0-.708l-3-3a.5.5 0 0 0-.708.708L14.293 7.5H5.5a.5.5 0 0 0 0 1h8.793l-2.147 2.146a.5.5 0 0 0 .708.708l3-3z"
            />
          </svg>
        </button>
      </div>
    </div>
  );
}
