import BreedCardList from '../components/BreedCardList';

export default function Page() {
    return (
        <main className="flex flex-col items-center justify-between p-24">
            <h1 className="mb-4 text-4xl font-extrabold leading-none text-gray-900 md:text-5xl lg:text-6xl dark:text-white">Breed Database</h1>
            <BreedCardList />
        </main>
    )
}