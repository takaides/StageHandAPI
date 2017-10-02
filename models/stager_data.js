const Sequelize = require('sequelize')
const db = require('./_db')

const StagerData = db.define('stager_data', {
  id: {
    type: Sequelize.INTEGER,
    allowNull: false,
    unique: true,
    primaryKey: true,
    autoIncrement: true,
    validate: {
    }
  },
  stagersName: {
    type: Sequelize.STRING,
    allowNull: false,
    validate: {
    }
  },
  mlsNumber: {
    type: Sequelize.STRING,
    allowNull: false,
    validate: {
    }
  },
  listingRealtor: {
    type: Sequelize.STRING,
    allowNull: false,
    validate: {
    }
  },
  propertyAddress: {
    type: Sequelize.STRING,
    allowNull: false,
    validate: {
    }
  },
  propertyCity: {
    type: Sequelize.STRING,
    allowNull: false,
    validate: {
    }
  },
  propertyState: {
    type: Sequelize.STRING,
    allowNull: false,
    validate: {
    }
  },
  propertyZip: {
    type: Sequelize.INTEGER,
    allowNull: false,
    validate: {
    }
  },
  dateListed: {
    type: Sequelize.DATEONLY,
    validate: {
    }
  },
  dateFirstOffer: {
    type: Sequelize.DATEONLY,
    validate: {
    }
  },
  dateUnderContract: {
    type: Sequelize.DATEONLY,
    validate: {
    }
  },
  dateSold: {
    type: Sequelize.DATEONLY,
    validate: {
    }
  },
  listPrice: {
    type: Sequelize.INTEGER,
    validate: {
    }
  },
  listPrice: {
    type: Sequelize.INTEGER,
    validate: {
    }
  },
  soldPrice: {
    type: Sequelize.INTEGER,
    validate: {
    }
  },
  serviceDate: {
    type: Sequelize.DATEONLY,
    allowNull: false,
    validate: {
    }
  },
  listingPriceRange: {
    type: Sequelize.INTEGER,
    validate: {
    }
  },
  serviceProvided: {
    type: Sequelize.TEXT,
    allowNull: false,
    validate: {
    }
  },
  homeOwnersName: {
    type: Sequelize.STRING,
    validate: {
    }
  }
},
{
  hooks: {
    //Write methods here
  },
  getterMethods: {
    //Write methods here
  },
  setterMethods: {
    //Write methods here
  },
  instanceMethods: {
    //Write methods here
  },
  classMethods: {
    //Write methods here
  },
  underscored: true,
  underscoredAll: true,

})

module.exports = StagerData