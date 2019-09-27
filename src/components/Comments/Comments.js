import React, { Component } from 'react';
import { connect } from 'react-redux';

class Comments extends Component {

    render(){
        return(
            <div>
                <p>In Comments</p>
            </div>
        )
    }
}

const mapStateToProps = (reduxStore) => ({
    reduxStore
})

export default connect(mapStateToProps)(Comments);