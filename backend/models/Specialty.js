const { DataTypes } = require("sequelize");
const sequelize = require("../config/database");

const Specialty = sequelize.define("Specialty", {

    id: {
        type: DataTypes.INTEGER,
        autoIncrement: true,
        primaryKey: true
    },

    name: {
        type: DataTypes.STRING,
        allowNull: false
    }

}, {

    tableName: "specialties",
    timestamps: true,
    createdAt: "created_at",
    updatedAt: "updated_at"

});

module.exports = Specialty;