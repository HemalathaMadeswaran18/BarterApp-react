import React, { useState } from 'react';
import ReactDOM from 'react-dom/client';
import './UploadItem.css'

export const UploadItem = () => {
  const [productName, setProductName] = useState('');
  const [productDescription, setProductDescription] = useState('');
  const [itemWanted, setItemWanted] = useState('');
  const [itemWantedDescription, setItemWantedDescription] = useState('');
  const [email, setEmail] = useState('');
  const [uploadedItems, setUploadedItems] = useState([]);

  const handleProductNameChange = (e) => {
    setProductName(e.target.value);
  };

  const handleProductDescriptionChange = (e) => {
    setProductDescription(e.target.value);
  };

  const handleItemWantedChange = (e) => {
    setItemWanted(e.target.value);
  };

  const handleItemWantedDescriptionChange = (e) => {
    setItemWantedDescription(e.target.value);
  };
  const handleEmailChange = (e) => { // Handle email input changes
    setEmail(e.target.value);
  };

  const handleSubmit = async (event) => {
    event.preventDefault();
  
    const newItem = {
      productName,
      productDescription,
      itemWanted,
      itemWantedDescription,
      email,
    };
  
    try {
      const response = await fetch('  http://localhost:3002/items', { // Relative URL
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(newItem),
      });
  
      
        console.log('Data uploaded successfully');
        // Clear the input fields
        setProductName('');
        setProductDescription('');
        setItemWanted('');
        setItemWantedDescription('');
        setEmail('');
     
    } catch (error) {
      console.error('Error:', error);
    }
  };

  return (
    <div className="container">
      <div className="col-md-12 mt-3">
        <form onSubmit={handleSubmit}>
          <div className="form-group mt-2">
            <label htmlFor="productNameInput">Product Name</label>
            <input
              type="text"
              value={productName}
              onChange={handleProductNameChange}
              className="form-control"
              id="productNameInput"
            />
          </div>

          <div className="form-group mt-2">
            <label htmlFor="productDescriptionInput">Product Description</label>
            <input
              type="text"
              value={productDescription}
              onChange={handleProductDescriptionChange}
              className="form-control"
              id="productDescriptionInput"
            />
          </div>

          <div className="form-group mt-2">
            <label htmlFor="emailInput">Email</label>
            <input
              type="email"
              value={email}
              onChange={handleEmailChange}
              className="form-control"
              id="emailInput"
            />
          </div>

          <div className="form-group mt-2">
            <label htmlFor="itemWantedInput">Item Wanted</label>
            <input
              type="text"
              value={itemWanted}
              onChange={handleItemWantedChange}
              className="form-control"
              id="itemWantedInput"
            />
          </div>

          <div className="form-group mt-2">
            <label htmlFor="itemWantedDescriptionInput">
              Item Wanted Description
            </label>
            <input
              type="text"
              value={itemWantedDescription}
              onChange={handleItemWantedDescriptionChange}
              className="form-control"
              id="itemWantedDescriptionInput"
            />
          </div>

          <button
            type="submit"
            className="btn btn-primary mt-2 mx-auto d-block"
          >
            Submit
          </button>
        </form>
      </div>

      {/* <div className="containter">
        <div className="col-md-12">
          <div className="row">
            {uploadedItems.map((item, index) => (
              <div key={index} className="col-md-4 mb-3">
                <div className="card">
                  <div className="card-body">
                    <h5 className="card-title">{item.productName}</h5>
                    <p className="card-text">{item.productDescription}</p>
                    <p className="card-text">
                      <strong>Item Wanted:</strong> {item.itemWanted}
                    </p>
                    <p className="card-text">
                      <strong>Wanted Description:</strong>{' '}
                      {item.itemWantedDescription}
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div> */}


    </div>
  );
};

export default UploadItem;
