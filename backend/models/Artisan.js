const { DataTypes } = require("sequelize");
const sequelize = require("../config/database");

const Artisan = sequelize.define("Artisan", {

    id: {
        type: DataTypes.INTEGER,
        autoIncrement: true,
        primaryKey: true
    },

    name: {
        type: DataTypes.STRING,
        allowNull: false
    },

    note: {
        type: DataTypes.DECIMAL(2,1),
        allowNull: false
    },

    city: {
        type: DataTypes.STRING,
        allowNull: false
    },

    about: {
        type: DataTypes.TEXT
    },

    email: {
        type: DataTypes.STRING,
        allowNull: false
    },

    website: {
        type: DataTypes.STRING
    },

    is_top: {
        type: DataTypes.BOOLEAN,
        defaultValue: false
    }

}, {

    tableName: "artisans",
    timestamps: true,
    createdAt: "created_at",
    updatedAt: "updated_at"

});

module.exports = Artisan;