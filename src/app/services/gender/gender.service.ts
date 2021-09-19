import { Injectable } from '@angular/core';

export type genderSearchResults = {
  gender: string,
  probability: number
}

@Injectable({
  providedIn: 'root'
})

class GenderService {

  constructor() { }

  getGender(name: string): Promise<any> {
    return fetch(`https://api.genderize.io?name=${name}`).then(response =>
      response.json())
      .then(searchResult => {
        return Promise.resolve({ gender: searchResult.gender, probability: searchResult.probability })
      })
  }
}

export default GenderService
