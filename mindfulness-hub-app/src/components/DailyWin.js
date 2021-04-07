import React from 'react'

function DailyWin({win}) {
    return (
        <div className="dailywin">
            <h4> Entry: {win.date}</h4>
            <div className="dailywin_list"> 
                <ol>
                    <li>{win.win1} </li>
                    <li>{win.win2} </li>
                    <li>{win.win3} </li>
                </ol>
            </div>
        </div>
    )
}

export default DailyWin
