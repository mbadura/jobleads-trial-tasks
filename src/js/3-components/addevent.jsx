import React from 'react';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';
import TextField from '@material-ui/core/TextField';

export default class AddEvent extends React.Component {

    constructor(props) {
        super(props);
        
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
            ],
            eventname: '',
            eventdate: '',
            eventtime: '',
            eventlocation: '',
            eventparticipants: '',
            fieldname: '',
            fieldlabel: ''
        }

        this.getFields = this.getFields.bind(this);
        this.addEventHandle = this.addEventHandle.bind(this);
        this.addFieldHandle = this.addFieldHandle.bind(this);

    }

    componentDidMount() {
        
    }

    componentDidUpdate() {
    }

    addEventHandle(e) {
        e.preventDefault();

        let newEvent = {
            id: this.props.getEventsCount(),
            event: this.state.eventname,
            date: this.state.eventdate,
            time: this.state.eventtime,
            location: this.state.eventlocation,
            participants: this.state.eventparticipants
        }

        this.props.addEvent(newEvent);
    }

    addFieldHandle(e) {
        e.preventDefault();

        let newField = {
            name: this.state.fieldname,
            label: this.state.fieldlabel
        }
        
        let fields = this.state.fields;
        fields.push(newField);
        console.log(fields);
        this.props.addNewField(fields);

        
    }

    getFields() {
        let fields = this.props.fields.map((field,index) => 
            <TextField
                key={index}
                name={field.name}
                label={field.label}
                className={'text-input'}
                onChange={this.handleChange}
                value={this.state[field.label]}
                margin="normal"
                variant="outlined"
            />
        );

        return (
            <>
                { fields }
            </>
        )

    }

    handleChange = e => {
        let { name, value } = e.target
        this.setState({ [name]: value })
    }


    render() {
        return (
        <div className={'addEvent-container'}>
            <Typography variant="h4">
                Add Event
            </Typography>
            <form onSubmit={this.addEventHandle} noValidate autoComplete="off" >
                { this.getFields() }
                <Button type="submit" variant="contained" className={'submit-button'} color="primary" onClick={this.addEventHandle}> Add Event </Button>
            </form>
            <Typography variant="h5">
                Add Field
            </Typography>
            <TextField
                name={'fieldname'}
                label={'Field Name'}
                className={'text-input'}
                value={this.state.fieldname}
                onChange={this.handleChange}
                margin="normal"
                variant="outlined"
            />
            <TextField
                name={'fieldlabel'}
                label={'Field Label'}
                className={'text-input'}
                value={this.state.fieldlabel}
                onChange={this.handleChange}
                margin="normal"
                variant="outlined"
            />
            <Button type="submit" variant="contained" className={'submit-button'} color="primary" onClick={this.addFieldHandle}> Add Field </Button>
            
            
        </div>
        )
    }

}
