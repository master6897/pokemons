import { useState, useCallback } from "react";

const useHttp = (applyData) => {
    const [isLoading, setIsLoading] = useState(true);
    const [error, setError] = useState(null);

    const sendRequest = useCallback( async(config) => {
        setError(null);
        try{
            const response = await fetch(config.url);
            if(!response.ok){
                throw new Error('Something went wrong');
            }
            const data = await response.json();
            applyData(data);
        }catch(err){
            setIsLoading(true);
            setError(err.message || 'Something went wrong');
        }
        setIsLoading(false);
    },[applyData]);
    return {
        isLoading,
        error,
        sendRequest
    }
}
export default useHttp;