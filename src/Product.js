import Category from './Category';
import Cart from './Cart'
import React from 'react';
import ReactDOM from 'react-dom';
import UpdateProduct from './UpdateProductDetials';
import './Product.css'
class Product extends React.Component
{

    constructor(props){
        super(props);
        this.state=
        {
            counter:0,
            totalamount:0,
            updatedname:this.props.data.name,
            updatedprice:this.props.data.price,
            updatedcategory:this.props.data.categoryID
        };
    }

    IncrementCounterAndPrice=()=>{
        //this.setState({counter:this.state.counter+1});
       // this.setState({totalamount:this.state.totalamount+this.props.data.price});

        this.props.setcounter(this.state.updatedprice);
    }
    
    updatedetails=(Name,Price,Category)=>{

        this.setState({updatedname:Name});
        this.setState({updatedprice:Price});
        this.setState({updatedcategory:Category});
    }


   render(){
    return( 
        <div class="divInline">
            {/* <h1>Product Details</h1> */}
            <p>
                <label>Name : {this.state.updatedname}</label>
            </p>
            <p>
                <label>Price : {this.state.updatedprice}</label>
            </p>
            
            <Category CategoryName={this.state.updatedcategory}></Category>

            <button onClick={this.IncrementCounterAndPrice}>Add to Cart</button>
             {/* <UpdateProduct name={this.props.data.productName} price={this.props.data.price} quantity={this.props.data.quantity} UpdateProduct={this.updatedetails}></UpdateProduct> */}
        </div>
    );
   }
}

export default Product;