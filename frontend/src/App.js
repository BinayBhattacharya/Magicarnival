// import { render } from "react-dom";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import "./App.css";
import Header from "./pages/Header/Header";
import Footer from "./pages/Footer/Footer";
import Home from "./pages/Home/Home";
import Portfolio from "./pages/portfolio/Portfolio";
import Aboutus from "./pages/Aboutus/Aboutus";
import Faq from "./pages/Faq/Faq";
import Blog from "./pages/Blog/Blog";
import Getstarted from "./pages/getstarted/getstarted";
import Submission from "./pages/Submission/Submission";

function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <Header />
        <Switch>
          <Route exact path="/" component={Home}>
            <Home />
          </Route>
          <Route exact path="/portfolio" component={Portfolio}>
            <Portfolio />
          </Route>
          <Route exact path="/getstarted" component={Getstarted}>
            <Getstarted />
          </Route>
          <Route exact path="/submission" component={Submission}>
            <Submission />
          </Route>
          <Route exact path="/aboutus" component={Aboutus}>
            <Aboutus />
          </Route>
          <Route exact path="/blog" component={Blog}>
            <Blog />
          </Route>
          <Route exact path="/faq" component={Faq}>
            <Faq />
          </Route>
        </Switch>
        <Footer />
      </div>
    </BrowserRouter>
  );
}

export default App;
