import React, { useState } from "react";
import "bootstrap/dist/js/bootstrap.bundle.min";
import Swal from "sweetalert2";

const FileUploadModal = ({ showModal, handleCloseModal }) => {
  const [image, setImage] = useState(null);
  const [name, setName] = useState("");
  const [description, setDescription] = useState("");
  const [sku, setSku] = useState("");
  const [price, setPrice] = useState("");
  const [model, setModel] = useState("");
  const [stock, setStock] = useState("");
  const [stockMin, setStockMin] = useState("");
  const [stockMax, setStockMax] = useState("");
  const [brand, setBrand] = useState("");
  const [category, setCategory] = useState("");
  const [unit, setUnit] = useState("");

  const handleFileChange = (event) => {
    setImage(event.target.files[0]);
  };

  const handleRemoveFile = () => {
    setImage(null);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    // Validar campos obligatorios
    if (
      !name ||
      !description ||
      !sku ||
      !price ||
      !model ||
      !stock ||
      !stockMin ||
      !stockMax ||
      !brand ||
      !category ||
      !unit ||
      !image
    ) {
      Swal.fire({
        title: "Campos incompletos",
        text: "Por favor, llena todos los campos antes de continuar.",
        icon: "warning",
        confirmButtonText: "Entendido",
      });
      return;
    }

    if (parseInt(stockMax, 10) < parseInt(stockMin, 10)) {
      Swal.fire({
        title: "Error en los valores del stock",
        text: "El stock máximo no puede ser menor que el stock mínimo.",
        icon: "error",
        confirmButtonText: "Corregir",
      });
      return;
    }
    
    // Preparar datos para enviar
    const formData = new FormData();
    formData.append("name", name);
    formData.append("description", description);
    formData.append("sku", sku);
    formData.append("price", price);
    formData.append("model", model);
    formData.append("stock", stock);
    formData.append("stockMin", stockMin);
    formData.append("stockMax", stockMax);
    formData.append("image", image);
    formData.append("brand", brand);
    formData.append("category", category);
    formData.append("unit", unit);

    try {
      const response = await fetch("http://localhost:3000/api/products/register", {
        method: "POST",
        body: formData,
      });

      if (response.ok) {
        Swal.fire({
          title: "Producto agregado",
          text: "El producto se registró correctamente.",
          icon: "success",
          showConfirmButton: false,
          timer: 2000,
        });
        // Cerrar el modal después de agregar el producto
        handleCloseModal();
        setTimeout(() => {
          window.location.reload();
        }, 2000);
      } else {
        Swal.fire({
          title: "Error al guardar",
          text: "Hubo un problema al registrar el producto.",
          icon: "error",
        });
      }
    } catch (error) {
      console.error(error);
      Swal.fire({
        title: "Error del servidor",
        text: "No se pudo conectar con el servidor. Inténtalo más tarde.",
        icon: "error",
      });
    }
  };

  return (
    <div
      className={`modal fade ${showModal ? "show d-block" : ""}`}
      tabIndex="-1"
      role="dialog"
      style={{ backgroundColor: "rgba(0, 0, 0, 0.5)" }}
    >
      <div className="modal-dialog modal-dialog-centered modal-lg">
        <div
          className="modal-content"
          style={{
            backgroundColor: "#fff",
            borderRadius: "1em",
            boxShadow: "0px 100px 48px -60px rgba(0,0,0,0.1)",
            color: "#0f0e0e",
          }}
        >
          <div className="modal-header">
            <h5 className="modal-title">Información Producto</h5>
            <button
              type="button"
              className="btn-close"
              onClick={handleCloseModal}
            ></button>
          </div>

          <div className="modal-body">
            <div className="row">
              {/* Columna para la imagen */}
              <div className="col-md-4 d-flex flex-column align-items-center">
                {image ? (
                  <div
                    className="result mb-3"
                    style={{
                      backgroundColor: "rgba(0, 140, 255, 0.062)",
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "center",
                      position: "relative",
                      borderRadius: "1em",
                      padding: "1em",
                      width: "100%",
                    }}
                  >
                    <p>{image ? image.name : "No file selected"}</p>
                    <div className="remove-file"
                      style={{ position: "absolute", display: "flex", alignItems: "center",
                        justifyContent: "center",
                        backgroundColor: "rgba(26, 7, 1, 0.212)",
                        height: "30px",
                        width: "50px",
                        borderRadius: "50%",
                        right: "10px",
                        top: "10px",
                        color: "#fff",
                        fontWeight: "bold",
                        cursor: "pointer",
                      }}
                      onClick={handleRemoveFile}
                    >
                      X
                    </div>
                  </div>
                ) : (
                  <p className="text-center justify-content-center">No se ha subido ninguna imagen.</p>
                )}
                <label
                  htmlFor="image"
                  className="btn btn-outline-primary mt-auto"
                  style={{ width: "100%" }}
                >
                  Elegir Imagen
                  <input
                    hidden
                    type="file"
                    id="image"
                    name="image"
                    onChange={handleFileChange}
                  />
                </label>
              </div>

              {/* Columna para los campos */}
              <div className="col-md-8">
                <div className="row">
                  {/* Primera subcolumna de campos */}
                  <div className="col-md-6">
                    <div className="form-group mb-3">
                      <label>Nombre del Producto</label>
                      <input
                        type="text"
                        className="form-control"
                        placeholder="Nombre del producto"
                        value={name}
                        name="name"
                        onChange={(e) => setName(e.target.value)}
                      />
                    </div>
                    <div className="form-group mb-3">
                      <label>Descripción</label>
                      <input
                        type="text"
                        className="form-control"
                        placeholder="Descripción"
                        value={description}
                        name="description"
                        onChange={(e) => setDescription(e.target.value)}
                      />
                    </div>
                    <div className="form-group mb-3">
                      <label>SKU</label>
                      <input
                        type="text"
                        className="form-control"
                        placeholder="SKU"
                        value={sku}
                        name="sku"
                        onChange={(e) => setSku(e.target.value)}
                      />
                    </div>
                    <div className="form-group mb-3">
                      <label>Precio</label>
                      <input
                        type="number"
                        name="price"
                        className="form-control"
                        placeholder="Precio del producto"
                        value={price}
                        min={1}
                        onChange={(e) => setPrice(e.target.value)}
                      />
                    </div>
                    <div className="form-group mb-3">
                      <label>Modelo</label>
                      <input
                        type="text"
                        name="model"
                        className="form-control"
                        placeholder="Modelo"
                        value={model}
                        onChange={(e) => setModel(e.target.value)}
                      />
                    </div>
                  </div>

                  {/* Segunda subcolumna de campos */}
                  <div className="col-md-6">
                    <div className="form-group mb-3">
                      <label>Cantidad de Stock</label>
                      <input
                        type="number"
                        className="form-control"
                        name="stock"
                        placeholder="Cantidad de stock"
                        value={stock}
                        min={1}
                        onChange={(e) => setStock(e.target.value)}
                      />
                    </div>
                    <div className="form-group mb-3">
                      <label>Stock Mínimo</label>
                      <input
                        type="number"
                        name="stockMin"
                        className="form-control"
                        placeholder="Mínimo"
                        value={stockMin}
                        min={1}
                        onChange={(e) => setStockMin(e.target.value)}
                      />
                    </div>
                    <div className="form-group mb-3">
                      <label>Stock Máximo</label>
                      <input
                        type="number"
                        name="stockMax"
                        className="form-control"
                        placeholder="Máximo"
                        value={stockMax}
                        min={1}
                        onChange={(e) => setStockMax(e.target.value)}
                      />
                    </div>
                    <div className="form-group mb-3">
                      <label>Marca</label>
                      <input
                        type="text"
                        name="brand"
                        className="form-control"
                        placeholder="Marca"
                        value={brand}
                        onChange={(e) => setBrand(e.target.value)}
                      />
                    </div>
                    <div className="form-group mb-3">
                      <label>Categoría</label>
                      <input
                        type="text"
                        name="category"
                        className="form-control"
                        placeholder="Categoría"
                        value={category}
                        onChange={(e) => setCategory(e.target.value)}
                      />
                    </div>
                    <div className="form-group mb-3">
                      <label>Unidad</label>
                      <input
                        type="number"
                        className="form-control"
                        placeholder="Unidad"
                        value={unit} min={1}
                        name="unit"
                        onChange={(e) => setUnit(e.target.value)}
                      />
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="modal-footer">
            <button
              type="button"
              className="btn btn-primary"
              onClick={handleSubmit}
            >
              Agregar Producto
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default FileUploadModal;
