'use client'
import React, { useEffect } from "react";
import { createVote, fetchVotes } from "../services/catApiService";
import { IVote } from "../interfaces/Vote";

  {/* There is no actual lion to be found in theCatApi, so this dummy is a placeholder */}
const KING_ID: string = "dpk";

function getRandomId(): string {
    const randomString = (Math.random() + 1).toString(36).substring(7);
    return randomString
}

{/* Uses a random string for sub_id's to allow for repeated voting, until personal user accounts are implemented.*/}
async function voteInElection(vote: IVote): Promise<void> {
    await createVote(vote, getRandomId()).catch((error) =>
        console.error("Failed to create vote:", error.message)
    );
}

async function getElectionVotes(id: string, setAllVotes: Function): Promise<void> {
    const votes = await fetchVotes().catch((error) =>
        console.error("Failed to fetch votes:", error.message)
    );
    const relevantVotes = votes.filter((vote: IVote) => vote.image_id === id)
    setAllVotes(relevantVotes)
}

{/* Voting is binary. Downvoting is currently disabled for user safety.*/}
export default function VoteButtons() {
    const [vote, setVote] = React.useState<IVote>();
    const [allVotes, setAllVotes] = React.useState<IVote[]>([]);

    const handleUpvote = () => {
        const newVote: IVote = { id: KING_ID, value: 10 }
        voteInElection(newVote)
        setVote(newVote)
    };

    const handleDownVote = () => {
        const newVote: IVote = { id: KING_ID, value: -1 }
        voteInElection(newVote)
        setVote(newVote)
    };

    useEffect(() => {
        getElectionVotes(KING_ID, setAllVotes)
    }, [vote]);

    return (
        <div className="flex flex-col font-medium space-y-8 mt-4">
            <h2 className="flex flex-col font-medium text-2xl pt-4 items-center">
                Current votes: { allVotes.length }
            </h2>
            <button 
                type="button"
                className="font-bold bg-sky-700 hover:bg-sky-800 focus:ring-4 focus:ring-sky-300 focus:outline-none dark:focus:ring-sky-800 rounded-lg px-4 py-4 dark:bg-sky-600 dark:hover:bg-sky-700"
                onClick={ handleUpvote }>
                King!
            </button>
            <button 
                type="button"
                className="font-bold bg-sky-700 hover:bg-sky-800 focus:ring-4 focus:ring-sky-300 focus:outline-none dark:focus:ring-sky-800 rounded-lg px-4 py-4 dark:bg-sky-600 dark:hover:bg-sky-700 disabled:border-gray-200 disabled:bg-gray-50 disabled:text-gray-500 disabled:shadow-none dark:disabled:border-gray-700 dark:disabled:bg-gray-800/20"
                onClick={ handleDownVote }
                disabled
                >
                Not my King (disabled for your own safety)
            </button>
        </div>
    )
}