import React, { Component } from 'react';
import { connect } from 'react-redux';
import { HashRouter as Router } from 'react-router-dom';
import { Button } from '@material-ui/core';

class Home extends Component {

    // redundant measure to ensure redux state is cleared and ready for new entry
    handleClick = () => {
        // this.props.dispatch({
        //     type: 'CLEAR_FORM'
        // });
        this.props.history.push('/feeling')
    }

    render() {
        return (
            <Router>
                <h1>Ready for feedback?</h1>
                <h6>Your responses are measured on a scale of 1 to 5, 1 being 'terrible' and 5 being 'great'.</h6>
                <Button color="primary" style={{
                    borderRadius: 5,
                    padding: "18px 36px",
                    fontSize: "18px"
                }} variant="contained" size="large"
                    onClick={this.handleClick}>Get Started!</Button>
            </Router>
        )
    }
}

const mapStateToProps = (reduxStore) => ({
    reduxStore
});

export default connect(mapStateToProps)(Home);