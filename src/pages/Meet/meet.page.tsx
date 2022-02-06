import React, { useEffect, useState } from "react";
import { Employee } from "types";
import Grid from "../../components/Grid";
import ToolBar from "../../components/ToolBar";

const Meet = () => {
  const [employees, setEmployees] = useState<Employee[]>();

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
    fetchData(apiKey, endpoint).then(setEmployees);
  }, []);
  return (
    <div>
      <ToolBar />
      {employees && <Grid employees={employees} />}
    </div>
  );
};

export default Meet;
