import React, { useState } from 'react';
import Navbar from '../components/Navbar'

function DeliveryCharges() {
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
            <i className="fa-solid fa-arrow-right" style={{ padding: '0 10px' }}></i> DeliveryCharges
          </p>
          <h4>DeliveryCharges</h4>
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
        Add Delivery Charges +
      </button>

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

      

      <div className="table-container">
      <table>
                <thead>
                    <tr>
                        <th>Sl No.</th>
                        <th>Opening Time</th>
                        <th>Ending Time</th>
                        <th>Charges</th>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                        <td>1</td>
                        <td>
                        <input type="datetime-local" 
               id="Test_DatetimeLocal" 
               min="2015-01-01T00:00" 
               max="2025-12-31T23:59" 
               step="1"></input>  
                        </td>
                        
                        <td>
                        <input type="datetime-local" 
               id="Test_DatetimeLocal" 
               min="2015-01-01T00:00" 
               max="2025-12-31T23:59" 
               step="1"></input>  
                        </td>
                       
                      
                       
                        <td>
                         $105
                        </td>
                    </tr>
                    <tr>
                        <td>2</td>
                        <td>
                        <input type="datetime-local" 
               id="Test_DatetimeLocal" 
               min="2015-01-01T00:00" 
               max="2025-12-31T23:59" 
               step="1"></input>  
                        </td>
                        
                        <td>
                        <input type="datetime-local" 
               id="Test_DatetimeLocal" 
               min="2015-01-01T00:00" 
               max="2025-12-31T23:59" 
               step="1"></input>  
                        </td>
                        <td>
                         $99
                        </td>
                    </tr>
                    <tr>
                        <td>3</td>
                        <td>
                        <input type="datetime-local" 
               id="Test_DatetimeLocal" 
               min="2015-01-01T00:00" 
               max="2025-12-31T23:59" 
               step="1"></input>  
                        </td>
                        
                        <td>
                        <input type="datetime-local" 
               id="Test_DatetimeLocal" 
               min="2015-01-01T00:00" 
               max="2025-12-31T23:59" 
               step="1"></input>  
                        </td>
                        <td>
                         $55
                        </td>
                    </tr>
                    <tr>
                        <td>4</td>
                        <td>
                        <input type="datetime-local" 
               id="Test_DatetimeLocal" 
               min="2015-01-01T00:00" 
               max="2025-12-31T23:59" 
               step="1"></input>  
                        </td>
                        
                        <td>
                        <input type="datetime-local" 
               id="Test_DatetimeLocal" 
               min="2015-01-01T00:00" 
               max="2025-12-31T23:59" 
               step="1"></input>  
                        </td>
                        <td>
                         $78
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

export default DeliveryCharges