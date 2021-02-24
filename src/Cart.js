import React from 'react';
import ReactDOM from 'react-dom';
import './Product.css'

//Cart is a class component.
class Cart extends React.Component
{
    constructor(props){
        super(props);
    }

    render(){
      return(
      <div>
            <p>
                <label> Cart Items Count: {this.props.counter}</label>
            </p>
        </div>
      );
    }
}

export default Cart;