import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-r-stage',
  templateUrl: './r-stage.component.html',
  styleUrls: ['./r-stage.component.css']
})
export class RStageComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  public onOpenModal(mode: string): void {
    const container = document.getElementById('mycontainer');
    const button = document.createElement('button');
    button.type = 'button';
    button.style.display = 'none';
    button.setAttribute('data-toggle', 'modal');
    if (mode === 'stage') {
      button.setAttribute('data-target', '#stageModal');
    }
    container!.appendChild(button);
    button.click();
  }

}
