import React from 'react'

function Calbutton(props) {
    var onclicking=()=>{
        props.parentcallback(props.value)
    }
    return (
        <div className="col btn btn-primary" onClick={onclicking}>
          
            {props.value}
        </div>
    )
}

export default Calbutton
