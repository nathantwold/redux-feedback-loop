import React, { Component } from 'react';
import { connect } from 'react-redux';

class Feeling extends Component {

    render(){
        return(
            <div>
                <p>In Feeling</p>
            </div>
        )
    }
}

const mapStateToProps = (reduxStore) => ({
    reduxStore
})

export default connect(mapStateToProps)(Feeling);