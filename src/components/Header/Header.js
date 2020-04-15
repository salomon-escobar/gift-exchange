import React from 'react';
import { Link } from 'react-router-dom';
import './header.styles.css';

class Header extends React.Component {
  render() {
    return (
      <header className='main-header'>
        <div>
          <Link
            className='link-button'
            to='/'>
            Home
          </Link>
          <Link
            className='link-button'
            to='/past-exchanges'>
            Past Exchanges
          </Link>
          <Link
            className='link-button'
            to='/wishlist'>
            Wishlist
          </Link>
        </div>
      </header>
    );
  }
};

export default Header;

// <button
//             type='button'
//             className='link-button'
//             onClick={() => this.setState({showSomething: true})}>
//               Home
//           </button>

// <button
//             type='button'
//             className='link-button'
//             onClick={() => this.setState({showSomething: true})}>
//               Past Exchanges
//           </button>