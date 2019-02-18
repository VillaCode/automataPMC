import { Component } from '@angular/core';


  export class ServicioUnicode {

    
    
    static verificaAZ(c: string) {
        if ((c.charCodeAt(0) >= 65 && c.charCodeAt(0) <= 90) || (c.charCodeAt(0) >= 97 && c.charCodeAt(0) <= 122)) {
            return true;
        }
        return false;
    }
    
    static verificaAF(c: string) {
        if ((c.charCodeAt(0) >= 65 && c.charCodeAt(0) <= 70) || (c.charCodeAt(0) >= 97 && c.charCodeAt(0) <= 102)) {
            return true;
        }
        return false;
    }
    
    static verifica09(c: string) {
        if (c.charCodeAt(0) >= 48 && c.charCodeAt(0) <= 57) {
            return true;
        } else {
            return false;
        }
    }
    static verifica19(c: string) {
        if (c.charCodeAt(0) > 48 && c.charCodeAt(0) <= 57) {
            return true;
        } else {
            return false;
        }
    }
    
    static verifica07(c: string) {
        if (c.charCodeAt(0) >= 48 && c.charCodeAt(0) <= 55) {
            return true;
        } else {
            return false;
        }
    }
    
    static verifica89(c: string) {
        if (c.charCodeAt(0) == 56 || c.charCodeAt(0) == 57) {
            return true;
        } else {
            return false;
        }
    }
    
    static guionBajo(c: string) {
        if (c.charCodeAt(0) == 95) {
            return true;
        } else {
            return false;
        }
    }
    
    static esPunto(c: string) {
        if (c.charCodeAt(0) == 46) {
            return true;
        } else {
            return false;
        }
    }
    static esSigno(c: string) {
        if (( c.charCodeAt(0) == 43 || c.charCodeAt(0) == 45)) {
            return true;
        } else {
            return false;
        }
    }

    static charInvalido(c: string) {
        if (c.charCodeAt(0) == 46 || c.charCodeAt(0) == 43 || c.charCodeAt(0) == 45) {
            return false;
        }
        if ((c.charCodeAt(0) >= 0 && c.charCodeAt(0) <= 47) || (c.charCodeAt(0) >= 58 && c.charCodeAt(0) <= 64) || (c.charCodeAt(0) >= 91 && c.charCodeAt(0) <= 94)
                || c.charCodeAt(0) == 96 || c.charCodeAt(0) >= 123) {
            return true;
        } else {
            return false;
        }
    }


}