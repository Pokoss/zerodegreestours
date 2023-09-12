import React from 'react'
import Navbar from './Navbar'
import Footer from './Footer';


export default function Layout({ children }) {
    const cookiesAccepted = localStorage.getItem('cookiesAccepted');

    return (
        <div style={{ fontFamily: 'Roboto' }}>
            <Navbar />

            <main className='min-h-screen'>
                {children}
            </main>

            <Footer />

        </div>
    )
}
