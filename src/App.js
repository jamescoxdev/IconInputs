import React, { Component } from 'react';
import './App.css';
import IconInput from './components/iconInputs';
import Edit from '@material-ui/icons/Edit';

class App extends Component{
    constructor(props){
        super(props);
        this.state = {
            input1: '',
            input2: '',
            input3: ''
        }
    }

    updateInput = (e,i) => {
        this.setState({[i]: e.target.value});
    }

    render(){
        return (
            <div className="App">
                <IconInput
                    value={this.state.input1}
                    onChange={(e) => { this.updateInput(e,'input1') }}
                    iconPos="left"
                    iconColor="#ccc"
                    inputStyles={{
                        fontWeight: 200,
                        color: '#000'
                    }}
                    containerStyles={{borderColor:'#ccc'}}>
                    <Edit />
                </IconInput>
                <IconInput
                    value={this.state.input2}
                    onChange={(e) => { this.updateInput(e,'input2') }}
                    iconPos="right"
                    iconColor="#a00"
                    inputStyles={{
                        fontWeight: 400,
                        color: '#a00'
                    }}
                    containerStyles={{
                        borderColor: '#a00',
                        borderWidth: '2px'
                    }}>
                    <Edit />
                </IconInput>
                <IconInput value={this.state.input3} onChange={(e) => { this.updateInput(e,'input3') }} />
            </div>
        );
    }
}

export default App;
