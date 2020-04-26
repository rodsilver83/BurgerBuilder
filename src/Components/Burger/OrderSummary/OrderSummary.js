import React, { Component } from 'react';
import Button from '../../UI/Button/Button';
import css from './OrderSummary.module.css';

class OrderSummary extends Component {
  componentDidUpdate() {
    console.log('OrderSummary: ');
  }

  render() {
    const ingredientSummary = Object.keys(this.props.ingredients).map((key) => {
      return <span key={key} style={{ textTransform: 'capitalize' }}>
        {key}: {this.props.ingredients[key]}
      </span>
    });

    return (
      <div className={css.OrderSummary}>
        <h3>Your Order</h3>
        <p>A delicious burger with the following ingredients:</p>
        <div className={css.IngredientsList}>
          {ingredientSummary}
        </div>
        <p>Total Price: <strong>${this.props.price.toFixed(2)}</strong></p>
        <p>Continue to checkout?</p>
        <div>
          <Button clicked={this.props.cancel} buttonType={'Danger'}>Cancel</Button>
          <Button clicked={this.props.continue} buttonType={'Success'}>Continue</Button>
        </div>
      </div>
    );
  }

};

export default OrderSummary;