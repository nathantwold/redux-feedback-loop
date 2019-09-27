import React, { Component } from 'react';
import { connect } from 'react-redux';
import { HashRouter as Router, Link } from 'react-router-dom';

class Support extends Component {
    state = {
        support: 1
    }

    handleChange = (event) => {
        this.setState({
            support: event.target.value
        })
    }

    handleClick = () => {
        this.props.dispatch({
            type: 'SET_SUPPORT',
            payload: this.state.support
        })
        console.log(this.state.support);
    }

    render() {
        return (
            <Router>
                <h1>How well are you being supported?</h1>
                <select value={this.state.support} onChange={this.handleChange}>
                    <option value='1'>1</option>
                    <option value='2'>2</option>
                    <option value='3'>3</option>
                    <option value='4'>4</option>
                    <option value='5'>5</option>
                </select>
                <Link to='/comments'>
                    <button onClick={this.handleClick}>Next</button>
                </Link>
            </Router>
        )
    }
}

const mapStateToProps = (reduxStore) => ({
    reduxStore
})

export default connect(mapStateToProps)(Support);