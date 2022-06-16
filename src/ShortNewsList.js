import React from 'react';
import './App.css';

/*Вывод списка новостей */
function ShortNewsList(props) {
  let {news} = props
  let arr = news.map(el => 
    <li key={el.id}>
      <p>{el.content}</p>
   
    </li>
  )
  return (
    <ul>
      {arr}
     
    </ul>
  )  
}
export default ShortNewsList;
