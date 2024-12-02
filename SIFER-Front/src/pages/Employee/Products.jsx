import React, { useState, useEffect } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import ferre from "../../assets/ferre.png";
import NavBarEmployee from "./NavBarEmployee";
import apiConnect from "../../utils/api.connection";

const Products = () => {
  const [searchTerm, setSearchTerm] = useState("");
  //const [filteredProducts, setFilteredProducts] = useState([]);
  const [products, setProducts] = useState([]);

  useEffect(() => {
    getAllProducts();
  }, []);

  const getAllProducts = async () => {
    try {
      const response = await apiConnect.get("api/products/");
      setProducts(response);
    } catch (error) {
      console.error(error);
    }
  };

  const handleSearch = (e) => {
    const term = e.target.value.toLowerCase();
    setSearchTerm(term);

    const filtered = products.filter((product) =>
      product.name.toLowerCase().includes(term)
    );
    setProducts(filtered);
  };

  const handleAddToOrder = (product) => {
    alert(`Producto agregado: ${product.name}`);
  };

  const ProductCard = ({ product, onAddToOrder }) => {
    return (
      <div className="col-md-3 mb-4">
        {" "}
        {/* Cambié col-md-4 a col-md-3 para más tarjetas */}
        <div className="card shadow-sm h-100">
          <img
            src={product.image}
            className="card-img-top"
            alt={product.name}
            style={{ height: "200px", objectFit: "cover" }}
          />
          <div className="card-body d-flex flex-column">
            <h5 className="card-title">{product.name}</h5>
            <p className="card-text">{product.description}</p>
            <h6 className="card-subtitle mb-2 text-muted">{product.brand}</h6>
            <p className="text-success">${product.selling_price}</p>
            <button
              className="btn btn-primary mt-auto"
              onClick={() => onAddToOrder(product)}
            >
              Agregar a pedidos
            </button>
          </div>
        </div>
      </div>
    );
  };

  return (
    <>
      {/* nabvarsito empleaduki*/}
      <NavBarEmployee />

      <div className="container mt-4">
        <h2 className="text-center mb-4">Catálogo de Productos</h2>

        {/* Buscador */}
        <div className="mb-4">
          <input
            type="text"
            className="form-control"
            placeholder="Buscar producto..."
            value={searchTerm}
            onChange={handleSearch}
          />
        </div>

        {/* Lista de Productos */}
        <div className="row">
          {products.length > 0 ? (
            products.map((product) => (
              <ProductCard
                key={product.idProduct}
                product={product}
                onAddToOrder={handleAddToOrder}
              />
            ))
          ) : (
            <div className="col-12">
              <p className="text-center">No se encontraron productos</p>
            </div>
          )}
        </div>
      </div>
    </>
  );
};

export default Products;
