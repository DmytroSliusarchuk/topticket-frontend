import React from 'react';
import Header from "../components/Header";
import Footer from "../components/Footer";
import styles from "../styles/home.module.scss"
import {Link} from "react-router-dom";


const Home = () => {
    return (
        <div>
            <Header/>
            <main className="container">
                <h1 className="main-heading">Top Events</h1>
                <div className="row">
                    <div className="col-md-4">
                        <div className={`card ${styles.cardHome}`}>
                            <img src="/static/images/test1.png" className={styles.cardImgTop} alt="..."/>
                                <div className="card-body">
                                    <h5 className={styles.cardTitle}>Event 1</h5>
                                    <p className={styles.cardText}>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec facilisis mollis ex, vel cursus augue.</p>
                                    <Link to={"/events/1"} className={`btn btn-primary ${styles.cardButton}`}>Buy Tickets</Link>
                                </div>
                        </div>
                    </div>
                    <div className="col-md-4">
                        <div className={`card ${styles.cardHome}`}>
                            <img src="/static/images/test2.jpg" className={styles.cardImgTop} alt="..."/>
                                <div className="card-body">
                                    <h5 className={styles.cardTitle}>Event 2</h5>
                                    <p className={styles.cardText}>Some text</p>
                                    <Link to={"/events/2"} className={`btn btn-primary ${styles.cardButton}`}>Buy Tickets</Link>
                                </div>
                        </div>
                    </div>
                    <div className="col-md-4">
                        <div className={`card ${styles.cardHome}`}>
                            <img src="/static/images/test3.jpg" className={styles.cardImgTop} alt="..."/>
                                <div className="card-body">
                                    <h5 className={styles.cardTitle}>Event 3</h5>
                                    <p className={styles.cardText}>Some text</p>
                                    <Link to={"/events/3"} className={`btn btn-primary ${styles.cardButton}`}>Buy Tickets</Link>
                                </div>
                        </div>
                    </div>
                </div>
            </main>
            <Footer/>
        </div>
);
};

export default Home;