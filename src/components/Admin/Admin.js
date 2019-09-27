import React, { Component } from 'react';
import { connect } from 'react-redux';

class Admin extends Component {

    render(){
        return(
            <div>
                <p>Admin Page</p>
            </div>
        )
    }
}

const mapStateToProps = (reduxStore) => ({
    reduxStore
})

export default connect(mapStateToProps)(Admin);