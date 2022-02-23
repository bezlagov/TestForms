import './App.css';
import FormHolder from './Components/FormHolder/FormHolder';
import SecondTaskController from './Components/SecondTask/SecondTaskController/SecondTaskController';
/*
import FilterableProductTable from './Components/FilterableProductTable/FilterableProductTable';
import ControledComponent from './ControledComponents/ControledComponent';
import PropTypesExample from './PropTypesExample/PropTypesExample';*/
const PRODUCTS = [
  { category: 'Sporting Goods', price: '$49.99', stocked: true, name: 'Football' },
  { category: 'Sporting Goods', price: '$9.99', stocked: true, name: 'BaseBall' },
  { category: 'Sporting Goods', price: '$29.99', stocked: false, name: 'BasketBall' },
  { category: 'Electronics', price: '$99.99', stocked: true, name: 'iPod Touch' },
  { category: 'Electronics', price: '$399.99', stocked: false, name: 'iPhone X' },
  { category: 'Electronics', price: '$199.99', stocked: true, name: 'Nexus 7' },
];
const modificator = [0.5, 0.05];
function App() {
  return (
    <div className="App">
      {/* <ControledComponent />
    <PropTypesExample name="Ivan" age={33} />*/}
      {/*<FilterableProductTable  products={PRODUCTS}/>*/}
      <FormHolder />
      <hr />
      <SecondTaskController
        modificator1={modificator[0]}
        modificator2={modificator[1]}
      />
    </div>
  );
}

export default App;
