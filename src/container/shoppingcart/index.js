import React ,{Component} from 'react';

import {connect} from 'react-redux';

import './shoppingCart.css';
import  {removeFromCart} from '../../actions/index'
export class ShoppingCart extends Component {

renderShoppingCart =()=>{
  const {shoppingCart,removeFromCartaction } = this.props;
  return shoppingCart.map((item) => (
    <li
      key ={item.id}
       className = {'SC-list-item'}
       onClick={()=> removeFromCartaction(item.id)}>

      <img role ="presentaion" className='SC-items-image' src={item.link}/>
      <span>{item.title}</span>
    </li>
  ))


}
render() {

  return (
<div className='cartdivwrap'>
  <h1>Cart</h1>
    <ul className = {'SC-list'}>
      {this.renderShoppingCart()}

    </ul>
    </div>
  )
}



}

const mapStateToProps = (reduxState) =>({

shoppingCart:reduxState.shoppingCart
});

const mapDispatchToProps = (dispatch)=>({

  removeFromCartaction:(id) =>dispatch(removeFromCart(id))
})


export default connect(mapStateToProps,mapDispatchToProps)(ShoppingCart);
