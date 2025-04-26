import './App.css';
import photo from "./assets/photo.jpg";

function App() {
  return (
    <div className="App">
      <img style={{marginTop:"10px"}} src={photo} width="200px" height="250px" alt=""/>
      <h1>Anita Thamrin</h1>
      <h2>Operational Support Analyst</h2>
      <div style={{border:"1px solid black", marginRight:"300px", marginLeft:"300px"}}>
        <h3>About me</h3>
        <hr style={{margin:"auto 200px", border:"1px solid white", boxShadow:"0px 2px 2px rgba(0, 0, 0, 0.3)"}} />
        <p style={{textAlign:"center"}}>I am a dedicated and experienced employee with 14 years of working experience.
          Currently, I am attending Software Engineering course in the pursuit of becoming 
          a software developer.
        </p>
      </div>

      <div style={{border:"1px solid black", marginRight:"300px", marginLeft:"300px", marginTop:"10px"}}>
        <h3>Contact me</h3>
        <hr style={{margin:"auto 200px", border:"1px solid white", boxShadow:"0px 2px 2px rgba(0, 0, 0, 0.3)"}} />
        <p style={{textAlign:"center"}}>
          Email: anita.thamrin@gmail.com | LinkedIn: https://www.linkedin.com/in/anita-thamrin/
        </p>
      </div>
      
    </div>
  );
}

export default App;
