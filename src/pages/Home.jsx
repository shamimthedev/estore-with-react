import Discounts from "../components/Discounts"
import Footer from "../components/Footer"
import Header from "../components/Header"
import Hero from "../components/Hero"
import ProductGallery from "../components/ProductGallery"
import Products from "../components/Products"
import ProductsGrid from "../components/ProductsGrid"
import Promotion from "../components/Promotion"
import Category from './../components/Category';


const Home = () => {
    return (
        <>
            <Hero/>
            <ProductGallery/>
            <Category/>
            <Products/>
            <ProductsGrid/>
            <Discounts/>
            <Promotion/>
        </>
    )
}

export default Home