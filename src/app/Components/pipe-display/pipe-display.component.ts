import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-pipe-display',
  templateUrl: './pipe-display.component.html',
  styleUrls: ['./pipe-display.component.css']
})
export class PipeDisplayComponent implements OnInit {
  title1: string = "lower to upper";
  title2: string = "UPPER TO LOWER";
  fullname: string = "Souvik DaS"

  oldDate = new Date(1998, 8, 5)
  todayDate = new Date()

  price: number = 123.6548

  jsonVal = { name: "Souvik", age: "25", address: { streetNum: '1', pin: '12345' } }

  color = ['red', 'green', 'blue', 'yellow', 'brown', 'black']
  newday = new Date()

  constructor() { }

  ngOnInit(): void {

  }
}
