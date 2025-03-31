import { IBreed } from "../interfaces/Breed";

export default function BreedCard(props: { breed: IBreed }) {
    return (
        <div className="flex items-center p-8 rounded-2xl inset-shadow-sm inset-shadow-gray-400">
            <div className="flex flex-col font-medium">
                <span className="text-2xl">{props.breed.name}</span>
                <span>Origin: {props.breed.origin}</span>
                <span>Age: {props.breed.life_span}</span>
                <span className="text-gray-600 dark:text-gray-400 mt-4">
                    <span>{props.breed.description}</span>
                </span>
            </div>
        </div>
    )
}