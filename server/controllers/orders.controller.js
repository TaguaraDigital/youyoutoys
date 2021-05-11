const dbConnection = require("../database/connections");
const controllerOrders = {};

// Get all Orders
controllerOrders.all = async (req, res) => {
    try {
        const data = dbConnection.query("SELECT od .order_id, o.user_id, name, SUM(amount) AS units, SUM(od.product_price*od.amount) AS totalOrder, order_status FROM orders_details AS od JOIN orders AS o JOIN users AS u WHERE u.user_id = o.user_id AND o.order_id = od.order_id     GROUP BY od.order_id ORDER BY o.order_id", async (err, result) => {
            if (err) {
                res.status(400).json({
                  status: 400,
                  success: false,
                  message: err.sqlMessage
                })
                return;
            }

            res.status(200).json({
                status: 200,
                success: true,
                data: {
                    orders: result,
                },
                message: "ok"
            })
        })
    } catch (error) {
        res.status(500).json({
            status: 500,
            success: false,
            message: "Server Error"
        })
    }
}

// Delete order by Id
controllerOrders.delete = async (req, res) => {
    console.log('estamos eliminado', req.params.id)
    try {
        const data = dbConnection.query("DELETE FROM orders_details WHERE order_id = ?", [req.params.id], async (err, result) => {
            if (err) {
                res.status(400).json({
                  status: 400,
                  success: false,
                  message: err.sqlMessage
                })
                return;
            }

            const data = dbConnection.query("DELETE FROM orders WHERE order_id = ?", [req.params.id], async (err, result) => {
                if (err) {
                    res.status(400).json({
                      status: 400,
                      success: false,
                      message: err.sqlMessage
                    })
                    return;
                }
            })

            res.status(200).json({
                status: 200,
                success: true,
                data: {
                    orders: result,
                },
                message: "ok"
            })
        })
    } catch (error) {
        res.status(500).json({
            status: 500,
            success: false,
            message: "Server Error"
        })
    }
}


module.exports = controllerOrders;