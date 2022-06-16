import React from 'react';
import './App.css';

/*Отображение списка эфира */
function Onair (props) {
  let {onair} = props
  let arr = onair.map(el => 
    <tr key={el.id}>
    <td><img src={el.img}></img> </td>
    <td>{el.name} </td>
    <td>{el.channel}</td>
    </tr>
  )
  return (
    <div>
      <table>
        <th>
          <td></td>
          <td>{"Эфир"}</td>
          <td></td>
        </th>
        {arr}
      </table>
    </div>
    )  
}

export default Onair;
