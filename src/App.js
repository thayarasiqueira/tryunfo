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
  hasTrunfo: false,
  isSaveButtonDisabled: true,
  savedCard: [],
};

class App extends React.Component {
  constructor() {
    super();

    this.state = INITIAL;
    this.onInputChange = this.onInputChange.bind(this);
    this.onSaveButtonClick = this.onSaveButtonClick.bind(this);
    this.deleteBtn = this.deleteBtn.bind(this);
  }

  onInputChange({ target }) {
    const { name } = target;
    const value = target.type === 'checkbox' ? target.checked : target.value;
    this.setState({ [name]: value }, () => {
      const { cardName, cardDescription, cardAttr1, cardAttr2, cardAttr3,
        cardImage, cardRare, savedCard } = this.state;
      const verifyTrunfo = savedCard.some((e) => e.cardTrunfo === true);
      if (verifyTrunfo || target.checked) {
        this.setState({
          hasTrunfo: true,
        });
      } else {
        this.setState({
          hasTrunfo: false,
        });
      }
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
    const { cardName, cardDescription, cardAttr1, cardAttr2, cardAttr3,
      cardImage, cardRare, cardTrunfo, savedCard } = this.state;
    const newCard = {
      cardName,
      cardDescription,
      cardAttr1,
      cardAttr2,
      cardAttr3,
      cardImage,
      cardRare,
      cardTrunfo,
      savedCard,
    };
    this.setState({
      cardName: '',
      cardDescription: '',
      cardAttr1: 0,
      cardAttr2: 0,
      cardAttr3: 0,
      cardImage: '',
      cardRare: 'normal',
      isSaveButtonDisabled: true,
    });
    this.setState((prevState) => ({ savedCard: [...prevState.savedCard, newCard] }));
  }

  deleteBtn({ target }) {
    const { savedCard } = this.state;
    const removeCard = savedCard.filter((element) => element.cardName !== target.value);
    this.setState(({ savedCard: removeCard, hasTrunfo: false }));
  }

  render() {
    const { cardName, cardDescription, cardAttr1, cardAttr2, cardAttr3,
      cardImage, cardRare, cardTrunfo, hasTrunfo,
      isSaveButtonDisabled, savedCard } = this.state;
    return (
      <main className="mainContainer">
        <Form
          cardName={ cardName }
          cardDescription={ cardDescription }
          cardAttr1={ cardAttr1 }
          cardAttr2={ cardAttr2 }
          cardAttr3={ cardAttr3 }
          cardImage={ cardImage }
          cardRare={ cardRare }
          cardTrunfo={ cardTrunfo }
          hasTrunfo={ hasTrunfo }
          isSaveButtonDisabled={ isSaveButtonDisabled }
          onSaveButtonClick={ this.onSaveButtonClick }
          onInputChange={ this.onInputChange }
        />
        <Card
          cardName={ cardName.toUpperCase() }
          cardDescription={ cardDescription }
          cardAttr1={ cardAttr1 }
          cardAttr2={ cardAttr2 }
          cardAttr3={ cardAttr3 }
          cardImage={ cardImage }
          cardRare={ cardRare }
          cardTrunfo={ cardTrunfo }
          hasTrunfo={ hasTrunfo }
        />
        <span className="allCards">
          { savedCard.map((e) => (
            <div key={ e.cardName }>
              <Card
                cardName={ e.cardName }
                cardDescription={ e.cardDescription }
                cardAttr1={ e.cardAttr1 }
                cardAttr2={ e.cardAttr2 }
                cardAttr3={ e.cardAttr3 }
                cardImage={ e.cardImage }
                cardRare={ e.cardRare }
                cardTrunfo={ e.cardTrunfo }
                hasTrunfo={ e.hasTrunfo }
              />
              <button
                type="button"
                onClick={ this.deleteBtn }
                data-testid="delete-button"
                value={ e.cardName }
              >
                Excluir
              </button>
            </div>
          ))}
        </span>
      </main>
    );
  }
}

export default App;
