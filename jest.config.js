module.exports = {
  preset: 'ts-jest',
  transform: {
    '^.+\\js$': 'babel-jest',
    '^.+\\.vue$': 'vue-jest',
  },
}
