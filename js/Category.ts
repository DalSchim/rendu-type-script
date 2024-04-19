import ICategory from "./ICategory";

class Category implements ICategory{
    private id:number;
    constructor(private title:string) {
        this.id = Date.now();
    }
    get idCategory():number {
        return this.id;
    }
    get titleCategory():string {
        return this.title;
    }
    set titleCategory(title:string) {
        this.title = title;
    }
    createCategory():void {
        throw new Error("Method not implemented.");
    }
    deleteCategory():void {
        throw new Error("Method not implemented.");
    }
    modifyCategory():void {
        throw new Error("Method not implemented.");
    }

}

export default Category;