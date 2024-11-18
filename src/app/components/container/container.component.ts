import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-container',
  standalone: true,
  imports: [],
  templateUrl: './container.component.html',
  styleUrl: './container.component.css'
})
export class ContainerComponent {
  @Input()
public data: string = ""
  constructor(){}
  ngOnInit(){
    console.log("Data is ",this.data)
  }

}
