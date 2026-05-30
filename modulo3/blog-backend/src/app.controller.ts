import { Body, Controller, Delete, Get, Param, Post, Put, Query} from '@nestjs/common';
import { AppService } from './app.service';
import { ProductDto } from './product.dto';
import { Pagination } from 'nestjs-typeorm-paginate';
import { User } from './users/users.entity';

@Controller()
export class AppController {
  usersService: any;
  constructor(private readonly appService: AppService) {}

  @Get("/health")
  getHeath(): any {
    return this.appService.getHeath();
  }

  @Post("/products")
  createProduct(@Body() product: ProductDto): any {
    return this.appService.createProduct(product);
  }

  @Get()
  findAll(
    @Query('page') page = 1,
    @Query('limit') limit = 10,
  ): Promise<Pagination<User>> {
    limit = limit > 100 ? 100 : limit;
    return this.usersService.findAll({ page, limit });
  }

  @Put("/products/:id")
  update(@Param('id') id: string, @Body() updatedProduct: ProductDto): any {
    return this.appService.update(id, updatedProduct);
  }
  

  @Delete(':id')
  deleteById(@Param('id') id: string): ProductDto {
  return this.appService.deleteById(id);
}

@Post("/area-triangulo")
  areaTriangulo(@Body() data: any): any {
    return this.appService.areaTriangulo(data);
  }
  

}