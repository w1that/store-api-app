
import "./App.css";
import Navbar from "./components/NavigationBar";
import Dashboard from "./components/Dashboard";
import { Container } from "semantic-ui-react";
import CategoryPanel from "./components/CategoryPanel";
import Footer from "./components/Footer";

function App() {
  return (
    <div style={{ background: "#fafafa" }} className="App">
      <Navbar></Navbar>
      <CategoryPanel></CategoryPanel>
      <Container >
        <Dashboard></Dashboard>
      </Container>
      <Footer></Footer>
    </div>
  );
}

export default App;
