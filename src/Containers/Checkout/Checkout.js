import React, { Component, Fragment } from "react";
import CheckoutSummary from '../../Components/CheckoutSummary/CheckoutSummary/CheckoutSummary';
import { Route } from 'react-router-dom';
import ContactData from "./ContactData/ContactData";
import { connect } from 'react-redux';

class Checkout extends Component {

  // componentDidMount = () => {
  //   const query = new URLSearchParams(this.props.location.search);
  //   const ingredients = {};
  //   let price;
  //   for (let param of query.entries()) {
  //     if (param[0] === 'price') {
  //       price = param[1];
  //     } else {
  //       ingredients[param[0]] = param[1];
  //     }
  //   }
  //   this.setState({ ingredients: ingredients, price: price });
  // }

  checkoutContinuedHandler = () => {
    this.props.history.replace('/checkout/contact-data');
  }

  checkoutCancelledHandler = () => {
    this.props.history.goBack();
  }

  render() {
    return (<Fragment>
      <CheckoutSummary ingredients={this.props.ings}
        checkoutCancelled={this.checkoutCancelledHandler}
        checkoutContinued={this.checkoutContinuedHandler}>
      </CheckoutSummary>
      <Route path={this.props.match.path + '/contact-data'}>
        <ContactData>
        </ContactData>
      </Route>
    </Fragment>)
  }
}

const mapStateToProps = state => {
  return {
    ings: state.ingredients,
    price: state.totalPrice
  }
}

export default connect(mapStateToProps)(Checkout);