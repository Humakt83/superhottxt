import { Injectable } from 'angular2/core';
import { HOTTXTS } from './texts';

@Injectable()
export class TextService {
    
    private _firstText: string = 'SUPERHOT is the most innovative shooter I`ve played in years!';
    private _endText: string = 'SUPER HOT';
    
    private _currentIndex: number = 0;
    private _usedTexts: number[] = [];
    
    getText() {
        let textToReturn = '';
        if (this._currentIndex === 0) {
            textToReturn = this._firstText;
        } else if(this._currentIndex > HOTTXTS.length {
            textToReturn = this._endText;
        } else {
            textToReturn = this.randomText();
        }
        this._currentIndex++;
        return textToReturn;
    }
    
    private randomText() {
        let randomIndex = Math.floor(Math.random() * HOTTXTS.length);
        if (this._usedTexts.indexOf(randomIndex) < 0) {
            this._usedTexts.push(randomIndex);
            return HOTTXTS[randomIndex];
        } else {
            return this.randomText();
        }
    }
    
}