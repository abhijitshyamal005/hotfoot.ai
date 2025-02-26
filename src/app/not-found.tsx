import Link from "next/link";

const NotFoundPage = () => {
  return (
    <div className="flex flex-col items-center justify-center h-screen text-center">
      <h1 className="text-4xl font-bold mb-4">404 - Page Not Found</h1>
      <p className="text-gray-600 mb-6">Sorry, the page you are looking for does not exist.</p>
      <Link href="/">
        <button className="bg-orange-500 text-white px-6 py-2 rounded-lg hover:bg-orange-600 transition">
          Go Home
        </button>
      </Link>
    </div>
  );
};

export default NotFoundPage;