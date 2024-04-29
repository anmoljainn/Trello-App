import { useState } from 'react';
import './App.css';
import Header from './components/Header';
import Sidebar from './components/Sidebar';
import Main from './components/Main';
import { BoardContext } from './context/BoardContext';



function App() {
  const boardData = {
    active:0,
    boards:[
      {
        name:'My Trello Board',
        bgcolor:'#069',
        list:[
          {id:"1",title:"To do",items:[]},
          {id:"2",title:"In Progress",items:[]},
          {id:"3",title:"Done",items:[]}
        ]
      }
    ]
  }
  const [allboard,setAllBoard] = useState(boardData); 
  
  return (
    <>
    <Header></Header>
    <BoardContext.Provider value={{allboard,setAllBoard}}>
      <div className='content flex'>
        <Sidebar></Sidebar>
        <Main></Main>
      </div>
    </BoardContext.Provider>
    </>
  )
}

export default App
