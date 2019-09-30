import React, { Component } from 'react';
import { connect } from 'react-redux';
import { HashRouter as Router, Link } from 'react-router-dom';
import Button from '@material-ui/core/Button';

class Submitted extends Component {

    render() {
        return (
            <Router>
                <h1>Thank you for your feedback!</h1>
                <Link className="link" to='/'>
                    <Button color="primary" variant="contained" >Leave new feedback</Button>
                </Link>
            </Router>
        )
    }
}

const mapStateToProps = (reduxStore) => ({
    reduxStore
})

export default connect(mapStateToProps)(Submitted);