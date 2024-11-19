import React from 'react';

const ProfileComponent = () => {
    return (
        <div className="container mt-5">
            <h2>Perfil del Usuario</h2>
            <p>Nombre: Juan Pérez</p>
            <p>Correo: juan.perez@example.com</p>
            <p>Teléfono: +123 456 7890</p>
            <p>Dirección: Calle Falsa 123</p>
            <button className="btn btn-warning">Cambiar Contraseña</button>
        </div>
    );
};

export default ProfileComponent;
