import React from 'react';
import './App.css';
import NewsHeaderList from './NewsHeaderList.js';
import ShortNewsList from './ShortNewsList.js';
import OutQuot from './OutQuot.js';
import OutParts from './OutParts.js';
import SearchForm from './SearchForm.js';
import Weather from './Weather.js';
import Visits from './Visits.js';
import Schedule from './Schedule.js';
import Programtv from './Programtv.js';
import Onair from './Onair.js';


function App() {
  const newsHeader = [{id:1, content: "Заголовок 1" },
                   {id:2, content: "Заголовок 2" },
                   {id:3, content: "Заголовок 3" }];

const shortNews = [{id:1, content: "Новость 1" },
                   {id:2, content: "Новость 2" },
                   {id:3, content: "Новость 3" }];
    
  const quots = [{name: "USD MOEX", value:"63,52", delta:"+0,09" },
                 {name: "EUR MOEX", value:"70,86", delta:"+0,14" },
                 {name: "НЕФТЬ", value:"64,90", delta:"+1,63%" }];

  const parts = [{id:1, content: "Видео" },
                 {id:2, content: "Картинки" },
                 {id:3, content: "Новости" },
                 {id:4, content: "Карты" },
                 {id:5, content: "Маркет" },
                 {id:6, content: "Переводчик" },
                 {id:7, content: "Эфир" },
                 {id:8, content: "еще" }];
  const visits = [{id:1, head:"Недвижимость", text:"о сталинках" },
                  {id:2, head:"Маркет", text:"люстры и светильники" },
                  {id:3, head:"Авто.ру", text:"привод 4х4 до 500 000" }];

  const tvprs = [{id:1, time: "02:00", name: "ТНТ.Best", channel: "ТНТ international"},
                      {id:2, time: "02:15", name: "Джинглики", channel: "Карусель INT"},
                      {id:3, time: "02:25", name: "Наедине со всеми", channel: "Первый"}];
  const onair = [{id:1, img: "imgpath",name:"Управление как искусство",channel:"Успех"},
                 {id:2, img: "imgpath",name:"Ночь. Мир в это время",channel:"earthTV"},
                 {id:3, img: "imgpath",name:"Андрей Возн...",channel:"Совершенно секретно"}];

  return (
    <div>
    <table>
      <tr><NewsHeaderList headers={newsHeader}  /></tr>
      <tr><ShortNewsList news={shortNews}/></tr>
      <tr><OutQuot quots={quots} /></tr> 
      <tr><OutParts parts={parts} /></tr>
      <tr><SearchForm /></tr>
      <tr>
        <td>
          <img alt={"Картинка"} src={""}></img>
        </td>
      </tr>
      <tr>
        <td>
          <Weather now={"+17"} morn={"+17"} day={"+20"}/>
          <Visits visits={visits} />
        </td>
        <td>
          <Schedule head={"Карта Германии"} text={"Расписание"} />
          <Programtv tvprs={tvprs} />
        </td>
        <td>
          <Onair onair={onair} />
        </td>
      </tr>
    </table>
    </div>
  );
}

export default App;
