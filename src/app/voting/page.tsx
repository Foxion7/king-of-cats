import VoteButtons from "../components/VoteButtons";

export default function Page() {
    return (
        <main className="flex flex-col items-center justify-between p-24">
            <h1 className="mb-4 text-4xl font-extrabold leading-none text-gray-900 md:text-5xl lg:text-6xl dark:text-white">Royal election</h1>
            <div className="flex flex-col items-center pb-4">
                <p className="text-gray-600 dark:text-gray-400 my-4 md:text-2xl lg:text-3xl">Vote for a randomly chosen nominee</p>
            </div>
            <div>
                <img 
                src={"https://wilang.org/wp-content/uploads/2016/04/lion-1.jpg"}
                alt="The one true king!"
                />
                <VoteButtons />
            </div>
        </main>
    )
}