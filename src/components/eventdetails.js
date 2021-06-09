function EventDetails(props) {
    return(
        <div className = 'event-details'>
        <h3>{props.eventName}</h3>
        <p>{props.eventDetail}</p>
      </div>
    )
}

export default EventDetails;