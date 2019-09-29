import React, { Component } from 'react';
import { connect } from 'react-redux';
import { HashRouter as Router, Link } from 'react-router-dom';

class Submitted extends Component {

    render() {
        return (
            <Router>
                <h1>Thank you for your feedback!</h1>
                <Link to='/'>
                    <button>Leave new feedback</button>
                </Link>
            </Router>
        )
    }
}

const mapStateToProps = (reduxStore) => ({
    reduxStore
})

export default connect(mapStateToProps)(Submitted);