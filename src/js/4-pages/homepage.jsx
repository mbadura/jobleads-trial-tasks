import React from 'react';

import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';

import EventTable from '../3-components/eventtable';
import AddEvent from '../3-components/addevent';
import Controls from '../3-components/controls';

export default class HomePage extends React.Component {

    constructor(props) {
        super(props);

        this.addNewField = this.addNewField.bind(this);

        this.state = {
            fields: [
                {
                    name: 'eventname',
                    label: 'Event Name'
                },
                {
                    name: 'eventdate',
                    label: 'Event Date'
                },
                {
                    name: 'eventtime',
                    label: 'Event Time'
                },
                {
                    name: 'eventlocation',
                    label: 'Event Location'
                },
                {
                    name: 'eventparticipants',
                    label: 'Event Participants'
                }
            ]
        }

    }

    componentDidMount() {

    }

    addNewField(fields) {
        this.setState({
            fields: fields
        });
    }

    render() {
        return (
            <div className={"c-homepage"}>
                <Typography variant="h2" gutterBottom>
                    SPA Jobleads Test 5
                </Typography>
                <EventTable {...this.props} fields={this.state.fields} />
                <AddEvent {...this.props} fields={this.state.fields} addNewField={this.addNewField}  />
                <Controls {...this.props} />

            </div>
        )
    }

}
