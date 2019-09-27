import React, { Component } from 'react';
import { connect } from 'react-redux';

class Review extends Component {

    render(){
        return(
            <div>
                <p>In Review</p>
            </div>
        )
    }
}

const mapStateToProps = (reduxStore) => ({
    reduxStore
})

export default connect(mapStateToProps)(Review);