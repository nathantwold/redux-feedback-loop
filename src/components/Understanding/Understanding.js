import React, { Component } from 'react';
import { connect } from 'react-redux';
import { HashRouter as Router, Link } from 'react-router-dom';

class Understanding extends Component {
    state = {
        understanding: '1'
    }

    handleChange = (event) => {
        this.setState({
            understanding: event.target.value
        })
    }

    handleClick = () => {
        this.props.dispatch({
            type: 'SET_UNDERSTANDING',
            payload: this.state.understanding
        })
        console.log(this.state.understanding);
    }

    render() {
        return (
            <Router>
                <h1>How well are you understanding the content?</h1>
                <div>
                    <form>
                        <label><input onChange={this.handleChange} checked={this.state.understanding === '1'}
                            type='radio' value='1' />1</label>
                        <label><input onChange={this.handleChange} checked={this.state.understanding === '2'}
                            type='radio' value='2' />2</label>
                        <label><input onChange={this.handleChange} checked={this.state.understanding === '3'}
                            type='radio' value='3' />3</label>
                        <label><input onChange={this.handleChange} checked={this.state.understanding === '4'}
                            type='radio' value='4' />4</label>
                        <label><input onChange={this.handleChange} checked={this.state.understanding === '5'}
                            type='radio' value='5' />5</label>
                    </form>
                </div>
                <Link to='/support'>
                    <button onClick={this.handleClick}>Next</button>
                </Link>
            </Router>
        )
    }
}

const mapStateToProps = (reduxStore) => ({
    reduxStore
})

export default connect(mapStateToProps)(Understanding);