import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { httpFactory } from '@angular/http/src/http_module';

@Component({
  selector: 'app-test',
  templateUrl: './test.component.html',
  styleUrls: ['./test.component.scss']
})
export class TestComponent implements OnInit {

  constructor(private http: HttpClient) { }

  responceListings: any;
  urlListingDelivery: any = 'https://portfolio-rails-api-only.herokuapp.com/v1/sliders';

  ngOnInit() {
    this.listingDeliveryMethod();
  }
  
  listingDeliveryMethod(){
    this.http.get(this.urlListingDelivery).subscribe(res=>{
      this.responceListings = res;
      console.log(this.responceListings);
    });
  }

}
