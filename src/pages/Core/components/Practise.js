import React, { Component } from 'react'

// 每一行展示一个产品
class ProductRow extends Component {
  render () {
    const product = this.props.product
    const name = product.stocked
      ? product.name
      : <span style={{ color: 'red' }}>
        { product.name }
      </span>
    return (
      <tr>
        <td>{name}</td>
        <td>{product.price}</td>
      </tr>
    )
  }
}
// 为每一个产品类别展示标题
class ProductCategoryRow extends Component {
  render () {
    const category = this.props.category
    return (
      <tr>
        <th colSpan="2">
          { category }
        </th>
      </tr>
    )
  }
}
// 展示数据内容并根据用户输入筛选结果
class ProductTable extends Component {
  render () {
    const { filterText, inStockOnly } = this.props
    const rows = []
    let lastCategory = null

    this.props.products.forEach(product => {
      if (product.name.indexOf(filterText) === -1) return
      if (inStockOnly && !product.stocked) return

      if (product.category !== lastCategory) {
        rows.push(
          <ProductCategoryRow
            category={product.category}
            key={product.category} />
        )
      }
      rows.push(
        <ProductRow
          product={product}
          key={product.name} />
      )
      lastCategory = product.category
    })

    return (
      <table>
        <thead>
          <tr>
            <th>Name</th>
            <th>Price</th>
          </tr>
        </thead>
        <tbody>
          { rows }
        </tbody>
      </table>
    )
  }
}
// 接受所有的用户输入
class SearchBar extends Component {
  render () {
    const { filterText, inStockOnly } = this.props
    return (
      <form>
        <div>
          <input
            type="text"
            value={ filterText }
            placeholder="search value"
            onChange={e => this.props.handleFilterText(e.target.value)} />
        </div>
        <label>
          <input
            type="checkbox"
            checked={ inStockOnly }
            onChange={e => this.props.handleStockOnly(e.target.checked)} /> Only show products in stock
        </label>
      </form>
    )
  }
}
// 是整个示例应用的整体
class FilterableProductTable extends Component {
  constructor (props) {
    super(props)
    this.state = {
      filterText: '',
      inStockOnly: false
    }
  }
  // 搜索文字
  handleFilterText (filterText) {
    this.setState({
      filterText
    })
  }
  // 是否有库存
  handleStockOnly (inStockOnly) {
    this.setState({
      inStockOnly
    })
  }
  render () {
    return (
      <div className="product-wrapper">
        <SearchBar
          filterText={this.state.filterText}
          inStockOnly={this.state.inStockOnly}
          handleFilterText={(e) => this.handleFilterText(e)}
          handleStockOnly={(e) => this.handleStockOnly(e)}
        />
        <ProductTable
          products={ this.props.products }
          filterText={this.state.filterText}
          inStockOnly={this.state.inStockOnly}
        />
      </div>
    )
  }
}

const PRODUCTS = [
  {category: "Sporting Goods", price: "$49.99", stocked: true, name: "Football"},
  {category: "Sporting Goods", price: "$9.99", stocked: true, name: "Baseball"},
  {category: "Sporting Goods", price: "$29.99", stocked: false, name: "Basketball"},
  {category: "Electronics", price: "$99.99", stocked: true, name: "iPod Touch"},
  {category: "Electronics", price: "$399.99", stocked: false, name: "iPhone 5"},
  {category: "Electronics", price: "$199.99", stocked: true, name: "Nexus 7"}
]

export default class Practise extends Component {
  render() {
    return (
      <FilterableProductTable products={PRODUCTS} />
    )
  }
}
