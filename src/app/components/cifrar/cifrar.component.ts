import { Component, OnInit } from '@angular/core';
import * as CrytoJS from 'crypto-js';

@Component({
  selector: 'app-cifrar',
  templateUrl: './cifrar.component.html',
  styleUrls: ['./cifrar.component.css']
})
export class CifrarComponent implements OnInit {

  enctexto!: string;
  destexto!: string;
  encPass!: string;
  desPass!: string;
  textoEncriptado: string | undefined;
  textoDesencriptado: string | undefined;
  hash: any;
  hash2: string | undefined;

  constructor() { }

  convertirTexto(conversion: string){
    if(conversion === 'encriptar'){

      this.hash = CryptoJS.SHA256(this.encPass.trim());
      this.hash2 = this.hash.toString(CrytoJS.enc.Base64)
      this.textoEncriptado = CrytoJS.AES.encrypt(this.enctexto.trim(), this.encPass.trim()).toString()
    }else{
      this.textoDesencriptado = CrytoJS.AES.decrypt(this.destexto.trim(), this.desPass.trim()).toString(CrytoJS.enc.Utf8);
    }
  }

  ngOnInit(): void {
    this.convertirTexto;
  }

}
