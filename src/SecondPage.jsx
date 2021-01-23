import React from 'react';
import { Link } from 'react-router-dom';

const SecondPage = ()=>{
  return(
    <>
    <img className="bandera" src="./bandera.png" alt="logo" />
    <div className="section-page">
      <p className="hb">Family love endures despite distance, differences and time. LOVE YOU </p>
      <img className="foto" src="./familia.jpg" alt="logo" />
      <Link to="/">
      <button>Restart</button>
      </Link>
    </div>
    </>
  );
}
export default SecondPage;
