const router = require("express").Router();
const controllerOrders = require('../controllers/orders.controller');
const authorization = require("../middleware/authorization")

// Get all Orders
router.get("/", controllerOrders.all)

// Delete order byId
router.delete("/:id/orderDelete", controllerOrders.delete)

module.exports = router;