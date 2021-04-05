const { alias, aliasJest } = require('react-app-rewire-alias')

const aliasMap = {
  Texts: './src/texts',
  Contexts: './src/contexts',
  Components: './src/components',
  Layouts: './src/components/layouts',
  Services: './src/services',
  Config: './src/config',
  Redux: './src/redux',
}

module.exports = alias(aliasMap)
module.exports.jest = aliasJest(aliasMap)