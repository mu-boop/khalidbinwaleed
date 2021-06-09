import './footer.css';
import logo from '../images/footerlogo.png'
import call from '../images/phone.png'
import fb from '../images/facebook.png'
import whatsapp from '../images/whatsapp.png'
import youtube from '../images/youtube.png'
import twitter from '../images/twitter.png'
import insta from '../images/instagram.png'
import email from '../images/email.png'
import address from '../images/address.png'
function Footer(){
    return(
        <div className='footer'>
            <div className='about-section'>
        <div className='logo-section'><img src={logo} /></div>
        <div className='para-section'><p>THis is khalid Bin waleed Institute.
            work for humanity.asdfhukajkh sdkfyashd hdsf lkshdiofhsdofyh hjklasfhdoisfdsdflahfd kj
            sfdalfhkoidfkjusde
        </p></div>
        <div className='btn'><button>Donate Us</button></div>
            </div>
            <div className='uni-section'>
                <h2>The Institute</h2>
                <table>
                    <tr><td><a href='#'>Our Courses</a></td></tr>
                    <tr><td><a href='#'>Lab</a></td></tr>
                    <tr><td><a href='#'>About Us</a></td></tr>
                    <tr><td><a href='#'>Admission</a></td></tr>
                    <tr><td><a href='#'>Location</a></td></tr>
                </table>

                <div className='social-icon'>
                    <a href='#'><img src={fb} /></a>
                    <a href='#'><img src={whatsapp} /></a>
                    <a href='#'><img src={twitter} /></a>
                    <a href='#'><img src={youtube} /></a>
                    <a href='#'><img src={insta} /></a>
                </div>
            </div>

            <div className='contact-us'>
                <h2>Contact Us</h2>
                <div className='contact-nested contct'>
                <div className="details">
          <div className='contact-img'>
            <img src={call}></img>
          </div>
            <div className='detail'>
            <div className="contact">Call Us</div>
            <div className="contact">03211231805</div>
          </div>
            </div>
                </div>

                <div className='sub-list'>
                <div className='contact-list'>
                    <div><img src={email} /></div><div><p>mugheeskhatri6@gmail.com</p></div>
                </div>
                <div className='contact-list'>
                    <div><img src={call} /></div><div><p>035489674687</p></div>
                </div>
                <div className='contact-list'>
                    <div><img src={address} /></div><div><p>C-35 Bismillah Colony Sector 11-G New Karachi,Karachi Pakistan</p></div>
                </div>
                </div>
            </div>

        </div>
    )
}

export default Footer;