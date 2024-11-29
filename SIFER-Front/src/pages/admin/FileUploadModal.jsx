import React, { useState } from "react";
import "bootstrap/dist/js/bootstrap.bundle.min"; // Para funcionalidades de Bootstrap

const FileUploadModal = ({ showModal, handleCloseModal }) => {
  const [uploadedFile, setUploadedFile] = useState(null);
  const [productName, setProductName] = useState("");
  const [price, setPrice] = useState("");
  const [category, setCategory] = useState("");
  const [stock, setStock] = useState("");

  const handleFileChange = (event) => {
    const file = event.target.files[0];
    if (file) {
      setUploadedFile(file.name);
    }
  };

  const handleRemoveFile = () => {
    setUploadedFile(null);
  };

  const handleSubmit = () => {
    // manejar el envío de los datos
    console.log({
      productName,
      price,
      category,
      stock,
      uploadedFile,
    });

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
                {uploadedFile ? (
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
                    <p>{uploadedFile}</p>
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
                  htmlFor="file"
                  className="btn btn-outline-primary mt-auto"
                  style={{ width: "100%" }}
                >
                  Elegir Imagen
                  <input
                    hidden
                    type="file"
                    id="file"
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
                    value={productName}
                    onChange={(e) => setProductName(e.target.value)}
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
                  <label>Cantidad de Stock</label>
                  <input
                    type="number"
                    className="form-control"
                    placeholder="Cantidad de stock"
                    value={stock}
                    onChange={(e) => setStock(e.target.value)}
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
