
import "./App.css";
import Navbar from "./components/NavigationBar";
import Dashboard from "./components/Dashboard";
import { Container } from "semantic-ui-react";
import CategoryPanel from "./components/CategoryPanel";
import Footer from "./components/Footer";
import { Route } from "react-router";
import ProductDetailPage from "./pages/ProductDetailPage";
import ProductPanel from "./components/ProductPanel";

function App() {
  return (
    <div style={{ background: "#fafafa" }} className="App">
      <Navbar></Navbar>
      <CategoryPanel></CategoryPanel>
      {/* <Container >
        <Dashboard></Dashboard>
      </Container> */}
      <Container> <Route path="/products/:id" component={ProductDetailPage}></Route>
        <Route exact path="/" component={ProductPanel}></Route></Container>
      <Route path="/" component={Footer}></Route>
    </div>
  );
}

export default App;
