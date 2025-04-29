import { Component } from '@angular/core';
import {HeaderComponent} from '../../components/shared/header/header.component';
import {FooterComponent} from '../../components/shared/footer/footer.component';

@Component({
  selector: 'app-product',
  imports: [
    HeaderComponent,
    FooterComponent
  ],
  templateUrl: './product.component.html',
  styleUrl: './product.component.css'
})
export class ProductComponent {

}
