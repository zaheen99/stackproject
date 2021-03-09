export class cocktailData {
    idDrink: number;
    strDrink: string;
    strCategory: string;
    strAlcoholic: string;
    strGlass: string;
    strIngredient1:string;
}

export class Question{
    tags:any = [];
    is_answered: boolean;
    view_count:number;
    reputation:number;
    protected_date:any;
    answer_count: number;
    score: number;
    last_activity_date: any;
    creation_date: any;
    last_edit_date: any;
    question_id: any;
    content_license: any;
    link: any;
    title: string;
}