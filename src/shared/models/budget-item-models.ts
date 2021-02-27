export class BudgetItem{
    public description: string;
    public amount: number;

    constructor(description: string, amount: number){
        this.description = description;
        this.amount = amount;
    }
}