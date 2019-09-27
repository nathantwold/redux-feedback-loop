import React, { Component } from 'react';
import { connect } from 'react-redux';

class Submit extends Component {

    render(){
        return(
            <div>
                <p>In Submit</p>
            </div>
        )
    }
}

const mapStateToProps = (reduxStore) => ({
    reduxStore
})

export default connect(mapStateToProps)(Submit);