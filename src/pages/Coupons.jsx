import React, { useState } from 'react';
import Navbar from '../components/Navbar'

function Coupons() {

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
            <i className="fa-solid fa-arrow-right" style={{ padding: '0 10px' }}></i> Coupons
          </p>
          <h4>Coupons</h4>
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
        Add Coupon +
      </button>

      {/* Popup and overlay */}
      {isPopupVisible && (
        <div>
          <div className="overlay" onClick={closePopup}></div>
          <div className="popup">
            <h2>Add A Coupon</h2>
          <div class="radio-container">
          <label for="">Coupon Name: &nbsp;&nbsp;</label>
         <div className="pform">
         <input type="text"></input>
         </div>  
                  </div>
                  <div class="radio-container">
          <label for="">Coupon Description:</label>
         <div className="pform">
         <textarea id="w3review" name="w3review" rows="2" cols="30">
</textarea>
         </div>  
                  </div>
                  <div class="radio-container">
          <label for="">Coupon Discount:</label>
         <div className="pform">
         <input type="text"></input>
         </div>  
                  </div>
                  <div class="radio-container">
          <label for="">Start Date: &nbsp;&nbsp;</label>
         <div className="pform">
         <input type="datetime-local" 
               id="Test_DatetimeLocal" 
               min="2015-01-01T00:00" 
               max="2025-12-31T23:59" 
               step="1"></input>  
         </div>  
                  </div>
                  <div class="radio-container">
          <label for="">Expiry Date:</label>
         <div className="pform">
         <input type="datetime-local" 
               id="Test_DatetimeLocal" 
               min="2015-01-01T00:00" 
               max="2025-12-31T23:59" 
               step="1"></input>  
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

      

      <div className="table-container">
      <table>
                <thead>
                    <tr>
                        <th>Sl No.</th>
                        <th>Coupon Name</th>
                        <th>Description</th>
                        <th>Start date</th>
                        <th>Discount</th>
                        <th>Expiry date</th>
                        
                    </tr>
                </thead>
                <tbody>
                    <tr>
                        <td>1</td>
                        <td>Masharin</td>
                        
                        <td>Lorem ipsum dolor sit amet, consectetuer adipiscing elit.</td>
                       
                        <td>
                        <input type="datetime-local" 
               id="Test_DatetimeLocal" 
               min="2015-01-01T00:00" 
               max="2025-12-31T23:59" 
               step="1"></input>  
                        </td>
                        <td>
                            20%
                        </td>
                        <td>
                        <input type="datetime-local" 
               id="Test_DatetimeLocal" 
               min="2015-01-01T00:00" 
               max="2025-12-31T23:59" 
               step="1"/>
                        </td>
                    </tr>
                    <tr>
                        <td>2</td>
                        <td>Masharin</td>
                        
                        <td>Lorem ipsum dolor sit amet, consectetuer adipiscing elit.</td>
                       
                        <td>
                        <input type="datetime-local" 
               id="Test_DatetimeLocal" 
               min="2015-01-01T00:00" 
               max="2025-12-31T23:59" 
               step="1"/>  
                        </td>
                        <td>
                            20%
                        </td>
                        <td>
                        <input type="datetime-local" 
               id="Test_DatetimeLocal" 
               min="2015-01-01T00:00" 
               max="2025-12-31T23:59" 
               step="1"/>
                        </td>
                    </tr>
                    <tr>
                        <td>3</td>
                        <td>Masharin</td>
                        
                        <td>Lorem ipsum dolor sit amet, consectetuer adipiscing elit.</td>
                       
                        <td>
                        <input type="datetime-local" 
               id="Test_DatetimeLocal" 
               min="2015-01-01T00:00" 
               max="2025-12-31T23:59" 
               step="1"></input> 
                        </td>
                        <td>
                            20%
                        </td>
                        <td>
                        <input type="datetime-local" 
               id="Test_DatetimeLocal" 
               min="2015-01-01T00:00" 
               max="2025-12-31T23:59" 
               step="1"/>
                        </td>
                    </tr>
                    <tr>
                        <td>4</td>
                        <td>Masharin</td>
                        
                        <td>Lorem ipsum dolor sit amet, consectetuer adipiscing elit.</td>
                       
                        <td>
                        <input type="datetime-local" 
               id="Test_DatetimeLocal" 
               min="2015-01-01T00:00" 
               max="2025-12-31T23:59" 
               step="1"/>  
                        </td>
                        <td>
                            20%
                        </td>
                        <td>
                        <input type="datetime-local" 
               id="Test_DatetimeLocal" 
               min="2015-01-01T00:00" 
               max="2025-12-31T23:59" 
               step="1"/>
                        </td>
                    </tr>
                   
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

export default Coupons