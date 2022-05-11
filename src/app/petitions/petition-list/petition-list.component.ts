import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { IPetition } from '../petition.interface';

@Component({
  selector: 'app-petition-list',
  templateUrl: './petition-list.component.html',
  styleUrls: ['./petition-list.component.scss'],
})
export class PetitionListComponent implements OnInit {
  @Input() public petitions: IPetition[];
  @Output() public openPetition = new EventEmitter<IPetition>();

  constructor() {}

  ngOnInit() {}
}
