import React, { Component } from 'react';
import Table from './components/Table.component';
import Form from './components/Form.component';

class App extends Component {
    state = {
        characters: [],
    }
    
    removeCharacter = (index) => {
        const { characters } = this.state;

        this.setState({
            characters: characters.filter((character, i) => {
                return i !== index
            }),
        })
    }

    //receives the local state from other component and updates the app state with it
    //spreads the App state first and then adds the state passed from other component so the App state doesn't mutate
    handleSubmit = character => {
        this.setState({
            characters: [
                ...this.state.characters, 
                character
            ]
        })
    }

    render() {
        const { characters } = this.state;

        return (
            <div className="container">
                <Table charactersData={characters} removeCharacter={this.removeCharacter} />
                <Form handleSubmit={this.handleSubmit} />
            </div>
        )
    }
}

export default App;