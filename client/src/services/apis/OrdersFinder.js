const OrdersFinder = {};
const URL = "http://localhost:3500/api/v1/orders/"
// const URL = "https://saint-node-server.herokuapp.com/invoices/"

// Find all orders
OrdersFinder.all = async () => {
    const response = await fetch(URL, {
        method: "GET",
        headers: { "Content-Type": "application/json"},
    })
    return await response.json()
}

OrdersFinder.order = async (user_id) => {

    const response = await fetch(`${URL}${user_id}/ordersGet`,
    {
        method: "GET",
        headers: { "Content-Type": "application/json"},
    })

    return await response.json()
}

OrdersFinder.orderCreate = async (user_id,orders) => {
    
    const response = await fetch(`${URL}${user_id}/ordersCreate`,
    {
        method: "POST",
        headers: { "Content-Type": "application/json"},
        body: JSON.stringify(orders)
    })

    return await response.json()
}

OrdersFinder.orderConfirm = async (user_id,order_id) => {
    
    const response = await fetch(`${URL}${user_id}/ordersConfirm`,
    {
        method: "PUT",
        headers: { "Content-Type": "application/json"},
        body: JSON.stringify({user_id, order_id})
    })

    return await response.json()
}


OrdersFinder.delete = async (order_id) => {
    const response = await fetch(`${URL}${order_id}/orderDelete`, {
        method: "DELETE",
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ })
    })
    return await response.json()
}

export default OrdersFinder;