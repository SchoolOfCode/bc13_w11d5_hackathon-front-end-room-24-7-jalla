import {useState, useEffect} from 'react';

export default function UseFetch(url) {
    const [data, setData] = useState("");
    const [error, setError] = useState("");
  
    useEffect(() => {
      if (undefined === url) {
        return;
      }
  
      fetch(url, {
        headers: { Accept: "application/json" },
      })
        .then((res) => res.json())
        .then((data) => {
          setData(data);
          setError(null);
        })
        .catch((err) => {
          setData(null);
          setError(err);
        });
    }, [url]);
  
    const isLoading = data === null && error == null;
  
    return {
      data: data,
      error: error,
      isLoading: isLoading,
    };
}
