import React from 'react'
import { TopNavbar } from '../header/Navbar'
import { Footer } from '../sections/footer/Footer'

export const MainLayout = ({children}) => {
    return (
        <div>
            <TopNavbar />
            {children}
            <Footer />
        </div>
    )
}
