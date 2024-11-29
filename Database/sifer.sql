CREATE DATABASE sifer;
USE sifer;

CREATE TABLE roles (
    idRol INT AUTO_INCREMENT NOT NULL,
    role VARCHAR(100) NOT NULL,

    PRIMARY KEY (idRol)
);

CREATE TABLE occupations (
    idOccupation INT AUTO_INCREMENT NOT NULL,
    occupation  VARCHAR(100) NOT NULL,

    PRIMARY KEY (idOccupation)
);

CREATE TABLE brands (
    idBrand INT AUTO_INCREMENT NOT NULL,
    brand VARCHAR(100) NOT NULL,

    PRIMARY KEY (idBrand)
);

CREATE TABLE categories (
    idCategory INT AUTO_INCREMENT NOT NULL,
    category VARCHAR(100) NOT NULL,

    PRIMARY KEY (idCategory)
);

CREATE TABLE units (
    idUnit INT AUTO_INCREMENT NOT NULL,
    unit VARCHAR(100) NOT NULL,

    PRIMARY KEY (idUnit)
);

CREATE TABLE users (
    idUser INT AUTO_INCREMENT NOT NULL,
    name VARCHAR(50) NOT NULL,
    lastname VARCHAR(50) NOT NULL,
    surname VARCHAR(50) NOT NULL,
    email VARCHAR(100) NOT NULL,
    hash_password VARCHAR(250) NOT NULL,
    telephone VARCHAR(20) NOT NULL,
    birthday DATE NOT NULL,
    created TIMESTAMP DEFAULT CURRENT_TIMESTAMP,

    role INT NOT NULL,
    occupation INT NOT NULL,

    PRIMARY KEY (idUser),
    FOREIGN KEY (role) REFERENCES roles(idRol),
    FOREIGN KEY (occupation) REFERENCES occupations(idOccupation)
);

CREATE TABLE addresses (
    idAddress INT AUTO_INCREMENT NOT NULL,
    street VARCHAR(100) NOT NULL,
    city VARCHAR(50) NOT NULL,
    state VARCHAR(50) NOT NULL,
    postal_code VARCHAR(10) NOT NULL,

    user INT NOT NULL,

    PRIMARY KEY (idAddress),
    FOREIGN KEY (user) REFERENCES users(idUser) ON DELETE CASCADE
);

CREATE TABLE products (
    idProduct INT AUTO_INCREMENT NOT NULL,
    name VARCHAR(50) NOT NULL,
    description VARCHAR(500) NOT NULL,
    sku VARCHAR(50) NOT NULL,
    selling_price DECIMAL(10,2) NOT NULL,
    model VARCHAR(50) NOT NULL,
    stock INT NOT NULL,
    minimum_stock INT NOT NULL,
    maximum_stock INT NOT NULL,
    image VARCHAR(400) NOT NULL,
    status BOOLEAN NOT NULL DEFAULT true,
    created TIMESTAMP DEFAULT CURRENT_TIMESTAMP,

    brand INT NOT NULL,
    category INT NOT NULL,
    unit INT NOT NULL,

    PRIMARY KEY (idProduct),
    FOREIGN KEY (brand) REFERENCES brands(idBrand),
    FOREIGN KEY (category) REFERENCES categories(idCategory),
    FOREIGN KEY (unit) REFERENCES units(idUnit)
);

CREATE TABLE reservations (
    idReservation INT AUTO_INCREMENT NOT NULL,
    code VARCHAR(100) NOT NULL UNIQUE,
    status ENUM('active', 'cancelled', 'completed') NOT NULL DEFAULT 'active',
    reserved_on TIMESTAMP DEFAULT CURRENT_TIMESTAMP,

    user INT NOT NULL,

    PRIMARY KEY (idReservation),
    FOREIGN KEY (user) REFERENCES users(idUser)
);

CREATE TABLE reservation_details (
    idReDetails INT AUTO_INCREMENT NOT NULL,
    reserved_quantity INT NOT NULL,

    reserved INT NOT NULL,
    product INT NOT NULL,

    PRIMARY KEY (idReDetails),
    FOREIGN KEY (reserved) REFERENCES reservations(idReservation),
    FOREIGN KEY (product) REFERENCES products(idProduct)
);

CREATE TABLE history (
    idHistory INT AUTO_INCREMENT NOT NULL,
    total_sales DECIMAL(10,2) NOT NULL,
    sales_date TIMESTAMP DEFAULT CURRENT_TIMESTAMP,

    seller INT NOT NULL,

    PRIMARY KEY (idHistory),
    FOREIGN KEY (seller) REFERENCES users(idUser)
);

CREATE TABLE purchase_details (
    idPurchase INT AUTO_INCREMENT NOT NULL,
    sales_quantity INT NOT NULL,

    record INT NOT NULL,
    product INT NOT NULL,

    PRIMARY KEY (idPurchase),
    FOREIGN KEY (record) REFERENCES history(idHistory),
    FOREIGN KEY (product) REFERENCES products(idProduct)
);

INSERT INTO roles(role) VALUES
('Administrador'),
('Empleado'),
('Cliente');

INSERT INTO occupations(occupation) VALUES
('Albañil'),
('Carpintero'),
('Plomero'),
('Electricista'),
('Mecánico'),
('Chofer'),
('Costurera'),
('Herrero'),
('Pintor'),
('Jardinero'),
('Panadero'),
('Pescador'),
('Zapatero'),
('Comerciante'),
('Artesano'),
('Cocinero'),
('Repartidor'),
('Fontanero'),
('Sastre'),
('Vendedor ambulante');

INSERT INTO units(unit) VALUES
('Kilo(s)'),
('Pieza(s)'),
('Metro(s)'),
('Litro(s)'),
('Rollo(s)'),
('Paquete(s)'),
('Bulto(s)');

INSERT INTO users (name, lastname, surname, email, hash_password, telephone, birthday, role, occupation)
VALUES (
    'Juan', 
    'Pérez', 
    'López', 
    'juan.perez@example.com', 
    '$2b$10$bjVAgXKfYfwVBXc41kbFo..0deTwToykJiOE2g04OV6sSP3H2AjZi', --Administrador@123
    '777-123-4567', 
    '1985-05-15', 
    1,
    2
);

INSERT INTO addresses (street, city, state, postal_code, user)
VALUES (
    'Calle Emiliano Zapata 45', 
    'Cuernavaca', 
    'Morelos', 
    '62000', 
    LAST_INSERT_ID()
);