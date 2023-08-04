import Users from '../db/models/users.js';

class UsersRepository {
  async create(users) {
    return Users.create(users);
  }

  async findByEmail(nickname) {
    return Users.findOne({ where: { nickname } });
  }
}

export default UsersRepository;
