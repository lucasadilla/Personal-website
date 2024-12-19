import Link from 'next/link';

export default function Home() {
    return (
        <div>
            <header>
                <Link href="/" legacyBehavior>
                    <a className="home-button">Lucas Pentland-Hyde</a>
                </Link>
                <div className="subheader">
                    <h3>Computer science student · Based in Montreal</h3>
                </div>
                <ul id="list">
                    <li>
                        <Link href="/bitpass" legacyBehavior>
                            <a className="home-button small-button">BITPASS</a>
                        </Link>
                    </li>
                    <li>
                        <Link href="/personal" legacyBehavior>
                            <a className="home-button small-button">PERSONAL</a>
                        </Link>
                    </li>
                    <li>
                        <Link href="/debate" legacyBehavior>
                            <a className="home-button small-button">BICKER</a>
                        </Link>
                    </li>
                </ul>
            </header>
            <footer>
                <div className="footer-content">
                    <a href="https://www.linkedin.com/in/lucas-pentland-hyde-aa7130240/" className="footer-link" target="_blank">LinkedIn</a>
                    <a href="https://github.com/lucasadilla" className="footer-link" target="_blank">GitHub</a>
                    <a href="mailto:lucas.pentlandhyde@gmail.com" className="footer-link">Email</a>
                </div>
            </footer>
        </div>
    );
}