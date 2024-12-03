import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.min.js";
import Logo from "../../assets/img/logo.png";
import Letras from "../../assets/img/nombre.png";
import Lupa from "../../assets/img/buscar.png";
const blue = "#282C37";
const bluee = "#04478D";
const greenwhite = "#3FDA2B";
import React, { useState, useEffect } from 'react';
const orange = '#F75409';
import Swal from 'sweetalert2';
import apiConnect from '../../utils/api.connection';
const red = "#DF0000";

export const Cart = () => {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    const storedProducts = JSON.parse(localStorage.getItem("apartados")) || [];
    setProducts(storedProducts);
}, []);


  const [searchTerm, setSearchTerm] = useState("");

  const filteredProducts = products.filter(
    (product) =>
      product.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
      product.category.toLowerCase().includes(searchTerm.toLowerCase())
  );

  const total = products.reduce((acc, product) => acc + (product.totalPrice || 0), 0);


  // Función para actualizar la cantidad de un producto
  const handleQuantityChange = (index, newQuantity) => {
    // Asegúrate de que la cantidad no sea menor a 1
    if (newQuantity < 1) return;

    // Actualiza la cantidad en el estado local
    const updatedProducts = [...products];
    updatedProducts[index].reserved = newQuantity;
    updatedProducts[index].totalPrice = updatedProducts[index].selling_price * newQuantity;

    // Guarda los productos actualizados en el localStorage
    localStorage.setItem("apartados", JSON.stringify(updatedProducts));

    // Actualiza el estado local
    setProducts(updatedProducts);
};

  // Función para eliminar un producto
  const handleDeleteProduct = (index) => {
    Swal.fire({
      title: "¿Estás seguro?",
      text: "Esta acción no se puede deshacer",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: bluee,
      cancelButtonColor: red,
      confirmButtonText: "Eliminar",
      cancelButtonText: "Cancelar",
    }).then((result) => {
      if (result.isConfirmed) {
        // Eliminamos el producto del estado local
        const updatedProducts = products.filter((_, i) => i !== index);

        // Guardamos los productos actualizados en el localStorage
        localStorage.setItem("apartados", JSON.stringify(updatedProducts));
        setProducts(updatedProducts); // Actualizamos el estado local

                // Mostramos una alerta de éxito
                Swal.fire({
                    icon: "success",
                    title: "Producto Eliminado",
                    text: "Producto eliminado correctamente de sus apartados",
                    showConfirmButton: false,
                    timer: 2500
                });
            }
        });
    };

    const [user, setUser] = useState({});
    useEffect(() => {
        getDataUser();
      }, []);
    
      const getDataUser = async () => {
        try {
          const id = localStorage.getItem("id");
          const response = await apiConnect.get(`api/admin/getEmployee/${id}`);
          setUser(response);
        } catch (error) {
          console.error(error);
        }
      };
    const handleApart = async () => {
        try {
            // Obtenemos los productos del localStorage
            const storedProducts = JSON.parse(localStorage.getItem('apartados')) || [];
    
            // Creamos un nuevo array con los productos que solo incluyen el sku y la cantidad
            const products = storedProducts.map(product => ({
                sku: product.sku,  // Asegúrate de que cada producto tenga un campo "sku"
                reserved: product.reserved // O "cantidad reservada"
            }));

            const idUser = localStorage.getItem("id")

            const payload = { idUser, products }
    
            // Hacer la petición POST con los productos transformados
            await apiConnect.post('api/reserved/booking', payload);
    
            // Opcionalmente, puedes limpiar el localStorage después de enviar la solicitud
            localStorage.removeItem('apartados');
    
            // Mostrar un mensaje de éxito usando SweetAlert
            Swal.fire({
                icon: 'success',
                title: 'Apartado Realizado',
                text: 'Tus productos han sido apartados correctamente.',
                showConfirmButton: false,
                timer: 2500
            });
        } catch (error) {
            console.error(error);
    
            // Mostrar un mensaje de error en caso de fallo
            Swal.fire({
                icon: 'error',
                title: 'Error',
                text: 'Ocurrió un error al intentar apartar los productos.',
                showConfirmButton: false,
                timer: 2500
            });
        }
    }

    return (
        <>
        <nav className="navbar navbar-expand-lg p-0 position-fixed w-100" style={{ top: 0, left: 0, zIndex: 1030 }}>
            <div style={{ backgroundColor: blue }} className="container-fluid">
                <a className="navbar-brand text-white" href="/">
                    <img src={Letras} style={{ width: 250, height: 50 }} />
                </a>
                <div className="collapse navbar-collapse p-4" id="navbarSupportedContent">
                    <ul className="navbar-nav me-5 w-50 ms-5">
                        <div className="input-group bg-transparent border-0 rounded-pill text-dark w-100">
                            <input type="text" className="form-control rounded-pill" placeholder="Buscar" value={searchTerm} onChange={(e) => setSearchTerm(e.target.value)}/>
                        </div>
                    </ul>
                    <a className="nav-link text-white fs-5 me-5" href="/"> Catálogo </a>
                    <a className="nav-link text-white fs-5 me-5" href="/cart">Apartados</a>
                    <button className="btn rounded-pill text-center fw-medium d-flex align-items-center justify-content-center"
                        style={{ backgroundColor: orange, fontSize: 20, width: 150, height: 35 }} onClick={() => (window.location.href = '/login')} >
                        Salir
                    </button>
                </div>
            </div>
        </nav>

      <div className="container" style={{ marginTop: 90 }}>
        <div
          className="btn rounded-pill d-flex justify-content-center align-items-center text-center position-absolute shadow "
          style={{
            backgroundColor: "gray",
            top: "90px",
            left: "15px",
            zIndex: 2,
          }}
          onClick={() => (window.location.href = "/profile")}
        >
          <img
            src="https://cdn-icons-png.flaticon.com/128/6676/6676016.png"
            style={{ width: 37, height: 35 }}
            className="bg-white border shadow rounded-circle me-2"
          />
          <p className="fs-5 fw-bolder text-center text-white m-0">{user?.name}</p>
        </div>
        <p className="fs-1 fw-bolder text-center pt-3">Mis Apartados</p>
        <div className="border-black border-bottom" />

            {/* Fila de productos */}
            <div className="row mt-2">
                {filteredProducts.map((product, index) => (
                    <div key={product.name} className="col-md-6 mb-4"> {/* col-md-6 para crear 2 columnas por fila */}
                        <div className="card shadow-sm">
                            <div className="d-flex align-items-center">
                                <div className="flex-shrink-0">
                                    <img
                                        src={product.image}
                                        alt={product.name}
                                        className="img-fluid rounded-start"
                                        style={{ width: '200px', height: '200px', objectFit: 'cover' }}
                                    />
                                </div>
                                <div className="card-body d-flex flex-column flex-grow-1 ms-3">
                                    <img
                                        src="https://cdn-icons-png.flaticon.com/128/1828/1828665.png"
                                        alt="Eliminar"
                                        style={{ width: 20, height: 20, cursor: 'pointer' }}
                                        className="position-absolute top-0 end-0 m-2"
                                        onClick={() => handleDeleteProduct(index)}
                                    />
                                    <h5 className="card-title">{product.name}</h5>
                                    <p className="card-text">{product.category}</p>
                                    <p className="card-text text-primary">
                                        <strong>Apartado</strong>
                                    </p>
                                    <p className="card-text fw-bolder">${product.selling_price}</p>

                                    <div className="d-flex text-center align-items-center">
                                        <label className="fw-medium me-2 text-center align-items-center">Cantidad:</label>
                                        <input type="number" min={1} value={product.reserved} onChange={(e) => handleQuantityChange(index, parseInt(e.target.value))} 
                                            className="form-control align-content-center border shadow border-secondary-subtle " style={{ width: '60px' , height: 30}}/>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                ))}
            </div>
            <div className="text-center fs-4 fw-semibold bg-secondary-subtle">
                <p>Total: ${total}</p>
                <button className="btn btn-lg text-white" style={{ backgroundColor: orange }} onClick={handleApart}>
                    Apartar
                </button>
            </div>
        </div>
        </>
    );
};

export default Cart;
