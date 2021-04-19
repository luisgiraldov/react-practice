import React, { Component } from 'react';
import Table from './components/Table.component';

class App extends Component {
    render() {
        const characters = [
            {
                name: 'Charlie',
                job: 'Janitor',
            },
            {
                name: 'Mac',
                job: 'Bouncer',
            },
            {
                name: 'Dee',
                job: 'Aspring actress',
            },
            {
                name: 'Dennis',
                job: 'Bartender',
            },
        ];

        return (
            <div className="App">
                <Table charactersData={characters} />
            </div>
        )
    }
}

export default App;