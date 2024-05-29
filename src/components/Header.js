const Title = () => {
    return (
      <a href="/">
      <img
        alt="logo"
        src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT-ZoezKCaWtvM-5u6C0zvBdZzrP2K2CCRBQStlcIftWA&s"
        width="70px"
      />
      </a>
    );
  };
  
  const Header = () => {
    return (
      <div className="header">
        <Title />
        <div className="nav-items">
          <ul>
            <li>Menu</li>
            <li>About</li>
            <li>Contact</li>
            <li>Cart</li>
          </ul>
        </div>
      </div>
    );
  };

  export default Header;