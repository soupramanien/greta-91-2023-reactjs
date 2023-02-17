import React from "react";

export default class Clock extends React.Component{
    constructor(props){
        super(props)
        this.state = {
            date : new Date(),
            compteur: 0
        }
    }
    componentDidMount(){
        //créer un minuteur
        console.log("dans componentDidMount");
        this.timerID = setInterval(() => {
            this.setState({
                date : new Date()
            })
            // this.setState(function (prevState, prevProps) {
            //     return {compteur: prevState.compteur+1}
            // });
            // this.setState((prevState, prevProps)=>{
            //     return {compteur: prevState.compteur+1}
            // })
            this.setState((prevState, prevProps)=>({compteur: prevState.compteur+1}))
            // this.state.date = new Date();//interdit
        }, 1000);
    }
    componentWillUnmount(){
        console.log("dans componentWillUnmount");
        clearInterval(this.timerID)
    }
    
    render(){
        return (
            <div>
                <p>Il est {this.state.date.toLocaleTimeString()}</p>
                <p>compteur: {this.state.compteur}</p>
            </div>
        )
    }
}