/* tslint:disable:no-unused-variable */

import { By }           from '@angular/platform-browser';
import { DebugElement } from '@angular/core';
import { addProviders, async, inject } from '@angular/core/testing';
import { ShelfComponent } from './shelf.component';

describe('Component: Shelf', () => {
  it('should create an instance', () => {
    let component = new ShelfComponent();
    expect(component).toBeTruthy();
  });
});
