import Link from 'next/link';
import './nav.css'

export default function Nav(){



    return(
        <>
            <nav>
                <div className="logo">Alert Security Services & Labour Contract</div>
                <div className="routes">
                    <li><Link href="/">Home</Link></li>
                    <li><Link href="/services">Services</Link></li>
                    <li><Link href="/about">About</Link></li>
                    <li><Link href="/contact">Contact</Link></li>
                </div>
                <div className="quote">
                    <Link href="/pricing">get Quote</Link>
                </div>
            </nav>
        </>
    )
}