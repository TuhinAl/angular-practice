import { Component } from "@angular/core";

@Component({
    selector:'apps',
    templateUrl:'./apps.component.html',
    styleUrls:['./apps.component.css']
})
export class AppsComponent {
    books = ["Michael Crichton: Prey"]
    constructor() {
        setInterval(()=> {
        this.books = this.books.concat(["New Book: " + Date.now()])
        }, 1000)
        }
   }