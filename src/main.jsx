import React from 'react';
import ReactDOM from 'react-dom/client';
import {Routes, Route, BrowserRouter} from 'react-router-dom';
import { HomePage } from './pages/HomePage/HomePage.jsx';
import { RegisterPage } from './pages/RegisterPage/RegisterPage.jsx';
import { LoginPage } from './pages/LoginPage/LoginPage.jsx';
import { UserProfile } from './pages/UserProfiel/UserProfile.jsx';
import { VideogamesPage } from './pages/VideogamesPage/VideogamesPage.jsx';
import { ClubPage } from './pages/ClubPage/ClubPage.jsx';
import { Layout } from './components/Layout/Layout.jsx';
import { CLUB_URL, HOME_URL, LOGIN_URL, PROFILE_URL, REGISTER_URL, VIDEOGAMES_URL } from './constanst/urls.jsx';
import './index.css'
import { PrivateRoute } from './components/PrivateRoute/PrivateRoute.jsx';

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <BrowserRouter>
      <Routes>
        <Route element={<Layout/>}>
          <Route path={HOME_URL} element={<HomePage/>}/>
          <Route path={PROFILE_URL} element={
            <PrivateRoute>
              <UserProfile/>
            </PrivateRoute>
          }/>
          <Route path={VIDEOGAMES_URL} element={
            <PrivateRoute>
              <VideogamesPage/>
            </PrivateRoute>
          }/>
          <Route path={CLUB_URL} element={
            <PrivateRoute>
              <ClubPage/>
            </PrivateRoute>
          }/>
          <Route path={LOGIN_URL} element={<LoginPage/>}/>
          <Route path={REGISTER_URL} element={<RegisterPage/>}/>
          <Route path="*" element={<h1>NOT FOUND!</h1>}/>
        </Route>
      </Routes>
    </BrowserRouter>
  </React.StrictMode>,
)
