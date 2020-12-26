import React,{useState} from 'react'
import ReactDOM from 'react-dom'

import Callbutton from './Calbutton'

function Index() {
    
    const[value,setvalue]=useState([1,2,3,4,5,7,8,9,0])
    const[operator,setoperator]=useState(["*","+","-","/"])
    const [equation,setequation]=useState("")
    const [answer,setanswer]=useState(0);
    //input from the user
    const handleclick=(data)=>
    {
        var lastcharachter=equation.charAt(equation.length);
        console.log("lastcharachter is"+lastcharachter)
        if(equation===""||lastcharachter==="*"||lastcharachter==="+"||lastcharachter==="-"||lastcharachter==="/")
        {
            if(data==="*"||data==="-"||data==="+"||data==="/")
            console.log("cannot add operator after a operator")
            else
            {
                var result=equation+data;
                setequation(result);
            }

        }
        else
        {

             var result=equation+data;
                setequation(result);
        
        }
       
    }
    //calculating the output from the equation
    const answerfunc=()=>
    {
        try{
            setanswer(eval(equation));
        }
        catch(e)
        {
            setanswer("math error")
        }
    }
    return (
        <div>
        <input type="text" value={equation}></input>
        <label>Answer</label>
        <input type="text" value={answer}></input>
        {value.map(value=>(<Callbutton key={value} value={value} parentcallback={handleclick}/>  ))}
        {operator.map(operator=>(<Callbutton key={operator} value={operator} parentcallback={handleclick}/>))}
        <button onClick={answerfunc}>=</button>
        </div>
    )
}

ReactDOM.render(<Index/>,document.getElementById('root'));
