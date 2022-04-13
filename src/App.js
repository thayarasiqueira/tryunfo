import React from 'react';
import Form from './components/Form';
import Card from './components/Card';

const INITIAL = {
  cardName: '',
  cardDescription: '',
  cardAttr1: 0,
  cardAttr2: 0,
  cardAttr3: 0,
  cardImage: '',
  cardRare: 'normal',
  cardTrunfo: false,
  isSaveButtonDisabled: true,
};

class App extends React.Component {
  constructor() {
    super();

    this.state = INITIAL;
    this.onInputChange = this.onInputChange.bind(this);
    this.onSaveButtonClick = this.onSaveButtonClick.bind(this);
  }

  onInputChange({ target }) {
    const { name } = target;
    const value = target.type === 'checkbox' ? target.checked : target.value;
    this.setState({ [name]: value }, () => {
      const {
        cardName,
        cardDescription,
        cardAttr1,
        cardAttr2,
        cardAttr3,
        cardImage,
        cardRare,
      } = this.state;

      const maxTotal = 210;
      const maxNumber = 90;
      const minNumber = 0;

      const casesAbledBtn = [
        cardName !== '',
        cardDescription !== '',
        cardImage !== '',
        cardRare !== '',
        Number(cardAttr1) + Number(cardAttr2) + Number(cardAttr3) <= maxTotal,
        Number(cardAttr1) <= maxNumber,
        Number(cardAttr1) >= minNumber,
        Number(cardAttr2) <= maxNumber,
        Number(cardAttr2) >= minNumber,
        Number(cardAttr3) <= maxNumber,
        Number(cardAttr3) >= minNumber,
      ];

      const verify = casesAbledBtn.every((e) => e === true);
      if (verify) {
        this.setState({
          isSaveButtonDisabled: false,
        });
      } else {
        this.setState({
          isSaveButtonDisabled: true,
        });
      }
    });
  }

  onSaveButtonClick() {
    this.setState(INITIAL);
  }

  render() {
    const { cardName, cardDescription, cardAttr1, cardAttr2, cardAttr3,
      cardImage, cardRare, cardTrunfo,
      isSaveButtonDisabled } = this.state;
    return (
      <main>
        <Form
          cardName={ cardName }
          cardDescription={ cardDescription }
          cardAttr1={ cardAttr1 }
          cardAttr2={ cardAttr2 }
          cardAttr3={ cardAttr3 }
          cardImage={ cardImage }
          cardRare={ cardRare }
          cardTrunfo={ cardTrunfo }
          isSaveButtonDisabled={ isSaveButtonDisabled }
          onSaveButtonClick={ this.onSaveButtonClick }
          onInputChange={ this.onInputChange }
        />
        <Card
          cardName={ cardName }
          cardDescription={ cardDescription }
          cardAttr1={ cardAttr1 }
          cardAttr2={ cardAttr2 }
          cardAttr3={ cardAttr3 }
          cardImage={ cardImage }
          cardRare={ cardRare }
          cardTrunfo={ cardTrunfo }
        />
      </main>
    );
  }
}

export default App;
