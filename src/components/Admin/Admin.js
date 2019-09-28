import React, { Component } from 'react';
import { connect } from 'react-redux';

class Admin extends Component {

    render(){
        return(
            <div>
                <h1>Admin Page</h1>
            </div>
        )
    }
}

const mapStateToProps = (reduxStore) => ({
    reduxStore
})

export default connect(mapStateToProps)(Admin);