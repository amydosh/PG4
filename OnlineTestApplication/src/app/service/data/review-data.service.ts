import { Router } from '@angular/router';
import { Injectable } from '@angular/core';

@Injectable(
  {
  providedIn: 'root'
}
)
export class ReviewDataService {

  constructor(
    private router: Router
    ) 
    { }

    private data:any;

    setData(data:any){
      this.data = data;
    }

    getData(){
      let temp = this.data;
      this.clearData();
      return temp;
    }

    clearData(){
      this.data = undefined;
    }
}
