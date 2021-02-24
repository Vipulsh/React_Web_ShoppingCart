import React from 'react';
import ReactDOM from 'react-dom';



class UpdateProduct extends React.Component
{

    constructor(props)
    {
        super(props);

        this.state=
        {
            sname:this.props.name,
            sprice:this.props.price,
            scategoryname:this.props.categoryname
        }
    }

    updateproduct=()=>
    {
        let Name = this.refs.rname.value
        let Price = this.refs.rprice.value
        let Category =this.refs.rcategory.value

        this.props.UpdateProduct(Name,Price,Category);
    }

    render()
    {
        return(
            
            <div>
            <h1>UpdateProduct</h1>
            <label>Name:</label>
            <input type="text" ref ="rname" defaultValue={this.state.sname}></input>

            <label>Price:</label>
            <input type="text" ref="rprice" defaultValue={this.state.sprice}></input>

            <label>CategoryName:</label>
            <input type="text" ref="rcategory" defaultValue={this.state.scategoryname} onChange={this.updateproduct}></input>

            <button onClick={this.updateproduct}>Update</button>
            </div>
        );
    }

}

export default UpdateProduct;