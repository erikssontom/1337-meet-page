import React, { useEffect, useState } from "react";
import { Employee } from "types";
import ErrorCard from "../../components/ErrorCard";
import Grid from "../../components/Grid";
import ToolBar from "../../components/ToolBar";

const Meet = () => {
  const [employees, setEmployees] = useState<Employee[]>();
  const [hasErrorMessage, setHasErrorMessage] = useState(false);
  useEffect(() => {
    const apiKey = process.env.REACT_APP_API_KEY;
    const endpoint = process.env.REACT_APP_API_ENDPOINT;
    const fetchData = async (apiKey: string, endpoint: string) => {
      const res = await fetch(endpoint, {
        headers: { Authorization: apiKey },
      })
      if (!res.ok) {
        return null
      }
      const json = await res.json();
      return json
    };
    if (!apiKey || !endpoint) return;
    fetchData(apiKey, endpoint).then(data => {
      const employeeList = data as Employee[];
      if (!employeeList || employeeList.length === 0) {
        setHasErrorMessage(true);
        return;
      }
      setEmployees(data as Employee[]);
    });
  }, []);
  return (
    <div>
      <ToolBar />
      <>
        {employees && !hasErrorMessage ? <Grid employees={employees} /> :
          <ErrorCard message="Oups! Seems like our team is not available right now! Please revisit us again soon!" />}
      </>
    </div>
  );
};

export default Meet;
