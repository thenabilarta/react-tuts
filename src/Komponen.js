import React from 'react';

function Komponen(props) {
  return (
    <div>
      <h3>Ini adalah halaman Komponen {props.benda}</h3>
      <button onClick={props.work}>plus</button>
      <button onClick={props.kerja}>minus</button>
    </div>
  );
}

export default Komponen;
