import { Injectable, Inject, forwardRef } from '@nestjs/common';
import { JwtService } from '@nestjs/jwt';
import { JwtPayload } from './jwt.interface';
import { User } from 'src/prisma';
import { UserService } from '../user';

@Injectable()
export class AuthService {
  constructor(
    @Inject(forwardRef(() => UserService))
    private readonly userService: UserService,
    private readonly jwtService: JwtService,
  ) {}

  createToken(user: User): string {
    const payload: JwtPayload = { uid: user.id };
    const accessToken = this.jwtService.sign(payload);
    return accessToken;
  }

  async validateUser(payload: JwtPayload): Promise<User> {
    const user = await this.userService.getUserFromJwtPayload(payload);
    return user;
  }
}
