// import { render } from "react-dom";
import {BrowserRouter, Route, Switch} from 'react-router-dom';import './App.css';
import Header from './pages/Header/Header';
import Home from './pages/Home/Home';
import Portfolio from './pages/portfolio/Portfolio';

function App() {
  return (
    <BrowserRouter>
      <div className="App">
          <Header />
        <Switch>
          <Route exact path='/' component={Home}>
            <Home />
          </Route>
          
          
        </Switch>
      </div>
    </BrowserRouter>
  );
}

export default App;
