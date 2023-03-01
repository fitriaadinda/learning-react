import React from 'react';
import Header from './Components/Header'
import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom"
import Home from './Views/Home'
import About from './Views/About'
import Contact from './Views/Contact'
import Product from './Views/Product';
import Footer from './Components/Footer';

function App() {
  return (
    <div className="relative pb-10 min-h-screen">
      <Router>
        
        <Header />

        <div className="p-3">
        <Switch>
          <Route exact path="/">
            <Home />
          </Route>
          <Route path="/about">
            <About />
          </Route>
          <Route path="/products/:id">
            <Product />
          </Route>
          <Route path="/contact">
            <Contact />
          </Route>
        </Switch>
        </div>

        <Footer />

      </Router>
    </div>
  )
}

export default App;
