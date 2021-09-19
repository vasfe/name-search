import { Injectable } from '@angular/core';

export type AgeSearchResult = {
  name: string,
}

@Injectable({
  providedIn: 'root'
})
class AgeService {

  constructor() { }

  getAge(name: string): Promise<any> {
    return fetch(`https://api.agify.io?name=${name}`).then(response =>
      response.json())
      .then(searchResult => {
        return Promise.resolve(searchResult)
      })
  }
}

export default AgeService
