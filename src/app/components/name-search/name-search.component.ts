import { Component, OnInit } from '@angular/core';
import NationalityService, { Country } from 'src/app/services/nationality/nationality.service';
import  GenderService, {genderSearchResults } from 'src/app/services/gender/gender.service';
import AgeService from 'src/app/services/age/age.service';
import { getName } from 'country-list';

export type SearchResult = {
  name: string,
  countries: Country[],
  gender: genderSearchResults,
  age: number
}

@Component({
  selector: 'app-name-search',
  templateUrl: './name-search.component.html'
})

export class NameSearchComponent implements OnInit {
  searchResult: SearchResult | null = null
  resultsFound = false;

  constructor(
    private nationalityService: NationalityService,
    private genderService: GenderService,
    private ageService: AgeService

  ) { }

  ngOnInit(): void {
  }

  handleSearch(name: string) {
    Promise.all(
      [
        this.getNationalityInformation(name),
        this.getGenderInformation(name),
        this.getAgeInformation(name)
      ]
    )
      .then(data => {
        this.searchResult = {
          name: name,
          countries: data[0],
          gender: data[1],
          age: data[2]
        }
      })
  }

  getNationalityInformation(name: string): Promise<Country[]> {
    return this.nationalityService.getNationality(name).then(nationalityData => {
      const nationalitySearchResult = nationalityData.map(country => ({ ...country, country_name: getName(country.country_id), flag: `flag-icon flag-icon-${country.country_id}` }))
      return Promise.resolve(nationalitySearchResult);
    });
  }
  getGenderInformation(name: string): Promise<genderSearchResults> {
    return this.genderService.getGender(name).then(genderData => {
      const genderSearchResult = genderData;
      return Promise.resolve(genderSearchResult);
    });
  }

  getAgeInformation(name: string): Promise<number> {
    return this.ageService.getAge(name).then(ageData => {
      const ageSearchResult = ageData;
      return Promise.resolve(ageSearchResult.age);
    });
  }

  getResultsFound(): boolean {
    return this.searchResult &&
      this.searchResult.countries.length > 0 &&
      this.searchResult.gender.probability > 0.01 &&
      this.searchResult.age ?
      true : false
      ;
  }
}
