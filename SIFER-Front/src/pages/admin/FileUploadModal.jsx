import React, { useState } from "react";
import "bootstrap/dist/js/bootstrap.bundle.min";
import apiConnect from "../../utils/api.connection";

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

    try {
      //const payload = {name, description, sku, price, model, stock, stockMin, stockMax, image, brand, category, unit}
      console.log(image);

      const formData = new FormData();

      formData.append("name", name);
      formData.append("description", description);
      formData.append("sku", sku);
      formData.append("price", price);
      formData.append("model", model);
      formData.append("stock", stock);
      formData.append("stockMin", stockMin);
      formData.append("stockMax", stockMax);
      formData.append("image", image); // Archivo seleccionado
      formData.append("brand", brand);
      formData.append("category", category);
      formData.append("unit", unit);

      try {
        const response = await fetch(
          "http://localhost:3000/api/products/register",
          {
            method: "POST",
            body: formData,
          }
        );

        if (!response.ok)
          throw new Error(`${response.status} ${response.statusText}`);

        return await response.json();
      } catch (error) {
        console.error(error);
        throw error;
      }

      //const result = apiConnect.post(, formData)
    } catch (error) {
      console.log(error);
    }

    // Cerrar el modal después de agregar el producto
    handleCloseModal();
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
          {/* Encabezado del modal */}
          <div className="modal-header">
            <h5 className="modal-title">Información Producto</h5>
            <button
              type="button"
              className="btn-close"
              onClick={handleCloseModal}
            ></button>
          </div>

          {/* Contenido del modal */}
          <div className="modal-body">
            <div className="row">
              {/* Columna de previsualización y carga de imagen */}
              <div className="col-md-6 d-flex flex-column align-items-center">
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
                    <div
                      className="remove-file"
                      style={{
                        position: "absolute",
                        content: "X",
                        display: "flex",
                        alignItems: "center",
                        justifyContent: "center",
                        backgroundColor: "rgba(26, 7, 1, 0.212)",
                        height: "30px",
                        width: "30px",
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
                  <p>No se ha subido ninguna imagen.</p>
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

              {/* Columna de los campos de texto */}
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
                  <label>Descripcion</label>
                  <input
                    type="text"
                    className="form-control"
                    placeholder="Descripcion"
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
                    onChange={(e) => setSku(e.target.value)}
                  />
                </div>
                <div className="form-group mb-3">
                  <label>Precio</label>
                  <input
                    type="number"
                    className="form-control"
                    placeholder="Precio del producto"
                    value={price}
                    onChange={(e) => setPrice(e.target.value)}
                  />
                </div>
                <div className="form-group mb-3">
                  <label>Modelo</label>
                  <input
                    type="text"
                    className="form-control"
                    placeholder="Modelo"
                    value={model}
                    onChange={(e) => setModel(e.target.value)}
                  />
                </div>
                <div className="form-group mb-3">
                  <label>Cantidad de Stock</label>
                  <input
                    type="number"
                    className="form-control"
                    placeholder="Cantidad de stock"
                    value={stock}
                    onChange={(e) => setStock(e.target.value)}
                  />
                </div>
                <div className="form-group mb-3">
                  <label>Stock Minimo</label>
                  <input
                    type="number"
                    className="form-control"
                    placeholder="Minimo"
                    value={stockMin}
                    onChange={(e) => setStockMin(e.target.value)}
                  />
                </div>
                <div className="form-group mb-3">
                  <label>Stock Maximo</label>
                  <input
                    type="number"
                    className="form-control"
                    placeholder="Maximo"
                    value={stockMax}
                    onChange={(e) => setStockMax(e.target.value)}
                  />
                </div>
                <div className="form-group mb-3">
                  <label>Marca</label>
                  <input
                    type="text"
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
                    value={unit}
                    onChange={(e) => setUnit(e.target.value)}
                  />
                </div>
              </div>
            </div>
          </div>
          {/* Footer del modal */}
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
