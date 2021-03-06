import { Request, Response } from 'express';
import CreateProductService from '../services/CreateProductService';
import DeleteProductService from '../services/DeleteProductService';
import ListProductService from '../services/ListProductService';
import ShowProductService from '../services/ShowProductService';
import UpdateProductService from '../services/UpdateProductService';

export default class ProductsRepository {
  public async index(request: Request, response: Response): Promise<Response> {
    const listProducts = new ListProductService();

    const products = await listProducts.execute();

    return response.json(products);
  }

  public async show(request: Request, response: Response): Promise<Response> {
    const { id } = request.params;

    const showProduct = new ShowProductService();

    const product = await showProduct.execute({ id });

    return response.json(product);
  }

  public async create(request: Request, response: Response): Promise<Response> {
    const {
      nomeRefeicao,
      descricaoRefeicao,
      calorias,
      valor,
      quantidadeRefeicao,
    } = request.body;

    const createProduct = new CreateProductService();

    const product = await createProduct.execute({
      nomeRefeicao,
      descricaoRefeicao,
      calorias,
      valor,
      quantidadeRefeicao,
    });

    return response.json(product);
  }

  public async update(request: Request, response: Response): Promise<Response> {
    const {
      nomeRefeicao,
      descricaoRefeicao,
      calorias,
      valor,
      quantidadeRefeicao,
    } = request.body;
    const { id } = request.params;

    const updateProduct = new UpdateProductService();

    const product = await updateProduct.execute({
      id,
      nomeRefeicao,
      descricaoRefeicao,
      calorias,
      valor,
      quantidadeRefeicao,
    });

    return response.json(product);
  }

  public async delete(request: Request, response: Response): Promise<Response> {
    const { id } = request.params;

    const deleteProduct = new DeleteProductService();

    await deleteProduct.execute({ id });

    return response.json([]);
  }
}
