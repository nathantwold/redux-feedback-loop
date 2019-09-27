import React, { Component } from 'react';
import { connect } from 'react-redux';
import { HashRouter as Router, Link } from 'react-router-dom';

class Feeling extends Component {
    state = {
        feeling: 1
    }

    handleChange = (event) => {
        this.setState({
            feeling: event.target.value
        })
    }

    handleClick = () => {
        this.props.dispatch({
            type: 'SET_FEELING',
            payload: this.state.feeling
        })
        console.log(this.state.feeling);
    }

    render() {
        return (
            <Router>
                <h1>How are you feeling today?</h1>
                <select value={this.state.feeling} onChange={this.handleChange}>
                    <option value='1'>1</option>
                    <option value='2'>2</option>
                    <option value='3'>3</option>
                    <option value='4'>4</option>
                    <option value='5'>5</option>
                </select>
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