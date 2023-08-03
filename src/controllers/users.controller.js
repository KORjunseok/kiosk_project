import UsersService from '../services/users.service.js';

class UsersController {
  usersService = new UsersService();

 // 회원가입 기능
 signup = async (req, res, next) => {
  try {
    const { nickname, password} = req.body;
    const signup = await this.usersService.createUser(
      nickname,
      password
    );
    console.log('Look here:', signup);
    res.status(201).json('회원가입에 성공하였습니다.');
  } catch (error) {
    console.error('Signup error:', error);
    res.status(400).json({ errorMessage: '중복된 닉네임입니다.' });
  } 
};

// 로그인
loginUser = async (req, res) => {
  try {
    const { nickname, password } = req.body;
    const token = await this.usersService.loginUser(nickname, password);
    await res.cookie('authorization', `Bearer ${token}`); // 토큰 수정

    return res.status(200).json({ message: '로그인이 완료되었습니다.' });
  } catch (error) {
    console.error('Login Error:', error);
    res.status(401).json({ message: '로그인111이 실패하였습니다.' });
  }
};
}
export default UsersController;
