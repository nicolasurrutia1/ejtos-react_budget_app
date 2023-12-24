import React, { useContext } from 'react';
import { AppContext } from '../context/AppContext';

const Location = () => {
  const {dispatch } = useContext(AppContext);

    const changeLocation = (val)=>{
            dispatch({
                type: 'CHG_CURRENCY',
                payload: val,
            })
    }
    

  return (
       
      <select placeholder="Currency"  name="Location" id="Location" onChange={event=>changeLocation(event.target.value)}>
        <option value="" disabled selected>Currency </option>
        <option value="$">Dollar($)</option>
        <option value="£">Pound(£)</option>
        <option value="€">Euro(€)</option>
        <option value="₹">Ruppee(₹)</option>
      </select>	
      
    
    );
};

export default Location;