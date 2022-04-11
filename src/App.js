import React from 'react';
import Form from './components/Form';

class App extends React.Component {
  render() {
    return (
      <Form
        cardNameValue={ cardName }
        cardDescriptionValue={ cardDescription }
        cardAttr1Value={ cardAttr1 }
        cardAttr2Value={ cardAttr2 }
        cardAttr3Value={ cardAttr3 }
        cardImageValue={ cardImage }
        cardRareValue={ cardRare }
        cardTrunfoValue={ cardTrunfo }
        isSaveButtonDisabledValue={ isSaveButtonDisabled }
        onInputChangeValue={ onInputChange }
        onSaveButtonClickValue={ onSaveButtonClick }
      />
    );
  }
}

export default App;
