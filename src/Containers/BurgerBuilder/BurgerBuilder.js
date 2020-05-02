import React, { Component } from "react";
import Aux from "../../Hoc/Aux/Aux";
import Burger from "../../Components/Burger/Burger";
import BuildControls from "../../Components/Burger/BuildControls/BuildControls";
import Modal from '../../Components/UI/Modal/Modal';
import OrderSummary from "../../Components/Burger/OrderSummary/OrderSummary";
import axios from '../../axios-orders';
import Spinner from '../../Components/UI/Spinner/Spinner';
import withErrorHandler from "../../Hoc/WithError/WithError";
import { connect } from 'react-redux';
import { ADD_INGREDIENT, REMOVE_INGREDIENT } from "../../Store/actions";

class BurgerBuilder extends Component {
  constructor (props) {
    super(props);
    this.state = {
      purchasing: false,
      loading: false,
      error: false
    };
  }

  componentDidMount = () => {
    // axios.get('https://reactburgerbuilder-31ed5.firebaseio.com/ingredients.json')
    //   .then((res) => {
    //     const totalPrice = Object.keys(res.data).reduce((prev, item) => {
    //       return prev + (res.data[item] * INGREDIENT_PRICES[item]);
    //     }, BASE_PRICE);
    //     const purchasable = totalPrice > BASE_PRICE;

    //     this.setState({ ingredients: res.data, purchasable: purchasable, totalPrice: totalPrice })
    //   })
    //   .catch((err) => {
    //     this.setState({ error: err });
    //     console.log(err);
    //   });
  }

  updatePurchaseState(ingredients) {
    const sum = Object.keys(ingredients).reduce((prev, current) => {
      return prev + ingredients[current];
    }, 0);
    return sum > 0;
  }

  // addIngredientHandler = (type) => {
  //   const oldCount = Number.parseInt(this.state.ingredients[type]);
  //   const updateCount = oldCount + 1;
  //   const updatedIngredients = {
  //     ...this.state.ingredients
  //   };
  //   updatedIngredients[type] = updateCount;
  //   const priceAdd = INGREDIENT_PRICES[type];
  //   const oldPrice = this.state.totalPrice;
  //   const newPrice = oldPrice + priceAdd;
  //   this.setState({ ingredients: updatedIngredients, totalPrice: newPrice });
  //   this.updatePurchaseState(updatedIngredients);
  // }

  // removeIngredientHandler = (type) => {
  //   const oldCount = Number.parseInt(this.state.ingredients[type]);
  //   if (oldCount <= 0) {
  //     return;
  //   }
  //   const updateCount = oldCount - 1;
  //   const updatedIngredients = {
  //     ...this.state.ingredients
  //   };
  //   updatedIngredients[type] = updateCount;
  //   const priceAdd = INGREDIENT_PRICES[type];
  //   const oldPrice = this.state.totalPrice;
  //   const newPrice = oldPrice - priceAdd;
  //   this.setState({ ingredients: updatedIngredients, totalPrice: newPrice });
  //   this.updatePurchaseState(updatedIngredients);
  // }

  purchasingHandler = () => {
    this.setState({ purchasing: true });
  }

  purchaseCancelHandler = () => {
    this.setState({ purchasing: false });
  }

  continuePurchaseHandler = () => {
    this.props.history.push('/checkout');
    // const params = [];
    // for (let i in this.state.ingredients) {
    //   params.push(encodeURIComponent(i) + '=' + encodeURIComponent(this.state.ingredients[i]));
    // }
    // params.push('price=' + this.props.price);
    // const queryString = params.join('&');
    // this.props.history.push({
    //   pathname: '/checkout',
    //   search: '?' + queryString
    // });
  }

  render() {
    const disabledInfo = {
      ...this.props.ings
    };
    for (let key in disabledInfo) {
      disabledInfo[key] = disabledInfo[key] <= 0;
    }

    let orderSummary = <OrderSummary
      ingredients={this.props.ings}
      cancel={this.purchaseCancelHandler}
      continue={(event) => {
        event.stopPropagation();
        this.continuePurchaseHandler()
      }}
      price={this.props.price} />;

    if (this.state.loading) {
      orderSummary = <Spinner></Spinner>;
    }

    let burger = <Aux>
      <Burger ingredients={this.props.ings}></Burger>
      <BuildControls
        ingredients={this.props.ings}
        ingredientAdd={this.props.onIngredientAdded}
        ingredientRemove={this.props.onIngredientRemoved}
        disabledInfo={disabledInfo}
        price={this.props.price}
        purchasable={this.updatePurchaseState(this.props.ings)}
        ordered={this.purchasingHandler} />
    </Aux>

    if (!this.props.ings) {
      burger = this.state.error ? <p>Ingredients can't be loaded</p> : <Spinner></Spinner>
    }

    return (
      <Aux>
        <Modal
          show={this.state.purchasing}
          modalClosed={this.purchaseCancelHandler}>
          {orderSummary}
        </Modal>
        {burger}
      </Aux>
    );
  }
}

const mapStateToProps = state => {
  return {
    ings: state.ingredients,
    price: state.totalPrice
  };
}

const mapDispatchToProps = dispatch => {
  return {
    onIngredientAdded: (name) => dispatch({ type: ADD_INGREDIENT, ingredientName: name }),
    onIngredientRemoved: (name) => dispatch({ type: REMOVE_INGREDIENT, ingredientName: name })
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(withErrorHandler(BurgerBuilder, axios));