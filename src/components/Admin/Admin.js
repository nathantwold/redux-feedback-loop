import React, { Component } from 'react';
import { connect } from 'react-redux';
import axios from 'axios';
import moment from 'moment';
import Button from '@material-ui/core/Button';

class Admin extends Component {

    // Run contained functions on page load
    componentDidMount = () => {
        this.getFeedback();
    }

    // DELETE call to database to delete feedback item on confirm
    deleteFeedback = (id) => {
        if (window.confirm('are you sure you want to delete this record?')) {
            axios.delete('/feedback/' + id).then(() => {
                this.getFeedback();
            }).catch((error) => {
                console.log('error in delete', error);
            });
        }
    }

    // PUT call to database to flag an item for review
    toggleFlag = (flagged, id) => {
        axios.put('/feedback/' + flagged + '/' + id).then(() => {
            this.getFeedback();
        }).catch((error) => {
            console.log('error in PUT', error);
        });
    }

    // GET call to database to send to global redux state
    getFeedback = () => {
        axios.get('/feedback').then((response) => {
            this.props.dispatch({ type: 'SHOW_FEEDBACK', payload: response.data });
        }).catch((error) => {
            console.log('error in GET', error);
        });
    }

    render() {
        let responses = this.props.reduxStore.displayReducer;

        return (
            <div className="adminTable">
                <h1>Admin Page</h1>
                <h2 className="results">Feedback history</h2>
                <table>
                    <thead>
                        <tr>
                            <th>Date</th>
                            <th>Feeling</th>
                            <th>Understanding</th>
                            <th>Support</th>
                            <th>Comments</th>
                            <th></th>
                        </tr>
                    </thead>
                    <tbody>{responses.map(response =>
                        <tr className="response" key={response.id}>
                            <td>{moment(response.date).format("MMMM Do YYYY")}</td>
                            <td>{response.feeling}</td>
                            <td>{response.understanding}</td>
                            <td>{response.support}</td>
                            <td>{response.comments}</td>
                            {response.flagged === true ?
                                <td className="flagged"><Button color="primary" size="large"
                                    onClick={() => this.toggleFlag(response.flagged, response.id)}>Unflag</Button> </td> :
                                <td><Button color="secondary" size="large"
                                    onClick={() => this.toggleFlag(response.flagged, response.id)}>Flag</Button> </td>}
                            <td className="deleteButton"><Button color="secondary" size="large"
                                onClick={() => this.deleteFeedback(response.id)}>Delete</Button></td>
                        </tr>)}
                    </tbody>
                </table>
            </div>
        )
    }
}

const mapStateToProps = (reduxStore) => ({
    reduxStore
});

export default connect(mapStateToProps)(Admin);