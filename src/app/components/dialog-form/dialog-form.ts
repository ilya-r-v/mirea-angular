import { Component, Inject } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';

@Component({
  selector: 'app-dialog-form',
  standalone: false,
  templateUrl: './dialog-form.html',
  styleUrl: './dialog-form.scss'
})
export class DialogForm {
  form: FormGroup = new FormGroup({
    "userName": new FormControl('', Validators.required),
    "phone": new FormControl('', [Validators.required, Validators.pattern("[0-9]{11}")]),
    "email": new FormControl('', [Validators.required, Validators.email]),
    "selectOption": new FormControl('', [Validators.required]), 
    "message": new FormControl('', [Validators.required, Validators.minLength(10)]),
  })

  constructor(
    public dialogRef: MatDialogRef<DialogForm>,
    @Inject(MAT_DIALOG_DATA) public data: any
  ) {}

  submit() {
    if (this.form.valid) {
      this.dialogRef.close(this.form.value);
    } else {
      this.markAllFieldsAsTouched();
      console.log('Форма невалидна');
    }
  }

  private markAllFieldsAsTouched() {
    Object.keys(this.form.controls).forEach(field => {
      const control = this.form.get(field);
      control?.markAsTouched();
    });
  }

  onCancel(): void {
    this.dialogRef.close();
  }
}