import React, { Component } from 'react'
import CalculatorTile from './calculatorTile'
import OutputScreen from './outputScreen'
import Button from './Button'




export default class Calculator extends Component {
    constructor() {
        super();
        // set our default state
        this.state = {
        question: '',
        answer: ''
        }
        // Bind our handleClick method (sets 'this' explicitly
        // to refer to this component) We did this because 'this'
        // would refer to the source of the click events
        this.handleClick = this.handleClick.bind(this);
    }


    // our method to handle all click events from our buttons
 handleClick(event) {
	// get the value from the target element (button)
	const value = event.target.value;

	switch (value) {
		case "=": {
			// if it's an equal sign, use the eval module
			// to evaluate the question ,convert the answer
			// (in number) to String
			if (this.state.question !== "") {
				var ans = "";
				try {
					ans = eval(this.state.question);
				} catch (err) {
					this.setState({ answer: "Math Error" });
				}
				if (ans === undefined) this.setState({ answer: "Math Error" });
				// update answer in our state.
				else this.setState({ answer: ans, question: "" });
				break;
			}
		}
		case "Clear": {
			// if it's the Clears sign, just clean our
			// question and answer in the state
			this.setState({ question: "", answer: "" });
			break;
		}

		case "Delete": {
			var str = this.state.question;
			str = str.substr(0, str.length - 1);
			this.setState({ question: str });
			break;
		}

		default: {
			// for every other command, update the answer in the state
            console.log(value)
			this.setState({ question: (this.state.question += value) });
			break;
		}
	}
}


    
    
  render() {
    return (
      <div className='frame'>
        <CalculatorTile value="Ananda Naidu" />
        <div className='mainCalc'>
        <OutputScreen question={this.state.question} answer ={this.state.answer}/>
        <div className='button-row'>
            <Button  label={"Clear"} handleClick = {this.handleClick} />
            <Button label={"Delete"} handleClick = {this.handleClick} />
            <Button label={"."} handleClick = {this.handleClick} />
           <Button label={"/"} handleClick = {this.handleClick}/>

        </div>
        <div className='button-row'>
            <Button label={"7"} handleClick = {this.handleClick} />
            <Button label={"8"} handleClick = {this.handleClick} />
            <Button label={"9"} handleClick = {this.handleClick}/>
            <Button label={"*"} handleClick = {this.handleClick}/>

        </div>
        <div className='button-row'>
            <Button label={"6"} handleClick = {this.handleClick}/>
            <Button label={"5"} handleClick = {this.handleClick} />
            <Button label={"4"} handleClick = {this.handleClick} />
            <Button label={"-"} handleClick = {this.handleClick}/>
        </div>
        <div className='button-row'>
            <Button  label={"1"} handleClick = {this.handleClick}/>
            <Button  label={"2"} handleClick = {this.handleClick} />
            <Button  label={"3"} handleClick = {this.handleClick} />
            <Button  label={"+"} handleClick = {this.handleClick}/>
        </div>
        <div className='button-row'>
            <Button  label={"0"} handleClick = {this.handleClick}/>
            <Button  label={"="} handleClick = {this.handleClick}/>
        </div>
        </div>
      </div>
    )
  }
}
