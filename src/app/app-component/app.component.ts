import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { library } from  '@fortawesome/fontawesome-svg-core';
import { faTimes, faPlus } from '@fortawesome/free-solid-svg-icons';
import { without } from 'lodash';

library.add(faTimes, faPlus);

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html'
})
export class AppComponent implements OnInit {
  title = 'WOLA angular-interface';
  theList: object[];
  modifiedList: object[];

  deleteApt(theApt: object){
    this.theList = without(this.theList, theApt);
    this.modifiedList = without(this.theList, theApt);
  }

  addApt(theApt: object){
    this.theList.unshift(theApt);
    this.modifiedList.unshift(theApt);
  }

  searchApt(theQuery: string){
    this.modifiedList = this.theList.filter(eachItem => {
      return(
        eachItem['petName'].toLowerCase().includes(theQuery.toLowerCase()) ||
        eachItem['ownerName'].toLowerCase().includes(theQuery.toLowerCase()) ||
        eachItem['aptNotes'].toLowerCase().includes(theQuery.toLowerCase())
      )
    })
  }

  constructor(private http: HttpClient){}

  ngOnInit(){
    this.http.get<Object[]>('../assets/data.json').subscribe(data => {
      // console.log(data);
      this.theList = data;
      this.modifiedList = data;
    });
  }
}
