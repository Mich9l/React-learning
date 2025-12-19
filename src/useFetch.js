import { useEffect, useState } from "react";

const useFetchz = (url, initialState = null) => {
    const [data, setData] = useState(initialState);
    const [isLoading, setIsLoading] = useState(false);
    const [error, setError] = useState(false);

    const fetchData = (options = {}) => {
        setIsLoading(true);
        setError(false);

        let finalUrl = url;

        if (options.params) {
            const query = new URLSearchParams(options.params).toString();
            finalUrl += `?${query}`;
        }

        fetch(finalUrl)
            .then((res) => {
                if (!res.ok) throw new Error();
                return res.json();
            })
            .then((res) => setData(res))
            .catch(() => setError(true))
            .finally(() => setIsLoading(false));
    };

    useEffect(() => {
        fetchData();
    }, []);

    return { data, isLoading, error, refetch: fetchData };
};

export default useFetchz;
