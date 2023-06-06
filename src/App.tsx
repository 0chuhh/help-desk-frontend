import React, {useEffect, useState} from 'react';
import logo from './logo.svg';
import './App.css';
import Header from "./layout/header";
import axios from "axios";
import Tasks from "./modules/tasks";
import AppRoutes from './routes';
import { IsAuthentificted } from 'services/isAuthentificated';
import { useAppDispatch, useAppSelector } from 'hooks/redux';
import "react-quill/dist/quill.snow.css";
import { getUser } from 'store/reducers/user/ActionAuth';
function App() {
  
  return (
    <div className="App">
      <Header/>
      <AppRoutes/>
    </div>
  );
}

export default App;
