import React, { Component } from 'react';
import { connect } from 'react-redux';
import { HashRouter as Router, Link } from 'react-router-dom';

class Understanding extends Component {
    state = {
        understanding: 1
    }

    handleChange = (event) => {
        this.setState({
            understanding: event.target.value
        })
    }

    handleClick = () => {
        this.props.dispatch({
            type: 'SET_UNDERSTANDING',
            payload: this.state.understanding
        })
        console.log(this.state.understanding);
    }

    render() {
        return (
            <Router>
                <h1>How well are you understanding the content?</h1>
                <select value={this.state.understanding} onChange={this.handleChange}>
                    <option value='1'>1</option>
                    <option value='2'>2</option>
                    <option value='3'>3</option>
                    <option value='4'>4</option>
                    <option value='5'>5</option>
                </select>
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