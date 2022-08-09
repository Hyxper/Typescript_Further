abstract class Clothing implements testinterface {

    protected ppl: string[] = [];
   
   static stringy: string = "HELLO WORLD";
   
    private _name: string;
       public get name(): string {
           return this._name;
       }
       public set name(value: string) {
           this._name = value;
       }
    private _size: string;
       public get size(): string {
           return this._size;
       }
     
    private _colour: string;
       public get colour(): string {
           return this._colour;
       }
       public set colour(value: string) {
           this._colour = value;
       }
    private _inStock: boolean;
       public get inStock(): boolean {
           return this._inStock;
       }
       public set inStock(value: boolean) {
           this._inStock = value;
       }
    public readonly range: string;
   
   constructor(productName?: string){
       this._size = "n/a";
       this._colour = "n/a";
       this._inStock = false;
       this.range = "Summer";
       this._name = productName ?? "temp";
       this.ppl.push("test1");
   }
   
   static printSomethingBabey(ip: string){
       console.log(ip);
   }
   
   printInfo(this: Clothing){
       console.log(this.name+" "+this.size+" "+this.colour+" "+this.inStock)
   }
   
   printSomethingIDEK(this: Clothing){
       console.log(`DEPARTMENT IS ${this.name}`)
   }
   
   printypoo(){
       this.ppl.forEach(element => {
           console.log(element);
       });
   }
   
   abstract abstractFunc(this: Clothing): void;
   
   
   }
   
   
   class Shirt extends Clothing {
   
       private static instance: Shirt;
   
       private constructor(public sizes: number[], productName: string){
           super(productName);
           sizes.forEach(Number => {
               console.log(Number);
           });
            this.ppl.push("test2");
       }
   
       abstractFunc(){
   
       }
   
       static getInstance(){
           if(this.instance){
               console.log("instance exists");
               return this.instance;
           }
           this.instance = new Shirt([1,2,3,4,5,666],"Timberland long sleeve");
           console.log("creating shirt instance");
           return this.instance;
       }
   
   }
   
   
   interface testinterface {
       printypoo: () => void;
   }
   
   
   const godShirt = Shirt.getInstance();
   console.log(godShirt);
   
   Clothing.printSomethingBabey(Clothing.stringy);