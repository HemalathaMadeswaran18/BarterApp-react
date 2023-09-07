import React, { useState, useEffect } from 'react';
import './ShowAllItems.css';

const ShowAllItems = () => {
  const [uploadedItems, setUploadedItems] = useState([]);

  useEffect(() => {
    // Define the URL of your local API endpoint
    const apiUrl = 'http://localhost:3002/items'; // Update with your actual API URL

    // Fetch data from the API when the component mounts
    fetch(apiUrl)
      .then((response) => {
        if (!response.ok) {
          throw new Error('Network response was not ok');
        }
        return response.json();
      })
      .then((data) => {
        setUploadedItems(data); // Update the state with the fetched data
      })
      .catch((error) => {
        console.error('Error fetching data:', error);
      });
  }, []); // Empty dependency array to fetch data only once when the component mounts

  return (
    <section className="hero-section">
      <div className="card-grid">
        {uploadedItems.map((item, index) => (
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
              <p>Item Wanted: {item.itemWanted}</p>
              <p>{item.itemWantedDescription}</p>
            </div>
          </a>
        ))}
      </div>
    </section>
  );
};

export default ShowAllItems;
