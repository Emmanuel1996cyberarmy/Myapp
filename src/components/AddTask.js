import React from 'react'
// each input is going to have a component level state
import {useState} from 'react'

const AddTask = ({onAdd}) => {
    //the components. the first one is text and setText is the method to update the state, the default is an empty str
    const [text, setText] = useState('')
    const [day, setDay] = useState('')
    const [reminder, setReminder] = useState(false)

    const onSubmit = (e) => {
        e.preventDefault()
        if(!text) {
            alert('please add a task')
            return
        }
        onAdd({ text, day, reminder})
        setText('')
        setDay('')
        setReminder(false)
    }


  return (
    <form className='add-form' onSubmit={onSubmit}>
        <div className='form-control' >
            <label>Task</label>
            <input type='text' placeholder='Add Task' value={text} onChange={(e) => setText(e.target.value)}/>
        </div>
        <div className='form-control' >
            <label>Day & Time</label>
            <input type='text' placeholder='Add Day & Time'  value={day} onChange={(e) => setDay(e.target.value)}/>
        </div>
        <div className='form-control form-control-check' >
            <label>Set Reminder</label>
            <input type='checkbox' checked={reminder}  value={reminder} onChange={(e) => setReminder(e.currentTarget.checked)}/>
        </div>
        <input type='submit' value='Save' className='btn btn-block' />
        
    </form>
  )
}

export default AddTask