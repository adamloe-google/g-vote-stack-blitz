import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { PetitionListComponent } from './petitions/petition-list/petition-list.component';
import { PetitionCreatePopupComponent } from './petitions/petition-create-popup/petition-create-popup.component';
import { PetitionViewPopupComponent } from './petitions/petition-view-popup/petition-view-popup.component';
import { MatDialogModule } from '@angular/material';
import { PetitionService } from './petitions/petition.service';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

@NgModule({
  imports: [
    BrowserModule,
    FormsModule,
    MatDialogModule,
    BrowserAnimationsModule,
  ],
  entryComponents: [PetitionCreatePopupComponent, PetitionViewPopupComponent],
  declarations: [
    AppComponent,
    PetitionListComponent,
    PetitionCreatePopupComponent,
    PetitionViewPopupComponent,
  ],
  bootstrap: [AppComponent],
  providers: [PetitionService],
})
export class AppModule {}
