const { alias, aliasJest } = require('react-app-rewire-alias')

const aliasMap = {
  Texts: './src/texts',
  Contexts: './src/contexts',
  Components: './src/components',
  Layouts: './src/components/layouts/',
  CommonComponents: './src/components/_common/',
  Services: './src/services',
  Config: './src/config',
  Reducers: './src/reducers',
  Queries: './src/queries',
}

module.exports = alias(aliasMap)
module.exports.jest = aliasJest(aliasMap)