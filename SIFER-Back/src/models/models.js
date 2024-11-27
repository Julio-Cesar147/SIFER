const { Role } = require('./roles/roleModel')
const { Occupation } = require('./occupations/occupationModel')
const { Brand } = require('./brands/brandModel')
const { Category } = require('./categories/categoryModel')
const { Unit } = require('./units/unitModel')
const { User } = require('./users/userModel')
const { Address } = require('./addresses/addressModel')
const { Product } = require('./products/productModel')
const { Reservation } = require('./reservations/reservationModel')
const { ReservationDetail } = require('./reservationDetails/reservationDetailModel')
const { History } = require('./histories/historyModel')
const { PurchaseDetail } = require('./purchaseDetails/purchaseDetailsModel')

// Relaciones declaradas en la tabla de users
User.belongsTo(Role, { foreignKey: 'role' })
Role.hasMany(User, { foreignKey: 'role' })

User.belongsTo(Occupation, { foreignKey: 'occupation' })
Occupation.hasMany(User, { foreignKey: 'occupation' })

// Relaciones declaradas en la tabla de addresses
Address.belongsTo(User, { foreignKey: 'user', onDelete: 'CASCADE' })
User.hasOne(Address, { foreignKey: 'user', onDelete: 'CASCADE' })

// Relacines declaradas en la tabla de products
Product.belongsTo(Brand, { foreignKey: 'brand' })
Brand.hasMany(Product, { foreignKey: 'brand' })

Product.belongsTo(Category, { foreignKey: 'category' })
Category.hasMany(Product, { foreignKey: 'category' })

Product.belongsTo(Unit, { foreignKey: 'unit' })
Unit.hasMany(Product, { foreignKey: 'unit' })

// Relaciones declaradas en la tabla de reservations
Reservation.belongsTo(User, { foreignKey: 'user' })
User.hasMany(Reservation, { foreignKey: 'user' })

// Relaciones declaradas en la tabla de reservation_details
ReservationDetail.belongsTo(Reservation, { foreignKey: 'reserved' })
Reservation.hasMany(ReservationDetail, { foreignKey: 'reserved' })

ReservationDetail.belongsTo(Product, { foreignKey: 'product' })
Product.hasMany(ReservationDetail, { foreignKey: 'product' })

// Relaciones declaradas en la tabla de history
History.belongsTo(User, { foreignKey: 'seller' })
User.hasMany(History, { foreignKey: 'seller' })

// Relaciones declaradas en la tabla de purchase_details
PurchaseDetail.belongsTo(History, { foreignKey: 'record' })
History.hasMany(PurchaseDetail, { foreignKey: 'record' })

PurchaseDetail.belongsTo(Product, { foreignKey: 'product' })
Product.hasMany(PurchaseDetail, { foreignKey: 'product' })

module.exports = {
    Role,
    Occupation,
    Brand, 
    Category,
    Unit,
    User,
    Address,
    Product,
    Reservation,
    ReservationDetail,
    History,
    PurchaseDetail
}