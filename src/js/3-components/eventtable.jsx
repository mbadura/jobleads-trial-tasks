import React from 'react';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Paper from '@material-ui/core/Paper';

export default class EventTable extends React.Component {

    constructor(props) {
        super(props);

        this.createData = this.createData.bind(this);
        this.getRows = this.getRows.bind(this); 
        this.getCells = this.getCells.bind(this);
    }

    componentDidMount() {
        
    }

    componentDidUpdate() {

    }

    getCells() {
        if(this.props.fields.length > 0) {
            let cells = this.props.fields.map((cell,index) => 
                <TableCell align="right" key={index}>{cell.label}</TableCell>
            );
            return (
                <>
                    { cells }
                </>
            )
        }
    }

    getRows() {
        if(this.props.loadedEvents.length > 0) {
            let rows = this.props.loadedEvents.map((event,index) => 
                <TableRow key={event.id}>
                    <TableCell component="th" scope="row"> {event.event} </TableCell>
                    <TableCell align="right">{event.date}</TableCell>
                    <TableCell align="right">{event.time}</TableCell>
                    <TableCell align="right">{event.location}</TableCell>
                    <TableCell align="right">{event.participants}</TableCell>
                    <TableCell align="right"><a href="#" onClick={this.props.removeEvent} className={''} data-id={event.id}>X</a></TableCell>
                </TableRow>    
            );        
            
            return (
                <>
                    { rows }
                </>
            )

        }
        
    }

    createData(id, name, date, time, location, participants) {
        return { id, name, date, time, location, participants }
    }

    render() {
        return (
           <>
            <Paper className={''}>
                <Table className={''}>
                <TableHead>
                    <TableRow>
                        { this.getCells() }
                        <TableCell align="right"></TableCell>
                    </TableRow>
                </TableHead>
                <TableBody>
                    { this.props.loaded && this.getRows() }
                </TableBody>
                </Table>
            </Paper>
          </>
        )
    }

}
