const Category = require("./Category");
const Specialty = require("./Specialty");
const Artisan = require("./Artisan");

Category.hasMany(Specialty, {
    foreignKey: "category_id"
});

Specialty.belongsTo(Category, {
    foreignKey: "category_id"
});

Specialty.hasMany(Artisan, {
    foreignKey: "specialty_id"
});

Artisan.belongsTo(Specialty, {
    foreignKey: "specialty_id"
});

module.exports = {
    Category,
    Specialty,
    Artisan
};