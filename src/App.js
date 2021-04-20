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

    render() {
        const { characters } = this.state;

        return (
            <div className="container">
                <Table charactersData={characters} removeCharacter={this.removeCharacter} />
                <Form />
            </div>
        )
    }
}

export default App;