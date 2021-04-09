import React, {useState, useEffect} from 'react'
import DailyWin from '../components/DailyWin'
// import dailyWinsData from '../dailyWinsData'
import AddDailyWin from '../components/AddDailyWin'

function DailyWinsComponent() {
    // const [currentWin, setCurrentWin] = useState("")
    const [showAddEntry, setShowAddEntry] = useState(false)
    const [wins, setWins] = useState([
        {
            id: 1,
            date: "February 4, 2021",
            win1: "learnt the basics of React",
            win2: "created my personal portfolio from scratch",
            win3: "created React projects" 
        },
    
        {
            id: 2,
            date: "March 2, 2021",
            win1: "walked the dogs",
            win2: "read 1 chapter of Atomic Habits",
            win3: "completed my homework" 
        },
        {
            id: 3,
            date: "April 1, 2021",
            win1: "finished reading Circe",
            win2: "painted with Gouache",
            win3: "learnt how to play Sound of Silence on the ukulele!" 
        }
    ])
    const onClick = () => {  
        setShowAddEntry(!showAddEntry)   
     
    }

    const addEntry = (entry) => {
        console.log(entry)
        const id =Math.floor(Math.random()*1000)+1
        console.log(id)
        const newEntry = {id, ...entry}
        setWins([...wins, newEntry])

    }
    return (
        <div className="dailywin_container">
            <div className="dailywin_button_div">
            <button 
                className="dailywin_button"
                onClick={onClick}>
                    {showAddEntry ? 'Close Entry': 'Add Entry'}
                </button>
            </div>
            {showAddEntry && <AddDailyWin onAdd={addEntry}/>}
            {wins.map(win => <DailyWin key={win.id} win={win}/>)}
            
        </div>
    )
}

export default DailyWinsComponent


// future: add button as a different component; re-watch video