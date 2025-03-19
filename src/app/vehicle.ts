
export class Vehicle {
    
    model !:string;
    year !: string;
    make !: string;

    constructor(  model: string, year: string, make: string) {
        this.year = year;
        this.model = model;
        this.make = make;
      }
    
      method(): string {
        // Method logic
        return '';
      }


}
