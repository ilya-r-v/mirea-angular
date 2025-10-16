import { Component } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { DialogForm } from '../dialog-form/dialog-form';

@Component({
  selector: 'app-contacts',
  standalone: false,
  templateUrl: './contacts.html',
  styleUrl: './contacts.scss'
})
export class Contacts {
  constructor(public dialog: MatDialog) {}

  openDialog() {
    const dialogRef = this.dialog.open(DialogForm);

    dialogRef.afterClosed().subscribe(result => {
      console.log('Диалог закрыт', result);
      if (result) {
        alert('Ваша заявка успешно отправлена.');
      }
    });
  }
}