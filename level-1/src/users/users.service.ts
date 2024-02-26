import {
  HttpException,
  HttpStatus,
  Injectable,
  NotFoundException,
} from '@nestjs/common';
import { IUser } from './entity/user.entity';
import { UpdateUserDto } from './dto/update-user.dto';
import { CreateUserDto } from './dto/create-user.dto';
import { CreateBulkUsersDto } from './dto/create-bulk-users.dto';

@Injectable()
export class UsersService {
  private id = 1;
  private users: IUser[] = [
    {
      id: 1,
      nama: 'Teguh Tri Nugroho',
      email: 'test@email.com',
      umur: 29,
      tanggal_lahir: '1995-06-14',
      role: 'admin',
    },
  ];

  findALl() {
    return this.users;
  }

  findOne(id: string) {
    const user = this.users.find((user) => user.id === +id);
    if (!user) {
      throw new NotFoundException(`User #${id} is not found`);
    }
    return user;
  }

  create(createUserDto: CreateUserDto) {
    const isFound = this.users.find(
      (user) => user.email === createUserDto.email,
    );
    if (isFound) {
      throw new HttpException('Email is already exist', HttpStatus.CONFLICT);
    }
    ++this.id;
    this.users.push({ id: this.id, ...createUserDto });
    return 'Data Successfully Created';
  }

  createBulk(createUserDto: CreateBulkUsersDto) {
    let dataLength = createUserDto.data.length;
    for (let index = 0; index < createUserDto.data.length; index++) {
      const isFound = this.users.find(
        (user) => user.email === createUserDto.data[index].email,
      );
      if (isFound) {
        --dataLength;
      } else {
        ++this.id;
        this.users.push({ id: this.id, ...createUserDto.data[index] });
      }
    }
    return dataLength + ' Data have been successfully created';
  }

  update(id: string, updateUserDto: UpdateUserDto) {
    const existingUser = this.findOne(id);
    const emailExist = this.users.find(
      (user) => user.email === updateUserDto?.email,
    );
    if (existingUser && emailExist) {
      throw new HttpException('Email is already exist', HttpStatus.CONFLICT);
    }
    if (existingUser) {
      const index = this.users.findIndex((user) => user.id === +id);
      this.users[index] = { ...this.users[index], ...updateUserDto };
      return 'Data #' + id + ' updated successfully';
    }
  }

  remove(id: string) {
    this.findOne(id);
    const userIndex = this.users.findIndex((user) => user.id === +id);
    if (userIndex >= 0) {
      this.users.splice(userIndex, 1);
    }
    return `Data #${id} deleted`;
  }
}
