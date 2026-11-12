import { prisma } from "../config/prisma.js";
import {Prisma} from "../generated/prisma/client.js"
export const createProduct = async (req, res, next) => {
  try {
    const {name, description, price,category, sku,stock} = req.body;
    const product = await prisma.product.create({
      data: {
        name,
        description,
        price: new Prisma.Decimal(price),
        category,
        sku,
        stock
      }
    });
    res.status(201).json({
      success: true,
      data: product
    });
  } catch (error) {
    next(error);
  }
};

export const getproducts = async (req, res, next) => {
  try {
    const products = await prisma.product.findMany(); 
    res.status(200).json({
      success: true,
      data: products
    });
  } catch (error) {
    next(error);
  }
};

export const getProductById = async (req, res, next) => {
  try {
    const {id} = req.params;
    const product = await prisma.product.findUnique({
      where: {
        id: parseInt(id)
      }
    });
    if (!product) {
      return res.status(404).json({
        success: false,
        message: "Product not found"
      });
    }
    res.status(200).json({
      success: true,
      data: product
    });
  } catch (error) {
    next(error);
  }
};
 export const updateProduct = async (req, res, next) => {
  try {
    const {id} = req.params;
    const {name, description, price, category, sku, stock} = req.body;
    const product = await prisma.product.update({
      where: {
        id: parseInt(id)
      },
      data: {
        name,
        description,
        price: new Prisma.Decimal(price),
        category,
        sku,
        stock
      }
    });
    res.status(200).json({
      success: true,
      data: product
    });
  } catch (error) {
    next(error);
  }
};

export const deleteProduct = async (req, res, next) => {
  try {
    const {id} = req.params;
    const product = await prisma.product.delete({
      where: {
        id: parseInt(id)
      }
    });
    res.status(200).json({
      success: true,
      data: product
    });
  } catch (error) {
    next(error);
  }
};

export const searchProducts = async (req, res, next) => {
  try {
    const {query} = req.query;
    const products = await prisma.product.findMany({
      where: {
        OR: [
          {
            name: {
              contains: query
            }
          },
          {
            description: {
              contains: query
            }
          }
        ]
      }
    });
    res.status(200).json({
      success: true,
      data: products
    });
  } catch (error) {
    next(error);
  }
};
