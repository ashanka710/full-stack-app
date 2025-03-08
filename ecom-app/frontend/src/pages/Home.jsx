import { useEffect, useState } from "react";
import axios from "axios";
import './Home.css'
// import ProductCard from "./components/ProductCard";

function Home() {
    const [products, setProducts] = useState([]);

    useEffect(() => {
        axios.get("http://localhost:5000/api/products")
            .then(res => setProducts(res.data))
            .catch(err => console.log(err));
    }, []);

    return ( <div>
        <h1> Products </h1> <div className = "grid grid-cols-3 gap-4" > {
            products.map(product => ( <div key = { product._id }
                className = "border p-4" >
                <img src = { product.imageUrl }
                alt = { product.name }
                className = "w-full"/>
                <h2> { product.name } </h2> <p> $ { product.price } </p> </div>
            ))
        } </div> </div>
    );
}

export default Home;