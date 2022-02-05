import React, { useEffect } from "react";
import Meet from "./pages/Meet";
const App = () => {
  useEffect(() => {
    const apiKey = process.env.REACT_APP_API_KEY;
    const endpoint = process.env.REACT_APP_API_ENDPOINT;
    const fetchData = async (apiKey: string, endpoint: string) => {
      const res = await fetch(endpoint, {
        headers: { Authorization: apiKey },
      });
      const json = await res.json();
      return json;
    };
    if (!apiKey || !endpoint) return;
    // fetchData(apiKey, endpoint).then(console.log);
  }, []);
  return (
    <div>
      App
      <Meet />
    </div>
  );
};

export default App;
