export class VehicleAp {
      //VALUES ('$inputData->ClientName', '$inputData->VehicleDesc', '$inputData->TypeMaint', '$inputData->DateAp', '$inputData->TimeAp')";


    clientname !:string;
    vehicledesc !: string;
    typemaint !: string;
    dateap !: string;
    timeap !: string;

    constructor(  clientname: string, vehicledesc: string, typemaint: string, dateap : string, timeap : string ) {
        this.vehicledesc = vehicledesc;
        this.clientname = clientname;
        this.typemaint = typemaint;
        this.dateap = dateap;
        this.timeap = timeap;

      }
      method(): string {
        // Method logic
        return '';
      }

}
