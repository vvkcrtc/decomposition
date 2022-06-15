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
/* Форма поиска */
function SearchForm(props) {
  const  handleSubmit = () => {
  }
  const  dateChange = () => {
  }

  const submitButton = () =>{
    
  }
  return (
    <div>
      <form onSubmit={handleSubmit}>
        <table>
          <tr>
            <td>
              <h3>Поиск</h3>
            </td>
            <td>
        <input type="text" name="search" value="12345" onChange={dateChange}/></td>
        <td>
        <button type="submit" value="Найти" onClick={submitButton}>Найти</button></td>
        </tr>
        <tr>
          <td><p>Найдется все</p></td>
        </tr>
        </table>
      </form>
      
    </div>
)
}
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
/*Вывод ссылки на расписание */
function Schedule (props) {
  return (
    <div>
      <h3>{props.head}</h3>
      <p>{props.text}</p>
    </div>
  )
}
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
                  {id:3, head:"Авто.ру", text:"привод 4х4 до 500 000" }]

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
