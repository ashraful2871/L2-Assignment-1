{
  //
  function formatString(input: string, toUpper?: boolean): string {
    if (toUpper === false) {
      return input.toLowerCase();
    } else {
      return input.toUpperCase();
    }
  }

  function filterByRating(
    items: { title: string; rating: number }[]
  ): { title: string; rating: number }[] {
    return items.filter((book) => book.rating >= 4);
  }

  const books = [
    { title: "Book A", rating: 4.5 },
    { title: "Book B", rating: 3.2 },
    { title: "Book C", rating: 5.0 },
    { title: "Book D", rating: 8.0 },
    { title: "Book E", rating: 9.0 },
  ];

  function concatenateArrays<T>(...arrays: T[][]): T[] {
    let result: T[] = [];
    for (const array of arrays) {
      result.push(...array);
    }
    return result;
  }

  class Vehicle {
    private make: string;
    private year: number;
    constructor(make: string, year: number) {
      this.make = make;
      this.year = year;
    }
    public getInfo(): string {
      return `Make: ${this.make}, Year: ${this.year} `;
    }
  }

  class Car extends Vehicle {
    private model: string;

    constructor(make: string, year: number, model: string) {
      super(make, year);
      this.model = model;
    }
    public getModel(): string {
      return `Model: ${this.model}`;
    }
  }

  function processValue(value: string | number): number {
    if (typeof value === "string") {
      return value.length;
    } else {
      const multiNumber = value * 2;
      return multiNumber;
    }
  }

  interface Product {
    name: string;
    price: number;
  }

  function getMostExpensiveProduct(products: Product[]): Product | null {
    if (products.length === 0) {
      return null;
    }

    let highestPrise = products[0];

    for (const product of products) {
      if (product.price > highestPrise.price) {
        highestPrise = product;
      }
    }
    return highestPrise;
  }

  enum Day {
    Monday,
    Tuesday,
    Wednesday,
    Thursday,
    Friday,
    Saturday,
    Sunday,
  }

  function getDayType(day: Day): string {
    if (day === Day.Saturday || day === Day.Sunday) {
      return "Weekend";
    } else {
      return "Weekday";
    }
  }

  async function squareAsync(n: number): Promise<number> {
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        if (n < 0) {
          reject("Error: Negative number not allowed");
        } else {
          resolve(n * n);
        }
      }, 1000);
    });
  }

  //
}
