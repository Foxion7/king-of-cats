export default function Home() {
  return (
    <main className="flex flex-col items-center p-24">
      <h1 className="mb-4 text-4xl font-extrabold leading-none text-gray-900 md:text-5xl lg:text-6xl dark:text-white">Home</h1>
      <div className="flex flex-col items-center">
        <p className="text-gray-600 dark:text-gray-400 mt-4 md:text-2xl lg:text-3xl">Welcome to the Cat Court!</p>
        <p className="text-center text-gray-600 dark:text-gray-400 mt-4 md:text-1xl lg:text-2xl">Here you can find any breed you need, or vote on a random cat to receive that royal hat!</p>
      </div>
    </main>
  );
}
