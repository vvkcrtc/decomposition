import React from 'react';
import './App.css';

/* Информация о погоде*/
function Weather(props) {
  return (
    <div>
      <h3>Погода</h3>
      <table>
        <tr>
          <td>
            <img alt={"Картинка"} src={""}></img>
          </td>
          <td>
            <p>{props.now}</p>
          </td>
          <td>
            <p>Утром {props.morn}</p>
            <p>Днем {props.day}</p>
          </td>
        </tr>
      </table>
    </div>
  )
}

export default Weather;
