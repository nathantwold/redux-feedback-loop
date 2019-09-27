import React, { Component } from 'react';
import { connect } from 'react-redux';

class Support extends Component {

    render(){
        return(
            <div>
                <p>In Support</p>
            </div>
        )
    }
}

const mapStateToProps = (reduxStore) => ({
    reduxStore
})

export default connect(mapStateToProps)(Support);