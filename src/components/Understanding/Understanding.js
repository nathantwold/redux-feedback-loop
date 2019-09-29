import React, { Component } from 'react';
import { connect } from 'react-redux';
import { HashRouter as Router, Link } from 'react-router-dom';

class Understanding extends Component {
    // default value to be sent to redux state
    state = {
        understanding: '1'
    }

    // clears the current redux state for re-entry
    handleBack = () => {
        this.props.dispatch({
            type: 'SET_UNDERSTANDING',
            payload: ''
        })
    }

    // set the current local state
    handleChange = (event) => {
        this.setState({
            understanding: event.target.value
        })
    }

    // send the current state to redux state
    handleClick = () => {
        this.props.dispatch({
            type: 'SET_UNDERSTANDING',
            payload: this.state.understanding
        })
    }

    render() {
        return (
            <Router>
                <h1>How well are you understanding the content?</h1>
                <div>
                    <form>
                        <label><input onChange={this.handleChange} checked={this.state.understanding === '1'}
                            type='radio' value='1' />1</label>
                        <label><input onChange={this.handleChange} checked={this.state.understanding === '2'}
                            type='radio' value='2' />2</label>
                        <label><input onChange={this.handleChange} checked={this.state.understanding === '3'}
                            type='radio' value='3' />3</label>
                        <label><input onChange={this.handleChange} checked={this.state.understanding === '4'}
                            type='radio' value='4' />4</label>
                        <label><input onChange={this.handleChange} checked={this.state.understanding === '5'}
                            type='radio' value='5' />5</label>
                    </form>
                </div>
                <Link to='/feeling'>
                    <button className="backButton" onClick={this.handleBack}>Back</button>
                </Link>
                <Link to='/support'>
                    <button onClick={this.handleClick}>Next</button>
                </Link>
            </Router>
        )
    }
}

const mapStateToProps = (reduxStore) => ({
    reduxStore
})

export default connect(mapStateToProps)(Understanding);