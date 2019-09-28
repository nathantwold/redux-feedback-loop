import React, { Component } from 'react';
import { connect } from 'react-redux';
import { HashRouter as Router, Link } from 'react-router-dom';

class Comments extends Component {
    state = {
        comments: '',
        button: true
    }

    handleChange = (event) => {
        this.setState({
            comments: event.target.value,
            button: false
        })
    }

    handleClick = () => {
        this.props.dispatch({
            type: 'SET_COMMENTS',
            payload: this.state.comments
        })
    }

    render() {
        return (
            <Router>
                <h1>Are there any comments you'd like to leave?</h1>
                <input type='text' onChange={this.handleChange}></input>
                <Link to='/review'>
                    <button disabled={this.state.button} onClick={this.handleClick}>Next</button>
                </Link>
            </Router>
        )
    }
}

const mapStateToProps = (reduxStore) => ({
    reduxStore
})

export default connect(mapStateToProps)(Comments);