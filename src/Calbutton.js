import React from 'react'

function Calbutton(props) {
    var onclicking=()=>{
        props.parentcallback(props.value)
    }
    return (
        <div>
            <button onClick={onclicking}>{props.value}</button>
        </div>
    )
}

export default Calbutton
