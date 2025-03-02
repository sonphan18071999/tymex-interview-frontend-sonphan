"use client";
import {useEffect, useState} from "react";

type FetchOptions = RequestInit;

interface FetchState<T> {
    data: T | null;
    loading: boolean;
    error: string | null;
    refresh: () => void;
}

const useFetch = <T>(url: string, options?: FetchOptions, refreshInterval = 60000): FetchState<T> => {
    const [data, setData] = useState<T | null>(null);
    const [loading, setLoading] = useState<boolean>(true);
    const [error, setError] = useState<string | null>(null);

    const fetchData = async () => {
        setLoading(true);
        setError(null);

        try {
            const response = await fetch(url, options);
            if (!response.ok) {
                throw new Error(`HTTP error! Status: ${response.status}`);
            }
            const result: T = await response.json();
            setData(result);
        } catch (err) {
            setError((err as Error).message);
        } finally {
            setLoading(false);
        }
    };

    useEffect(() => {
        fetchData();

        const interval = setInterval(() => {
            fetchData();
        }, refreshInterval);

        return () => clearInterval(interval);
    }, [url, options, refreshInterval]);

    return {data, loading, error, refresh: fetchData};
};

export default useFetch;
