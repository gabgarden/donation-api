export class User {
  id: string;
  name: string;
  email: string;
  createdAt: Date;
  address: string;
  phoneNumber?: string;

  constructor(
    id: string,
    name: string,
    email: string,
    createdAt: Date,
    address: string,
    phoneNumber?: string
  ) {
    this.id = id;
    this.name = name;
    this.email = email;
    this.createdAt = createdAt;
    this.address = address;
    this.phoneNumber = phoneNumber;
  }
}
