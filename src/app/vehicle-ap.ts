export class VehicleAp {
      //VALUES ('$inputData->ClientName', '$inputData->VehicleDesc', '$inputData->TypeMaint', '$inputData->DateAp', '$inputData->TimeAp')";


    clientName !:string;
    vehicledesc !: string;
    typemaint !: string;
    dateap !: string;
    timeap !: string;

    constructor(  clientName: string, vehicledesc: string, typemaint: string, dateap : string, timeap : string ) {
        this.vehicledesc = vehicledesc;
        this.clientName = clientName;
        this.typemaint = typemaint;
        this.dateap = dateap;
        this.timeap = timeap;

      }
      method(): string {
        // Method logic
        return '';
      }

}
