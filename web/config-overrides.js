const {alias, aliasJest} = require('react-app-rewire-alias')

const aliasMap = {
  Texts: './src/texts',
  Components: './src/components',
  Services: './src/services',
  Config: './src/config',
}

module.exports = alias(aliasMap)
module.exports.jest = aliasJest(aliasMap)