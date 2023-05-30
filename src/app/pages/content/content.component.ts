import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-content',
  templateUrl: './content.component.html',
  styleUrls: ['./content.component.css']
})
export class ContentComponent implements OnInit {
	photoCover: string = "data:image/png;base64,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";
	contentTitle: string = "MINHA NOTÍCIA";
	contentDescription: string = "Olá, mundo";

	constructor(
		private route: ActivatedRoute
	) {

	}

	ngOnInit(): void {

	}

}
