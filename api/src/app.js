const express = require('express');
const http = require('http');
const helmet = require('helmet');
const xss = require('xss-clean');
const compression = require('compression');
const cors = require('cors');
const httpStatus = require('http-status');
const envConfig = require('./config/envConfig');
const routes = require('./routes');
const ApiError = require('./utils/ApiError');
const { errorConverter, errorHandler } = require('./middlewares/error');
const texts = require('./texts');

const app = express();

app.use(helmet());

app.use(express.json());

app.use(express.urlencoded({ extended: true }));

app.use(xss());

app.use(compression());

app.use(cors());
app.options('*', cors());

app.use('/', routes);
app.use((req, res, next) => {
  next(new ApiError(httpStatus.NOT_FOUND, texts.notFoundError));
});

app.use(errorConverter);
app.use(errorHandler);

const server = http.createServer({
  requestCert: false,
  rejectUnauthorized: false,
}, app);

server.listen(envConfig.port, envConfig.hostname, () => {
  // eslint-disable-next-line no-console
  console.log(`Server started on ${envConfig.hostname}:${envConfig.port}`);
});

module.exports = app;
