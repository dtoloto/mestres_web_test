import { Router } from 'express';
import { getRepository, getCustomRepository } from 'typeorm';
import { validate } from 'class-validator';
import Product from '../../models/Product';
import ProductRepository from '../../repositories/ProductRepository';

const productRouter = Router();

// GET PRODUCTS
productRouter.get('/list', async (request, response) => {
  try {
    const repository = getRepository(Product);

    // find and return all products
    const res = await repository.find();
    return response.json(res);
  } catch (err) {
    return response.status(400).json({
      error: err.message,
    });
  }
});

// CREATE PRODUCT
productRouter.post('/new', async (request, response) => {
  try {
    const repository = getRepository(Product);

    // request body
    const { name, SKU, value, amount } = request.body;
    const product = repository.create({
      name,
      SKU,
      value,
      amount,
    });

    // validate data
    const errors = await validate(product);

    // if not erros
    if (errors.length === 0) {
      const newProduct = await repository.save(product);
      return response.status(201).json(newProduct);
    }

    // if error
    return response.status(400).json(errors.map(e => e.constraints));
  } catch (err) {
    return response.status(400).json({
      error: err.message,
    });
  }
});

// EDIT PRODUCT
productRouter.post('/edit/:uuid', async (request, response) => {
  try {
    const repository = getCustomRepository(ProductRepository);

    // find product by uuid and save in findProduct variable
    const findProduct = await repository.findUuid(request.params.uuid);

    // if product exist
    if (!findProduct) {
      return response.status(400).json('Not product find');
    }

    // data from request body
    const { name, SKU, value, amount } = request.body;
    const product = repository.create({
      name,
      SKU,
      value,
      amount,
    });

    // validate data
    const errors = await validate(product);

    // if not erros
    if (errors.length === 0) {
      // update values
      getRepository(Product).merge(findProduct, {
        name,
        SKU,
        value,
        amount,
      });

      // save changes
      const update = await getRepository(Product).save(findProduct);

      // return ok
      return response.status(200).json(update);
    }

    return response.status(400).json(errors.map(e => e.constraints));
  } catch (err) {
    return response.status(400).json({
      error: err.message,
    });
  }
});

// DEELETE PRODUCT
productRouter.delete('/remove/:uuid', async (request, response) => {
  try {
    const repository = getRepository(Product);
    const productRemove = await repository.findOne({
      where: {
        id: request.params.uuid,
      },
    });

    // if product uuid not exist
    if (!productRemove) {
      return response.status(404).json({
        msg: 'not found',
      });
    }

    // find product and delete
    await repository.remove(productRemove);
    return response.status(200).json({
      msg: 'Product removed with success!',
    });
  } catch (err) {
    return response.status(400).json({
      error: err.message,
    });
  }
});

export default productRouter;
