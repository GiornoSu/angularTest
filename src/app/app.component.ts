import { Component } from '@angular/core';
import { identifierModuleUrl } from '@angular/compiler';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.less']
})
export class AppComponent {
  myList = [{ focus: false, title: "Hit the gym" }, { focus: true, title: "Pay bills" }, { focus: false, title: "Meet George" }, { focus: false, title: "Buy eggs" }, { focus: false, title: "Read a book" }, { focus: false, title: "Organize office" }];
  clickItem = function (item : any) {
    item.focus = !item.focus;
  };
  addItem = function (title : string) {
    this.myList.push({ focus: false, title: title });
  };
  removeItem = function (item : any) {
    this.myList.splice(this.myList.indexOf(item), 1);
  };
}
