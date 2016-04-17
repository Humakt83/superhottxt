import { Component, Input } from 'angular2/core';

@Component({
    selector: 'supertxt',
    template: '<div class="superhottext">{{superHotText}}</div>'
})
export class TextComponent {
    @Input() superHotText: string;
}
