import { useEffect, useState } from "react";
import { TJsonFileName } from "../types";

export const usePublicJson = <T extends object>(filename: TJsonFileName) => {
  const [data, setData] = useState<T[]>([]);
  const [isLoading, setIsLoading] = useState<boolean>();
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const fetchData = async () => {
      setIsLoading(true);

      try {
        const response = await fetch(`/${filename}.json`);
        const json = await response.json();
        const firstValue = Object.values(json)[0];

        if (Array.isArray(firstValue)) {
          setData(firstValue as T[]);
        } else {
          throw new Error("El JSON no contiene un array válido");
        }
      } catch (error) {
        setError((error as Error).message);
        setData([]);
        setIsLoading(false);
      }

      setIsLoading(false);
    };

    fetchData();
  }, [filename]);

  return {
    data,
    isLoading,
    error,
  };
};
