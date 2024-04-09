import {useRef} from 'react'
import { setTrainer } from '../../store/states/trainer.slice'
import { useDispatch } from 'react-redux'
import { useNavigate } from 'react-router-dom'
import '../PokedexPage/Style/FormTrainer.css'

const FormTrainer = () => {
    const trainerInput = useRef();
    const dispatch = useDispatch();
    const navigate = useNavigate();
  
    const handleSubmit = (e) => {
      e.preventDefault();
      dispatch(setTrainer(trainerInput.current.value.trim()));
      navigate('/pokedex');
    };
  
    return (
      <form onSubmit={handleSubmit} className="trainer-form">
        <input
          placeholder="Tu nombre..."
          ref={trainerInput}
          type="text"
          className="trainer-input"
        />
        <button className="start-button">Lest Star</button>
      </form>
    );
  };
  
  export default FormTrainer;