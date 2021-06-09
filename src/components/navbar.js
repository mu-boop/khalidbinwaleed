import logo from '../images/logo.png';
import menu from '../images/menu.png'
import phone from '../images/phone.png';
import email from '../images/email.png'
import '../App.css';

function Navbar(){
    return(
      <div>
      <div className="navbar Bg">
        <div className="nav">
          <div className="logo">
            <img src={logo} alt="" />
          </div>
        </div>
        <div className="contact-email">
          
        <div className="details">
          <div className='contact-img'>
            <img src={phone}></img>
          </div>
            <div className='detail'>
            <div className="contact">Call Us</div>
            <div className="contact">03211231805</div>
          </div>
            </div>
          
          <div className="details">
          <div className='contact-img'>
            <img src={email}></img>
          </div>
            <div className='detail'>
            <div className="contact">Email</div>
            <div className="contact">mugheeskhatri6@gmail.com</div>
          </div>
            </div>
        </div>
        <div className="fafa">
          <button onclick="showCat()"><img src={menu} alt="" /></button>
        </div>
      </div>
      <div className="navbar hid">
        <div className='subnav'>
        <div className="categories">
          <a href="index.html" className="cat">
            <div className="cat-list">Home</div>
          </a>
          <a href="courses.html" className="cat">
            <div className="cat-list">Courses</div>
          </a>
          <a href="#" className="cat">
            <div className="cat-list">About Us</div>
          </a>
          <a href="#" className="cat">
            <div className="cat-list">Donate</div>
          </a>
        </div>
       
        </div>
        <div className='icon-section'>
          <button className="ctaBtn" onclick="showForm()">Addmission</button>
        </div>
      </div>
    </div>
    )
}

export default Navbar;


