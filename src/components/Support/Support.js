import React, { Component } from 'react';
import { connect } from 'react-redux';
import { HashRouter as Router, Link } from 'react-router-dom';

class Support extends Component {
    state = {
        support: '1'
    }

    handleChange = (event) => {
        this.setState({
            support: event.target.value
        })
    }

    handleClick = () => {
        this.props.dispatch({
            type: 'SET_SUPPORT',
            payload: this.state.support
        })
        console.log(this.state.support);
    }

    render() {
        return (
            <Router>
                <h1>How well are you being supported?</h1>
                <div>
                    <form>
                        <label><input onChange={this.handleChange} checked={this.state.support === '1'}
                            type='radio' value='1' />1</label>
                        <label><input onChange={this.handleChange} checked={this.state.support === '2'}
                            type='radio' value='2' />2</label>
                        <label><input onChange={this.handleChange} checked={this.state.support === '3'}
                            type='radio' value='3' />3</label>
                        <label><input onChange={this.handleChange} checked={this.state.support === '4'}
                            type='radio' value='4' />4</label>
                        <label><input onChange={this.handleChange} checked={this.state.support === '5'}
                            type='radio' value='5' />5</label>
                    </form>
                </div>
                <Link to='/comments'>
                    <button onClick={this.handleClick}>Next</button>
                </Link>
            </Router>
        )
    }
}

const mapStateToProps = (reduxStore) => ({
    reduxStore
})

export default connect(mapStateToProps)(Support);