import React, { Component } from 'react';

class Form extends Component {
    initialState = {
        name: '',
        job: '',
    }

    state = this.initialState;

    //save the state of the input into a local state
    handleChange = event => {
        const { name, value } = event.target;

        this.setState({
            [name]: value,
        })
    }

    //submit the input values using the handleSubmit method passed down to it from App component
    //sending the local state to handleSubmit
    submitForm = () => {
        this.props.handleSubmit(this.state);
        this.setState(this.initialState);
    }

    render() {
        const { name, job } = this.state;

        //We are using an onClick instead of an onSubmit since we're not using the standard
        //submit functionality. The click will call the submitForm we made.
        return (
            <form>
                <label htmlFor="name">Name</label>
                <input
                    type="text"
                    name="name"
                    id="name"
                    value={name}
                    onChange={this.handleChange} />
                <label htmlFor="job">Job</label>
                <input
                    type="text"
                    name="job"
                    id="job"
                    value={job}
                    onChange={this.handleChange} />
                <input 
                    type="button"
                    value="Submit"
                    onClick={this.submitForm} />
            </form>

        );
    }
}

export default Form;