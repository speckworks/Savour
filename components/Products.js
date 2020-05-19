import React, { Component } from 'react'
import { withApollo } from 'react-apollo'
import gql from 'graphql-tag'

const ProductsQuery = gql`
  query ProductsQuery($filter: String!) {
    product(filter: $filter) {
      beers{
       name
       description
     },
    }
  }
`;

class Products extends Component {

  state = {
    beers: [],
    filter: ''
  }

  render() {
    return (
      <div>
        <div>
          Search
          <input
            type='text'
            onChange={e => this.setState({ filter: e.target.value })}
          />
          <button onClick={() => this._executeSearch()}>OK</button>
        </div>
        {this.state.beers.map((beer, index) => (
          <div key={beer.id} name={beer.name} index={index} >{beer.name}</div>
        ))}
      </div>
    )
  }

  _executeSearch = async () => {
    const { filter } = this.state
    const result = await this.props.client.query({
      query: ProductsQuery,
      variables: { filter },
    }).then(
        data=>this.setState({
            beers: data.data.product.beers
        })
    )
  }
}

export default withApollo(Products)