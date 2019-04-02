import React from 'react';

import ContentRouter from './router';

// import contexts
import {EventsProvider, EventsConsumer} from './5-contexts/eventscontext';

class App extends React.Component {
    constructor(props) {
        super(props);
    }

    componentDidMount() {
        console.log('SPA INIT');
    }

    render() {
        return (
            <EventsProvider>
                <EventsConsumer>
                {(eventValues) => (
                    <ContentRouter {...eventValues} />
                )}
                </EventsConsumer>
            </EventsProvider>
        )
    }
}

export default App;
