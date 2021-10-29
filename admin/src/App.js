import SideBar from 'components/SideBar/SideBar';
import TopBar from 'components/TopBar/TopBar';
import Home from 'pages/home/Home';
import './App.scss';
import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom"
import UserList from 'pages/UserList/UserList';
import User from 'pages/User/User';
import NewUser from 'pages/NewUser/NewUser';
import Products from 'pages/Products/Products';
import ProductDetail from 'pages/ProductDetail/ProductDetail';
import NewProduct from 'pages/NewProduct/NewProduct';

function App() {
  return (
    <Router>
      <TopBar />

      <div className="container">
        <SideBar />
        <Switch>
          <Route path="/" exact>
            <Home />
          </Route>
          <Route path="/users" >
            <UserList />
          </Route>
          <Route path="/user/:userId" >
            <User />
          </Route>
          <Route path="/newUser" >
            <NewUser />
          </Route>
          <Route path="/products" >
            <Products />
          </Route>
          <Route path="/product/:idProduct" >
            <ProductDetail />
          </Route>
          <Route path="/newProduct" >
            <NewProduct />
          </Route>
        </Switch>
      </div>
    </Router>
  );
}

export default App;
