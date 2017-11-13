import React, { Component } from 'react';

class InputSearch extends Component {
    constructor(props){
        super(props);
        this.state = {
            inputValue: '' // équivalent du placeholder

    }
}
   
    // met à jour le state et stocke, gère la valeur de l'input
    handleInputChange = (e) => {
        this.setState({
            inputValue: e.target.value
        });
        // console.log(e.target.value);
        // this.props.func(e.target.value); // on stocke la valeur insérée dans la func
    }
    // met à jour le state du parent
    updateValue = (e) => {
        e.preventDefault(); // pour éviter de recharger la page dû au form
        this.props.input(this.state.inputValue)
        this.setState({
            inputValue: ""  // à chaque fois qu'on fait enter, efface le champs
        });
    }
    render() {
        return (
            <form>
                <input
                    type="text"
                    onChange={this.handleInputChange}
                    value={this.state.inputValue} />
                <button onClick={this.updateValue}>Search a movie</button>
            </form>

        );
    }

}

export default InputSearch;
