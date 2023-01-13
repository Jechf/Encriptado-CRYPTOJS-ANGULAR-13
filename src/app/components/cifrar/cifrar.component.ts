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
  objenc: any;
  textoDesencriptado: string | undefined;
  textoEncriptado: string | undefined;
  hash: any;
  hash2: string | undefined;
  iv = CryptoJS.lib.WordArray.create(undefined,16);
  enctex2: any;
  constructor() { }

  convertirTexto(conversion: string){
    if(conversion === 'encriptar'){

      // A11103402525120190822HB01
      // 584241513063
      //resultado esperado: LIajK1Slvz878y13gQOoA==
      
      this.hash = CryptoJS.SHA256(this.encPass.trim());
      this.hash2 = this.hash.toString(CrytoJS.enc.Base64); //resulta igual al ejemplo de C#
      
      this.objenc = CrytoJS.AES.encrypt(this.enctexto.trim(), this.hash, {
        iv: this.iv,
        mode: CryptoJS.mode.CBC,
        padding: CryptoJS.pad.Pkcs7
      })

      this.textoEncriptado = this.objenc.toString((CryptoJS.enc.Utf8))


    }else{
      this.textoDesencriptado = CrytoJS.AES.decrypt(this.destexto.trim(), this.desPass.trim()).toString(CrytoJS.enc.Utf8);
    }
  }

  ngOnInit(): void {
    this.convertirTexto;
  }

}
