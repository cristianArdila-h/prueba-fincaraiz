import { BrowserRouter, Route, Routes } from 'react-router-dom'
import { Header } from '../components/header/Header'
import ContactUs from '../pages/contact-us/ContactUs'

export const AppRouter = () => {
    return (
        <BrowserRouter>
        <Header />
            <Routes>
                <Route path="/" element={<ContactUs />} />
                <Route path="/contact-us" element={<ContactUs />} />
            </Routes>
        </BrowserRouter>
    )
}
