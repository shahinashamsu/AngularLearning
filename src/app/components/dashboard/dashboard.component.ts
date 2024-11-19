import { Component, ViewChild, viewChild } from '@angular/core';
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
 public dataToParent : string = ""
 constructor(){

 }
 ngOnInit(){
  console.log(this.containerComp.msg)
 }
 ngAfterViewInit(){
  console.log("from ngAfterInit")
 }
 getData(str : string){
  this.dataToParent=str
}

  @ViewChild(ContainerComponent, {static: true})
   containerComp!: ContainerComponent;
   onClick(){
    console.log(this.containerComp.msg)
   }
}
