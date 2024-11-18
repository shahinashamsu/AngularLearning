import { Component } from '@angular/core';
import { ContainerComponent } from "../container/container.component";
import { HeaderComponent } from '../header/header.component';
import { FooterComponent } from '../footer/footer.component';

@Component({
  selector: 'app-dashboard',
  standalone: true,
  imports: [ContainerComponent, HeaderComponent, FooterComponent],
  templateUrl: './dashboard.component.html',
  styleUrl: './dashboard.component.css'
})
export class DashboardComponent {
 public dataToChild : string = "Input Binding"
 constructor(){

 }
 ngOnInit(){}
}
