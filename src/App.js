import logo from './images/slider1.png';
import './App.css';
import Navbar from './components/navbar'
import Slider from './components/slider'
import Topcards from './components/topcards'
import addmissions from './images/addmissions.png'
import scholarships from './images/scholarship.png'
import noticeboard from './images/noticeboard.png'
import news from './images/news.png'
import {useState} from 'react'
import Facebook from './components/facebook';
import EventDetails from './components/eventdetails'
import book from './images/book.png'
import Slideshow from './components/slider'
import Footer from './components/footer'
import CopyRight from './components/copyright.js'
import 'react-slideshow-image/dist/styles.css'

function App() {

const [data,setData] = useState([{
  src : book,
  head : 'Scholarship News',
  para : 'this iskhalid bin waleed intitute'
},
{
  src : book,
  head : 'Addmisions',
  para : 'this iskhalid bin waleed intitute'
},
{
  src : book,
  head : 'Notice Board',
  para : 'this iskhalid bin waleed intitute'
},
{
  src : book,
  head : 'Latest News',
  para : 'this iskhalid bin waleed intitute'
},
])


  return (
    <div className="App">
      <Navbar />
      <Slideshow />
     
    <div className='card-container'>
      <h2>Courses</h2>
    <div className='current'>
      {data.map((v,i)=>{
        return(
          <div key = {i}>
            <Topcards
  src = {v.src}
  head= {v.head}
  para={v.para}/>
          </div>
        )
      })}
    </div>
    </div>
    <div className='intro'>
      <Facebook />
    <div className='events'>
      <EventDetails 
      eventName = 'Nahav Tarkeeb COmpitition'
      eventDetail = 'HEld on 15th July 2021.EveryOne can participate in this compition.'
      />
       <EventDetails 
      eventName = 'Nahav Tarkeeb COmpitition'
      eventDetail = 'HEld on 15th July 2021.EveryOne can participate in this compition.'
      />
       <EventDetails 
      eventName = 'Nahav Tarkeeb COmpitition'
      eventDetail = 'HEld on 15th July 2021.EveryOne can participate in this compition.'
      />
    </div>
    </div>
    
      <Footer />
      <CopyRight />
    </div>
  );
}


export default App;
