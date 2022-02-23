import React from "react";
import ProductTable from "../ProductTable/productTable";
import SearchBar from "../SearchBar/SearchBar";



class FilterableProductTable extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            filterText: '',
            inStockOnly: false,
        }
        this.handleFilterTextChange = this.handleFilterTextChange.bind(this);
        this.handleInStockOnly = this.handleInStockOnly.bind(this);

    }

    handleFilterTextChange(filterText) {
        this.setState({
            filterText,
        });
    }

    handleInStockOnly(inStockOnly) {
        this.setState({
            inStockOnly,
        });
    }

    render() {
        return (
            <div>
                <SearchBar
                    filterText={this.state.filterText}
                    inStockOnly={this.state.inStockOnly}
                    onFilterTextChange={this.handleFilterTextChange}
                    onhandleInStock={this.handleInStockOnly}
                />

                <ProductTable
                    filterText={this.state.filterText}
                    inStockOnly={this.state.inStockOnly}
                    products={this.props.products}
                />
            </div>
        );
    }
}

export default FilterableProductTable;