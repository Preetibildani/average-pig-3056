import React from "react";
import styles from "./footer.module.css"
export const Footer = () => {
return(
    <div className={styles.FootContainer}>
        <div>
        <div>
            <h3>Company</h3>
            <p>About us</p>
            <p>Jobs</p>
            <p>List your property</p>
            <p>Partnerships</p>
        </div>
        <div>
            <h3>Explore</h3>
            <p>India Travel Guide</p>
            <p>Hotels in India</p>
            <p>Holiday Rentals in India</p>
            <p>Domestic Flights</p>
            <p>Car Hire in India</p>
            <p>All Accomodation Types</p>
            <p>Travel Blog</p>
        </div>
        <div>
        <h3>Policy</h3>
            <p>Privacy Statement</p>
            <p>Terms of Use</p>
            <p>Vrbo Terms & Conditions</p>
        </div>
        <div>
        <h3>Help</h3>
            <p>Support</p>
            <p>Change or Cancel your booking</p>
            <p>Refund Process and Timelines</p>
            <p>Book a flight using an airline credit</p>
            <p>International Travel Documents</p>
        </div>
        </div>
    </div>
);
}