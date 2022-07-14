import { Pipe, PipeTransform } from '@angular/core';
import {getLocaleEraNames} from "@angular/common";

@Pipe({
  name: 'numberCharacter'
})
export class NumberCharacterPipe implements PipeTransform {
   valuesCharacters= {
     'A': '4',
     'E':'3',
     'I':'1',
     'O':'0',
     'U': '7',
     'a':'4',
     'e':'3',
     'i':'1',
     'o':'0',
     'u':'7'

   }
  transform(value: string ): unknown {

   // @ts-ignore
    let responseConvert=value.split('').reduce((response:string,letter:string) => {
     // let  response: [];
     for(let property in this.valuesCharacters) {
       if(letter == property){
        // @ts-ignore
         letter= this.valuesCharacters[property]
       }
     }
    return response+=letter
   })

    return responseConvert


  }


}
