import { buildRoutePath } from '../utils/buildRoutePath.js';
import { createProducts } from '../services/products/createProducts.service.js';
import { deleteProduct } from '../services/products/deleteProducts.service.js';
import { getOneProduct } from '../services/products/getOneProduct.service.js';
import { getProducts } from '../services/products/getProducts.service.js';

export const productsController = [
    {
        method: 'GET',
        path: '/product/:id',
        buildRoutePath: buildRoutePath('/products/:id'),
        handler: (req,res) => getOneProduct(req, res)
    },
    {
        method: 'GET',
        path: '/products',
        buildRoutePath: buildRoutePath('/products'),
        handler: (req,res) => getProducts(req, res)
    },
    {
        method: 'POST',
        path: '/products',
        buildRoutePath: buildRoutePath('/products'),
        handler: (req,res) => createProducts(req,res)
    },
    {
        method: 'DELETE',
        path: '/product/:id',
        buildRoutePath: buildRoutePath('/products/:id'),
        handler: (req,res) => deleteProduct(req, res)
    },
]