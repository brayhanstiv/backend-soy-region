import { CreateUserDto } from './../user/dto/create-user.dto';
import {
  Controller,
  Get,
  Post,
  Patch,
  Param,
  Delete,
  Res,
  Body,
  HttpStatus,
  Query,
  NotFoundException,
} from '@nestjs/common';
import { UserService } from './user.service';
import { UpdateUserDto } from './dto/update-user.dto';

@Controller('/user')
export class UserController {
  constructor(private readonly userService: UserService) {}

  @Post()
  async create(@Res() res, @Body() createdUserDto: CreateUserDto) {
    const data = await this.userService.create(createdUserDto);
    return res.status(HttpStatus.CREATED).json({
      statusCode: HttpStatus.CREATED,
      message: 'User Created Successfully',
      payload: data,
    });
  }

  @Get()
  async findAll(
    @Res() res,
    @Query('from') from = 0,
    @Query('limit') limit = 10,
  ) {
    const data = await this.userService.findAll(from, limit);
    const total = await this.userService.total();
    return res.status(HttpStatus.OK).json({
      statusCode: HttpStatus.OK,
      payload: data,
      total: total,
    });
  }

  @Get(':id')
  async findOne(@Res() res, @Param('id') id: string) {
    const data = await this.userService.findOne(id);
    if (!data) {
      throw new NotFoundException('User Not Found');
    }
    return res.status(HttpStatus.OK).json({
      statusCode: HttpStatus.OK,
      payload: data,
    });
  }

  @Patch(':id')
  async update(
    @Res() res,
    @Param('id') id: string,
    @Body() updateUserDto: UpdateUserDto,
  ) {
    const data = await this.userService.update(id, updateUserDto);
    if (!data) {
      throw new NotFoundException('User Not Found');
    }
    return res.status(HttpStatus.OK).json({
      statusCode: HttpStatus.OK,
      message: 'User update Successfully',
      payload: data,
    });
  }

  @Delete(':id')
  async remove(@Res() res, @Param('id') id: string) {
    const data = await this.userService.remove(id);
    if (!data) {
      throw new NotFoundException('User Not Found');
    }
    return res.status(HttpStatus.OK).json({
      statusCode: HttpStatus.OK,
      message: 'User deleted successfully',
      payload: data,
    });
  }
}
