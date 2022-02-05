import React, { useEffect, useState } from "react";
import { Employee } from "types";
import Grid from "../../components/Grid";
import ToolBar from "../../components/ToolBar";

const Meet = () => {
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
      <ToolBar />
      <Grid />
    </div>
  );
};

export default Meet;
