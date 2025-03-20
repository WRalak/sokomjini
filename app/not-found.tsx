

import Link from "next/link";

export default function NotFound() {
  return (
    <div className="flex flex-col items-center justify-center h-screen text-center ">
      <h1 className="text-6xl font-bold text-gray-800 mb-4">404</h1>
      <p className="text-lg text-gray-600 mb-6">Oops! Page Not Found.</p>
      <Link href="/">
        <span className="bg-orange-500 text-white px-6 py-3 rounded-full text-lg hover:bg-orange-300 transition">
          Go to Home
        </span>
      </Link>
    </div>
  );
}

