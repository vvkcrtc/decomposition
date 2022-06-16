import React from 'react';
import './App.css';

/* Вывод меню разделов */
function OutParts(props) {
  let {parts} = props
  let arr = parts.map(el => 
    <td key={el.id}>
      <h4>{el.content}</h4>
   
    </td>
  )
  return (
    <tr>
      {arr}
    </tr>
  )  
}

export default OutParts;
