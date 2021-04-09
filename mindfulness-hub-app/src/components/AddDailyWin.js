import React, {useState} from 'react'

const AddDailyWin = ({ onAdd} ) => {

    const initialEntryValue = {
        date: "",
        win1: "",
        win2: "",
        win3: "",
    }
    
    const [currentEntry, setCurrentEntry] = useState(initialEntryValue);
    


    const handleChange=(event)=> {
        const {name, value} = event.target
        setCurrentEntry({
            ...currentEntry,
            [name]:value})
    }

    const onSubmit = (e) => {
        e.preventDefault()
        console.log(e)
        if(!currentEntry.date) {
            alert('Please add your entry')
            return
        }
        onAdd({...currentEntry})

        setCurrentEntry(initialEntryValue)
    }



    return (
        <form className="newEntry_container"onSubmit={onSubmit} autoComplete="new-password">
            <div className="newEntry_date"> 
                <label>Entry</label>
                <input 
                    type='text'
                    placeholder= 'MM/DD/YYYY'
                    value={currentEntry.date}
                    name="date"
                    onChange={handleChange}
                    autoComplete="new-password"
                    
                />
            </div>
            <div className="newEntry_wins"> 
                {/* <label>1. </label> */}
                <input 
                    type='text'
                    placeholder='Win #1'
                    value={currentEntry.win1}
                    name="win1"
                    onChange={handleChange}
                    autoComplete="new-password"
                    
                  
                />

                {/* <label>2. </label> */}
                <input 
                    type='text'
                    placeholder='Win #2'
                    value={currentEntry.win2}
                    name="win2"
                    onChange={handleChange}
                    autoComplete="new-password"
                    
                    
                />

                {/* <label>3. </label> */}
                <input 
                    type='text'
                    placeholder='Win #3'
                    value={currentEntry.win3}
                    name="win3"
                    onChange={handleChange}
                    autoComplete="new-password"
                    
                />
                <input type='submit' value='Add Entry'className="newEntry_button"/>
            </div>

        </form>
    )
}

export default AddDailyWin
// https://www.pluralsight.com/guides/handling-multiple-inputs-with-single-onchange-handler-react