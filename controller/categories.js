import { db } from "../db.js"


export const createCategories = async (req, res) => {
    try {
        const q = "SELECT * FROM Categories WHERE name = ?";
        db.query(q, [req.body.name], (err, data) => {
            if (err) {
                return res.status(500).json(err);
            }
            if (data.length) {
                return res.status(400).json("Category already exists!");
            }

            const insertQuery = "INSERT INTO Categories(`name`) VALUES (?)";
            const values = [req.body.name];

            db.query(insertQuery, values, (err, data) => {
                if (err) {
                    return res.status(500).json(err);
                }
                return res.status(201).json("Category has been created");
            });
        });
    } catch (error) {
        return res.status(500).json(error.message || "Internal Server Error");
    }
};


export const listCategories = (req,res)=>{
    const q = "select * from Categories";
    db.query(q, (err, data) => {
    if (err) return res.status(500).json(err);
    return res.status(200).json(
        {success:true,
        message: "done",
        data
     }
    );
        



    });
}