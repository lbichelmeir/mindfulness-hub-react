import React, {useState} from 'react'

const AddDailyWin = ({ onAdd} ) => {

    const initialEntryValue = {
        date: "",
        win1: "",
        win2: "",
        win3: "",
    }
    // const [date, setDate]=useState('')
    // const [win1, setWin1]=useState('')
    // const [win2, setWin2]=useState('')
    // const [win3, setWin3]=useState('')

    const [currentEntry, setCurrentEntry] = useState(initialEntryValue);
    


    const handleChange=(event)=> {
        const {name, value} = event.target
        setCurrentEntry({
            ...currentEntry,
            [name]:value})
    }

    const onSubmit = (e) => {
        e.prevent.Default()
        console.log(e)
        if(!currentEntry) {
            alert('Please add your entry')
            return
        }
        onAdd({currentEntry})

        setCurrentEntry(initialEntryValue)
    }



    return (
        <form onSubmit={onSubmit}>
            <div> 
                <label>Entry</label>
                <input 
                    type='text'
                    placeholder= 'MM/DD/YYYY'
                    value={currentEntry.date}
                    name="date"
                    onChange={handleChange}
                />
            </div>
            <div> 
                <label>1. </label>
                <input 
                    type='text'
                    placeholder='Win #1'
                    value={currentEntry.win1}
                    name="win1"
                    onChange={handleChange}
                />

                <label>2. </label>
                <input 
                    type='text'
                    placeholder='Win #2'
                    value={currentEntry.win2}
                    name="win2"
                    onChange={handleChange}
                />

                <label>3. </label>
                <input 
                    type='text'
                    placeholder='Win #3'
                    value={currentEntry.win3}
                    name="win3"
                    onChange={handleChange}
                />
                <input type='submit' value='Add Entry'/>
            </div>

        </form>
    )
}

export default AddDailyWin
// https://www.pluralsight.com/guides/handling-multiple-inputs-with-single-onchange-handler-react