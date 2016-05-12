import { Component } from '@angular/core';

/*
@Component({
    selector: 'my-app',
    template: `
      <button (click)="onClickMe()">Click me!</button>
      {{clickMessage}}
    `
})
export class AppComponent {
  clickMessage = '';
  onClickMe(){
    this.clickMessage ='You are my hero!';
  }
}
*/


/*
@Component({
    selector: 'my-app',
    template: `
    <input (keyup)="onKey($event)">
    <p>{{values}}</p>
  `
})
export class AppComponent {
    values = '';
    
    // without strong typing
    onKey(event:any) {
      this.values += event.target.value + ' | ';
    }
    
    // with strong typing
    onKey(event: KeyboardEvent) {
        this.values += (<HTMLInputElement>event.target).value + ' | ';
    }
}*/


/*@Component({
    selector: 'my-app',
    template: `
    <input #box (keyup)="onKey(box.value)">
    <p>{{values}}</p>
  `
})
export class AppComponent {
    values = '';
    onKey(value: string) {
        this.values += value + ' | ';
    }
}
*/
/*
@Component({
    selector: 'my-app',
    template: `
    <input #box (keyup)="0">
    <p>{{box.value}}</p>
  `
})
export class AppComponent { }*/



@Component({
    selector: 'my-app',
    template: `
    <input #newHero
      (keyup.enter)="addHero(newHero.value)"
      (blur)="addHero(newHero.value); newHero.value='' ">
    <button (click)=addHero(newHero.value)>Add</button>
    <ul><li *ngFor="let hero of heroes">{{hero}}</li></ul>
  `
})
export class AppComponent {
    heroes = ['Windstorm', 'Bombasto', 'Magneta', 'Tornado'];
    addHero(newHero: string) {
        if (newHero) {
            this.heroes.push(newHero);
        }
    }
}
