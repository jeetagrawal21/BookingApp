import { useState, useEffect } from 'react';
import axios from 'axios';

const useFetch = (url) => {
    const [data, setData] = useState([]);
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState(false);


    useEffect(() => {
    
        const fetchData = async () => {
    
            try {
                setLoading(true);
                const res = await axios.get(url);
                setData(res.data);
                // setError(false);
            } catch (err) {
                setError(true);
            }
            setLoading(false);

        };
        fetchData();
    }, [url])

const reFetch = async () => {
    
    try {
        setLoading(true);
        const res = await axios.get(url);
        setData(res.data);
        // setError(false);
    } catch (err) {
        setError(true);
    }
    setLoading(false);
};
    
    return { data, loading, error, reFetch };
};

export default useFetch;
