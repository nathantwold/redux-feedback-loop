import React, { Component } from 'react';
import { connect } from 'react-redux';
import { HashRouter as Router, Link } from 'react-router-dom';

class Feeling extends Component {
    // default value to be sent to redux state
    state = {
        feeling: '1'
    }

    // clears the current redux state for re-entry
    handleBack = () => {
        this.props.dispatch({
            type: 'SET_FEELING',
            payload: ''
        })
    }

    // set the current local state
    handleChange = (event) => {
        this.setState({
            feeling: event.target.value
        })
    }

    // send the current state to redux state
    handleClick = () => {
        this.props.dispatch({
            type: 'SET_FEELING',
            payload: this.state.feeling
        })
    }

    render() {
        return (
            <Router>
                <h1>How are you feeling today?</h1>
                <div>
                    <form>
                        <label><input onChange={this.handleChange} checked={this.state.feeling === '1'}
                            type='radio' value='1' />1</label>
                        <label><input onChange={this.handleChange} checked={this.state.feeling === '2'}
                            type='radio' value='2' />2</label>
                        <label><input onChange={this.handleChange} checked={this.state.feeling === '3'}
                            type='radio' value='3' />3</label>
                        <label><input onChange={this.handleChange} checked={this.state.feeling === '4'}
                            type='radio' value='4' />4</label>
                        <label><input onChange={this.handleChange} checked={this.state.feeling === '5'}
                            type='radio' value='5' />5</label>
                    </form>
                </div>
                <Link to='/'>
                    <button className="backButton" onClick={this.handleBack}>Back</button>
                </Link>
                <Link to='/understanding'>
                    <button onClick={this.handleClick}>Next</button>
                </Link>
            </Router>
        )
    }
}

const mapStateToProps = (reduxStore) => ({
    reduxStore
})

export default connect(mapStateToProps)(Feeling);