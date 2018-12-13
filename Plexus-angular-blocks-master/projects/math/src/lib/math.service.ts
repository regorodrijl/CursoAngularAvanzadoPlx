import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class MathService {
  constructor() {}

  public sum(number1: number, number2: number): number {
    return number1 + number2;
  }
}
