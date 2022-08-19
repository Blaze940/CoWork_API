import {Request, Response} from "express";
import Product from "../models/Product";

const productService = {
    getProducts: async (res: Response) => {
        try {
            const products = await Product.find();
            return res.status(200).json(products);
        } catch (error) {
            return res.status(500).json(error);
        }
    },
    getProduct: async (req: Request, res: Response) => {
        try {
            const product = await Product.findById(req.params.id);
            if (!product) {
                return res.status(404).json({ message: "Product not found" });
            }
            return res.status(200).json(product);
        } catch (error) {
            return res.status(500).json(error);
        }
    },
    createProduct: async (req: Request, res: Response) => {
        try {
            const product = await Product.create(req.body);
            return res.status(201).json(product);
        } catch (error) {
            return res.status(500).json(error);
        }
    },
    updateProduct: async (req: Request, res: Response) => {
        try {
            const product = await Product.findByIdAndUpdate(req.params.id, req.body, {
                new: true,
            });
            return res.status(200).json(product);
        } catch (error) {
            return res.status(500).json(error);
        }
    },
    deleteProduct: async (req: Request, res: Response) => {
        try {
            await Product.findByIdAndDelete(req.params.id);
            return res.status(200).json({ message: "Product with ID : "+ req.params.id + " has been deleted" });
        } catch (error) {
            return res.status(500).json(error);
        }
    }
};

export default productService;