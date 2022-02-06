import React, { Dispatch, FC, SetStateAction } from "react";
import { FilterParam, SortParam } from "types";
import styles from './toolBar.module.css';

type ToolBarProps = {
  setSortParam: Dispatch<SetStateAction<SortParam>>;
  setFilterParam: Dispatch<SetStateAction<FilterParam>>;
}

const ToolBar: FC<ToolBarProps> = ({ setSortParam, setFilterParam }) => {
  return <div className={styles.container}>
    <div className={styles.toolBarColumn}>
      Sort on:
      <div className={styles.toolBarRow}>
        <button className={styles.button} onClick={() => {
          setSortParam(({ method }) => { return { method: method * -1, var: 'office' } })
        }} >Office</button>
        <button className={styles.button} onClick={() => {
          setSortParam(({ method }) => { return { method: method * -1, var: 'name' } })
        }} >Name</button>
      </div>
    </div>
    <div className={styles.toolBarColumn}>
      Filter on:
      <div className={styles.toolBarRow}>
        <label>
          Office:
          <input className={styles.inputField} type="text" onChange={e => setFilterParam(({ name }) => { return { name, office: e.target.value } })} />
        </label>
        <label>
          Name:
          <input className={styles.inputField} type="text" onChange={e => setFilterParam(({ office }) => { return { office, name: e.target.value } })} />
        </label>
      </div>
    </div>
  </div >;
};

export default ToolBar;
