import { db } from "../db.js"

export const createProduct = (req,res)=>{
    

    

        const q = "INSERT INTO Products(`title`,`price`,`description`,`availability`,`category_id`) VALUES (?)"
        const values = [
            req.body.title,
            req.body.price,
            req.body.description,
            req.body.availability,
            req.body.category_id,

        ]

        db.query(q, [values], (err, data) => {
            if (err) return res.status(500).json(err);
            return res.status(200).json("product has been created")
        });
       


}

export const listProduct = (req,res)=>{
    const q = "select * from Products where category_id = ?";
    db.query(q,[req.params.id], (err, data) => {
    if (err) return res.status(500).json(err);
    return res.status(409).json(
        {success:true,
        message: "done",
        data
     }
    );
});
}


export const ProductDetail = (req,res)=>{
    const q = "select * from Products where product_id = ?";
    console.log(req.params.id);
    db.query(q,[req.params.id], (err, data) => {
    if (err) return res.status(500).json(err);
    return res.status(409).json(
        {success:true,
        message: "done",
        data
     }
    );
});
}