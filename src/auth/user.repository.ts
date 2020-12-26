import { AuthCredentialsDto } from './dto/auth-credentials.dto';
import { EntityRepository, Repository } from "typeorm";
import { User } from './user.entity';
import * as bcrypt from 'bcrypt';
import { ConflictException, InternalServerErrorException } from '@nestjs/common';

@EntityRepository(User)
export class UserRepository extends Repository<User> {
  async signUp(authCredentials: AuthCredentialsDto): Promise<void> {
    const {username, password} = authCredentials;
    const user = new User();
    user.username = username;
    user.salt = await bcrypt.genSalt()
    user.password = await this.hashPassword(password, user.salt);
    try {
      await user.save()
    }
    catch(error) {
      if(error.code === '23505') {//duplicate username
        throw new ConflictException('User name already exists')
      }else {
        throw new InternalServerErrorException();
      }
    }
  }
   
  async validateUserPassword(authCredentials: AuthCredentialsDto): Promise<string> {
    const {username, password} = authCredentials;
    
    const user = await this.findOne({username})
    console.log(user);
    if(user && await user.validatePassword(password)) {
      return user.username
    } else {
      return null
    }
      
  }
  private async hashPassword(password: string, salt: string): Promise<string> {
    return bcrypt.hash(password, salt)
  }
}