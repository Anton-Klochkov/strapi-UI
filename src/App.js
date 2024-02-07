import { useState, useEffect } from 'react';
import './App.css';

function App() {
  const [teachers, setTeachers] = useState([]);

  useEffect(() => {
    update();
  }, []);
  
  function update() {
    fetch(`${process.env.REACT_APP_BACKEND}api/teachers`)
      .then(res => res.json())
      .then(todo => {
        setTeachers(todo.data);
      }).catch((e) => console.log(e))
  }


  return (
    <div className="app" style={{marginLeft: "24px"}} >

      <h1>Преподаватели</h1>
      <h2>Краткая информация</h2>

        <div>
          <>
          {
            teachers?.map((el) => (
              <div key={el?.id} style={{borderBottom: "1px solid #000", margin: "24px", paddingBottom: "24px"}}>
                <p>id: {el?.id}</p>
                <p>имя:{el?.attributes?.teacher_name}</p>
                <p>описание: {el.attributes.description}</p>
                <p>статус: {el?.attributes?.blocked ? "ДА" : "НЕТ" }</p>
                <p>стаж: {el?.attributes?.experienc}</p>
                <div>
                {
                  !!el?.attributes?.channel && <a href={el?.attributes?.channel}>Ссылка на канал</a> 
                }
                </div>
                <div>
                {
                  !!el?.attributes?.interview && <a href={el?.attributes?.interview}>Ссылка на интервью</a>
                }
                </div>
               </div>
                
            ))
          }
          </>
        </div>

    </div>
  )
}
export default App;