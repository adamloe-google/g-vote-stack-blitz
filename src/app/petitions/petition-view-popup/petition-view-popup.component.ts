import { Component, Inject } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material';
import { IPetition } from '../petition.interface';
import { PetitionService } from '../petition.service';

@Component({
  selector: 'app-petition-view-popup',
  templateUrl: './petition-view-popup.component.html',
  styleUrls: ['./petition-view-popup.component.scss'],
})
export class PetitionViewPopupComponent {
  public petition: IPetition;
  public date: string;
  public hasVotedForPetitionAlready = false;
  public isLoading = true;

  constructor(
    public petitionService: PetitionService,
    public dialogRef: MatDialogRef<PetitionViewPopupComponent>,
    @Inject(MAT_DIALOG_DATA) public data: { petition: IPetition }
  ) {
    this.loadData();
  }

  public async loadData() {
    try {
      this.petition = this.data.petition;
      this.date = this.petition.date.toDateString();
      this.hasVotedForPetitionAlready =
        await this.petitionService.canVoteForPetition(this.petition.id);
      this.isLoading = false;
    } catch (error) {
      alert(error);
    }
  }

  public async signPetition() {
    try {
      this.petition.voteCount = await this.petitionService.voteForPetition(
        this.petition.id
      );
      this.hasVotedForPetitionAlready = true;
    } catch (error) {
      alert(error);
    }
  }
}
