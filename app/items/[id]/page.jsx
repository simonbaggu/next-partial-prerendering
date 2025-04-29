import { Suspense } from 'react';
import { notFound } from 'next/navigation';
import ItemContent, { dummyItems } from './item-content';
import Ping from '#/components/ping';

export async function generateStaticParams() {
  // Ensure this runs async if needed, though not strictly necessary for dummy data
  await new Promise((resolve) => setTimeout(resolve, 10));
  // Use the imported dummyItems
  return dummyItems.map((item) => ({
    id: item.id,
  }));
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

      <Suspense fallback={<div>Loading...</div>}>
        {/* Use the imported ItemContent component */}
        <ItemContent />
      </Suspense>

      <div className="mt-6 text-gray-400">
        This part of the page is rendered immediately, outside the Suspense
        boundary.
      </div>
    </div>
  );
}
