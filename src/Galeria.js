import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css'
import Zdjecie from './Zdjecie.js'

import { useState } from 'react';
const zdjecia = [
  {id: 0, alt: "Mak", filename: "obraz1.jpg", category:1, downloads: 35},
    {id: 1, alt:"Bukiet", filename: "obraz2.jpg", category: 1, downloads: 43},
    {id: 2, alt:"Dalmatyńczyk", filename: "obraz3.jpg", category:2, downloads: 2},
    {id: 3, alt:"Świnka morska", filename: "obraz4.jpg", category:2, downloads: 53},
    {id: 4, alt:"Rotwailer", filename: "obraz5.jpg", category:2, downloads: 43},
    {id: 5, alt:"Audi", filename: "obraz6.jpg", category:3, downloads: 11},
    {id: 6, alt:"kotki", filename: "obraz7.jpg", category:2, downloads: 22},
    {id: 7, alt:"Róża", filename: "obraz8.jpg", category:1, downloads: 33},
    {id: 8, alt:"Świnka morska", filename: "obraz9.jpg", category:2, downloads: 123},
    {id: 9, alt:"Foksterier", filename: "obraz10.jpg", category:2, downloads: 22},
    {id: 10, alt:"Szczeniak", filename: "obraz11.jpg", category:2, downloads: 12},
    {id: 11, alt:"Garbus", filename: "obraz12.jpg", category:3, downloads: 321}];
function Galeria() {
  const [widoczne, setWidoczne] = useState(
    {
      1: true,
      2: true,
      3: true,
    });

    
   
 
  return (
    <div id="main" className="container">
      <h1>Kategorie zdjęć</h1>
      <div className='container'>
        <div className='row'>
      <div className="form-check form-switch col">
  <input className="form-check-input" type="checkbox" role="switch" id="1" checked={widoczne[1]} onChange={() => setWidoczne(
    {
      1: !widoczne[1],
      2:  widoczne[2],
      3: widoczne[3],
    }
  )}></input>
  <label className="form-check-label" for="1">Kwiaty</label>
  </div>
  <div className="form-check form-switch col">
  <input className="form-check-input" type="checkbox" role="switch" id="2" checked={widoczne[2]} onChange={() => setWidoczne(
    {
      1: widoczne[1],
      2: !widoczne[2],
      3: widoczne[3],
    }
  )} ></input>
  <label className="form-check-label" for="2">Zwierzęta</label>
  </div>
  <div className="form-check form-switch col">
  <input className="form-check-input" type="checkbox" role="switch" checked={widoczne[3]} id="3" 
  onChange={() => setWidoczne(
    {
      1: widoczne[1],
      2: widoczne[2],
      3: !widoczne[3],
    }
  )}
  ></input>
  <label className="form-check-label" for="3">Samochody</label>
  </div>
  </div>
</div>
<div className='album py-5 bg-body-tertiary'>
    <div id="galeria" className="container">
      <div className='row row-cols-3'>
      {zdjecia.map(zdjecie => (
        (widoczne[zdjecie.category] &&
        <Zdjecie img={zdjecie.filename} alt={zdjecie.alt} pobran={zdjecie.downloads} ></Zdjecie>)
      )
      )
    }

    {/* <div >
      {zdjecia.map((zdjecie) => (
        <div> <img alt={zdjecie.alt} src={zdjecie.filename}/>
        <h4>Pobrań {zdjecie.downloads}</h4>
        <button>Pobierz</button>
        </div>
        ))}
    </div></div> */}
    </div>
    </div>
    </div>
    </div>
  );
}

export default Galeria;
