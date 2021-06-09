function Topcards(props){
    return(
          <div className="current-card">
          <div className="image"><img src={props.src} alt="" /></div>
          <h3>{props.head}</h3>
          <center><p>{props.para}</p></center>
          
        </div>
    )
}

export default Topcards;

