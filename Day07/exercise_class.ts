class Product {
    public name: string;
    public stock: number;
    public price: number;

    constructor(
        _name: string,
        _stock: number,
        _price: number
    ) {
        this.name = _name;
        this.stock = _stock;
        this.price = _price;
    }
}

const dbProduct: Product[] = [
    new Product("Apel", 5000, 10),
    new Product("Lemon", 10000, 5)
]

class Transaction {
    public total: number;
    public cart: any[] = [];

    constructor() {
        this.cart = [];
        this.total = 0;
    }

    addToCart(product: Product | null, qty: number = 1) {
        if (!product) return;

        const cartItem = {
            ...product,
            qty,
            subtotal: product.price * qty
        }

        this.cart.push(cartItem);

        // Hitung ulang total
        this.total = this.cart.reduce((acc, val) => acc + val.subtotal, 0);

    }

    show() {
        return "Your total transaction Rp." + this.total.toLocaleString("id");
    }

    checkout() {
        let print = "";

        this.cart.forEach((val, idx) => {
            print += `${idx + 1}. ${val.name}, ${val.price.toLocaleString("id", {
                style: "currency",
                currency: "IDR",
            })}, Qty: ${val.qty}, ${val.subtotal.toLocaleString("id", {
                style: "currency",
                currency: "IDR",
            })}\n`;
        });

        print += `Total payment: ${this.total.toLocaleString("id", {
            style: "currency",
            currency: "IDR",
        })}`;

        // Reset cart
        this.cart = [];
        this.total = 0;

        return print;
    }
}

const transaction: Transaction = new Transaction();
console.log(dbProduct);

transaction.addToCart(dbProduct[0], 3);
transaction.addToCart(dbProduct[1], 2);

console.log(transaction.show());
console.log(transaction.checkout());


// Exercise 1
class StudentB {
    public name: string;
    public email: string;
    public birth: any;
    public score: number;

    constructor(_name: string, _email: string, _birth: string, _score: number) {
        this.name = _name;
        this.email = _email;
        this.birth = _birth;
        this.score = _score;
    }
}

const dbStudent: StudentB[] = [
    new StudentB("Edo", "edo@gmail.com", "1997-04-25", 85),
    new StudentB("Andrew", "and@gmail.com", "1998-11-12", 65),
    new StudentB("Zafran", "zaf@gmail.com", "1992-02-01", 80),
    new StudentB("Budi", "budi@gmail.com", "1996-11-11", 75)
];

function calculateStudent(dbStudent: StudentB[]) {
    const scores = dbStudent.map(value => value.score);
    console.log(scores);
    const highestScore = Math.max(...scores);
    console.log(highestScore);
    const lowestScore = Math.min(...scores);
    console.log(lowestScore);
    const averageScore = scores.reduce((acc, val) => acc + val, 0) / scores.length;
    console.log(averageScore);

    const currentYear = new Date().getFullYear()
    console.log(currentYear);
    const ages = dbStudent.map(value => currentYear - new Date(value.birth).getFullYear());
    console.log(ages);
    const highestAge = Math.max(...ages);
    console.log(highestAge);
    const lowestAge = Math.min(...ages);
    console.log(lowestAge);
    const averageAge = ages.reduce((acc, val) => acc + val, 0) / ages.length;
    console.log(averageAge);

    return {
        score: {
            highest: highestScore,
            lowest: lowestScore,
            average: averageScore
        },
        age: {
            highest: highestAge,
            lowest: lowestAge,
            average: averageAge
        }
    }
}

console.log(calculateStudent(dbStudent));