import React, { useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';

function AddDataForm({ onAddData }) {
    const [formData, setFormData] = useState({
        firstName: '',
        lastName: '',
        dob: '',
        address1: '',
        address2: '',
        city: '',
        postalCode: '',
        country: '',
        phoneNumber: '',
        email: '',
        note: '',
    });

    const handleChange = (e) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        onAddData(formData);
        setFormData({
            firstName: '',
            lastName: '',
            dob: '',
            address1: '',
            address2: '',
            city: '',
            postalCode: '',
            country: '',
            phoneNumber: '',
            email: '',
            note: '',
        });
    };

    return (
        <form onSubmit={handleSubmit} className="add-data-form container">
            {/* First and Last Name Row */}
            <div className="row mb-3">
                <div className="col-md-6">
                    <label htmlFor="firstName" className="form-label">First Name</label>
                    <input
                        type="text"
                        name="firstName"
                        value={formData.firstName}
                        onChange={handleChange}
                        placeholder="First Name"
                        className="form-control"
                        required
                    />
                </div>
                <div className="col-md-6">
                    <label htmlFor="lastName" className="form-label">Last Name</label>
                    <input
                        type="text"
                        name="lastName"
                        value={formData.lastName}
                        onChange={handleChange}
                        placeholder="Last Name"
                        className="form-control"
                        required
                    />
                </div>
            </div>

            {/* Date of Birth Row */}
            <div className="row mb-3">
                <div className="col-md-12">
                    <label htmlFor="dob" className="form-label">Date of Birth</label>
                    <input
                        type="date"
                        name="dob"
                        value={formData.dob}
                        onChange={handleChange}
                        className="form-control"
                        required
                    />
                </div>
            </div>

            {/* Address Row */}
            <div className="row mb-3">
                <div className="col-md-6">
                    <label htmlFor="address1" className="form-label">Address Line 1</label>
                    <input
                        type="text"
                        name="address1"
                        value={formData.address1}
                        onChange={handleChange}
                        placeholder="Address Line 1"
                        className="form-control"
                        required
                    />
                </div>
                <div className="col-md-6">
                    <label htmlFor="address2" className="form-label">Address Line 2</label>
                    <input
                        type="text"
                        name="address2"
                        value={formData.address2}
                        onChange={handleChange}
                        placeholder="Address Line 2"
                        className="form-control"
                    />
                </div>
            </div>

            {/* City and Postal Code Row */}
            <div className="row mb-3">
                <div className="col-md-6">
                    <label htmlFor="city" className="form-label">City</label>
                    <input
                        type="text"
                        name="city"
                        value={formData.city}
                        onChange={handleChange}
                        placeholder="City"
                        className="form-control"
                        required
                    />
                </div>
                <div className="col-md-6">
                    <label htmlFor="postalCode" className="form-label">Postal Code</label>
                    <input
                        type="text"
                        name="postalCode"
                        value={formData.postalCode}
                        onChange={handleChange}
                        placeholder="Postal Code"
                        className="form-control"
                        required
                    />
                </div>
            </div>

            {/* Country and Phone Number Row */}
            <div className="row mb-3">
                <div className="col-md-6">
                    <label htmlFor="country" className="form-label">Country</label>
                    <input
                        type="text"
                        name="country"
                        value={formData.country}
                        onChange={handleChange}
                        placeholder="Country"
                        className="form-control"
                        required
                    />
                </div>
                <div className="col-md-6">
                    <label htmlFor="phoneNumber" className="form-label">Phone Number</label>
                    <input
                        type="tel"
                        name="phoneNumber"
                        value={formData.phoneNumber}
                        onChange={handleChange}
                        placeholder="Phone Number"
                        className="form-control"
                        required
                    />
                </div>
            </div>

            {/* Email Row */}
            <div className="row mb-3">
                <div className="col-md-12">
                    <label htmlFor="email" className="form-label">Email</label>
                    <input
                        type="email"
                        name="email"
                        value={formData.email}
                        onChange={handleChange}
                        placeholder="Email"
                        className="form-control"
                        required
                    />
                </div>
            </div>

            {/* User Notes Row */}
            <div className="row mb-3">
                <div className="col-md-12">
                    <label htmlFor="note" className="form-label">User Notes</label>
                    <textarea
                        name="note"
                        value={formData.note}
                        onChange={handleChange}
                        placeholder="User Notes"
                        className="form-control"
                        required
                    />
                </div>
            </div>

            <button type="submit" className="btn btn-primary">Add Data</button>
        </form>
    );
}

export default AddDataForm;
