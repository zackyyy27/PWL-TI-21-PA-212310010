const myStyle = {
    color: 'red',
    fontSize:"11px"
  }
  const MyBio = (props) => {
    return (
  <div>
  <h1 style={ myStyle }>Biodata:</h1>      
  <h1 className="text-danger">Nama saya {props.name}</h1>
  <h2>Usia: {props.age}</h2>
  </div>
    )
  }
  
  export default MyBio;