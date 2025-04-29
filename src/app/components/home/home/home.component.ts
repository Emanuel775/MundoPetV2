import {Component, OnInit} from '@angular/core';
import {HeaderComponent} from '../../shared/header/header.component';
import {FooterComponent} from '../../shared/footer/footer.component';

@Component({
  selector: 'app-home',
  imports: [
    HeaderComponent,
    FooterComponent
  ],
  templateUrl: './home.component.html',
  standalone: true,
  styleUrl: './home.component.css'
})
export class HomeComponent {

}
