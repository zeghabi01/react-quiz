import {useEffect,useState} from 'react'

const useFetch = (url) => {

  const [response, setResponse] = useState(null);
  const [error, setError] = useState(null);
  const [isLoading, setIsLoading] = useState(null);

  useEffect(() => {
    setIsLoading(true)
    const fetchData = async () => {
      try {
        const res = await fetch(url);
        const json = await res.json();
        setResponse(json);
        setIsLoading(false)
      } catch (error) {
        setError(error);
      }
    };

    fetchData();

  }, [url]);

  return { response, error, isLoading };

};

export default useFetch
