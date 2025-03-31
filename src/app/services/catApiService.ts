import { cache } from "react";
import { IVote } from "../interfaces/Vote";

const BASE_URL = "https://api.thecatapi.com/v1";
const API_KEY = process.env.api_key;

export const fetchAllBreeds = cache(async () => {
    const url = `${BASE_URL}/breeds`;

    try {
        const response = await fetch(url, {
            headers: {
                "Content-Type": "application/json",
                "x-api-key": API_KEY,
            },
        });
        if (!response.ok) {
            throw new Error(`HTTP error ${response.status}`);
        }
        return response.json();
    } catch (error: any) {
        throw error;
    }
});

export const createVote = async (vote: IVote, sub_id: String = "default") => {
    const url = `${BASE_URL}/votes`;

    try {
        const response = await fetch(url, {
            method: 'POST',
            headers: {
                "Content-Type": "application/json",
                "x-api-key": API_KEY
            },
            body: JSON.stringify({
                image_id: vote.id,
                value: vote.value,
                sub_id: sub_id,
            })
        });
        if (!response.ok) {
            throw new Error(`HTTP error ${response.status}`);
        }
    } catch (error: any) {
        throw error;
    }
};

export const fetchVotes = async () => {
    const url = `${BASE_URL}/votes`;

    try {
        const response = await fetch(url, {
            headers: {
                "Content-Type": "application/json",
                "x-api-key": API_KEY
            },
        });
        if (!response.ok) {
            throw new Error(`HTTP error ${response.status}`);
        }
        return response.json();
    } catch (error: any) {
        throw error;
    }
};