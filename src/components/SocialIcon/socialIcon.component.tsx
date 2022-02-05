import React, { FC } from "react";
import styles from "./socialIcon.module.css";
import githubIcon from "../../assets/images/github.svg";
import linkedInIcon from "../../assets/images/linkedin.svg";
import twitterIcon from "../../assets/images/twitter.svg";

type SocialIconProps = {
  socialCompany: "linkedIn" | "gitHub" | "twitter";
  handle: string;
};

const SocialIcon: FC<SocialIconProps> = ({ socialCompany, handle }) => {
  const socialIcons = {
    linkedIn: linkedInIcon,
    gitHub: githubIcon,
    twitter: twitterIcon,
  };
  return (
    <a
      href={`https://www.${socialCompany}.com/${handle}`}
      target="_blank"
      rel="noopener noreferrer"
    >
      <img
        className={styles.img}
        src={socialIcons[socialCompany]}
        alt={`${socialCompany} icon`}
      />
    </a>
  );
};

export default SocialIcon;
