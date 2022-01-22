import { Injectable } from '@angular/core';
import { MatSnackBar } from '@angular/material/snack-bar';

@Injectable({
  providedIn: 'root'
})
export class NotifierService {

  constructor(private snackbar: MatSnackBar) {}

  openSnackBar(): void {
    console.log('open snack bar')

    this.snackbar.open('Notification message', 'text button', {
      duration: 3000,
      panelClass: ['red-snackbar', 'login-snackbar'],
    })
  }
}
