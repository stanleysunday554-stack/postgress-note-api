import {Router} from "express";
import {createProduct, getProductById,getproducts,updateProduct,deleteProduct,searchProducts} from "../controllers/productController.js";
    const router = Router();

    router.get("/", getproducts);
    router.post("/", createProduct);
    router.get("/:id", getProductById);
    router.put("/:id", updateProduct);
    router.delete("/:id", deleteProduct);
    router.get("/search", searchProducts);

export default router;  