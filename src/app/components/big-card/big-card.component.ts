import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-big-card',
  templateUrl: './big-card.component.html',
  styleUrls: ['./big-card.component.css']
})
export class BigCardComponent implements OnInit {
	ngOnInit(): void {
		throw new Error('Method not implemented.');
	}

	@Input()
	photoCover: string = "";
	@Input()
	cardTitle: string = "";
	@Input()
	cardDescription: string = "";
	@Input()
	id: string = "0";
;}
