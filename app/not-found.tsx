import Link from "next/link";

export default function NotFound() {
  return (
    <main className="grid min-h-screen place-items-center p-6 text-center">
      <div className="max-w-xl">
        <h1 className="mb-3 text-4xl font-bold">Page not found</h1>
        <p className="text-base-content/70 mb-6">
          The page you are looking for doesn’t exist or has been moved.
        </p>
        <div className="flex justify-center">
          <Link href="/" className="btn btn-primary">
            Go back home
          </Link>
        </div>
      </div>
    </main>
  );
}
