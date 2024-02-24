
import { db } from "../db.js"; 


export const addToCart = (req, res) => {
    const { user_id, product_id, quantity } = req.body; 

   
    db.query('INSERT INTO CartItems (user_id, product_id, quantity) VALUES (?, ?, ?)', [user_id, product_id, quantity], (err, results) => {
        if (err) {
            console.error("Error adding item to cart:", err);
            return res.status(500).json({ success: false, error: "Error adding item to cart" });
        }
        return res.status(200).json({ success: true, message: "Item added to cart successfully" });
    });
};


export const listCart = (req, res) => {
    const  user_id  = req.params.id; 
    console.log(user_id);
    
    db.query(`
        SELECT 
            ci.quantity,
            p.title,
            p.price
        FROM 
            CartItems ci
        INNER JOIN 
            Products p ON ci.product_id = p.product_id
        WHERE 
            ci.user_id = ?
    `, [user_id], (err, results) => {
        if (err) {
            console.error("Error listing cart items:", err);
            return res.status(500).json({ success: false, error: "Error listing cart items" });
        }
        return res.status(200).json({ success: true, cartItems: results });
    });
};


export const updateCartProduct = (req, res) => {
    const { user_id, product_id, quantity } = req.body;

    
    db.query('UPDATE CartItems SET quantity = ? WHERE user_id = ? AND product_id = ?', [quantity, user_id, product_id], (err, results) => {
        if (err) {
            console.error("Error updating cart product:", err);
            return res.status(500).json({ success: false, error: "Error updating cart product" });
        }
        if (results.affectedRows === 0) {
            return res.status(404).json({ success: false, error: "Product not found in the cart" });
        }
        return res.status(200).json({ success: true, message: "Cart product updated successfully" });
    });
};


export const removeFromCart = async (req, res) => {
    try {
        const { user_id, cart_item_id } = req.body;

        
        const q = "DELETE FROM CartItems WHERE user_id = ? AND cart_item_id = ?";
        
       
        db.query(q, [user_id, cart_item_id], (err, result) => {
            if (err) {
                return res.status(500).json(err);
            }
            if (result.affectedRows === 0) {
                return res.status(404).json("Item not found in the cart.");
            }
            return res.status(200).json("Item has been removed from the cart.");
        });
    } catch (error) {
        return res.status(500).json(error.message || "Internal Server Error");
    }
};