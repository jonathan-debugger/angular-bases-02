import { Component, EventEmitter, Output } from '@angular/core';
import { Character } from '../../interfaces/character.interface';

@Component({
  selector: 'dbz-add-character',
  templateUrl: './add-character.component.html',
  styleUrls: ['./add-character.component.css']
})
export class AddCharacterComponent {

  //Event emiter nos permite emitir nuestro character interface
  @Output() // generico Character para el tipo de dato 
  public onNewCharacter: EventEmitter<Character> = new EventEmitter();

  
  public character:  Character={
    name:'',
    power: 0
  };

  emitCharacter(): void{
    // debugger;

    if(this.character.name.length === 0 ) return;

      this.onNewCharacter.emit(this.character);

      this.character = {name: '', power:0};
      
  }

}
