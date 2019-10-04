import React, { Component } from 'react';
import { connect } from 'react-redux';
import { HashRouter as Router } from 'react-router-dom';
import axios from 'axios';
import { IconButton, List, ListItem, ListItemText } from '@material-ui/core';
import { ChevronLeft, CheckCircle } from '@material-ui/icons';

class Review extends Component {

    handleBack = () => {
        this.props.history.push('/comments')
    }

    handleSubmit = () => {
        // axios POST to send redux state to database;
        axios.post('/feedback', this.props.reduxStore.feedbackReducer).then((result) => {
            console.log('feedback submitted', result);
        }).catch((error) => {
            console.log(error);
        })
        // clear redux state after POST
        this.props.dispatch({
            type: 'CLEAR_FORM'
        })
        this.props.history.push('/submitted')
    }

    render() {
        return (
            <Router>
                <h2>Review your feedback</h2>
                <List>
                    <ListItem>
                        <ListItemText>
                            Feeling: {this.props.reduxStore.feedbackReducer.feeling}
                        </ListItemText>
                    </ListItem>
                    <ListItem>
                        <ListItemText>
                            Understanding: {this.props.reduxStore.feedbackReducer.understanding}
                        </ListItemText>
                    </ListItem>
                    <ListItem>
                        <ListItemText>
                            Support: {this.props.reduxStore.feedbackReducer.support}
                        </ListItemText>
                    </ListItem>
                    <ListItem>
                        <ListItemText>
                            Comments: {this.props.reduxStore.feedbackReducer.comments}
                        </ListItemText>
                    </ListItem>
                </List>
                <IconButton color="secondary"
                    onClick={this.handleBack}><ChevronLeft /></IconButton>
                <IconButton color="primary"
                    onClick={this.handleSubmit}><CheckCircle /></IconButton>
            </Router>
        );
    }
}

const mapStateToProps = (reduxStore) => ({
    reduxStore
});

export default connect(mapStateToProps)(Review);