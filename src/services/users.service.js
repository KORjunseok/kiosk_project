import UsersRepository from '../repositories/users.repository.js';
import bcrypt from 'bcrypt';
import jwt from 'jsonwebtoken';

class UsersService {
  usersRepository = new UsersRepository();

  // 회원가입
  createUser = async (nickname, password) => {
    // bcrypt 패스워드 설정
    const hashedPassword = await bcrypt.hash(password, 10);
    const user = await this.usersRepository.create({
      nickname,
      password: hashedPassword,
    });
    return user;
  };

  // 로그인
  loginUser = async (nickname, password) => {
    const user = await this.usersRepository.findByEmail(nickname);
    const passwordsMatch = await bcrypt.compare(password, user.password);
    if (!nickname || !passwordsMatch) {
      throw new Error('로그인에 실패하였습니다.');
    }
    const token = jwt.sign(
      {
        usersId: user.usersId,
      },
      process.env.JWT_SECRET,
      {
        expiresIn: '1h',
      },
    );
    return token;
  };
}

export default UsersService;
