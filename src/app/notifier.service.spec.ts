import { NO_ERRORS_SCHEMA } from '@angular/core';
import { TestBed } from '@angular/core/testing';
import { ReactiveFormsModule } from '@angular/forms';
import { MatSnackBarModule } from '@angular/material/snack-bar';

import { NotifierService } from './notifier.service';

describe('NotifierService', () => {
  let service: NotifierService;

  beforeEach((() => {
    TestBed.configureTestingModule({
      declarations: [  ],
      imports: [ ReactiveFormsModule, MatSnackBarModule ],
      schemas: [ NO_ERRORS_SCHEMA ]
    }).compileComponents();
  }));

  xit('should be created', () => {
    expect(service).toBeTruthy();
  });
});
