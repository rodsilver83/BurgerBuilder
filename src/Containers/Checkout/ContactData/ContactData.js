import React, { Component } from "react";
import Button from '../../../Components/UI/Button/Button';
import css from './ContactData.module.css';
import axios from '../../../axios-orders';
import Spinner from '../../../Components/UI/Spinner/Spinner';
import Input from '../../../Components/UI/Input/Input';

const createInputConfig = (elType, type, placeholder) => {
  return {
    elementType: elType,
    elementConfig: {
      type: type,
      placeholder: placeholder,
    },
    value: '',
    validation: {
      required: true,
      minLength: 5,
      maxLength: 10
    },
    valid: false,
    touched: false
  }
}

class ContactData extends Component {
  state = {
    orderForm: {
      name: createInputConfig('input', 'text', 'Name'),
      street: createInputConfig('input', 'text', 'Street'),
      zipCode: createInputConfig('input', 'text', 'Zip Code'),
      country: createInputConfig('input', 'text', 'Country'),
      email: createInputConfig('input', 'text', 'Email'),
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
        value: 'fastest',
        validation: {},
        valid: true
      }
    },
    formValid: false,
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
    element.valid = this.validateForm(element.value, element.validation);
    element.touched = true;
    updateOrderForm[formEl.id] = element;

    let formValid = true;

    for (let input in updateOrderForm) {
      formValid = updateOrderForm[input].valid && formValid;
    }
    this.setState({ orderForm: updateOrderForm, formValid: formValid });
  }

  validateForm = (value, rules) => {
    let isValid = false;
    if (rules.required) {
      isValid = value.trim() !== '';
    }
    if (rules.minLength) {
      isValid = value.length >= rules.minLength && isValid;
    }
    if (rules.maxLength) {
      isValid = value.length <= rules.maxLength && isValid;
    }
    return isValid;
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
          invalid={!formEl.config.valid}
          shouldValidate={formEl.config.validation}
          touched={formEl.config.touched}
          changed={(event) => {
            this.formChanged(event, formEl)
          }} />
      )}
      <Button buttonType="Success"
        disabled={!this.state.formValid}
        clicked={(event) => this.orderHandler(event)}>
        Order
        </Button>
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