class FoodItem {
    #price;

    constructor(foodName, foodPrice) {
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