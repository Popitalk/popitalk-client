import React from "react";
import "./FooterColumn.css";

export default function FooterColumn({ header, list }) {
  return (
    <div className="FooterColumn--container">
      <h4>{header}</h4>
      {list.map(item => (
        <a href={item.link} key={item.title}>
          {item.title}
        </a>
      ))}
    </div>
  );
}
