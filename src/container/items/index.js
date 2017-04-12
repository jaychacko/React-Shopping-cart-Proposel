import React , {Component} from 'react';
import {connect} from 'react-redux';
import {addToCart} from '../../actions/index'

import './items.css';

 export class Items extends Component {

  renderList = ()=>{
    const { items, addToCartAction } = this.props;
    console.log(items);


    return items.map((item) => (
      <li
        key ={item.id}
         className = {'item-list-item'}
         onClick={()=> addToCartAction(item)}>

        <img role ="presentaion" className={"items-image"} src={item.link}/>
        <span>{item.title}</span>
      </li>
    ))
  }

render() {

  return (
    <div className='divwrap'>
<h1>Buy now</h1>
    <ul className = {'items-list'}>
      {this.renderList()}

    </ul>
    <hr></hr>
    </div>
  )
}

}

const mapStateToProps = (reduxState) =>({

  items:reduxState.item
});

const mapDispatchToProps = (dispatch) =>({
  addToCartAction: (item)=>dispatch(addToCart(item))
});

export default connect(mapStateToProps, mapDispatchToProps)(Items)
