import { useState, useEffect } from 'react';
import axios from 'axios';

export const useGetRequest = (initialUrl: string, initialData: any) => {
    const [url, setUrl] = useState(initialUrl);
    const [data, setData] = useState(initialData);
    const [isLoading, setIsLoading] = useState(false);
    const [isError, setIsError] = useState(false);

    const fetchData = async (url: string) => {
        setIsError(false);
        setIsLoading(true);
        try {
            const result = await axios(url);
            setData(result.data);
        } catch (error) {
            setIsError(true);
        }
        setIsLoading(false);
    };

    useEffect(() => {
        fetchData(url);
    }, [url]);

    return { data, isLoading, isError, setUrl };
};

export default useGetRequest;
