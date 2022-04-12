import React, { Component } from 'react';
import PropTypes from 'prop-types';

class Form extends Component {
  render() {
    const { cardName, cardDescription, cardAttr1,
      cardAttr2, cardAttr3, cardImage, cardRare,
      cardTrunfo, isSaveButtonDisabled,
      onSaveButtonClick, onInputChange } = this.props;
    return (
      <div>
        <form>
          <label htmlFor="name">
            Nome
            <input
              type="text"
              data-testid="name-input"
              name="name"
              value={ cardName }
              onChange={ onInputChange }
            />
          </label>
          <label htmlFor="description">
            Descrição
            <textarea
              data-testid="description-input"
              name="description"
              value={ cardDescription }
              onChange={ onInputChange }
            />
          </label>
          <label htmlFor="attr1">
            Attr 1
            <input
              type="number"
              data-testid="attr1-input"
              name="attr1"
              value={ cardAttr1 }
              onChange={ onInputChange }
            />
          </label>
          <label htmlFor="attr2">
            Attr 2
            <input
              type="number"
              data-testid="attr2-input"
              name="attr2"
              value={ cardAttr2 }
              onChange={ onInputChange }
            />
          </label>
          <label htmlFor="attr3">
            Attr 3
            <input
              type="number"
              data-testid="attr3-input"
              name="attr3"
              value={ cardAttr3 }
              onChange={ onInputChange }
            />
          </label>
          <label htmlFor="image">
            Imagem
            <input
              type="text"
              data-testid="image-input"
              name="image"
              value={ cardImage }
              onChange={ onInputChange }
            />
          </label>
          <label htmlFor="rare">
            Raridade
            <select
              type="select"
              data-testid="rare-input"
              name="rare"
              value={ cardRare }
              onChange={ onInputChange }
            >
              <option value="normal">normal</option>
              <option value="raro">raro</option>
              <option value="muito raro">muito raro</option>
            </select>
          </label>
          <label htmlFor="trunfo">
            Super Trybe Tryunfo
            <input
              type="checkbox"
              data-testid="trunfo-input"
              onChange={ onInputChange }
              name="trunfo"
              checked={ cardTrunfo }
            />
          </label>
          <button
            type="submit"
            data-testid="save-button"
            disabled={ isSaveButtonDisabled }
            value={ isSaveButtonDisabled }
            onClick={ onSaveButtonClick }
          >
            Salvar
          </button>
        </form>
      </div>
    );
  }
}

Form.propTypes = {
  cardName: PropTypes.string.isRequired,
  cardDescription: PropTypes.string.isRequired,
  cardAttr1: PropTypes.number.isRequired,
  cardAttr2: PropTypes.number.isRequired,
  cardAttr3: PropTypes.number.isRequired,
  cardImage: PropTypes.string.isRequired,
  cardRare: PropTypes.string.isRequired,
  cardTrunfo: PropTypes.bool.isRequired,
  isSaveButtonDisabled: PropTypes.bool.isRequired,
  onSaveButtonClick: PropTypes.func.isRequired,
  onInputChange: PropTypes.func.isRequired,
};

export default Form;
