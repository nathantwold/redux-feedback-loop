import React, { Component } from 'react';
import { connect } from 'react-redux';
import { HashRouter as Router } from 'react-router-dom';
import Button from '@material-ui/core/Button';

class Submitted extends Component {

    handleBack = () => {
        this.props.history.push('/')
    }

    render() {
        return (
            <Router>
                <h1>Thank you for your feedback!</h1>
                <Button color="primary" variant="contained"
                    style={{
                        borderRadius: 5, margin: 5, padding: "12px 36px", fontSize: "16px"
                    }} onClick={this.handleBack}>Submit new feedback</Button>
            </Router>
        );
    }
}

const mapStateToProps = (reduxStore) => ({
    reduxStore
});

export default connect(mapStateToProps)(Submitted);