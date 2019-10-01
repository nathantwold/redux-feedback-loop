import React, { Component } from 'react';
import { connect } from 'react-redux';
import { HashRouter as Router } from 'react-router-dom';
import { Button, Radio, RadioGroup } from '@material-ui/core';

class Understanding extends Component {
    // default value to be sent to redux state
    state = {
        understanding: this.props.reduxStore.feedbackReducer.understanding
    }

    // clears the current redux state for re-entry
    handleBack = () => {
        this.props.dispatch({
            type: 'SET_UNDERSTANDING',
            payload: ''
        });
        this.props.history.push('/feeling');
    }

    // set the current local state
    handleChange = (event) => {
        this.setState({
            understanding: event.target.value
        });
    }

    // send the current state to redux state
    handleClick = () => {
        if (this.state.understanding === '') {
            alert('Please select an answer')
        } else {
            this.props.dispatch({
                type: 'SET_UNDERSTANDING',
                payload: this.state.understanding
            });
            this.props.history.push('/support');
        }
    }

    render() {
        return (
            <Router>
                <h1>How well are you understanding the content?</h1>
                <div>
                    <RadioGroup style={{ display: "block" }}>
                        <label>I'm completely lost</label>
                        <Radio value="1" onChange={this.handleChange}
                            color="primary" checked={this.state.understanding === '1'} />
                        <Radio value="2" onChange={this.handleChange}
                            color="primary" checked={this.state.understanding === '2'} />
                        <Radio value="3" onChange={this.handleChange}
                            color="primary" checked={this.state.understanding === '3'} />
                        <Radio value="4" onChange={this.handleChange}
                            color="primary" checked={this.state.understanding === '4'} />
                        <Radio value="5" onChange={this.handleChange}
                            color="primary" checked={this.state.understanding === '5'} />
                        <label>I could teach this!</label>
                    </RadioGroup>
                </div>
                <Button color="secondary" variant="contained"
                    style={{
                        borderRadius: 5, margin: 5, padding: "12px 36px", fontSize: "16px"
                    }} onClick={this.handleBack}>Back</Button>
                <Button color="primary" variant="contained"
                    style={{
                        borderRadius: 5, margin: 5, padding: "12px 36px", fontSize: "16px"
                    }} onClick={this.handleClick}>Next</Button>
            </Router>
        )
    }
}

const mapStateToProps = (reduxStore) => ({
    reduxStore
});

export default connect(mapStateToProps)(Understanding);