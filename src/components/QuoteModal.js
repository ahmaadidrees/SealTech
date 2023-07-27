import React from 'react';
import { Modal, Button, Image } from 'react-bootstrap';
import "./QuoteModal.css";
import ContactUs from './ContactUs';
import { FaCross, FaTimes } from 'react-icons/fa';

function QuoteModal({ showModal, handleCloseModal }) {
  return (
    <Modal show={showModal} onHide={handleCloseModal} >
      {/* <Modal.Header style={{ background: '#ec5d24', borderRadius:"0px !important", borderTopLeftRadius:"0px !important", borderTopRightRadius:"0px !important" }} closeButton>
      </Modal.Header> */}
      <Modal.Body >
        <Button className='modal-close' onClick={handleCloseModal}><FaTimes/></Button>
        <div className="header-image">
          <Image style={{width:300}} src='/images/sealtech.png' fluid />
        </div>
        <center>
            <h4 className='modal-title'>GET QUOTE TODAY</h4>
        </center>
        <div className="form-container">
          <form>
            <div className="form-row">
              <div className="form-group">
                <input placeholder='Full Name*' type="text" className="form-control" id="fullName" />
              </div>
              <div className="form-group">
                <input placeholder='Company Name*' type="text" className="form-control" id="companyName" />
              </div>
            </div>
            <div className="form-row">
              <div className="form-group">
                <input placeholder='Address*' type="text" className="form-control" id="address" />
              </div>
            </div>
            <div className="form-row">
              <div className="form-group">
                <input placeholder='Email Address*' type="email" className="form-control" id="emailAddress" />
              </div>
            </div>
            <div className="form-row">
              <div className="form-group">
                <input placeholder='Contact Number*' type="text" className="form-control" id="contactNumber" />
              </div>
              <div className="form-group">
                <input placeholder='City*' type="text" className="form-control" id="city" />
              </div>
            </div>
            <div className="form-row">
              <div className="form-group">
              <select className="form-control" id="serviceRequired" defaultValue="">
                <option value="" disabled>Select a service</option>
                <option value="Sealcoating">Sealcoating</option>
                <option value="Line Painting">Line Painting</option>
                <option value="Crack Filling">Crack Filling</option>
            </select>

              </div>
            </div>
            <div className="form-row">
              <div className="form-group">
                <select placeholder='Job Type*' className="form-control" id="jobType">
                  <option value="residential">Residential</option>
                  <option value="commercial">Commercial</option>
                </select>
              </div>
            </div>
            <div className="form-row">
              <div className="form-group">
                <textarea placeholder='Additional Notes*' style={{borderRadius:10}} className="form-control" id="additionalNotes" rows="5"></textarea>
              </div>
            </div>
            <div className="form-row">
              <button  type="submit" className="btn btn-primary modal-btn">Get A Quote</button>
            </div>
          </form>
        </div>
      </Modal.Body>
      {/* <Modal.Footer style={{ background: '#ec5d24' }} closeButton>
      </Modal.Footer> */}
    </Modal>
  );
}

export default QuoteModal;
