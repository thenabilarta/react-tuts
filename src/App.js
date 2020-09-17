import React, {useEffect, useState} from 'react';
import Komponen from './Komponen.js';

function App() {
  const [counter, setCounter] = useState(0);
  const [data, setData] = useState({});
  const [data2, setData2] = useState({});
  const [negri, setNegri] = useState('');

  useEffect(() => {
    ambilDataAPI();
  }, []);

  async function ambilDataAPI() {
    const dataTerambil = await fetch('https://covid19.mathdro.id/api');
    const dataTerolah = await dataTerambil.json();
    setData(dataTerolah);
  }

  async function ambilDataAPI2(dataSelect) {
    setNegri(dataSelect);
    const dataTerambil2 = await fetch(
      `https://covid19.mathdro.id/api/countries/${dataSelect}`
    );
    const dataTerolah2 = await dataTerambil2.json();
    setData2(dataTerolah2);
  }

  function handleTambah() {
    setCounter(counter + 1);
  }

  function handleKurang() {
    setCounter(counter - 1);
  }

  console.log(data2);

  return (
    <div className="app">
      <h2>Ini adalah App</h2>
      <h2>{counter}</h2>
      <button onClick={handleTambah}>Tambah</button>
      <button onClick={handleKurang}>Kurang</button>
      <Komponen benda="malih" />
      <Komponen benda="toing" work={handleTambah} />
      <Komponen benda={counter} kerja={handleKurang} />
      <br />
      <br />
      <h2>
        Jumlah yang terkena covid 19 adalah{' '}
        {data.confirmed && data.confirmed.value}
      </h2>
      <h2>
        Jumlah yang sembuh dari covid 19 adalah{' '}
        {data.recovered && data.recovered.value}
      </h2>
      <h2 style={{color: 'royalblue'}}>
        Jumlah yang meninggal karena covid 19 adalah{' '}
        {data.deaths && data.deaths.value}
      </h2>
      <select
        style={{outline: 'none'}}
        onChange={(e) => ambilDataAPI2(e.target.value)}
      >
        <option>-</option>
        <option>Indonesia</option>
        <option>USA</option>
        <option>Zimbabwe</option>
      </select>
      <h2>
        Jumlah yang terkena covid 19 di {negri} adalah{' '}
        {data2.confirmed && data2.confirmed.value}
      </h2>
      <h2>
        Jumlah yang sembuh dari covid 19 {negri} adalah{' '}
        {data2.recovered && data2.recovered.value}
      </h2>
      <h2 style={{color: 'royalblue'}}>
        Jumlah yang meninggal karena covid 19 {negri} adalah{' '}
        {data2.deaths && data2.deaths.value}
      </h2>
    </div>
  );
}

export default App;
