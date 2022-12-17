import Link from "next/link";

function Nav() {
  return (
    <nav id="navbar">
    <img src={"../211.png"} alt="" data-aos="fade-left"/>
    <div className="nav-links" id="navLinks">
        <i className="fa fa-times" onclick="hideMenu()"></i>
        

        <ul id="menu">
            
            

              <li><a href="https://keezryuusei.ca/">Home</a></li>
              
              

           
        
        </ul>

    </div>
       
    
    <i className="fa fa-solid fa-bars" onclick="showMenu()"></i>
</nav>


  );
}

export default Nav;
