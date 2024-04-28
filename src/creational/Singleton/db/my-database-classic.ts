import { User } from "../interfaces/user";

export class MyDatabaseClassic {
  //Private instance attribute
  private static instance: MyDatabaseClassic | null = null;
  //Any other data required
  private users: User[] = [];

  //The constructor is private to prevent new instances
  private constructor() {}

  //There is a getter method to get the instance
  static getInstance() {
    if (MyDatabaseClassic.instance === null) {
      MyDatabaseClassic.instance = new MyDatabaseClassic();
    }
    return MyDatabaseClassic.instance;
  }

  //Any other method required
  public add(user: User): void {
    this.users.push(user);
  }

  public remove(index: number): void {
    this.users.splice(index, 1);
  }

  public show(): void {
    for (const user of this.users) {
      console.log(user);
    }
  }
}

//Test
const myDatabaseClassic2 = MyDatabaseClassic.getInstance();
myDatabaseClassic2.add({ name: "João", age: 35 });
myDatabaseClassic2.add({ name: "Pedro", age: 73 });
myDatabaseClassic2.add({ name: "Tiago", age: 14 });
myDatabaseClassic2.remove(1);
myDatabaseClassic2.show();
