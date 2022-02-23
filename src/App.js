import './App.css';
import FilterableProductTable from './Components/FilterableProductTable/FilterableProductTable';
import FormHolder from './Components/FormHolder/FormHolder';
import SecondTaskController from './Components/SecondTask/SecondTaskController/SecondTaskController';
/*import ControledComponent from './ControledComponents/ControledComponent';
import PropTypesExample from './PropTypesExample/PropTypesExample';*/
const PRODUCTS = [
  { category: 'Sporting Goods', price: '$49.99', stocked: true, name: 'Football' },
  { category: 'Sporting Goods', price: '$9.99', stocked: true, name: 'BaseBall' },
  { category: 'Sporting Goods', price: '$29.99', stocked: false, name: 'BasketBall' },
  { category: 'Electronics', price: '$99.99', stocked: true, name: 'iPod Touch' },
  { category: 'Electronics', price: '$399.99', stocked: false, name: 'iPhone X' },
  { category: 'Electronics', price: '$199.99', stocked: true, name: 'Nexus 7' },
];

function App() {
  return (
    <div className="App">
      {/* <ControledComponent />
    <PropTypesExample name="Ivan" age={33} />*/}
      {/*<FilterableProductTable  products={PRODUCTS}/>*/}
      <FormHolder />
      <hr />
      <SecondTaskController />
    </div>
  );
}

export default App;
