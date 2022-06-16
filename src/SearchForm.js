import React from 'react';
import './App.css';

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

export default SearchForm;
