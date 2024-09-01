import React from "react";

export function Structur() {
  return (
    <div className="main-page main-container structur">
      <a href="https://gukolomna.ru/obrazovanie/departments/">Факультеты</a>
      <iframe
        style="border: none"
        src="https://gukolomna.ru/studentu/schedule/"
        width="100%"
        height="100%"
        // sandbox="allow-scripts allow-same-origin"
      ></iframe>
    </div>
  );
}
