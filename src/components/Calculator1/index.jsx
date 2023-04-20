import React from "react";
import "./first.css"
export class Calculator1 extends React.Component {
    constructor(){
        super()
        this.state={
            inputValue1:0,
            inputValue2:0,
            result:0
        }
    }
    onin =(e)=>{
        this.setState(()=>({inputValue1:parseInt(e.target.value)}))
    };
    onin1 =(e)=>{
        this.setState(()=>({inputValue2:parseInt(e.target.value)}))
    };
    onPlus =()=>{
        this.setState(()=>({result:parseInt(this.state.inputValue1)+parseInt(this.state.inputValue2)}))
    };
    onMinus =()=>{
        this.setState(()=>({result:parseInt(this.state.inputValue1)-parseInt(this.state.inputValue2)}))
    };
    // onMultipy =()=>{
    //     this.setState(()=>({result:parseInt(this.state.inputValue1)*parseInt(this.state.inputValue2)}))
    // };
    // onDevide =()=>{
    //     this.setState(()=>({result:parseInt(this.state.inputValue1)/parseInt(this.state.inputValue2)}))
    // }

    render(){
        return(
            <div>
            <h2>Calculator - 1</h2>
            <input className="input" type="number" value={this.state.inputValue1} onChange={this.onin}/>
            <button className="plus" onClick={this.onPlus}>➕</button>
            <button className="plus" onClick={this.onMinus}>➖</button>
            {/* <button onClick={this.onMultipy}>*</button>
            <button onClick={this.onDevide}>/</button> */}
            <input className="inp" type="number" value={this.state.inputValue2} onChange={this.onin1}/>
            <h1>➾ {this.state.result}</h1>
        </div>
        ) 
    }
}