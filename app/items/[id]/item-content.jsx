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
  const duck = await fetch('https://random-d.uk/api/v2/random');
  const duckJson = await duck.json();
  return duckJson;
}

// --- Content Component ---
// This component receives the id and fetches its own data
export default async function ItemContent({ id }) {
  // Fetch data inside the component wrapped by Suspense
  const item = await getItem(id);
  const { message, url } = item;

  // Handle case where item might not be found after delay
  if (!item) {
    // You might want a different handling than notFound here
    // if generateStaticParams guarantees existence,
    // but this is safer if routes could be accessed directly.
    notFound();
  }

  return (
    <div className="p-4 border border-gray-400 rounded">
      <h1>{message}</h1>
      <img src={url} alt="Random duck" />
    </div>
  );
}

// Export dummyItems for generateStaticParams in the page component
export { dummyItems };
