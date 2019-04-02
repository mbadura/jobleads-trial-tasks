import React from 'react';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';

export default class Controls extends React.Component {

    constructor(props) {
        super(props);
        
        this.state = {
        }

    }

    componentDidMount() {
        
    }

    componentDidUpdate() {

    }

    render() {
        return (
        <div className={'addEvent-container'}>
            <Typography variant="h4">
                Controls
            </Typography>
            <Button type="submit" variant="contained" className={'submit-button'} color="secondary" onClick={this.props.clearTable}> Clear table </Button>
            <Button type="submit" variant="contained" className={'submit-button'} color="secondary" onClick={this.props.clearLocalStorage}> Clear LocalStorage </Button>
        </div>
        )
    }

}
