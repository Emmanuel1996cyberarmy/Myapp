import React from 'react'
import PropTypes from 'prop-types'
import Button from './Button'

const Header = ({title, onAdd, valueOfShowAddTask}) => {
    
    return (
        //What we want output from this header component will be done here, and the imported by app.js
        <header className='header'>
            <h1>{title}</h1> 
            <Button color={valueOfShowAddTask ? 'red' : 'green'} text={valueOfShowAddTask ? '-' : '+'} onClick={onAdd}/>
            
        </header>
    )
}
Header.defaultProps = {
    title: 'Task Tracker',
}

// let's then set  the Proptypes to an object like this title above
Header.propTypes = {
    title: PropTypes.string.isRequired,
}
//the propType is  a tool that will help your code more robust and less error prone.

export default Header