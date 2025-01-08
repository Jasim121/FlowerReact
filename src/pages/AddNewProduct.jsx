import React, { useState } from 'react';
import Navbar from '../components/Navbar'

function AddNewProduct() {
const [isPopupVisible, setPopupVisible] = useState(false);
    
        const showPopup = () => {
          setPopupVisible(true);
        };
      
        const closePopup = () => {
          setPopupVisible(false);
        };
        

    const [tags, setTags] = useState([]);

    const options = ["Plain", "Relaxed", "Bold", "Elegant"];
  
    const addTag = (tag) => {
      if (tag && !tags.includes(tag)) {
        setTags([...tags, tag]);
      } else if (tags.includes(tag)) {
        alert('Tag already added!');
      }
    };
  
    const removeTag = (tagToRemove) => {
      setTags(tags.filter((tag) => tag !== tagToRemove));
    };
  
    const handleKeyPress = (e) => {
      if (e.key === 'Enter') {
        e.preventDefault();
        const value = e.target.value.trim();
        if (value) {
          addTag(value);
          e.target.value = '';
        }
      }
    };
    
  return (
    <>
    <Navbar/>
    <div className="container-fluid catagory">
        
    <div className="headingArea">
        <div className="topheading">
          <p>
            <span style={{ color: '#8c6e58' }}>Dashboards</span>
            <i className="fa-solid fa-arrow-right" style={{ padding: '0 10px' }}></i> Add New Product
          </p>
          <h4>Add New Product</h4>
        </div>
      </div>

      <div className="topsearch">
        <div className="search-bar">
        
        </div>
        <div className="button">
          
        <div>
      {/* Button to trigger the popup */}
      {/* <button className="button" onClick={showPopup}>
        Add Delivery Charges +
      </button> */}

      {/* Popup and overlay */}
      {isPopupVisible && (
        <div>
          <div className="overlay" onClick={closePopup}></div>
          <div className="popup">
            <h2>Add Delivery Charge</h2>
          <div class="radio-container">
          <label for="">Opaning Time: &nbsp;&nbsp;</label>
         <div className="pform">
         <input type="datetime-local" 
               id="Test_DatetimeLocal" 
               min="2015-01-01T00:00" 
               max="2025-12-31T23:59" 
               step="1"></input>  
         </div>  
                  </div>
                  <div class="radio-container">
          <label for="">Ending Time:</label>
         <div className="pform">
         <input type="datetime-local" 
               id="Test_DatetimeLocal" 
               min="2015-01-01T00:00" 
               max="2025-12-31T23:59" 
               step="1"></input>  
         </div>  
                  </div>
                  <div class="radio-container">
          <label for="">Charges:</label>
         <div className="pform">
         <input type="text"></input>
         </div>  
                  </div>
            <button className="close-button">
              Submit
            </button>
            <button className="close-button" onClick={closePopup}>
              Cancel
            </button>
          </div>
        </div>
      )}
    </div>
        </div>
      </div>
      
     <div class="container-fluid form-container">
        <form>
            <div class="row mb-3">
                <div class="col-md-6">
                    <label for="productName" class="form-label">Product Name</label>
                    <input type="text" id="productName" class="form-control" placeholder="Name" maxlength="30"/>
                    <small class="text-muted">*Product Name Should Not Exceed 30 Characters</small>
                </div>
                <div class="col-md-6">
                    <label for="description" class="form-label">Description</label>
                    <textarea id="description" class="form-control" rows="2"></textarea>
                </div>
            </div>

            <div class="row mb-3">
                <div class="col-md-6">
                    <label for="category" class="form-label">Category</label>
                    <select id="category" class="form-select">
                        <option selected disabled>Choose...</option>
                        <option value="1">Category 1</option>
                        <option value="2">Category 2</option>
                    </select>
                </div>
                <div class="col-md-6">
                    <label class="form-label">Product Images</label>
                    <input type="file" class="form-control"/>
                </div>
            </div>

            <div class="row mb-3">
                {/* tags  */}
                <div className="container col-md-6 mt-4">
      <div className="tag-container border p-3 rounded">
        {tags.map((tag, index) => (
          <span key={index} className="tag badge bg-secondary me-2">
            {tag} <button type="button" className="btn-close btn-close-white ms-2" aria-label="Remove" onClick={() => removeTag(tag)}></button>
          </span>
        ))}
        <input
          type="text"
          className="form-control border-0"
          placeholder="Add or select tags..."
          onKeyPress={handleKeyPress}
        />
        <select id="tagSelect" className="form-select mt-2" onChange={(e) => {
          addTag(e.target.value);
          e.target.value = ''; // Reset dropdown
        }}>
          <option value="" disabled selected>Choose...</option>
          {options.map((option, index) => (
            <option key={index} value={option}>{option}</option>
          ))}
        </select>
      </div>
    </div>
                <div class="col-md-3">
                    <label for="boxColor" class="form-label">Box Color</label>
                    <select id="boxColor" class="form-select">
                        <option selected disabled>Choose...</option>
                        <option value="red">Red</option>
                        <option value="blue">Blue</option>
                    </select>
                </div>
                <div class="col-md-3">
                    <label for="boxSize" class="form-label">Box Size</label>
                    <select id="boxSize" class="form-select">
                        <option selected disabled>Choose...</option>
                        <option value="small">Small</option>
                        <option value="large">Large</option>
                    </select>
                </div>
            </div>

            <div class="row mb-3">
                <div class="col-md-6">
                    <label for="actualPrice" class="form-label">Actual Price</label>
                    <input type="number" id="actualPrice" class="form-control" placeholder="Price"/>
                </div>
                <div class="col-md-6">
                    <label for="discount" class="form-label">Discount</label>
                    <input type="number" id="discount" class="form-control" placeholder="Discount"/>
                </div>
            </div>

            <div class="row mb-3">
                <div class="col-md-6">
                    <label for="flowerColor" class="form-label">Flower Color</label>
                    <input type="text" id="flowerColor" class="form-control" placeholder="Color"/>
                </div>
                <div class="col-md-6">
                    <label for="availability" class="form-label">Availability</label>
                    <select id="availability" class="form-select">
                        <option selected disabled>Choose...</option>
                        <option value="inStock">In Stock</option>
                        <option value="outOfStock">Out of Stock</option>
                    </select>
                </div>
            </div>

            <div class="row mb-3">
                <div class="col-md-12">
                    <label for="ourPromise" class="form-label">Our Promise</label>
                    <textarea id="ourPromise" class="form-control" rows="2"></textarea>
                </div>
            </div>

           

            <div class="">
                <button type="submit" class="btn">Submit</button>
            </div>
        </form>
    </div>
    </div>
    </>
  )
}

export default AddNewProduct