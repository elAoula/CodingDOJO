import { Injectable } from '@angular/core';
import { Model } from './model';

@Injectable()
export class StatestoreService {

  private _model: Model = new Model();

  constructor() { }

  get model(): Model {
    return this._model;
  }
}
