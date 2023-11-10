import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { HomePage, NavBar, CheckoutPage, SearchResultsPage, ProductPage } from './components/index';

function App() {
    return (
        <BrowserRouter>
            <NavBar />
            <Routes>
                <Route exact path="/" element={<HomePage />} />
                <Route path="/search" element={<SearchResultsPage />} />
                <Route path="/product/:id" element={<ProductPage />} />
                <Route path="/checkout" element={<CheckoutPage />} />
            </Routes>
        </BrowserRouter>
    );
}

export default App;
