import React, { useState } from 'react';
import Navbar from '../components/Navbar'

function Catagory() {
     const [coupons, setCoupons] = useState([
          { id: 1, name: 'Masharin', status: 'Active' },
          { id: 2, name: 'Keizer', status: 'Active' },
          { id: 3, name: 'Belomestnykh', status: 'Inactive' },
          { id: 4, name: 'Cummings', status: 'Active' },
        ]);
        const [isPopupVisible, setPopupVisible] = useState(false);
    
        const showPopup = () => {
          setPopupVisible(true);
        };
      
        const closePopup = () => {
          setPopupVisible(false);
        };
        
  return (
    <>
      <Navbar/>
    <div className="container-fluid catagory">
      <div className="headingArea">
        <div className="topheading">
          <p>
            <span style={{ color: '#8c6e58' }}>Dashboards</span>
            <i className="fa-solid fa-arrow-right" style={{ padding: '0 10px' }}></i> Categories 
          </p>
          <h4>Categories </h4>
        </div>
      </div>

      <div className="topsearch">
        <div className="search-bar">
          <input type="text" id="searchInput" placeholder="Search..." />
        </div>
        <div className="button">
          
        <div>
      {/* Button to trigger the popup */}
      <button className="button" onClick={showPopup}>
        Add Categories +
      </button>

      {/* Popup and overlay */}
      {isPopupVisible && (
        <div>
          <div className="overlay" onClick={closePopup}></div>
          <div className="popup">
            <h2>Add A Category</h2>
          <div class="radio-container">
          <label for="">Category Name: &nbsp;&nbsp;</label>
         <div className="pform">
         <input type="text"></input>
         </div>  
                  </div>
                 
                  <div class="radio-container">
          <label for="">Chose Image:</label>
         <div className="pform">
         <input type="file" id="img" name="img" accept="image/*"/>
         </div>  
                  </div>

                  <div class="radio-container">
          <label for="">Category Status:</label>
          <button class="btn btn-secondary dropdown-toggle" type="button" id="dropdownMenuButton1" data-bs-toggle="dropdown" aria-expanded="false">
          </button>  
          <ul class="dropdown-menu" aria-labelledby="dropdownMenuButton1">
    <li><a class="dropdown-item" href="#">Active</a></li>
    <li><a class="dropdown-item" href="#">Inactive</a></li>
  </ul>
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

      

      <div className="table-container">
        <table>
          <thead>
            <tr>
              <th>Sl No.</th>
              <th>Categories Name</th>
              <th>Categories Image</th>
              <th>Status</th>
              <th>Actions</th>
            </tr>
          </thead>
          <tbody>
            {coupons.map((coupon, index) => (
              <tr key={coupon.id}>
                <td>{index + 1}</td>
                <td>{coupon.name}</td>
                <td>{coupon.image}
                <input type="file" id="img" name="img" accept="image/*"/>
                </td>
                <td>{coupon.status}</td>
                <td className="actions">
                <button class="btn btn-secondary dropdown-toggle" type="button" id="dropdownMenuButton1" data-bs-toggle="dropdown" aria-expanded="false">
  </button>
  <ul class="dropdown-menu" aria-labelledby="dropdownMenuButton1">
    <li><a class="dropdown-item" href="#">Edit</a></li>
    <li><a class="dropdown-item" href="#">Delete</a></li>
  </ul>
                </td>
               
              </tr>
            ))}
          </tbody>
        </table>

        <div className="pagination">
          <a href="#">
            <i className="fa-solid fa-angles-left"></i>
          </a>
          <a href="#" className="active">
            1
          </a>
          <a href="#">2</a>
          <a href="#">3</a>
          <a href="#">4</a>
          <a href="#">5</a>
          <a href="#">
            <i className="fa-solid fa-angles-right"></i>
          </a>
        </div>
      </div>
    </div>

    </>
  )
}

export default Catagory