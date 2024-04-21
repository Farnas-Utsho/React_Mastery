import React, { Component } from 'react'

class About extends React.Component {
    // state ={
    //     name:"Utsho",
    //     age:"990",
    //     prof:"SQA"


    // }

    // Using constructor
    constructor(props) {
        super(props);
        this.state = {
            name: "Utsho",
            age: "990",
            // prof: {
            //     "Prof1": "Contetnt Createor",
            //     "Prof2": "Web Development",
            //     "Prof3": "PMC",

            // }
            prof:"PMC"

        }
    }
    changevalue(){
        this.setState({

            prof:"Alpha"
        })


    }
    shortform = this.changevalue.bind(this,this.prof)

    render() {
        return (
            <div>

                <h1>{"My name is : " + this.state.name + " . " + "My Profession is : " + this.state.prof}</h1>
                <button onClick={this.shortform}>Change Value</button>

            </div>
        )

    }

}
export default About;