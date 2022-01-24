import React from 'react'
import {BrowserRouter as Router} from "react-router-dom"
import {useRoutes} from "./routes"
import {useAuth} from "./hooks/auth.hook"
import {AuthContext} from "./context/AuthContext"
import './scss/main.scss'

function App() {

  const {token, login, logout, userId} = useAuth()
  const isAuthenticated = !!token
  const routes = useRoutes(isAuthenticated);

  return (
      <AuthContext.Provider value={{
        token, login, logout, userId, isAuthenticated
      }}>
        <Router>
          {routes}
        </Router>
      </AuthContext.Provider>
  )
}

export default App

/*
  ToDo:
   - организация в Sidebar: SingleView, формат фотографий и обработка ошибок загрузки, сообщение об удалении и добавлении фото
   - в отчетах проверить работу фильтра районов
   - Задачи в порядке значимости, при условии того, что БД уже заполнена необходимыми данными.
       1. Окрашивание меток ФАПов и амбулаторий на карте в зависимости от укомплектованности. Красные - 0%, Зеленые - 100%, Красно-зеленые - все остальные позиции. Для больниц можно выбрать любой нейтральный цвет - белый или бежевый.
       2. Фильтр медучреждений (ФАП, амбулатория, больница) на карте.
       4. Фильтр по численности населения населенных пунктов (см.градацию на стр.11 в приложенных методрекомендациях, также обращаю внимание, что для дипломной работы будет важно все то, что изложено в Главе 1).

 */