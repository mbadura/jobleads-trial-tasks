import React from 'react';
import {BrowserRouter, Switch, Route, withRouter} from 'react-router-dom';

// routed components
import HomePage from './4-pages/homepage';
import {EventsConsumer} from "./5-contexts/eventscontext";

@withRouter
export default class ContentRouter extends React.Component {

    constructor(props) {
        super(props);

        this.state = {
        };
    }

    componentDidMount() {

    }

    render() {
        return (
            <BrowserRouter>
                    <div className={`c-container`}>
                            <Route exact path={`/`} render={(props) =>
                                    <EventsConsumer>
                                        {(eventValues) => (
                                            <HomePage {...props} {...this.props} {...eventValues}/>
                                        )}
                                    </EventsConsumer>
                                }
                            />
                    </div>
            </BrowserRouter>
        );
    }
}
