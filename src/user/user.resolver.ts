import { Resolver, Mutation, Args } from '@nestjs/graphql';
// import { AuthPayload, RegisterUserInput, AuthUserInput, TokenInput, Test } from 'src/graphql.schema';

import { AuthService } from 'src/auth';
import { UserService } from './user.service';
import { Inject, forwardRef } from '@nestjs/common';

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

@Resolver('User')
export class UserResolver {
  constructor(
    @Inject(forwardRef(() => AuthService))
    private readonly authService: AuthService,
    private readonly userService: UserService,
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
}
