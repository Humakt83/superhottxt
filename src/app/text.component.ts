import { Component, Input } from 'angular2/core';

@Component({
    selector: 'supertxt',
    template: '<div class="superHotText">{{superHotText}}</div><br>'
})
export class TextComponent {
    @Input() superHotText: string;
}
