import React from 'react';
import './App.css';

/*Вывод ссылки на расписание */
function Schedule (props) {
  return (
    <div>
      <h3>{props.head}</h3>
      <p>{props.text}</p>
    </div>
  )
}

export default Schedule;
