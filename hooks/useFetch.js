import axios from "axios";
import {  useState } from "react";

const useFetch = () => {
    const apiKey = 'Qa4zcJTzo3dC7qQUM/E/sg==NgMsZsJ9DBx3s6jD'
    const [loading, setLoading] = useState(true);
    const [data ,setData] = useState();
    const [error, setError] = useState(false);


    const fetchData = async (params) => {

        const options = {
            method: 'GET',
            headers: {
                'X-Api-Key': apiKey
            },
            url: `https://api.api-ninjas.com/v1/cocktail?${params}`,
            contentType: 'application/json',

       }

        setLoading(true);
        setError(false);

        try {
            const response = await axios.request(options);
            
            if(response.data.length === 0) throw new Error('No drinks found');

            setData(response.data);
        }
        catch (error) {
            setError(true);
            alert(error)
        }
        finally {
            setLoading(false);
        }

    }


    return { data, loading, error, fetchData };

}
export default useFetch;