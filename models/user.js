const Sequelize = require('sequelize')
const db = require('./_db')

const User = db.define('user', {
  id: {
    type: Sequelize.INTEGER,
    allowNull: false,
    unique: true,
    primaryKey: true,
    autoIncrement: true,
    validate: {
    }
  },
  username: {
    type: Sequelize.STRING,
    allowNull: false,
    unique: true,
    validate: {
    }
  },
  password: {
    type: Sequelize.STRING,
    allowNull: false,
    validate: {
    }
  },
  fName: {
    type: Sequelize.STRING,
    allowNull: false,
    validate: {
    }
  },
  lName: {
    type: Sequelize.STRING,
    allowNull: false,
    validate: {
    }
  },
  uadd: {
    type: Sequelize.STRING,
    validate: {
    }
  },
  ucity: {
    type: Sequelize.STRING,
    allowNull: false,
    validate: {
    }
  },
  ustate: {
    type: Sequelize.STRING,
    allowNull: false,
    validate: {
    }
  },
  uzip: {
    type: Sequelize.INTEGER,
    allowNull: false,
    validate: {
    }
  },
  uphone: {
    type: Sequelize.STRING,
    allowNull: false,
    validate: {
    }
  },
  uemail: {
    type: Sequelize.STRING,
    allowNull: false,
    validate: {
      isEmail: true,
    }
  },
  joinedresa: {
    type: Sequelize.DATEONLY,
    validate: {
    }
  },
  webjoin: {
    type: Sequelize.DATE,
    allowNull: false,
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

module.exports = User