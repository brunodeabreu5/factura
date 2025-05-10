import { Controller } from '@nestjs/common';

@Controller('auth')
export class AuthController {
  @Post('SignUp')
  async Signup() { }

}
