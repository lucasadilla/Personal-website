import Header from './header';
import { useEffect } from 'react';

export default function BitPass() {
    useEffect(() => {
        // Initialize VanillaTilt
        if (typeof window !== 'undefined') {
            const VanillaTilt = require('vanilla-tilt');
            VanillaTilt.init(document.querySelectorAll('.tilt'), {
                max: 10,
                speed: 750,
                glare: false,
                "max-glare": 0.3,
                scale: 1.1,
                perspective: 1000,
                gyroscope: true,
            });
        }
    }, []);

    return (
        <div>
            <Header />
            <section>
                <h2>BITPASS</h2>
                <div className="subheader">
                    <h4>Password generation and analysis tool</h4>
                </div>
            </section>
            <section>
                <div className="tilt">
                    <img src="/images/BITPASS.png" alt="debate" className="feature-image" />
                </div>
                <div className="tilt">
                    <img src="/images/bitpass3.png" alt="instigate" className="feature-image" />
                </div>
                <h4>Evaluate the strength and security of passwords against brute force attacks.</h4>
                <div className="tilt">
                    <img src="/images/bitpass2.png" alt="deliberate" className="feature-image" />
                </div>
                <h4>Generate passwords with different levels of complexity, including varying lengths and character sets.</h4>
                <div className="tilt">
                    <img src="/images/bitpass4.png" alt="deliberate" className="feature-image" />
                </div>
                <h4>Explore the factors that contribute to password strength and security as you utilize our tool.</h4>
            </section>
            <section>
                <a href="https://github.com/lucasadilla/BITPASS" className="home-button">GitHub Repository</a>
                <h2>Technologies Utilized</h2>
                <h3>Electron · React · JavaScript · Tailwind CSS · HTML</h3>
            </section>
            <footer>
                <div id="footer-placeholder"></div>
            </footer>
        </div>
    );
}