import React from "react";
import "./Footer.css";
import FooterColumn from "../FooterColumn";

const companyList = [
  {
    title: "About Playnow",
    link: "https://google.com"
  },
  {
    title: "Jobs",
    link: "https://google.com"
  }
];
const legalList = [
  {
    title: "Terms of Use",
    link: "https://google.com"
  },
  {
    title: "Privacy Policy",
    link: "https://google.com"
  },
  {
    title: "Copyright",
    link: "https://google.com"
  }
];
const communityList = [
  {
    title: "Guidelines",
    link: "https://google.com"
  },
  {
    title: "Support",
    link: "https://google.com"
  }
];
const businessList = [
  {
    title: "Branding",
    link: "https://google.com"
  },
  {
    title: "Contact",
    link: "https://google.com"
  }
];

export default function Footer() {
  return (
    <div className="Footer--container">
      <div className="Footer--columns">
        <FooterColumn header="Company" list={companyList} />
        <FooterColumn header="Legal" list={legalList} />
        <FooterColumn header="Community" list={communityList} />
        <FooterColumn header="Business" list={businessList} />
      </div>
      <div className="Footer--copyright">
        <p>@2019 Playnows, Inc. All rights reserved.</p>
      </div>
    </div>
  );
}
