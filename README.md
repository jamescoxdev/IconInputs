# IconInputs
React Component for Inputs with Material-UI Icons


---

# Usage

```javascript
import React, { Component } from 'react';
import IconInput from './location/of/IconInput';
import Edit from '@material-ui/icons/Edit';

class App extends Component{
    constructor(props){
        super(props);
        this.state = {
            input: ''
        }
    }

    updateInput = (e) => {
        this.setState({input: e.target.value});
    }

    render(){
        return (
            <IconInput
                value={this.state.input1}
                onChange={(e) => { this.updateInput(e) }}>
                <Edit />
            </IconInput>
        )
    }
}

export default App;
```

---

# Props

|Prop             |Description                                                                          |Default Value      |
|-----------------|-------------------------------------------------------------------------------------|-------------------|
|value            |Required. The value passed down from state.                                          |
|onChange         |Required. The function used to update state with new value                           |
|iconPos          |Position of the icon with relation to the input. Values are either "left" or "right" |"left"
|iconColor        |The color of the icon. May be passed as any valid HTML/CSS color                     |"#000"
|inputStyles      |A style object used to control additional styles on the input                        |{}
|containerStyles  |A style object used to control additional styles on the input container              |{}
