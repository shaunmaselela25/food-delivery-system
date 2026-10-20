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