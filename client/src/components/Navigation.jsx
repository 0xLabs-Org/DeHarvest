import "../styles/navigation.css";
function Navigation() {
  return (
    <nav className="glass-navbar">
      <div className="logo">DeHarvest</div>
      <ul className="nav-menu">
        {/* <li>
          <a href="#home">Home</a>
        </li>
        <li>
          <a href="#features">Features</a>
        </li>
        <li>
          <a href="#staking">Staking</a>
        </li>
        <li>
          <a href="#governance">Governance</a>
        </li>
        <li>
          <a href="#marketplace">Marketplace</a>
        </li> */}
        <li>
          <a href="#wallet" id="wallet">
            Wallet
          </a>
        </li>
      </ul>
    </nav>
  );
}

export default Navigation;
