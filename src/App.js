import React from 'react';
import Form from './components/Form';
import Card from './components/Card';

const INITIAL = {
  cardName: '',
  cardDescription: '',
  cardAttr1: '0',
  cardAttr2: '0',
  cardAttr3: '0',
  cardImage: '',
  cardRare: 'normal',
  cardTrunfo: false,
  hasTrunfo: false,
  isSaveButtonDisabled: true,
  savedCard: [],
};
const maxTotal = 210;
const maxNumber = 90;

class App extends React.Component {
  constructor() {
    super();
    this.state = INITIAL;
    this.onInputChange = this.onInputChange.bind(this);
    this.onSaveButtonClick = this.onSaveButtonClick.bind(this);
    this.deleteBtn = this.deleteBtn.bind(this);
    this.filterName = this.filterName.bind(this);
    this.filterRare = this.filterRare.bind(this);
  }

  onInputChange({ target }) {
    const { name } = target;
    const value = target.type === 'checkbox' ? target.checked : target.value;
    this.setState({ [name]: value }, () => {
      const { cardName, cardDescription, cardAttr1, cardAttr2, cardAttr3,
        cardImage, cardRare, savedCard } = this.state;
      const verifyTrunfo = savedCard.some((e) => e.cardTrunfo === true);
      if (verifyTrunfo || target.checked) {
        this.setState({ hasTrunfo: true,
        });
      } else {
        this.setState({ hasTrunfo: false,
        });
      }

      const casesAbledBtn = [
        cardName !== '', cardDescription !== '', cardImage !== '',
        cardRare !== '', Number(cardAttr1) + Number(cardAttr2) + Number(cardAttr3)
        <= maxTotal, Number(cardAttr1) <= maxNumber, Number(cardAttr1) >= 0,
        Number(cardAttr2) <= maxNumber, Number(cardAttr2) >= 0,
        Number(cardAttr3) <= maxNumber, Number(cardAttr3) >= 0,
      ];

      const verify = casesAbledBtn.every((e) => e === true);
      if (verify) {
        this.setState({ isSaveButtonDisabled: false });
      } else {
        this.setState({ isSaveButtonDisabled: true });
      }
    });
  }

  onSaveButtonClick() {
    const { cardName, cardDescription, cardAttr1, cardAttr2, cardAttr3,
      cardImage, cardRare, cardTrunfo, savedCard } = this.state;
    const newCard = { cardName,
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
      cardTrunfo: false,
    });
    this.setState((prevState) => (
      { savedCard: [...prevState.savedCard, newCard],
      }));
  }

  deleteBtn({ target }) {
    const { savedCard } = this.state;
    const removeCard = savedCard.filter((element) => element.cardName !== target.value);
    this.setState(({ savedCard: removeCard, hasTrunfo: false }));
  }

  filterName({ target }) {
    const { savedCard } = this.state;
    const getName = savedCard.filter((e) => e.cardName.includes(target.value));
    this.setState({ savedCard: getName, hasTrunfo: false });
  }

  filterRare({ target }) {
    if (target.value !== 'todas') {
      const { savedCard } = this.state;
      const getRare = savedCard.filter((e) => e.cardRare === target.value);
      this.setState({ savedCard: getRare, hasTrunfo: false });
    }
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
        <p>Pré-visualização da carta</p>
        <Card
          cardName={ cardName }
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
          Filtros de Busca
          <label htmlFor="name-filter">
            <input
              type="text "
              data-testid="name-filter"
              onChange={ this.filterName }
              placeholder="Nome da carta"
              id="name-filter"
            />
          </label>
          <label htmlFor="filter-rare">
            <select
              type="select"
              data-testid="rare-filter"
              onChange={ this.filterRare }
              id="filter-rare"
            >
              <option value="todas">todas</option>
              <option value="normal">normal</option>
              <option value="raro">raro</option>
              <option value="muito raro">muito raro</option>
            </select>
          </label>
          Todas as cartas
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
