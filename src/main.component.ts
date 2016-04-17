import { Component } from 'angular2/core';
import { TextComponent } from './text.component';
import { TextService } from './text.service';

@Component({
    selector: 'superhot',
    template: `
        <div class="inputArea">
            <label><input #hotInput type="text" (keyup.enter)="addHotText(hotInput)" placeholder="Start typing">Press Enter To Submit</label>
        </div>

        <supertxt *ngFor="#superHot of hotTexts" [superHotText]="superHot"></supertxt>
    `,
    providers: [ TextService ],
    directives: [ TextComponent ]
})
export class MainComponent {
    
    constructor(private _textService: TextService) {}
    
    hotTexts: string[] = [];
    
    addHotText(hotInput : HTMLInputElement) {
        this.hotTexts.push(this._textService.getText());
        hotInput.value = '';
    }
}