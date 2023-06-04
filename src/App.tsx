import React, {useEffect, useState} from 'react';
import logo from './logo.svg';
import './App.css';
import Header from "./layout/header";
import axios from "axios";
import Tasks from "./modules/tasks";
function App() {
    const [tasks, setTasks] = useState([])
    const fetchTasks = async () => {
        const {data:Tasks}=await axios.get('http://127.0.0.1:8000/api/v1/tasks/', {
            headers:{
                'Authorization': 'Token d19f04f4206816f062a0cd4e65af91144a5219ac'
            }
        })
        setTasks(Tasks)
    }

    useEffect(()=>{
        fetchTasks()
    }, [])
  return (
    <div className="App">
      <Header/>
    <div style={{marginTop:'20px'}}>
        <Tasks tasks={tasks}/>    </div>
    </div>
  );
}

export default App;
