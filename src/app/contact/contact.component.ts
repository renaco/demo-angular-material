import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators} from '@angular/forms';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.scss']
})
export class ContactComponent implements OnInit {
  isWaiting: boolean
  emailList = new FormGroup({
    email: new FormControl('', [Validators.required, Validators.pattern("^[a-z0-9._%+-]+@[a-z0-9.-]+\\.[a-z]{2,4}$")])
  })

  constructor() {
    this.isWaiting = false
  }

  ngOnInit(): void {
    console.log('contact')
  }

  submit(): void {
    this.isWaiting = true
    const emailToSubmit = this.emailList.get('email')
    if (emailToSubmit?.valid) {
      setTimeout(() => {
        this.isWaiting = false
        emailToSubmit?.setValue('')
      }, 3000)
    }
  }

}
