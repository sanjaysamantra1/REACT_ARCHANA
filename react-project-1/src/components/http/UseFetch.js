import axios from "axios";
import { useState } from "react";
import { useEffect } from "react";

export function useFetch(resource) {
    const [data, setdata] = useState([]);
    const [isLoading, setIsLoading] = useState(false);

    const fetchdata = async function () {
        setIsLoading(true);
        const response = await axios.get(`https://jsonplaceholder.typicode.com/${resource}`);
        setdata(response.data);
        setIsLoading(false);
    }
    useEffect(() => {
        fetchdata();
    }, []);

    return {data,isLoading}
}