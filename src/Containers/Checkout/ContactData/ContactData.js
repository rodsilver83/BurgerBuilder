import React, { Component } from "react";
import Button from '../../../Components/UI/Button/Button';
import css from './ContactData.module.css';
import axios from '../../../axios-orders';
import Spinner from '../../../Components/UI/Spinner/Spinner';
import Input from '../../../Components/UI/Input/Input';

const createInputConfig = (elType, type, placeholder, value) => {
  return {
    elementType: elType,
    elementConfig: {
      type: type,
      placeholder: placeholder,
    },
    value: value
  }
}

class ContactData extends Component {
  state = {
    orderForm: {
      name: createInputConfig('input', 'text', 'Name', 'Lalo Landa'),
      street: createInputConfig('input', 'text', 'Name', 'Test Street'),
      zipCode: createInputConfig('input', 'text', 'Name', '10000'),
      country: createInputConfig('input', 'text', 'Name', 'London'),
      email: createInputConfig('input', 'text', 'Name', '123@burger.com'),
      deliveryMethod: {
        elementType: 'select',
        elementConfig: {
          options: [
            {
              value: 'fastest',
              displayValue: 'fastest'
            },
            {
              value: 'cheapest',
              displayValue: 'cheapest'
            }
          ]
        },
        value: ''
      }
    },
    loading: false
  }

  orderHandler = (event) => {
    event.preventDefault();
    this.setState({ loading: true });
    const formData = {};
    for (let key in this.state.orderForm) {
      formData[key] = this.state.orderForm[key].value;
    }
    const order = {
      ingredients: this.props.ingredients,
      price: this.props.price,
      formData: formData
    }
    axios.post('/order.json', order)
      .then(response => {
        this.setState({ loading: false });
        this.props.history.push('/');
      })
      .catch(error => {
        this.setState({ loading: false });
      });
  }

  formChanged = (event, formEl) => {
    const updateOrderForm = {
      ...this.state.orderForm
    }
    const element = {
      ...updateOrderForm[formEl.id]
    }
    element.value = event.target.value;
    updateOrderForm[formEl.id] = element;
    this.setState({ orderForm: updateOrderForm });
  }

  render() {
    const formElements = [];
    for (let key in this.state.orderForm) {
      formElements.push({
        id: key,
        config: this.state.orderForm[key]
      });
    }
    let form = (<form onSubmit={this.orderHandler}>
      {formElements.map((formEl) =>
        <Input
          key={formEl.id}
          elementType={formEl.config.elementType}
          elementConfig={formEl.config.elementConfig}
          value={formEl.config.value}
          changed={(event) => {
            this.formChanged(event, formEl)
          }} />
      )}
      <Button buttonType="Success" clicked={(event) => this.orderHandler(event)}>Order</Button>
    </form>
    );
    if (this.state.loading) {
      form = <Spinner></Spinner>
    }
    return (
      <div className={css.ContactData}>
        <h4>Entry your Contact Data</h4>
        {form}
      </div>
    );
  }
}

export default ContactData;