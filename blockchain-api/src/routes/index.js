const express = require('express');
const blocksRoute = require('./block.route');

const router = express.Router();

const routes = [
  {
    path: '/blocks',
    route: blocksRoute,
  },
];

routes.forEach((route) => {
  router.use(route.path, route.route);
});

module.exports = router;
