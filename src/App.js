import React from 'react';
import Header from './components/Header/Header';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import HomePage from './components/Home-Page/HomePage';
import PastExchanges from './components/Past-Exchanges/PastExchanges';
import WishList from './components/Wishlist/WishList';


class App extends React.Component {
  render() {
  return (
    <BrowserRouter>
      <div>
        <Header />
        <Switch>
          <Route exact path='/' component={HomePage} />
          <Route path='/past-exchanges' component={PastExchanges} />
          <Route path='/wishlist' component={WishList} />
        </Switch>
      </div>
    </BrowserRouter>
    );
  }
}

export default App;
