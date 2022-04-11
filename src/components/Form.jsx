import React, { Component } from 'react';

class Form extends Component {
  render() {
    return (
      <div>
        <form>
          <label htmlFor="name">
            <input type="text" data-testid="name-input" name="name" />
          </label>
          <label htmlFor="description">
            <input
              type="text"
              data-testid="description-input"
              name="description"
            />
          </label>
          <label htmlFor="attr1">
            <input
              type="number"
              data-testid="attr1-input"
              name="attr1"
            />
          </label>
          <label htmlFor="attr2">
            <input
              type="number"
              data-testid="attr2-input"
              name="attr2"
            />
          </label>
          <label htmlFor="attr3">
            <input
              type="number"
              data-testid="attr3-input"
              name="attr3"
            />
          </label>
          <label htmlFor="image">
            <input type="text" data-testid="image-input" name="image" />
          </label>
          <label htmlFor="rare">
            <select
              type="select"
              data-testid="rare-input"
              name="rare"
            >
              <option value="normal">normal</option>
              <option value="raro">raro</option>
              <option value="muito raro">muito raro</option>
            </select>
          </label>
          <label htmlFor="trunfo">
            <input type="text" data-testid="trunfo-input" name="trunfo" />
          </label>
          <button type="button" data-testid="save-button">Salvar</button>
        </form>
      </div>
    );
  }
}

export default Form;
