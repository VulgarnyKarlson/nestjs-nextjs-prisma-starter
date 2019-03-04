import { UseGuards, Logger } from '@nestjs/common';
import { Resolver, Query, Mutation, Args, Context } from '@nestjs/graphql';
// import { AuthPayload, RegisterUserInput, AuthUserInput, TokenInput, Test } from 'src/graphql.schema';

import { UserService } from './user.service';
import { AuthService } from '../auth/auth.service';
import { JwtAuthGuard } from '../auth/auth.guard';

interface RegisterUserInput {
  email: string;
  firstName: string;
  lastName: string;
  password: string;
}

interface AuthUserInput {
  email: string;
  password: string;
}

interface AuthPayload {
  token: string;
}

interface TokenInput {
  token: string;
}

interface Test {
  status: string;
}

@Resolver('User')
export class UserResolver {
  private readonly logger = new Logger(UserResolver.name);

  constructor(
    private readonly userService: UserService,
    private readonly authService: AuthService,
  ) {}

  @Mutation('registerUser')
  async register(@Args('user') user: RegisterUserInput): Promise<AuthPayload> {
    const registeredUser = await this.userService.createUser(user);
    const token = this.authService.createToken(registeredUser);
    return {
      token,
    };
  }

  @Mutation('login')
  async login(@Args('user') user: AuthUserInput): Promise<AuthPayload> {
    const loggedInUser = await this.userService.getUser(user);
    const token = this.authService.createToken(loggedInUser);
    return {
      token,
    };
  }

  @UseGuards(JwtAuthGuard)
  @Query('authTest')
  async authTest(@Args('token') token: TokenInput, @Context() context: any): Promise<Test> {
    this.logger.log(token);
    this.logger.log(context);
    return {
      status: 'good',
    };
  }
}
