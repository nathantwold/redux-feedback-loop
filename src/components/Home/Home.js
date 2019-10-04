import React, { Component } from 'react';
import { connect } from 'react-redux';
import { HashRouter as Router } from 'react-router-dom';
import { Button } from '@material-ui/core';

class Home extends Component {

    handleClick = () => {
        this.props.history.push('/feeling')
    }

    render() {
        return (
            <Router>
                <h2>Ready for feedback?</h2>
                <Button color="primary" style={{
                    borderRadius: 5,
                    margin: 5,
                    padding: "12px 36px",
                    fontSize: "16px"
                }} variant="contained"
                    onClick={this.handleClick}>Get Started!</Button>
            </Router>
        )
    }
}

const mapStateToProps = (reduxStore) => ({
    reduxStore
});

export default connect(mapStateToProps)(Home);