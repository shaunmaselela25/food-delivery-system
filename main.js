class FoodItem {
    #price;

    constructor(name, price) {
        if (name === "" || typeof name !== "string") {
            throw new Error("Food name must not be empty.");
        }
        if (typeof price !== "number" || price < 0) {
            throw new Error("Price must be a number that is zero or more.");
        }

        this.name = name;
        this.#price = price;
    }

    getPrice() {
        return this.#price;
    }

    setPrice(newPrice) {
        if (typeof newPrice !== "number" || newPrice < 0) {
            throw new Error("Price must be a number that is zero or more.");
        }
        this.#price = newPrice;
    }

    getType() {
        return this.constructor.name;
    }

    calculateDeliveryFee() {
        return 0;
    }
}

class Pizza extends FoodItem {
    constructor(name, price, size) {
        super(name, price);
        this.size = size;
    }

    calculateDeliveryFee() {
        return 20;
    }
}

class Burger extends FoodItem {
    constructor(name, price, pattyType) {
        super(name, price);
        this.pattyType = pattyType;
    }

    calculateDeliveryFee() {
        return 15;
    }
}

class Drink extends FoodItem {
    constructor(name, price, volume) {
        super(name, price);
        this.volume = volume;
    }

    calculateDeliveryFee() {
        return 5;
    }
}

// Additional food type required by the assignment.
class Dessert extends FoodItem {
    constructor(name, price, dessertType) {
        super(name, price);
        this.dessertType = dessertType;
    }

    calculateDeliveryFee() {
        return 8;
    }
}

class Order {
    constructor() {
        this.items = [];
    }

    addItem(foodItem) {
        if (!(foodItem instanceof FoodItem)) {
            throw new Error("Only food items can be added to an order.");
        }
        this.items.push(foodItem);
    }

    showItems() {
        console.log("\nFOOD DELIVERY ORDER");
        console.log("-------------------------------------------------");
        console.log("Item\t\tType\t\tPrice\tDelivery Fee");
        console.log("-------------------------------------------------");

        for (let i = 0; i < this.items.length; i++) {
            const item = this.items[i];
            console.log(
                item.name + "\t" + item.getType() + "\tR" +
                item.getPrice().toFixed(2) + "\tR" +
                item.calculateDeliveryFee().toFixed(2)
            );
        }

        console.log("-------------------------------------------------");
        console.log("Food subtotal: R" + this.getSubtotal().toFixed(2));
        console.log("Delivery total: R" + this.getDeliveryTotal().toFixed(2));
        console.log("FINAL TOTAL: R" + this.getTotal().toFixed(2));
    }

    getSubtotal() {
        let total = 0;
        for (let i = 0; i < this.items.length; i++) {
            total += this.items[i].getPrice();
        }
        return total;
    }

    getDeliveryTotal() {
        let total = 0;
        for (let i = 0; i < this.items.length; i++) {
            total += this.items[i].calculateDeliveryFee();
        }
        return total;
    }

    getTotal() {
        return this.getSubtotal() + this.getDeliveryTotal();
    }
}

// Create food objects.
const pizza = new Pizza("Margherita Pizza", 100, "Large");
const burger = new Burger("Classic Burger", 60, "Beef");
const drink = new Drink("Sparkling Water", 25, "500 ml");
const dessert = new Dessert("Chocolate Cake", 35, "Cake");

// Add them to one order.
const order = new Order();
order.addItem(pizza);
order.addItem(burger);
order.addItem(drink);
order.addItem(dessert);

// Display the order summary.
order.showItems();