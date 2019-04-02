import React from 'react';

export const EventsContext = React.createContext();

export class EventsProvider extends React.Component {

    constructor(props) {
        super(props);

        this.state = {
            loaded: false,
            loadedEvents: {}
        }

        this.addEvent = this.addEvent.bind(this);
        this.getEventsCount = this.getEventsCount.bind(this);
        this.removeEvent = this.removeEvent.bind(this);
        this.clearLocalStorage = this.clearLocalStorage.bind(this);
        this.clearTable = this.clearTable.bind(this);

    }

    componentDidMount() {
        if(localStorage.getItem("myEvents") === null) {
            this.requestEvents('http://127.0.0.1:12345/api');
        } else {
            this.setState({
                loadedEvents: JSON.parse(localStorage.getItem("myEvents")),
                loaded: true,
            });
        }
    }

    /**
     * @description Request events with given API url
     * @param {String} apiURL - In format http://127.0.0.1:12345/api
     * @return {Promise}
     */
    requestEvents(apiURL) {

        this.setState({
            loaded: false
        });

        let fetchInit = {
            header: new Headers({
                "Content-Type": "application/json; charset=utf-8"
            }),
            method: 'GET',
            cache: 'default'
        };

        return new Promise((resolve, reject) => {
            fetch(`${apiURL}`, fetchInit)
                .then((response) => response.json())
                .then((json) => {

                    let jsonWithId = [];
                    Object.keys(json).map((key, index) => {
                        let event = json[key];
                        let evJson = {  
                            id: index,
                            event: event.event,
                            date: event.date,
                            time: event.time,
                            location: event.location,
                            participants: event.participants
                        }
                        jsonWithId.push(evJson)
                    });

                    
                    this.setState({
                        loadedEvents: jsonWithId,
                        loaded: true,
                    });

                    localStorage.setItem('myEvents', JSON.stringify(jsonWithId));

                })
                .catch((error) => {
                        console.log(`Error: ${error}`);
                        reject(error);
                    }
                );

        });


    }

    getEventsCount() {
        const currentEvents = JSON.parse(localStorage.getItem('myEvents'));
        return currentEvents.length;
    }

    removeEvent(e) {
        let i = 0;
        let currentEvents = JSON.parse(localStorage.getItem('myEvents'));
        currentEvents.map((item) => {
            if(item.id == e.target.dataset.id) {
                currentEvents.splice(i,1);
                console.log(i);
            } else {
                i++
            }
        });
    
        localStorage.setItem('myEvents', JSON.stringify(currentEvents));

        this.setState({
            loadedEvents: currentEvents
        });

    }

    addEvent(event) {
        const currentEvents = JSON.parse(localStorage.getItem('myEvents'));
        currentEvents.push(event);
        localStorage.setItem('myEvents', JSON.stringify(currentEvents));

        this.setState({
            loadedEvents: currentEvents
        });

    }

    clearTable() {
        this.setState({
            loadedEvents: {}
        });
    }

    clearLocalStorage() {
        localStorage.removeItem('myEvents');
    }

    render() {
        return (
            <EventsContext.Provider value={{ 
                ...this.state,
                addEvent: this.addEvent,
                getEventsCount: this.getEventsCount,
                removeEvent: this.removeEvent,
                clearLocalStorage: this.clearLocalStorage,
                clearTable: this.clearTable
                }}  >
                {this.props.children}
            </EventsContext.Provider>
        );
    }

}

export const EventsConsumer = EventsContext.Consumer;
