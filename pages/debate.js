import Header from './header';
import { useEffect } from 'react';

export default function Debate() {
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
                <h2>BICKER</h2>
                <div className="subheader">
                    <h4>The game of instigating, debating, and deliberating!</h4>
                </div>
            </section>
            <section>
                <div className="tilt">
                    <img src="/images/Capture4.JPG" alt="debate" className="feature-image" />
                </div>
                <h4>Start off by writing down a controversial opinion of yours in under 200 characters.</h4>
                <div className="tilt">
                    <img src="/images/Capture3.JPG" alt="instigate" className="feature-image" />
                </div>
                <h4>Find an opinion you disagree with and respond in under 200 characters.</h4>
                <div className="tilt">
                    <img src="/images/Capture2.JPG" alt="deliberate" className="feature-image" />
                </div>
                <h4>Vote on other's disagreements.</h4>
            </section>
            <section>
                <a href="https://github.com/lucasadilla" className="home-button">GitHub Repository</a>
                <h2>Technologies Utilized</h2>
                <h3>Electron · React · JavaScript · Tailwind CSS · HTML</h3>
            </section>
            <footer>
                <div id="footer-placeholder"></div>
            </footer>
        </div>
    );
}