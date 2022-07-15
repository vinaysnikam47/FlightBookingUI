import { Component, OnInit, EventEmitter, Output } from '@angular/core';
import { ViewDetailsService } from '../view-details/view-details.service';
import { Flight } from '../shared/flight';

@Component({
  selector: 'app-view-flights',
  templateUrl: './view-flights.component.html',
  styleUrls: ['./view-flights.component.css']
})
export class ViewFlightsComponent implements OnInit {

  flightDetails:Flight[] = [];
  imgUrl:string[] = ["./assets/delta.jpg", "./assets/jet.jpg", "./assets/united.jpg"];
  errorMessage:string;
  
  @Output()
  flightToEmit= new EventEmitter();
  

  constructor(private viewDetailsService:ViewDetailsService) { }

  ngOnInit(): void {
    this.getAllFlights();
  }

  sendFlightData(flight){
    this.flightToEmit.emit(flight);
  }

  getAllFlights(){
    this.errorMessage = null;
    this.viewDetailsService.view().subscribe(
      flights => this.flightDetails = flights,
      error => this.errorMessage = error
    );

  }

}
