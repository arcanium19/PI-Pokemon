const { DataTypes } = require('sequelize');
// Exportamos una funcion que define el modelo
// Luego le injectamos la conexion a sequelize.
module.exports = (sequelize) => {
  // defino el modelo
  sequelize.define('Pokemon', {
    ID: {
      type: DataTypes.UUID,
      primaryKey: true,
      allowNull: false,
      defaultValue: DataTypes.UUIDV4,
    },

    Nombre: {
      type: DataTypes.STRING,
      allowNull: false,
    },

    Vida: {
      type: DataTypes.STRING,
    },

    Ataque: {
      type: DataTypes.STRING,
    },

    Defensa: {
      type: DataTypes.STRING,
    },

    Velocidad: {
      type: DataTypes.STRING,
    },
    
    Altura: {
      type: DataTypes.STRING,
    },

    Peso: {
      type: DataTypes.STRING,
    },

    Imagen: {
      type: DataTypes.STRING,

    },

    DB:{
      type: DataTypes.BOOLEAN,
      allowNull: false,
      defaultValue: true,
    }

  }, {timestamps: false});
};
