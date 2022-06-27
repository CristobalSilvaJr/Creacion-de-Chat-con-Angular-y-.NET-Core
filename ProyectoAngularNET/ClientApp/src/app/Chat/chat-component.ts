import { Component } from '@angular/core';

@Component({
    selector: 'chat-app',
    templateUrl: './chat-component.html'
})
export class ChatComponent {
    //Atributo
    public chatMessages: string[] = ["Hola mundo","Cristobal","Mauricio","nuevo elemento"];

}