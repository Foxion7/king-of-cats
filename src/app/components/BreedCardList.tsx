"use client"
import React, { useState, useEffect } from 'react';
import { fetchAllBreeds } from "../services/catApiService";
import { IBreed } from '../interfaces/Breed';
import BreedCard from './BreedCard';
import BreedSearchBar from './BreedSearchBar';


async function initializeAllBreeds(setAllBreeds: Function) {
    const allBreedsData = await fetchAllBreeds().catch((error) =>
        console.error("Error fetching all breeds:", error.message)
    );
    setAllBreeds(allBreedsData)
}

function filterBreedsByQuery(query: String, allBreeds: IBreed[], setFilteredBreeds: Function) {
    if (query === "") {
        setFilteredBreeds(allBreeds)
    } else {
        const filteredBreeds = allBreeds.filter((breed: IBreed) => breed.name.toLowerCase().includes(query.toLowerCase()))
        setFilteredBreeds(filteredBreeds)
    }
}

export default function BreedCardList() {
    const [query, setQuery] = useState<String>("")
    const [allBreeds, setAllBreeds] = useState<IBreed[]>([])
    const [filteredBreeds, setFilteredBreeds] = useState<IBreed[]>([])
    
    {/* Fetch and cache all breeds on startup. */}
    useEffect(() => {
        initializeAllBreeds(setAllBreeds)
    }, []);

    useEffect(() => {
        filterBreedsByQuery(query, allBreeds, setFilteredBreeds)
    }, [allBreeds, query]);

    return (
        <div>
            <BreedSearchBar setQuery={setQuery} />
            <div className="space-y-6">
            {
                filteredBreeds.map((breed: IBreed, i: number) => (
                    <BreedCard key={i} breed={breed} />
                ))
            }
            </div>
        </div>
    )
}