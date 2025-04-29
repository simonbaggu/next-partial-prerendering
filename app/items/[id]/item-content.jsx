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

// --- Content Component ---
// This component receives the id and fetches its own data
export default async function ItemContent({ id }) {
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

// Export dummyItems for generateStaticParams in the page component
export { dummyItems };
