import React, { Component } from 'react';
import { connect } from 'react-redux';
import { HashRouter as Router } from 'react-router-dom';
import { IconButton, Radio, RadioGroup, InputLabel, FormLabel, Grid } from '@material-ui/core';
import { ChevronLeft, ChevronRight } from '@material-ui/icons';

class Support extends Component {
    // default value to be sent to redux state
    state = {
        support: this.props.reduxStore.feedbackReducer.support
    }

    // clears the current redux state for re-entry
    handleBack = () => {
        this.props.dispatch({
            type: 'SET_SUPPORT',
            payload: ''
        });
        this.props.history.push('/understanding');
    }

    // set the current local state
    handleChange = (event) => {
        this.setState({
            support: event.target.value
        });
    }

    // send the current state to redux state
    handleClick = () => {
        if (this.state.support === '') {
            alert('Please select an answer')
        } else {
            this.props.dispatch({
                type: 'SET_SUPPORT',
                payload: this.state.support
            });
            this.props.history.push('/comments');
        }
    }

    render() {
        return (
            <Router>
                <h2>How well are you being supported?</h2>
                <Grid container spacing={3}>
                    <Grid item xs={3}>
                        <IconButton color="secondary"
                            onClick={this.handleBack}><ChevronLeft /></IconButton>
                    </Grid>
                    <Grid item xs={6}>
                        <RadioGroup>
                            <FormLabel>I feel abandoned</FormLabel>
                            <InputLabel>1
                            <Radio value="1" onChange={this.handleChange}
                                    color="primary" checked={this.state.support === '1'} />
                            </InputLabel>
                            <InputLabel>2
                            <Radio value="2" onChange={this.handleChange}
                                    color="primary" checked={this.state.support === '2'} />
                            </InputLabel>
                            <InputLabel>3
                            <Radio value="3" onChange={this.handleChange}
                                    color="primary" checked={this.state.support === '3'} />
                            </InputLabel>
                            <InputLabel>4
                            <Radio value="4" onChange={this.handleChange}
                                    color="primary" checked={this.state.support === '4'} />
                            </InputLabel>
                            <InputLabel>5
                            <Radio value="5" onChange={this.handleChange}
                                    color="primary" checked={this.state.support === '5'} />
                            </InputLabel>
                            <FormLabel>I feel fully supported!</FormLabel>
                        </RadioGroup>
                    </Grid>
                    <Grid item xs={3}>
                        <IconButton color="primary"
                            onClick={this.handleClick}><ChevronRight /></IconButton>
                    </Grid>
                </Grid>
            </Router>
        )
    }
}

const mapStateToProps = (reduxStore) => ({
    reduxStore
});

export default connect(mapStateToProps)(Support);