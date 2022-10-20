import React from "react";
import '../styles/footer.css'
import fa from '../assets/fa.png'
import ins from '../assets/ins.png'
import lin from '../assets/lin.png'
import git from '../assets/git.png'

const Footer = () => {
    return (
        <>
        <footer className="footer-distributed">

<div className="footer-right">

    <a href="#"><img src={fa} className="fa fa-facebook"></img></a>
    <a href="#"><img src={ins} className="fa fa-twitter"></img></a>
    <a href="#"><img src={lin} className="fa fa-linkedin"></img></a>
    <a href="#"><img src={git} className="fa fa-github"></img></a>

</div>

<div className="footer-left">

    <p className="footer-links">
        <a className="link-1" href="#">Home</a>

        <a href="#">Blog</a>

        <a href="#">Pricing</a>

        <a href="#">About</a>

        <a href="#">Faq</a>

        <a href="#">Contact</a>
    </p>

    <p>Company Name &copy; 2015</p>
</div>

</footer>
        </>
        );
    }
    
    export default Footer;