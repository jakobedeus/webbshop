import { Component, OnInit, Input } from '@angular/core';
import { IMovie } from '../interface/IMovies';
import { InteractionService } from '../services/interaction.service';

@Component({
  selector: 'app-product-presentation',
  templateUrl: './product-presentation.component.html',
  styleUrls: ['./product-presentation.component.css']
})
export class ProductPresentationComponent implements OnInit {
  @Input() movie: IMovie[];

  message: string;

  constructor(private data: InteractionService) { }


  ngOnInit() {
    this.data.currentMessage.subscribe(message => this.message = message);
  }

  newMessage() {
    this.data.changeMessage("New message");
  }

}
