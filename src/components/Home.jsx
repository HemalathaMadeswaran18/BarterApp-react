import React from 'react';
import { Link } from 'react-router-dom';
import Snowfall from 'react-snowfall';

const Home = () => {
  return (
    <div style={{ height: '100vh', width: '100vw', background: '#282c34', position: 'relative' }}>
      <div style={{ position: 'absolute', top: '50%', left: '50%', transform: 'translate(-50%, -50%)', zIndex: 1 }}>
      <h1 style={{ color: 'black', textAlign: 'center', fontSize: '136px', fontWeight: 'bold' }}>Welcome to Barter</h1>

        <Link to="/showall">
          <button style={{backgroundColor: 'black', color: 'white', padding: '10px 20px', border: 'none', cursor: 'pointer' }}>See what's available</button>
        </Link>
      </div>
      <Snowfall
        // Changes the snowflake color
        color="black"
        // Applied to the canvas element
        style={{ background: '#fff' }}
        // Controls the number of snowflakes that are created (default 150)
        snowflakeCount={200}
      />
    </div>
  );
};

export default Home;
