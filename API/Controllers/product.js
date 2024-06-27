import { Products } from "../Models/Product.js";

// add product
export const addProduct = async (req,res) =>{
    const {title,description,price,category,qty,imgSrc,createdAt} = req.body;
    try {
        let product = await Products.create(
            {title,description,price,category,qty,imgSrc,createdAt}
        );
        res.json({message:"Product added successfully",product, success:true});
    } catch (error) {
        res.json({message:error.message});
    }
};

// get products
export const getProducts = async (req,res) =>{
    let products = await Products.find().sort({createdAt:-1});
    res.json(products);
};

// find product by id
export const getProductById = async (req,res) => {
    const id = req.params.id;
    let product = await Products.findById(id);
    if(!product)
        res.json({message:"Invalid Id", success:false});
    res.json({message:"Your product", product});
};

// update product by id
export const updateProductById = async (req,res) =>{
    const id = req.params.id;
    let product = await Products.findByIdAndUpdate(id,req.body,{new:true});
    if(!product) res.json({message:"Invalid Id", success:false});
    res.json({message:"Product is Updated successfully",product,success:true});
};

// delete product by id
export const deleteProductById = async (req,res) =>{
    const id = req.params.id;
    let product = await Products.findByIdAndDelete(id);
    if(!product) res.json({message:"Invalid Id", success:false});
    res.json({message: "Product deleted successfully", success:true});
};

