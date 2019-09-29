import React, { Component } from 'react';
import { connect } from 'react-redux';
import { HashRouter as Router, Link } from 'react-router-dom';

class Home extends Component {

    // redundant measure to ensure redux state is emptied and ready for new entry
    emptyForm = () => {
        this.props.dispatch({
            type: 'CLEAR_FORM'
        })
    }

    render() {
        return (
            <Router>
                <h1>Ready for feedback?</h1>
                <h6>Your responses are measure on a scale of 1 to 5, 1 being 'terrible' and 5 being 'great'.</h6>
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