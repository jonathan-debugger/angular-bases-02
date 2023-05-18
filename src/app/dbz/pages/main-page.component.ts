import { Component, Input } from '@angular/core';
import { Character } from '../interfaces/character.interface';

@Component({
    selector: 'app-dbz-main-page',
    templateUrl: './main-page.component.html'
})
export class MainPageComponent {
     
    public characters: Character[] = [
        {
            name: 'krillin',
            power: 1000
        },{
            name: 'Goku',
            power: 9500
        },{
            name: 'Vegeta',
            power: 7500
        }
        
    ];

    characterHeredado(character: Character) : void  {     
        this.characters.push(character);
    }
    /*Recibimos el event emiter que le pasamos desde el list.component*/
    onDeleteCharacter(index: number ):void    {
        this.characters.splice(index,1);
    }
}