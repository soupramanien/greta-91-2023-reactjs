import { Component } from "react";

export default class Toggle extends Component{
    constructor(props){
        super(props)
        this.state = {isToggleOn: true}
        //lier this à la méthode handleClick
        this.handleClick = this.handleClick.bind(this)
    }
    render(){
        return (
            <>
                <button 
                    className={this.state.isToggleOn ? "btn btn-success": "btn btn-warning"}
                    onClick={this.handleClick} >
                    {this.state.isToggleOn ? 'ON' : 'OFF'}
                </button>
                <button 
                    className={this.state.isToggleOn ? "btn btn-success": "btn btn-warning"}
                    onClick={this.handleClick2} >
                    {this.state.isToggleOn ? 'ON' : 'OFF'}
                </button>
            </>
        )
    }
    handleClick(){
        this.setState((oldState)=>({
            isToggleOn: !oldState.isToggleOn
        }))
    }
    handleClick2 = ()=>{
        this.setState((oldState)=>({
            isToggleOn: !oldState.isToggleOn
        }))
    }
}