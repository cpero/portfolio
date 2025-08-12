export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-center gap-6 p-8">
      <h1 className="text-3xl font-bold">Tailwind + DaisyUI ✅</h1>
      <p className="text-gray-600 dark:text-gray-300">
        If you can see styled text and working components below, both are configured.
      </p>
      <div className="flex items-center gap-3">
        <button className="btn btn-primary">Primary</button>
        <button className="btn btn-secondary">Secondary</button>
        <span className="badge badge-outline">Badge</span>
      </div>
      <div role="alert" className="alert alert-success max-w-md">
        <span>DaisyUI alert example (success)</span>
      </div>
    </main>
  );
}
