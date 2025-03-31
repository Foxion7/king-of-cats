import React, { useState } from 'react';

export default function BreedSearchBar(props: { setQuery: Function }) {
    const [breed, setBreed] = useState("")
    return (
        <div className="flex p-4 justify-center">
            <div className="mr-4">
                <input
                    type="text"
                    className="p-4 w-70 text-gray-900 bg-gray-50 rounded-lg border border-gray-300"
                    placeholder="What breed are you looking for?"
                    value={breed}
                    onChange={(event) => setBreed(event.target.value)}/>
            </div>
            <button 
                type="button"
                className="font-bold bg-sky-700 hover:bg-sky-800 focus:ring-4 focus:ring-sky-300 focus:outline-none dark:focus:ring-sky-800 rounded-lg px-4 py-4 dark:bg-sky-600 dark:hover:bg-sky-700"
                onClick={() => props.setQuery(breed)}>
                Search
            </button>
        </div>
    )
};
