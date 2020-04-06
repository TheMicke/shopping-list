import React, { Component } from 'react';
import ReactDOM from 'react-dom';

class Form extends Component {
    constructor() {
        super();

        this.state = {
            value: '',
        };

        this.handleChange = this.handleChange.bind(this);
    }

    handleChange(event) {
        const { value } = event.target;
        this.setState(() => {
            return {
                value,
            };
        });
    }

    render() {
        return (
           <div>
               <h1>Hej hej.. Hej på dig!</h1>
           </div>
        );
    }
}

export default Form;
