import React from 'react';
import './App.css';

/* Вывод программы телепередач*/
function Programtv (props) {
  let {tvprs} = props
  let arr = tvprs.map(el => 
    <tr key={el.id}>
    <td>{el.time} </td>
    <td>{el.name} </td>
    <td>{el.channel}</td>
    </tr>
  )
  return (
    <div>
      <table>
        <th>
          <td></td>
          <td>{"Телепрограмма"}</td>
          <td>{"Эфир"}</td>
        </th>
        {arr}
      </table>
    </div>
    )  
}

export default Programtv;
