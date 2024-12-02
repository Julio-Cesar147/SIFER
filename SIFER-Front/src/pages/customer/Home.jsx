import React, { useState, useEffect } from "react";
import Logo from "../../assets/img/logo.png";
import Letras from "../../assets/img/nombre.png";
import "bootstrap/dist/css/bootstrap.min.css";
import Lupa from "../../assets/img/buscar.png";
import Product from "./Product";
import { useNavigate } from "react-router-dom";
const blue = "#282C37";
const orange = "#F75409";
import apiConnect from "../../utils/api.connection";
import Navbar from "../admin/NavBar";
import NavBarCliente from "./NavBarCliente";

const Tools = () => {
  const navigate = useNavigate();
  const [selectedProduct, setSelectedProduct] = useState(null);
  const [products, setProducts] = useState([]);

    const [hoveredCard, setHoveredCard] = useState(null);
    const [searchTerm, setSearchTerm] = useState('');

    useEffect(() => {
        
        getAllProducts()
    }, [])

  const getAllProducts = async () => {
    try {
      const response = await apiConnect.get("api/products/");

      setProducts(response);
    } catch (error) {
      console.error(error);
    }
  };

  const handleAddToOrder = async (product) => {
    try {
      const id = localStorage.getItem("id");
      const payload = {
        id,
        products: Array.isArray(product) ? product : [product],
      };
      await apiConnect.post("api/reserved/booking", payload);
    } catch (error) {
      console.error(error);
    }
  };

  const handleProductClick = (product) => {
    navigate(`/product/${product.id}`, { state: { product } });
  };

  const filteProducts = products.filter(
    (product) =>
      product.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
      product.category.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <>
      <NavBarCliente />

      {/* Carrusel */}
      <div
        id="carouselExampleInterval"
        className="carousel slide"
        data-bs-ride="carousel"
      >
        <div className="carousel-inner">
          <div className="carousel-item active" data-bs-interval="3000">
            <img
              src="https://www.venturaferreteria.com/wp-content/uploads/herramientas.jpg"
              className="w-100"
              style={{ height: 500 }}
              alt="foto1"
            />
          </div>
          <div className="carousel-item" data-bs-interval="3000">
            <img
              src="https://d100mj7v0l85u5.cloudfront.net/s3fs-public/2023-04/funciones-del-jefe-de-compras-6.png"
              className="w-100"
              style={{ height: 500 }}
              alt="foto2"
            />
          </div>
          <div className="carousel-item" data-bs-interval="3000">
            <img
              src="https://i.pinimg.com/originals/bf/de/72/bfde722655276150519f5399cfd5d730.jpg"
              className="w-100"
              style={{ height: 500 }}
              alt="foto3"
            />
          </div>
        </div>
        <button
          className="carousel-control-prev"
          type="button"
          data-bs-target="#carouselExampleInterval"
          data-bs-slide="prev"
        >
          <span
            className="carousel-control-prev-icon"
            aria-hidden="true"
          ></span>
          <span className="visually-hidden">Previous</span>
        </button>
        <button
          className="carousel-control-next"
          type="button"
          data-bs-target="#carouselExampleInterval"
          data-bs-slide="next"
        >
          <span
            className="carousel-control-next-icon"
            aria-hidden="true"
          ></span>
          <span className="visually-hidden">Next</span>
        </button>
      </div>

            {/* Sección de Cards */}
            <div className="container my-4">
                <p className="fs-2 fw-semibold mb-0">Productos disponibles</p>
                <p className="p-0 mb-4">¡Lleva lo mejor y apártalo antes de que se agoten!</p>
                <div className="row">
                    {products.map((product, index) => (
                        <div
                            className="col-md-4 mb-4 text-center"
                            key={index}
                            //onClick={() => navigate('/sales', { state: { selectedProduct: product } })}
                        >
                            <div
                                className={`card h-100 border-secondary-subtle bg-body-tertiary ${hoveredCard === index ? 'shadow' : ''}`}
                                onMouseEnter={() => setHoveredCard(index)}
                                onMouseLeave={() => setHoveredCard(null)}
                            >
                                <img src={product.image} className="card-img-top h-50 w-50 d-block mx-auto" alt={product.name} />
                                <div className="card-body justify-content-center mt-5 mb-0">
                                    <h5 className="card-title">{product.name}</h5>
                                    <p className="card-text">{product.description}</p>
                                    <p className="card-text fs-4">
                                        <strong>${product.selling_price}</strong>
                                    </p>
                                    <p className="card-text">{product.category}</p>
                                </div>
                                <div className="card-footer">
                                    <button
                                        className="btn w-100 text-white mb-2"
                                        style={{ backgroundColor: orange }}
                                        onClick={(e) => {
                                            e.stopPropagation();
                                            navigate('/product', { state: { selectedProduct: product } });
                                        }}
                                    >
                                        Ver más
                                    </button>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </>
    );
};

export default Tools;
