import { Component, Input,
  Output, EventEmitter,
   OnInit } from '@angular/core';


@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.css']
})
export class ListComponent implements OnInit {

  @Input() aptList;
  @Output() deleteEvt = new EventEmitter();
  @Output() updateEvt = new EventEmitter();

  constructor() { }

  ngOnInit() {
  }

  handleDelete(theApt: object){
    // console.log(theApt);
    this.deleteEvt.emit(theApt);
  }

  handleUpdate(theApt: object, labelName: string, newValue: string){
    this.updateEvt.emit({
      theApt: theApt,
      labelName: labelName,
      newValue: newValue
    })
  }

}
