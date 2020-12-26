import React from 'react'
import ReactDOM from 'react-dom'
import Calbutton from './Calbutton'
import Callbutton from './Calbutton'

function index() {
    const handleclick=(value)=>
    {
        console.log(value)
    }
    return (
        <div>
        <Callbutton value={10} parentcallback={handleclick}/>    
        </div>
    )
}

ReactDOM.render(<index/>,document.getElementById('root'));
