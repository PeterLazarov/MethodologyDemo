const { alias, aliasJest } = require('react-app-rewire-alias')

const aliasMap = {
  Texts: './src/texts',
  Components: './src/components',
  Containers: './src/components/containers/',
  Layouts: './src/components/layouts/',
  Pages: './src/components/pages/',
  Panels: './src/components/panels/',
  Services: './src/services',
  Config: './src/config',
  Reducers: './src/reducers',
  Queries: './src/queries',
}

module.exports = alias(aliasMap)
module.exports.jest = aliasJest(aliasMap)