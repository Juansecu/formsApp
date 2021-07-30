import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import {
  AbstractControl,
  AsyncValidator,
  ValidationErrors,
} from '@angular/forms';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

import { environment } from 'src/environments/environment';

import { User } from '../typings/User';

@Injectable({
  providedIn: 'root',
})
export class UsersService implements AsyncValidator {
  private readonly baseUrl = `${environment.server}/users`;

  constructor(private readonly http: HttpClient) {}

  validate(
    control: AbstractControl
  ): Promise<ValidationErrors | null> | Observable<ValidationErrors | null> {
    return this.http
      .get<User[]>(`${this.baseUrl}?q=${control.value}`)
      .pipe(
        map((response) =>
          !response.filter((user) => user.email === control.value).length
            ? null
            : { takenEmail: true }
        )
      );
  }
}
