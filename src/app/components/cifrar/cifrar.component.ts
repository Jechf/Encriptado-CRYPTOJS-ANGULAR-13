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
  hash2!: string;
  iv = CryptoJS.lib.WordArray.create(undefined,16);
  enctex2: any;
  constructor() { }

  convertirTexto(conversion: any){
    if(conversion === 'encriptar'){

      // 584241513063
      // A11103402525120190822HB01
      //resultado esperado: LIajK1Slvz878y13gQOoA== 
      this.hash = CrytoJS.SHA256(this.encPass);
      this.objenc = CrytoJS.AES.encrypt(JSON.stringify(this.enctexto.trim()), this.hash, {
        iv: this.iv,
        mode: CryptoJS.mode.CBC,
        padding: CryptoJS.pad.Pkcs7
      })

      this.textoEncriptado = this.objenc.toString();


    }else{
      this.textoDesencriptado = CrytoJS.AES.decrypt(this.destexto.trim(), this.desPass.trim()).toString(CrytoJS.enc.Utf8);
    }
  }

  ngOnInit(): void {
    this.convertirTexto;
  }

}
