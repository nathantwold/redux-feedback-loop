import React, { Component } from 'react';
import { connect } from 'react-redux';
import { HashRouter as Router, Link } from 'react-router-dom';

class Home extends Component {

    emptyForm = () => {
        this.props.dispatch({
            type: 'CLEAR_FORM'
        })
    }

    render() {
        return (
            <Router>
                <h1>Ready for feedback?</h1>
                <Link to='/feeling'>
                    <button onClick={this.emptyForm}>Get Started!</button>
                </Link>
            </Router>
        )
    }
}

const mapStateToProps = (reduxStore) => ({
    reduxStore
})

export default connect(mapStateToProps)(Home);