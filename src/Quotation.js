import React from 'react';
import './App.css';

/* Компонент котировки*/
function Quotation(props) {
  
  return (
    <td>
    <p className="News-header-pos">{props.name}</p>
    <p className="News-header-pos">{props.value}</p>
    <p className="News-header-pos"> {props.delta}</p>
    </td>
  )
}

/* Вывод котировок*/
function OutQuot(props) {
  let {quots} = props
  let arr = quots.map(el => 
    <Quotation name={el.name} value={el.value} delta={el.delta}/>
  )
  return (
     <tr>
       {arr}
     </tr>
  )

}

export default OutQuot;

