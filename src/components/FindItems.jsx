import React, { useState, useEffect } from 'react';

const FindItems = () => {
  const [productName, setProductName] = useState('');
  const [items, setItems] = useState([]);
  const [filteredItems, setFilteredItems] = useState([]);
  const [isLoading, setIsLoading] = useState(false);

  const handleProductNameChange = (e) => {
    setProductName(e.target.value);
  };

  useEffect(() => {
    setIsLoading(true);
    // Fetch all items from your JSON server
    fetch('http://localhost:3002/items') // Adjust the URL to match your json-server route
      .then((response) => response.json())
      .then((data) => {
        setItems(data);
        setIsLoading(false);
      })
      .catch((error) => {
        console.error('Error fetching data:', error);
        setIsLoading(false);
      });
  }, []);

  useEffect(() => {
    // Filter items based on the entered product name
    const filteredItems = items.filter((item) =>
      item.productName.toLowerCase().includes(productName.toLowerCase())
    );
    setFilteredItems(filteredItems);
  }, [productName, items]);

  return (
    <div className="container">
      <div className="row">
        <div className="col-md-12 mx-auto">
          <h2 className="my-4 text-center">Find Items by Product Name</h2>
          <div className="form-group">
            <label htmlFor="productNameInput">Enter Product Name:</label>
            <input
              type="text"
              id="productNameInput"
              className="form-control"
              value={productName}
              onChange={handleProductNameChange}
            />
          </div>
          {isLoading && <p>Loading...</p>}
          <div className="card-grid mt-5">
            {filteredItems.map((item, index) => (
              <a key={index} className="card" href="#">
                {/* ... Rest of your card code ... */}
                <div
                  className="card__background"
                  style={{
                    backgroundImage: `url("https://images.unsplash.com/photo-1684158100445-8e6926faf964?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1901&q=80")`,
                  }}
                ></div>
                <div className="card__content ">
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
      </div>
    </div>
  );
};

export default FindItems;
