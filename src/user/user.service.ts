import { Injectable } from '@nestjs/common';
import { hash, compare } from 'bcrypt';

import { PrismaClientService, Prisma, User } from 'src/prisma';
import { JwtPayload } from '../auth/jwt.interface';

interface RegisterUser {
  email: string;
  firstName: string;
  lastName: string;
  password: string;
}

interface AuthUser {
  email: string;
  password: string;
}

export interface GraphQLContext {
  request: any;
}

@Injectable()
export class UserService {
  private prisma: Prisma;

  constructor(
    prismaService: PrismaClientService,
  ) {
    this.prisma = prismaService.getPrismaClient();
  }

  async createUser(registerUser: RegisterUser): Promise<User> {
    const { email, firstName, lastName, password } = registerUser;

    const passwordDigest = await hash(password, 10);

    return this.prisma.createUser({
      email,
      firstName,
      lastName,
      passwordDigest,
    });
  }

  async getUser(authUser: AuthUser): Promise<User> {
    const { email, password } = authUser;

    const user = await this.prisma.user({
      email,
    });

    const passwordValid = await compare(password, user.passwordDigest);
    if (!passwordValid) {
      throw new Error('Incorrect password');
    }

    return user;
  }

  async getUserFromJwtPayload(payload: JwtPayload): Promise<User> {
    return this.prisma.user({
      id: payload.uid,
    });
  }
}
