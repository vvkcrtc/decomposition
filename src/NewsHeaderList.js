import React from 'react';
import './App.css';

/*Заголовки новостей */
function NewsHeaderList(props) {
  let {headers} = props
  let arr = headers.map(el => 
    <td key={el.id}>
      <h3>{el.content}</h3>
    </td>
  )
  return (
    <tr>
      {arr}
      <td>{Date()}</td>   
    </tr>
  )  
}
export default NewsHeaderList;
