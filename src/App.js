import "./App.css";
import Navbar from "./components/NavigationBar";
import { Container } from "semantic-ui-react";
import CategoryPanel from "./components/CategoryPanel";
import Footer from "./components/Footer";
import { Route } from "react-router";
import ProductDetailPage from "./pages/ProductDetailPage";
import ProductPanel from "./components/ProductPanel";
import LoginPage from "./pages/LoginPage";
import { ToastContainer } from "react-toastify";
import ProfilePage from "./pages/ProfilePage";
import CartPage from "./pages/CartPage";
import CategoriesProductsPage from "./pages/CategoriesProductsPage";

function App() {
  return (
    <div className="App">
      <ToastContainer autoClose={2000} position="bottom-right" />
      <Navbar></Navbar>
      <Route exact path="/" component={CategoryPanel}></Route>
      <Container>
        <Route path="/products/:id" component={ProductDetailPage}></Route>
        <Route exact path="/" component={ProductPanel}></Route>
        <Route exact path="/:category" component={CategoriesProductsPage}></Route>
        <Route exact path="/signin" component={LoginPage}></Route>
        <Route exact path="/profile/:username" component={ProfilePage}></Route>
        <Route exact path="/cart/:username" component={CartPage}></Route>
      </Container>

      <Route path="/" component={Footer}></Route>
    </div>
  );
}

export default App;
