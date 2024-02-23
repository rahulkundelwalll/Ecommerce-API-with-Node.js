import { db } from '../db.js';

export const getOrderDetails = async (req, res) => {
    try {
        const orderId = req.params.orderId;

        const query = 'SELECT * FROM Orders WHERE order_id = ?';
        db.query(query, [orderId], (err, result) => {
            if (err) {
                return res.status(500).json({ error: err.message });
            }
            if (result.length === 0) {
                return res.status(404).json({ message: 'Order not found' });
            }
            return res.status(200).json({ order: result[0] });
        });
    } catch (error) {
        return res.status(500).json({ error: error.message || 'Internal Server Error' });
    }
};

export const placeOrder = async (req, res) => {
    try {
        const { user_id, total_amount, products } = req.body;

        const insertOrderQuery = 'INSERT INTO Orders (user_id, total_amount) VALUES (?, ?)';
        db.query(insertOrderQuery, [user_id, total_amount], (err, result) => {
            if (err) {
                return res.status(500).json({ error: err.message });
            }
            const orderId = result.insertId;

            const orderItemsQuery = 'INSERT INTO OrderItems (order_id, product_id, quantity) VALUES ?';
            const values = products.map(product => [orderId, product.product_id, product.quantity]);
            db.query(orderItemsQuery, [values], (err) => {
                if (err) {
                    return res.status(500).json({ error: err.message });
                }
                return res.status(201).json({ message: 'Order placed successfully', orderId });
            });
        });
    } catch (error) {
        return res.status(500).json({ error: error.message || 'Internal Server Error' });
    }
};

export const getOrderHistory = async (req, res) => {
    try {
        const userId = req.body.user_id;

        const query = 'SELECT * FROM Orders WHERE user_id = ?';
        db.query(query, [userId], (err, result) => {
            if (err) {
                return res.status(500).json({ error: err.message });
            }
            return res.status(200).json({ orders: result });
        });
    } catch (error) {
        return res.status(500).json({ error: error.message || 'Internal Server Error' });
    }
};
