## Class component -Written inside a class (rcc)
<!-- import React, { Component } from 'react'

export default class Home extends Component {
  render() {
    return (
      <div>
        
      </div>
    )
  }
} -->



## Function component -Written inside a function(rfce)
<!-- Example :import React from 'react'

function Home() {
  return (
    <div>Home</div>
  )
}

export default Home -->

<!-- Reuse Componenets -->
## Props is used for dynamic data .only readable
<!-- function Contact(ContactProps)  {
  return (
    <div> My name is {ContactProps.name}.My number is {ContactProps.number } </div>
  )
} -->


## State is used for static data.Can be updated and reusable . It is a private property .It is a object of a react
  <!-- Using state
   // state ={
    //     name:"Utsho",
    //     age:"990",
    //     prof:"SQA"

    // }

    // Using constructor
    // constructor(props){
    //     super(props);
    //     this.state={
    //         name:"Utsho",
    //         age:"990",
    //         prof:"SQA"}
    // } -->

<!-- Using Button To change prof value dynamicaly -->
 <!-- changevalue(){
        this.setState({

            prof:"Alpha"
        })


    }
    shortform = this.changevalue.bind(this,this.prof)

<button onClick={this.shortform}>Change Value</button> -->



## Hooks are used for state and props


## React Fregment
=> It is used for removing parent div =(<>..</>)