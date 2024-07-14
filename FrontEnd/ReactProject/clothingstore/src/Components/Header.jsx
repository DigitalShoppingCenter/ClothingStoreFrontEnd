import header from '../Styling/Header.css'

function Header (){

    return(

        <div className="header">
            <nav>
        <ul>
          <li><a href="/">Home</a></li>
          <li><a href="/about">About</a></li>
          <li><a href="/services">Services</a></li>
          <li><a href="/contact">Social</a></li>
          <li><a href="/contact">Community</a></li>
          <li><a href="/contact">Contact</a></li>
          <li><a href="/contact">Settings</a></li>
        </ul>
      </nav>
            <h1>E & D Corporation</h1>
            <p id='welcome'><b>Welcome,</b> Please take your time Navigating through our Webpage.</p>
      
      
    </div>
  );
};

export default Header

