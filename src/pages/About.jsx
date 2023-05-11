import React from 'react';
import Header from "../components/Header";
import Footer from "../components/Footer";
import styles from "../styles/about.module.scss"



const About = () => {
    return (
        <div>
            <Header/>
            <main className={`container ${styles.containerAbout}`}>
                <h1 className={`main-heading ${styles.mainHeadingAbout}`}>About Us</h1>
                <div className="row">
                    <div className={`col-md-6 ${styles.infoAbout}`}>
                        <h3>About Our Company</h3>
                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus ut metus eu nisl pharetra
                            ultricies
                            vel id massa. Vestibulum cursus, est vel rutrum porttitor, odio nisl mollis velit, vel
                            scelerisque
                            metus tortor id dolor. </p>
                        <p>Sed sit amet enim auctor, pulvinar metus eget, ultrices odio. Nullam consequat ipsum eget
                            elit
                            pharetra, a accumsan augue commodo. Mauris scelerisque velit nec molestie volutpat.
                            Suspendisse sed
                            nisi non mi scelerisque feugiat. </p>
                    </div>
                    <div className={`col-md-6 ${styles.infoAbout}`}>
                        <h3>Contact Details</h3>
                        <p><i className="fa-solid fa-envelope"></i> info@ticketingsite.com</p>
                        <p><i className="fa-solid fa-phone"></i> +380673530318</p>
                        <h3>Follow Us</h3>
                        <p>
                            <a href="#"><i className={`fa-brands fa-facebook fa-2x ${styles.iconsBlack}`}></i> </a>
                            <a href="#"><i className={`fa-brands fa-instagram fa-2x ${styles.iconsBlack}`}></i></a>
                            <a href="#"><i className={`fa-brands fa-twitter fa-2x ${styles.iconsBlack}`} ></i></a>
                        </p>
                    </div>
                </div>
            </main>
            <Footer/>
        </div>
    );
};

export default About;