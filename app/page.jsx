import Link from 'next/link';

export default function HomePage() {
  return (
    <div className="container mx-auto p-8">
      <h1 className="text-3xl font-bold text-white mb-6">Homepage</h1>
      <p className="text-gray-400 mb-4">
        Links to test dynamic routes with Suspense:
      </p>
      <ul className="list-disc list-inside space-y-2">
        <li>
          <Link href="/items/1" className="text-blue-400 hover:text-blue-300">
            Go to Item 1 (Slow load: 1500ms)
          </Link>
        </li>
        <li>
          <Link href="/items/2" className="text-blue-400 hover:text-blue-300">
            Go to Item 2 (Medium load: 500ms)
          </Link>
        </li>
        <li>
          <Link href="/items/3" className="text-blue-400 hover:text-blue-300">
            Go to Item 3 (Fast load: 100ms)
          </Link>
        </li>
      </ul>
    </div>
  );
}
