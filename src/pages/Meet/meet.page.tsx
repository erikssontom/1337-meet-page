import React, { useEffect, useMemo, useState } from "react";
import { Employee, FilterParam, SortParam } from "types";
import ErrorCard from "../../components/ErrorCard";
import Grid from "../../components/Grid";
import ToolBar from "../../components/ToolBar";
import styles from './meet.module.css';

const Meet = () => {
  const [employees, setEmployees] = useState<Employee[]>();
  const [hasErrorMessage, setHasErrorMessage] = useState(false);
  const [filterParam, setFilterParam] = useState<FilterParam>({ name: '', office: '' });
  const [sortParam, setSortParam] = useState<SortParam>({ method: -1, var: 'name' });

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

  const sortedAndFilteredEmployees = useMemo(() => {
    return employees?.filter(employee => {
      return employee.name.toLowerCase().startsWith(filterParam.name.toLowerCase()) && employee.office.toLowerCase().startsWith(filterParam.office.toLowerCase());
    }).sort((eA, eB) => {
      return eA[sortParam.var] < eB[sortParam.var] ? sortParam.method : sortParam.method * -1;
    })
  }, [filterParam, sortParam, employees])

  return (
    <div className={styles.container}>
      <div>
        <h1 className={styles.meetHeading}>The fellowship of the tretton37</h1>
        <ToolBar setFilterParam={setFilterParam} setSortParam={setSortParam} />
      </div>

      <>
        {sortedAndFilteredEmployees && <Grid employees={sortedAndFilteredEmployees} />}
        {hasErrorMessage && !employees && <ErrorCard message="Oups! Seems like our team is not available right now! Please revisit us again soon!" />}
      </>
    </div>
  );
};

export default Meet;
