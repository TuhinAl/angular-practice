import { Component, ViewChild } from "@angular/core";
import { Hero } from "../on-change/hero";
import { OnChangeComponent } from "../on-change/on-change.component";

@Component({
    selector:'app-on-change-parent',
    templateUrl:'./on-change-parent.component.html',
    styleUrls:['./on-change-parent.component.css']
})
export class OnChangeParent{
    hero!: Hero;
    power = '';
    title = 'OnChanges';
    
  @ViewChild(OnChangeComponent) childView!: OnChangeComponent;
    constructor(){
    this.reset();
    }


    reset() {
        // new Hero object every time; triggers onChanges
        this.hero = new Hero('Windstorm');
        // setting power only triggers onChanges if this value is different
        this.power = 'sing';
        if (this.childView) {
          this.childView.reset();
        }
      }
}