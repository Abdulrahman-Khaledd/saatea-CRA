import { useEffect, useState } from "react";

const URL = (process.env.NODE_ENV || 'production') === 'development'
  ? 'http://192.168.1.20'
  : 'https://saatea.great-site.net';

export const useAuth = () => {
  const [isValidUser, setIsValidUser] = useState(false);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const fetchData = async () => {
      const token = localStorage.getItem("token");
      try {
        setIsLoading(true);
        const res = await fetch(URL + "/api/myaccount", {
          method: "POST",
          headers: {
            Authorization: `Bearer ${token}`,
            "Content-Type": "application/json",
          },
        });

        const data = await res.json();
        setIsValidUser(data.success);
      } catch (err) {
        console.error("Auth Error:", err);
      } finally {
        setIsLoading(false);
      }
    };

    fetchData();
  }, []);

  return { isValidUser, isLoading };
};
