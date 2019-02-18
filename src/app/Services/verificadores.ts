import { Component } from '@angular/core';
import { ServicioUnicode } from './unicode';


  export class Verificadores {

    public keywords = { 
        keywords: [

            //deben estar en orden alfabético
            "abstract", "assert","begin", "boolean", "break", "byte", "case", "catch", "char", "class",
			"const", "continue", "default", "do", "double", "else","end", "extends", "false", "final", "finally", "float",
			"for", "goto", "if", "implements", "import", "instanceof", "int", "interface", "long", "native", "new",
			"null", "package", "private","program", "protected", "public", "return", "short", "static", "strictfp", "super",
			"switch", "synchronized","then", "this", "throw", "throws", "transient", "true", "try", "var","void", "volatile",
			"while"
               
        ]};
    
    private mensaje: string;

    constructor(){}



    verificaPF(arreglo: string[], i: number) {
		if (arreglo.length == i + 1) {
			this.mensaje = ("Punto flotante error; cadena vacia después del punto");
			return this.mensaje;
		}

		if (ServicioUnicode.esPunto(arreglo[i])) {
			if (ServicioUnicode.verifica09(arreglo[i + 1])) {
				this.verificaPF2(arreglo, i + 1);
				return this.mensaje;
			}
		}

		this.mensaje = ("Punto flotante error");
		return this.mensaje;

	}


	verificarSiEsHexadecimal(arreglo: string[]) {
		if (arreglo.length == 2) {
			this.mensaje = ("Hexadecimal error");
			return this.mensaje;
        }
        console.log('holacrayola');
		for (let i = 2; i < arreglo.length; i++) {
			if (ServicioUnicode.guionBajo(arreglo[i]) || ServicioUnicode.esPunto(arreglo[i])) {
				this.mensaje = ("Hexadecimal error");
				return this.mensaje;
			} else if (!(ServicioUnicode.verificaAF(arreglo[i]) || ServicioUnicode.verifica09(arreglo[i]))) {
				this.mensaje = ("Hexadecimal error");
				return this.mensaje;
			}
		}

		this.mensaje = ("Hexadecimal");
        return this.mensaje;
	}

	indentificadorValido(arreglo: any, i: number) {
		for (let j = i; j < arreglo.length; j++) {
			if (!(ServicioUnicode.verificaAZ(arreglo[j]) || ServicioUnicode.guionBajo(arreglo[j]) || ServicioUnicode.verifica09(arreglo[j]) )) {
				this.mensaje = ("Identificador Inválido");
				return this.mensaje;
			}
		}
		
		this.mensaje = ("Identificador válido");
		return this.mensaje;
    }
    

    verificaPF2(arreglo: string[], i: number) {
		if (i + 1 == arreglo.length) {
			this.mensaje = ("Es un punto flotante");
			return this.mensaje;
		}
		let espf: boolean;
		for(let j = i; j<arreglo.length;j++) {
			espf = false;
			if(ServicioUnicode.verifica09(arreglo[j])) {
				espf = true;
			}
			if(arreglo[j] == 'e'||arreglo[j] == 'E') {
				this.verificaPF3(arreglo, j);
				return this.mensaje;
			}
			if(espf==false) {
				this.mensaje = ("punto flotante error");
				return this.mensaje;
			}
		}
		
		this.mensaje = ("punto flotante Valido");
		return this.mensaje;

	}

	verificaPF3(arreglo: string[], j: number) {
		if(j+1==arreglo.length) {
			this.mensaje = ("punto flotante no válido por el exponente vacío");
			return this.mensaje;
		}
		if(ServicioUnicode.esSigno(arreglo[j+1])) {
			if(j+2==arreglo.length) {
				this.mensaje = ("punto flotante no válido por cadena incompleta");
				return this.mensaje;
			}
			this.verificaPF4(arreglo, j+2);
			return this.mensaje;
		}
		if(ServicioUnicode.verifica09(arreglo[j+1])) {
			this.verificaPF4(arreglo, j+1);
			return this.mensaje;
		}
		this.mensaje = ("punto flotante error");
		return this.mensaje;
		
	}

	verificaPF4(arreglo: string[], j: number) {
		if(j+1==arreglo.length) {
			this.mensaje = ("punto flotante");
			return this.mensaje;
		}
		let espf: boolean;
		for(let i =j; i<arreglo.length;i++) {
			espf=false;
			if(ServicioUnicode.verifica09(arreglo[i])) {
				espf=true;
			}
			if(espf==false) {
				this.mensaje = ("punto flotante error");
				return this.mensaje;
			}
		}
		this.mensaje = ("punto flotante");
		return this.mensaje;
		
	}

	
	verificaReservada(keyword:string) :boolean {
		return (this.binarySearch(this.keywords.keywords, keyword) < 0);
	}

    binarySearch(list, value): number{
        console.log(list);
        console.log(value);

        // initial values for start, middle and end
        let start = 0
        let stop = list.length - 1
        let middle = Math.floor((start + stop) / 2)

        // While the middle is not what we're looking for and the list does not have a single item
        while (list[middle] !== value && start < stop) {
            if (value < list[middle]) {
            stop = middle - 1
            } else {
            start = middle + 1
            }

            // recalculate middle on every iteration
            middle = Math.floor((start + stop) / 2)
        }

        console.log(middle);

        // if the current middle item is what we're looking for return it's index, else return -1
        return (list[middle] !== value) ? -1 : middle
    }



  }