import { useState, useEffect } from 'react';
import API_KEY from './keys';

const SEARCH_ENGINE_ID = "6f41554ba99e675fb";

const useGoogleSearch = (term) => {
    const [data, setData ] = useState(null);

    useEffect(() => {
        const fetchData = async() => {
            fetch(
                `https://www.googleapis.com/customsearch/v1?key=
                ${API_KEY}&cx=${SEARCH_ENGINE_ID}&q=${term}`
            )

            .then(response => response.json())
            .then(result => {
                setData(result);
            })
        }

        fetchData();
    }, [term]);

    return { data };
};

export default useGoogleSearch;
