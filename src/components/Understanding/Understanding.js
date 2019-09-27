import React, { Component } from 'react';
import { connect } from 'react-redux';

class Understanding extends Component {

    render(){
        return(
            <div>
                <p>In Understanding</p>
            </div>
        )
    }
}

const mapStateToProps = (reduxStore) => ({
    reduxStore
})

export default connect(mapStateToProps)(Understanding);