import React from "react";

export function Structur() {
  return (
    // <div className='main-page main-container structur'>
    //   <a href='https://gukolomna.ru/obrazovanie/departments/'>Факультеты</a>
    //   <a href='https://gukolomna.ru/digitalfc/'>Цифровой портрет факультетов</a>
    //   <a href='https://gukolomna.ru/obrazovanie/kafedry/'>Кафедры</a>
    // </div>
    <div className="main-page">
      <iframe
        style="border: none"
        src="https://gukolomna.ru/studentu/schedule/"
        sandbox="allow-scripts allow-same-origin"
      ></iframe>
    </div>
  );
}
