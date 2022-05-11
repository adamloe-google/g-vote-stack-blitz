import { Injectable } from '@angular/core';
import { IPetition } from './petition.interface';

const apiTimeout = 300;

@Injectable()
export class PetitionService {
  public petitions: IPetition[] = [
    {
      id: 1,
      name: 'Monday Pizza!',
      description:
        "We've always loved pizza in the office, but it only happens on Wednesday. Please support our journey in slowly getting pizza every day of the week!",
      date: new Date(2022, 4, 25),
      voteCount: 952,
    },
    {
      id: 2,
      name: 'Give us bigger staples',
      description: "Don't look here",
      date: new Date(2022, 4, 25),
      voteCount: 32,
    },
    {
      id: 3,
      name: 'Open floorplan bathrooms',
      description:
        "We're losing a lot of productivity by not collaborating during our most vulnerable times. Bonding together through these moments will. create bonds that last a lifetime!",
      date: new Date(2022, 4, 25),
      voteCount: 1,
    },
  ];
  public votedForIds: number[] = [];

  public getPetitions(): Promise<IPetition[]> {
    return new Promise((resolve) => {
      setTimeout(() => {
        resolve(this.petitions);
      }, apiTimeout);
    });
  }

  public createPetition(petition: IPetition): Promise<IPetition> {
    return new Promise((resolve) => {
      setTimeout(() => {
        this.petitions.push(petition);
        resolve(petition);
      }, apiTimeout);
    });
  }

  public voteForPetition(petitionId: number): Promise<number> {
    return new Promise((resolve) => {
      setTimeout(() => {
        const existingPetition = this.petitions.find(
          (petition) => petition.id === petitionId
        );
        existingPetition.voteCount += 1;
        resolve(existingPetition.voteCount);
      }, apiTimeout);
    });
  }

  public canVoteForPetition(petitionId: number): Promise<boolean> {
    return new Promise((resolve) => {
      setTimeout(() => {
        const hasVoted = this.votedForIds.some(
          (votedForId) => votedForId === petitionId
        );
        resolve(hasVoted);
      }, apiTimeout);
    });
  }
}
