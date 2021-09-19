import { Injectable } from '@angular/core';

export type Country = {
  country_name?: string,
  flag: string,
  country_id: string,
  probability: number
}

@Injectable({
  providedIn: 'root'
})

class NationalityService {
  constructor() {
  }

  getNationality(name: string): Promise<Country[]> {
    return fetch(`https://api.nationalize.io?name=${name}`).then(response =>
      response.json())
      .then(searchResult => {
        searchResult = {
          ...searchResult,
          country: searchResult.country.filter((country: Country) => country.country_id != "")
        };
        return Promise.resolve([...searchResult.country])
      })
  }
}

export default NationalityService
