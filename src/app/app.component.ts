import { Component } from '@angular/core';
import { MatDialog } from '@angular/material';
import { PetitionViewPopupComponent } from './petitions/petition-view-popup/petition-view-popup.component';
import { IPetition } from './petitions/petition.interface';
import { PetitionService } from './petitions/petition.service';

@Component({
  selector: 'my-app',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  public petitions: IPetition[];
  public isLoading: boolean;

  public constructor(
    public petitionService: PetitionService,
    public dialog: MatDialog
  ) {
    this.loadData();
  }

  public async loadData() {
    this.isLoading = true;
    try {
      this.petitions = await this.petitionService.getPetitions();
      this.isLoading = false;
      console.log(this.petitions);
      // this.openViewPetitionPopup(this.petitions[2]);
    } catch (error) {
      alert(error);
    }
  }

  public openViewPetitionPopup(petition: IPetition) {
    this.dialog.open(PetitionViewPopupComponent, {
      data: {
        petition,
      },
      disableClose: false,
      hasBackdrop: true,
      height: '400px',
      width: '600px',
    });
  }

  public;
}
