const { DataTypes } = require('sequelize');
// Exportamos una funcion que define el modelo
// Luego le injectamos la conexion a sequelize.
module.exports = (sequelize) => {
  // defino el modelo
  sequelize.define('Pokemon', {
    ID: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      unique: true,
    },

    Nombre: {
      type: DataTypes.STRING,
      allowNull: false,
    },

    Vida: {
      type: DataTypes.INTEGER,
    },

    Ataque: {
      type: DataTypes.INTEGER,
    },

    Defensa: {
      type: DataTypes.INTEGER,
    },

    Velocidad: {
      type: DataTypes.INTEGER,
    },
    
    Altura: {
      type: DataTypes.INTEGER,
    },

    Peso: {
      type: DataTypes.INTEGER,
    },

    Imagen: {
      type: DataTypes.STRING,
    },

    Tipo:{
      type: DataTypes.STRING,
    },

  });
};
