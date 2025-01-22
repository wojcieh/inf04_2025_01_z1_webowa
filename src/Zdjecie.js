import { useState } from "react";

function Zdjecie(props){
    const [pobrane, ustaPobrane] = useState(props.pobran)
    return(
       <div className="col">
        <img src={props.img} alt={props.alt} className="zdjecie img-thumbnail"/>
        <h4>Pobrań {pobrane}</h4>
        <button type="button" className="btn btn-primary" onClick={() => {ustaPobrane(pobrane + 1)}}>Pobierz</button>
        </div>
    )

    
}
export default Zdjecie; 