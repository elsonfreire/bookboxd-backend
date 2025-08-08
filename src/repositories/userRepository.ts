type User = {
  id: number;
  username: string;
  email: string;
  password: string;
};

class UserRepository {
  private users: User[] = [
    { id: 1, username: "Elson",  email: "elsonfreirefilho@gmail.com", password: "1234" },
    { id: 2, username: "Arthur", email: "arthurrego@gmail.com", password: "1234" },
    { id: 3, username: "Luigi",  email: "luigipeixoto@gmail.com", password: "1234" }
  ];

  findAll(): User[] {
    return [...this.users];
  }

  findById(id: number): User | undefined {
    return this.users.find(u => u.id === id);
  }

  create(data: Omit<User, "id">): User {
    const newUser: User = {
      id: this.users.length + 1,
      ...data
    };
    this.users.push(newUser);
    return newUser;
  }
}

export default new UserRepository();