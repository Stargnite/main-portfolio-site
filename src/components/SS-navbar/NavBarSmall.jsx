import "./navbar-small.css";

const NavBarSmall = () => {

  let isActive = false;
  const toggleNav = () => {
    const nav = document.querySelector("#small-nav");
    const toggle = document.querySelector(".toggle-nav");
    if (!isActive) {
      nav.classList.add("active");
      toggle.classList.add("active");
      isActive = true;
    } else {
      nav.classList.remove("active");
      toggle.classList.remove("active");
      isActive = false;
    }
  }

  return (
    <nav className="overall">
      <div className="logo">Shobam</div>
      <div className="nav-btns">
        <a
          href="https://docs.google.com/document/d/1HRSf0vq37Z9WphhQIGYmm6_MhlFd1HDAiVhO63MWrik/edit?usp=sharing"
          target="_blank"
        >
          <button className="resume">
            Resume
          </button>
        </a>

        <div class="toggle-nav" onClick={toggleNav}>
          <i class="fas fa-bars"></i>
        </div>
      </div>




      <ul id='small-nav'>
        <li>
          <a href="#home">Home</a>
        </li>
        <li>
          <a href="#about">About</a>
        </li>
        <li>
          <a href="#services">Services</a>
        </li>
        <li>
          <a href="#works">Works</a>
        </li>
        <li>
          <a href="#contact">Contact</a>
        </li>
      </ul>
    </nav>
  );
};

export default NavBarSmall;
