import category from "./Category";
interface ICategory {
    title:string;
    createCategory():void;
    deleteCategory():void;
    modifyCategory():void;
    idCategory:number;
    titleCategory:string;
    titleCategory(title:string):void;


}

export default ICategory;