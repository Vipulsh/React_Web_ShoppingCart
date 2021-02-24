import React from 'react'
import Product from './Product'
import Cart from './Cart'
class ProductList extends React.Component
{
    constructor(props)
    { 
        super(props)
        this.state={

            res:'',
            Products:[[]],
            counter:0,
            totalamount:0
        }

        
        
    }
    
    componentDidMount(){
       // debugger;
        fetch("http://localhost:82/api/Product").then(re=>re.json()).then
        (
            data=>
            {
                this.setState
                ({
                    Products: data 
                    //data.map(item => 
                    // ({
                    //     id: item.id,
                    //     quantity: item.quantity,
                    //     price: item.price
                    // }))
                })
            }
        )
    }

    func=(updatedprice)=>{
        this.setState({counter:this.state.counter+1,totalamount:this.state.totalamount+updatedprice});

    }
    
    clear=()=>{

        if(window.confirm("Are you sure you want to clear the items in the cart"))
            this.setState({counter:0,totalamount:0});
    }
    
    render()
    {
        const list = this.state.Products
        const listelements = list.map(
                item=> <Product key={item.id} data={item} setcounter={this.func}></Product>
        )
       
        return(
            
            
            <div>
            <h2>
                <Cart counter={this.state.counter} class="cartcomp"></Cart>
            
                <label>Total Cart Amount:Rs. {this.state.totalamount}</label>
                <p>
                    <button onClick={this.clear}>Clear Cart</button>
                </p>
            </h2>
                <h1>Product Details</h1>
                {listelements}{/* {console.clear(),console.log(Object.values(this.state.Products[0]))} */}

            </div>
        
        )
    }

}

export default ProductList;