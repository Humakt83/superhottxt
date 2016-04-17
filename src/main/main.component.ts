import { Component } from 'angular2/core';
import { TextComponent } from '../text/text.component';
import { TextService } from '../services/text.service';

@Component({
    selector: 'superhot',
    templateUrl: 'src/main/main.html',
    providers: [ TextService ],
    directives: [ TextComponent ]
})
export class MainComponent {
    
    constructor(private _textService: TextService) {}
    
    addHotText(hotInput : HTMLInputElement) {
        console.log(this._textService.getText());
        hotInput.value = '';
    }
}