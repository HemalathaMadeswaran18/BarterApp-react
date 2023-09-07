import React, { useState, useEffect } from 'react';

const ShowMyItems = () => {
  const [email, setEmail] = useState('');
  const [myItems, setMyItems] = useState([]);
  const [isLoading, setIsLoading] = useState(false);

  const handleEmailChange = (e) => {
    setEmail(e.target.value);
  };

  useEffect(() => {
    // Fetch all data from your json-server
    setIsLoading(true);
    fetch('http://localhost:3002/items') // Adjust the URL to match your json-server route
      .then((response) => response.json())
      .then((data) => {
        // Filter items by email
        const filteredItems = data.filter((item) => item.email === email);
        setMyItems(filteredItems);
      })
      .catch((error) => {
        console.error('Error fetching data:', error);
      })
      .finally(() => {
        setIsLoading(false);
      });
  }, [email]); // Fetch data whenever the email changes

  return (
    <div className="container">
      <h2 className="my-4 text-center">Show My Items</h2>

      <div className="form-group">
        <label htmlFor="emailInput">Enter your email:</label>
        <input
          type="email"
          id="emailInput"
          className="form-control"
          value={email}
          onChange={handleEmailChange}
        />
      </div>

      {isLoading && <p>Loading...</p>}

      <div className="card-grid mt-5">
        {myItems.map((item, index) => (
          <a key={index} className="card" href="#">
            <div
              className="card__background"
              style={{
                backgroundImage: `url("https://images.unsplash.com/photo-1684158100445-8e6926faf964?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1901&q=80")`,
              }}
            ></div>
            <div className="card__content">
              <p className="card__category">{item.category}</p>
              <h3 className="card__heading">{item.productName}</h3>
              <p className="card__description">{item.productDescription}</p>
              <p className="card__email">{item.email}</p>
              <p>{item.itemWanted}</p>
              <p>{item.itemWantedDescription}</p>
            </div>
          </a>
        ))}
      </div>
    </div>
  );
};

export default ShowMyItems;
