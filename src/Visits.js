import React from 'react';
import './App.css';

/* Вывод часто посещаемых ресурсов*/
function Visits (props) {
  let {visits} = props
  let arr = visits.map(el => 
      <p>{el.head} - {el.text}</p>
    )
    return (
      <div>
        <h3>Посещаемое</h3>
        {arr}
      </div>
    ) 

}

export default Visits;
