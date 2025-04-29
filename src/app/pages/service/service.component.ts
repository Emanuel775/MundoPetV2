import { Component } from '@angular/core';
import {HeaderComponent} from '../../components/shared/header/header.component';
import {FooterComponent} from '../../components/shared/footer/footer.component';

@Component({
  selector: 'app-service',
  imports: [
    HeaderComponent,
    FooterComponent
  ],
  templateUrl: './service.component.html',
  styleUrl: './service.component.css'
})
export class ServiceComponent {

}
