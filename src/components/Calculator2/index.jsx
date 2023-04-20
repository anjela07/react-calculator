import React,{useState} from "react";
import "../Calculator1/first.css"


export const Calculator2 =()=>{
    const[inputValues,setInputValues] = useState({
        input1:0,
        input2:0
    })
    
    const[res,setResult]= useState({
        result:0
    })
    const inputHandler =(e)=>{
        setInputValues({...inputValues,[e.target.name]:parseInt (e.target.value)})
    }
    // const onPlus = ()=>{
    //     setResult(()=>({result: parseInt(inputValues.input1) + parseInt(inputValues.input2)}));
    // }
    // const onMinus = ()=>{
    //     setResult(()=>({result: parseInt(inputValues.input1) - parseInt(inputValues.input2)}));
    // }
    const onMultipy = ()=>{
        setResult(()=>({result: parseInt(inputValues.input1) * parseInt(inputValues.input2)}));
    }
    const onDivide = ()=>{
        setResult(()=>({result: parseInt(inputValues.input1)/parseInt(inputValues.input2)}));
    }
    return(
        <div>
        <h2>Calculator2</h2>
        <input className="input" type="number" value={inputValues.input1} onChange={inputHandler}
        name="input1"
        />
        {/* <button onClick={onPlus} >+</button>
        <button onClick={onMinus} >-</button> */}
        <button className="plus" onClick={onMultipy}>✖️</button>
        <button className="plus" onClick={onDivide} >➗ </button>
        <input className="inp" type="number" value={inputValues.input2} onChange={inputHandler} name="input2"/>
        <h1>➾ {res.result}</h1>
    </div>
    )
}