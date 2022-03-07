import React, {Component} from 'react'
import styled from "styled-components";

const ContainerCounter = styled.div`
  width:125px;
  height:50px;
  border:1px rgb(41, 124, 248) solid;
  padding:1px;
  border-radius:40px; 
  display:flex;
  font-size:1.5em;
  font-weight:bold;
  background-image: radial-gradient(circle at 45% 1%, #33ccff 0, #ff99cc 100%);
 

`
const ButtonSubtract = styled.button`
  width:30%;
  border:none;
  border-top-left-radius:70px;
  border-bottom-left-radius:70px;
  font-size:1.1em;
  background:none;
`

const NumberCounter = styled.p`
  width:40%;
  display:flex;
  justify-content:center;
  align-items:center;
  font-size:1em;
`
const ButtonAdd = styled.button`
  width:30%;
  border:none;
  font-size:1.1em;
  border-top-right-radius:70px;
  border-bottom-right-radius:70px;
  background:none;
`

export default class Counter extends Component {
state={
  numberCounter:0,
}

addCounter= () => {
  if(this.state.numberCounter >= 0 && this.state.numberCounter <= 9){
  this.setState({
    numberCounter: this.state.numberCounter += 1,
  })
 }
}
subtractCounter= () => {
  if(this.state.numberCounter >= 1 && this.state.numberCounter <= 10 ){
  this.setState({
    numberCounter: this.state.numberCounter -= 1,
  })
  }
}
    
  render(){
    return(
      <ContainerCounter>
        <ButtonSubtract onClick={this.subtractCounter}>-</ButtonSubtract>
        <NumberCounter>{this.state.numberCounter}</NumberCounter>
        <ButtonAdd onClick={this.addCounter}>+</ButtonAdd>
      </ContainerCounter>
    );
  }
}