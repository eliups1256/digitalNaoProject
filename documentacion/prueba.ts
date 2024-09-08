let cotizacion: number;
let cobertura = 20;
let prima: number = 123.456;
let poliza: bigint = 9007199254740991n; 


console.log("Hola Afirme Seguros")



enum polizaEstatus {
    EnProceso,
    Terminada,
    Cancelada
}

let estado: any = 10;
estado = 19;      // ID
estado = 'Nuevo Leon';   // texto

let municipio: unknown = 10;
municipio = 19001;
municipio = 'Monterrey';

let contacto: number | String;

let nombre: string = "Afirme Seguros";
contacto = 8114140667;
let mensaje: string = `La poliza  de ${nombre} es ` + poliza + " y se encuentra con estatus " + polizaEstatus.Terminada 
+ " y fue generada en " + municipio + " ," + estado + " " + contacto;


interface Poliza {
    idNumeroPoliza: number;
    nombreAsegurado: string;
    montoPrima: number;
  }
  
interface Inciso {
    numeroInciso: number;
    numeroSerie: number;
  }


  type ManagementEmployee = Poliza & Inciso;
  let newManager: ManagementEmployee = {
    idNumeroPoliza: 12345,
    nombreAsegurado: "Jeronimo Carrillo",
    montoPrima: 34,
    numeroInciso: 1,
    numeroSerie : 123422
  };

  let newManager2: ManagementEmployee = {
    idNumeroPoliza: 12346,
    nombreAsegurado: "Jeronimo Carrillo",
    montoPrima: 34,
    numeroInciso: 2,
    numeroSerie : 123423
  };

  let newManager3: ManagementEmployee = {
    idNumeroPoliza: 12347,
    nombreAsegurado: "Jeronimo Carrillo",
    montoPrima: 34,
    numeroInciso: 3,
    numeroSerie : 123424
  };


  let list: ManagementEmployee[] = [newManager, newManager2, newManager3];

  let listArray: Array<number> = [1, 2, 3];

  let person1: [number, string] = [35, 'Marcia'];

console.log(mensaje + newManager + "rewrwer"+list + listArray.toString)