import FormTrainer from "../components/HomePage/FormTrainer";
import "../components/PokedexPage/Style/HomePage.css";


const HomePage = () => {
  return (
    <div className="home-page">
      <div className="content-wrapper">
        <h1 className="pokedex-title">Pokedex</h1>
        <h2 className="trainer-greeting">¡Hola entrenador!</h2>
        <p className="trainer-instructions">
          Para poder comenzar, dime tu nombre de entrenador
        </p>
        <FormTrainer />
      </div>
      
      <div className="red-black-bar">
        
        <div className="red-section"></div>
          <div className="black-section">
            <div className="pokeball-container">
              <div className="pokeball">
            
                <div className="pokeball-bottom">

              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HomePage;