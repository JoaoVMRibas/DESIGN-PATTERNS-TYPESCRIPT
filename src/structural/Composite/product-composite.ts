//Component
export abstract class ProductComponent {
  abstract getPrice(): number;
  add(product: ProductComponent): void {}
  remove(product: ProductComponent): void {}
}

//Leaf
export class LeafProduct extends ProductComponent {
  constructor(
    public name: string,
    public price: number,
  ) {
    super();
  }

  getPrice(): number {
    return this.price;
  }
}

//Composite
export class CompositeProduct extends ProductComponent {
  private children: ProductComponent[] = [];

  getPrice(): number {
    return this.children.reduce((sum, child) => sum + child.getPrice(), 0);
  }

  add(...products: ProductComponent[]): void {
    products.forEach((product) => this.children.push(product));
  }

  remove(product: ProductComponent): void {
    const productIndex = this.children.indexOf(product);
    if (productIndex !== -1) this.children.splice(productIndex, 1);
  }
}

//Client
const tshirt = new LeafProduct("Camisa", 40);
const smartphone = new LeafProduct("Celular", 1000);
const pen = new LeafProduct("Caneta", 1);
const productBox = new CompositeProduct();
productBox.add(tshirt, smartphone, pen);
console.log(productBox);
console.log(productBox.getPrice());
