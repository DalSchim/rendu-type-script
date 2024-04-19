var Category = /** @class */ (function () {
    function Category(title) {
        this.title = title;
        this.id = Date.now();
    }
    Object.defineProperty(Category.prototype, "idCategory", {
        get: function () {
            return this.id;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(Category.prototype, "titleCategory", {
        get: function () {
            return this.title;
        },
        set: function (title) {
            this.title = title;
        },
        enumerable: false,
        configurable: true
    });
    Category.prototype.createCategory = function () {
        throw new Error("Method not implemented.");
    };
    Category.prototype.deleteCategory = function () {
        throw new Error("Method not implemented.");
    };
    Category.prototype.modifyCategory = function () {
        throw new Error("Method not implemented.");
    };
    return Category;
}());
export default Category;
