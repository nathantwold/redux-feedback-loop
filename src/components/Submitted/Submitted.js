import React, { Component } from 'react';
import { connect } from 'react-redux';
import { HashRouter as Router } from 'react-router-dom';
import Button from '@material-ui/core/Button';

class Submitted extends Component {

    handleBack = () => {
        this.props.history.push('/comments')
    }

    render() {
        return (
            <Router>
                <h1>Thank you for your feedback!</h1>
                <Button color="primary" variant="contained"
                    onClick={this.handleBack}>Leave new feedback</Button>
            </Router>
        );
    }
}

const mapStateToProps = (reduxStore) => ({
    reduxStore
});

export default connect(mapStateToProps)(Submitted);