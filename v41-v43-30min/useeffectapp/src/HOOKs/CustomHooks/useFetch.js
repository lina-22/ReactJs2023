import React, { useEffect, useState } from "react";

export default function useFetch(url) {
  const [data, setData] = useState(null);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState(null);
  useEffect(() => {
    setTimeout(() => {
      fetch(url)
        .then((res) => {
          if (!res.ok) {
            throw Error("fecthing is not successfull"); /*1 Error*/
          } else {
            return res.json();
          }
        })
        .then((data) => {
          setData(data);
          //   console.log(todos);
          setIsLoading(false);
          setError(null); /*2 Error*/
        })
        .catch((error) => {
          /*3 Error*/
          setError(error.message); /*4 Error*/
          setIsLoading(false);
        });
    }, 2000);
  }, [url]);
  return { data, isLoading, error };
}
