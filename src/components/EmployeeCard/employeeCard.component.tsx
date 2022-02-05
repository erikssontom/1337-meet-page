import React, { FC } from "react";
import { Employee } from "types";
import SocialIcon from "../SocialIcon";
import styles from "./employeeCard.module.css";

type EmployeeCardProps = Employee;

const EmployeeCard: FC<EmployeeCardProps> = ({
  name,
  office,
  gitHub,
  twitter,
  linkedIn,
  imagePortraitUrl,
}) => {
  return (
    <div className={styles.container}>
      <img className={styles.img} src={imagePortraitUrl} alt={name} />
      <div className={styles.cardInfoGrid}>
        <div className={styles.cardInfoGridRow}>
          <h4>{name}</h4>
          <ul className={styles.socialIconList}>
            {linkedIn && (
              <li>
                <SocialIcon socialCompany="linkedIn" handle={linkedIn} />
              </li>
            )}
            {gitHub && (
              <li>
                <SocialIcon socialCompany="gitHub" handle={gitHub} />
              </li>
            )}
            {twitter && (
              <li>
                <SocialIcon socialCompany="twitter" handle={twitter} />
              </li>
            )}
          </ul>
        </div>
        <h4 className={styles.cardInfoGridRow}>Office: {office}</h4>
      </div>
    </div>
  );
};

export default EmployeeCard;
