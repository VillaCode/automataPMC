import { Component } from '@angular/core';
import { Verificadores } from './Services/verificadores';
import { ServicioUnicode } from './Services/unicode';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})

export class Automata {

  public comentario: string;
  public mensaje: string;

  constructor(private verificadores: Verificadores, private servicioUnicode: ServicioUnicode){};

	

	automata(string: string) {

    console.log(string);


    //caso vacio
		if (string == '') {
			this.mensaje = ("Cadena recibida es vacía");
			return;
		}

    //Array del string
    var arreglo = string.split('');
    console.log(arreglo);


 ///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////   
		// caracter invalido
		for (let i = 0; i < arreglo.length; i++) {
			if (ServicioUnicode.charInvalido(arreglo[i])) {
				this.mensaje = ("Caracter inválido dentro de la cadena");
				return;
			}
		}

		
///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////   
		// primera letra para ver validez o identificador valido
		if (ServicioUnicode.verificaAZ(arreglo[0])) {
      console.log('es de la a a la z')


			if (this.verificadores.verificaReservada(string)) {

        console.log("no es palabra reservada");
        this.mensaje = this.verificadores.indentificadorValido(arreglo, 1);

			} else {

        this.mensaje = ("No es un identificador válido porque es una palabra reservada");
        
				return;
			}
		
		} else if (ServicioUnicode.guionBajo(arreglo[0])) {

			for (let i = 1; i < arreglo.length; i++) {

				if (ServicioUnicode.verificaAZ(arreglo[i])) {

					this.mensaje = this.verificadores.indentificadorValido(arreglo, i);
					return;

				} else if (!(ServicioUnicode.verifica09(arreglo[i]) || ServicioUnicode.guionBajo(arreglo[i]))) {

					this.mensaje = ("No es un identificador válido por ser guión bajo");
          return;
          
				} else if (ServicioUnicode.esPunto(arreglo[i])||ServicioUnicode.esSigno(arreglo[i])) {

					this.mensaje = ("No es un identificador válido por ser punto o signo");
					return;
				}
      }
      
			this.mensaje = ("No es un identificador válido");
			return;
		}

///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////   
	// Revisa si es octal, hexadecimal o punto flotante
		else if (arreglo[0] == '0') {
			
			if (arreglo.length == 1) {

				this.mensaje = ("número Natural válido");
        return;
        
			}
			//hex
			if (arreglo[1] == 'x' || arreglo[1] == 'X') {

				this.mensaje = this.verificadores.verificarSiEsHexadecimal(arreglo);
        return;
        
			}
			//flot
			for (let i = 1; i < arreglo.length; i++) {

				if (ServicioUnicode.esPunto(arreglo[i])) {

					this.mensaje = this.verificadores.verificaPF(arreglo, i);
          return;
          
				}
      }
      
      //Oct
			let octal:boolean;
			for (let i = 1; i < arreglo.length; i++) {

        octal = false;
        
				if (ServicioUnicode.verifica07(arreglo[i])) {

          octal = true;
          
				}
				if (octal == false) {

					this.mensaje = ("No es un octal válido");
          return;
          
				}
      }
      
			this.mensaje = ("Es un octal válido");
			return;

		}
		
		
		//Natural
		if(ServicioUnicode.verifica19(arreglo[0])) {
      let natural:boolean;
      
			for(let i = 1; i<arreglo.length;i++) {

				natural = false;
				if(ServicioUnicode.verifica09(arreglo[i])) {
					natural=true;
				}
				if(ServicioUnicode.esPunto(arreglo[i])) {
					this.mensaje = this.verificadores.verificaPF(arreglo, i);
					return;
				}
				if(natural==false) {
					this.mensaje = ("número natural inválido");
					return;
				}
				
			}
			this.mensaje = ("número natural válido ");
			return;
    }
    
		if(ServicioUnicode.esPunto(arreglo[0])||ServicioUnicode.esSigno(arreglo[0])) {
			this.mensaje = ("número no reconocido");
			return;
		}
    
    
    //caso error
		this.mensaje = ("Inválido por no pertenecer a ninguna categoría");
		
	}

}
