import { useEffect, useState } from "react";

export const useFetch = (url) => {
  const [data, setData] = useState(null);
  const [error, setError] = useState(null);
  const [pending, ispeding] = useState(false);

  useEffect(() => {
    const getData = async () => {
      ispeding(true);

      try {
        const req = await fetch(url);
        if (!req.ok) {
          throw new Error("xatolik");
        }

        const data = await req.json();
        setData(data);
      } catch (error) {
        console.log(error.message);
        setError(error.message);
      } finally {
        ispeding(false);
      }
    };
    getData();
  }, [url]);
  return { data, error, pending };
};
