import { Suspense } from 'react';
import { notFound } from 'next/navigation';

// --- Dummy Data ---
const dummyItems = [
  {
    id: '1',
    name: 'Item One',
    description: 'This is the first item. It loads slowly.',
    loadTime: 1500,
  }, // 1.5 seconds delay
  {
    id: '2',
    name: 'Item Two',
    description: 'The second item, loading a bit faster.',
    loadTime: 500,
  }, // 0.5 seconds delay
  {
    id: '3',
    name: 'Item Three',
    description: 'A quick loading third item.',
    loadTime: 100,
  }, // 0.1 seconds delay
];
// --- End Dummy Data ---

// Function to fetch dummy data with simulated delay
async function getItem(id) {
  const item = dummyItems.find((i) => i.id === id);
  if (item) {
    // Simulate network delay based on the item's loadTime
    await new Promise((resolve) => setTimeout(resolve, item.loadTime));
    return item;
  }
  return null;
}

// Tell Next.js which IDs to pre-render
export async function generateStaticParams() {
  // Ensure this runs async if needed, though not strictly necessary for dummy data
  await new Promise((resolve) => setTimeout(resolve, 10));
  return dummyItems.map((item) => ({
    id: item.id,
  }));
}

// --- Skeleton Component ---
function ItemSkeleton() {
  // Simple text-based skeleton
  return (
    <div className="p-4 border border-dashed border-gray-600 rounded animate-pulse">
      <div className="h-6 bg-gray-700 rounded w-3/4 mb-4"></div>
      <div className="h-4 bg-gray-700 rounded w-full mb-2"></div>
      <div className="h-4 bg-gray-700 rounded w-1/2"></div>
    </div>
  );
}

// --- Content Component ---
// This component receives the *already fetched* item data
async function ItemContent(params) {
  const { id } = await params;
  // Fetch data inside the component wrapped by Suspense
  const item = await getItem(id);

  // Handle case where item might not be found after delay
  if (!item) {
    // You might want a different handling than notFound here
    // if generateStaticParams guarantees existence,
    // but this is safer if routes could be accessed directly.
    notFound();
  }

  return (
    <div className="p-4 border border-gray-400 rounded">
      <h2 className="text-xl font-semibold mb-2">{item.name}</h2>
      <p>{item.description}</p>
      <p className="text-sm text-gray-500 mt-2">
        (Simulated load time: {item.loadTime}ms)
      </p>
    </div>
  );
}

// --- Page Component ---
export default async function ItemPage({ params }) {
  const { id } = await params;

  // Check if the ID is one of the known dummy IDs *before* suspending.
  // This prevents Suspense for invalid IDs leading to `notFound`.
  const isValidId = dummyItems.some((item) => item.id === id);
  if (!isValidId) {
    notFound();
  }

  return (
    <div className="container mx-auto p-8">
      <h1 className="text-3xl font-bold text-white mb-6">Item Details Page</h1>

      <Suspense fallback={<ItemSkeleton />}>
        {/* Pass the id to the component that will fetch data */}
        <ItemContent id={id} />
      </Suspense>

      <div className="mt-6 text-gray-400">
        This part of the page is rendered immediately, outside the Suspense
        boundary.
      </div>
    </div>
  );
}
