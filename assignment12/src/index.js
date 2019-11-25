import React, { Component } from 'react'
import { render } from 'react-dom'

let PRODUCTS = [
    { id: 1, category: 'Music', price: '$459.99', name: 'Clarinet' },
    { id: 2, category: 'Music', price: '$5,000', name: 'Cello' },
    { id: 3, category: 'Music', price: '$4,500', name: 'Tuba' },
    { id: 4, category: 'Furniture', price: '$799', name: 'Chaise Lounge' },
    { id: 5, category: 'Furniture', price: '$1,300', name: 'Dining Table' },
    { id: 6, category: 'Furniture', price: '$100', name: 'Bean Bag' }
]


const List = ({ name, price }) => {
    return (
        <tr>
            <td>{name}</td>
            <td>{price}</td>
        </tr>
    )
}

const Search = () => {
    return (
        <div>
            <input type="Search" placeholder="Search..."></input>
        </div>
    )
}

const Shop = ({ products }) => {
    return (
        <table>
            <thead>
                <th>Name</th>
                <th>Price</th>
            </thead>
            <tbody>
                {products.map(
                    (product, i) =>
                        <List
                            key={i}
                            name={product.name}
                            price={product.price} />
                )}
            </tbody>
        </table>
    )
}

render(
    <Search />,
    <Shop products={PRODUCTS} />,
    document.getElementById('root'))