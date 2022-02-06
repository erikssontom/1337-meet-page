import React, { FC } from "react";
import { Employee } from "types";
import EmployeeCard from "../EmployeeCard";
import styles from "./grid.module.css";

type GridProps = {
  employees: Employee[];
};

const Grid: FC<GridProps> = ({ employees }) => {
  return (
    <ul className={styles.container}>
      {employees.map((employee) => (
        <li key={employee.name}>
          <EmployeeCard {...employee} />
        </li>
      ))}
    </ul>
  );
};

export default Grid;
