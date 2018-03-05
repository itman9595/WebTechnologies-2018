import React, { Component } from 'react';
import './App.css';

class ProductList extends Component {

	constructor(props) {
		super(props)
		this.state = {
			products: [
				{id: 1, title: 'Milk', price: 300, selected: false},
				{id: 2, title: 'Bread', price: 100, selected: false},
				{id: 3, title: 'Ice-Cream', price: 150, selected: false},
				{id: 4, title: 'Candy', price: 200, selected: false}
			],
			sum: 0
		};
	}

	render() {
		return (
		   	<div>
		      <h1>Products</h1>
		      <br/>
			     <ul class="list">
					{this.state.products.map((i) =>
					    <li key = {i.id} id={i.id} onClick = {(e) => this.selectItem(i.id, e)}>
					      <div>{i.title + ' ' + i.price}</div>
					    </li>
					)}
				</ul>
				<div id="total">Total: {this.state.sum}</div>
		    </div>
		);
	}

	selectItem(e) {
		var items = this.state.products.slice();
		for (var i=0;i<items.length;i++) {
			if (e == items[i].id) {
				items[i].selected = !items[i].selected
				this.setState = ({
					products: items
				});
			}
			var el = document.getElementById(items[i].id);
			if (items[i].selected) {
				el.style.backgroundColor = 'blue';
				/*var ss = this.state.sum;
				ss += items[i].price;
				this.state = ({
					sum: ss
				});*/
			} else {
				el.style.backgroundColor = 'white';
			}
		}	
	}

}

export default ProductList;
