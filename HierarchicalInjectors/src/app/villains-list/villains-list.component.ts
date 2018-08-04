import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { Villain, VillainsService } from './villains.service';

@Component({
  selector: 'app-villains-list',
  templateUrl: './villains-list.component.html',
  styleUrls: ['./villains-list.component.css'],
  providers: [ VillainsService ]
})
export class VillainsListComponent implements OnInit {
  villains: Observable<Villain[]>

  constructor(private villainsService: VillainsService) { }

  ngOnInit() {
    this.villains = this.villainsService.getVillains();
    console.log(this.villains);
  }
}
