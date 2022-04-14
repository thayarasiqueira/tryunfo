import React, { Component } from 'react';
import PropTypes from 'prop-types';

class Form extends Component {
  render() {
    const { cardName, cardDescription, cardAttr1,
      cardAttr2, cardAttr3, cardImage, cardRare,
      cardTrunfo, hasTrunfo, isSaveButtonDisabled,
      onSaveButtonClick, onInputChange } = this.props;
    return (
      <div className="formContainer">
        <form>
          Adicionar Carta
          <label htmlFor="name">
            Nome
            <input
              type="text"
              data-testid="name-input"
              name="cardName"
              value={ cardName }
              onChange={ onInputChange }
              id="name"
            />
          </label>
          <label htmlFor="description">
            Descrição
            <textarea
              data-testid="description-input"
              name="cardDescription"
              value={ cardDescription }
              onChange={ onInputChange }
              id="description"
            />
          </label>
          <label htmlFor="attr1">
            Attr 1
            <input
              type="number"
              data-testid="attr1-input"
              name="cardAttr1"
              value={ cardAttr1 }
              onChange={ onInputChange }
              id="attr1"
            />
          </label>
          <label htmlFor="attr2">
            Attr 2
            <input
              type="number"
              data-testid="attr2-input"
              name="cardAttr2"
              value={ cardAttr2 }
              onChange={ onInputChange }
              id="attr2"
            />
          </label>
          <label htmlFor="attr3">
            Attr 3
            <input
              type="number"
              data-testid="attr3-input"
              name="cardAttr3"
              value={ cardAttr3 }
              onChange={ onInputChange }
              id="attr3"
            />
          </label>
          <label htmlFor="image">
            Imagem
            <input
              type="text"
              data-testid="image-input"
              name="cardImage"
              value={ cardImage }
              onChange={ onInputChange }
              id="attr3"
            />
          </label>
          <label htmlFor="rare">
            Raridade
            <select
              type="select"
              data-testid="rare-input"
              name="cardRare"
              value={ cardRare }
              onChange={ onInputChange }
              id="attr3"
            >
              <option value="normal">normal</option>
              <option value="raro">raro</option>
              <option value="muito raro">muito raro</option>
            </select>
          </label>
          <label className="label" htmlFor="trunfo">
            Super Trybe Trunfo
            { hasTrunfo
              ? <p>Você já tem um Super Trunfo em seu baralho</p>
              : (
                <input
                  type="checkbox"
                  data-testid="trunfo-input"
                  name="cardTrunfo"
                  checked={ cardTrunfo }
                  onChange={ onInputChange }
                  id="trunfo"
                />
              )}
          </label>
        </form>
        <button
          type="button"
          data-testid="save-button"
          disabled={ isSaveButtonDisabled }
          value={ isSaveButtonDisabled }
          onClick={ onSaveButtonClick }
        >
          Salvar
        </button>
      </div>
    );
  }
}

Form.propTypes = {
  cardName: PropTypes.string.isRequired,
  cardDescription: PropTypes.string.isRequired,
  cardAttr1: PropTypes.string.isRequired,
  cardAttr2: PropTypes.string.isRequired,
  cardAttr3: PropTypes.string.isRequired,
  cardImage: PropTypes.string.isRequired,
  cardRare: PropTypes.string.isRequired,
  cardTrunfo: PropTypes.bool.isRequired,
  hasTrunfo: PropTypes.bool.isRequired,
  isSaveButtonDisabled: PropTypes.bool.isRequired,
  onSaveButtonClick: PropTypes.func.isRequired,
  onInputChange: PropTypes.func.isRequired,
};

export default Form;
