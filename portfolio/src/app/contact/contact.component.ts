import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormsModule, NgForm, ReactiveFormsModule } from '@angular/forms';

@Component({
    selector: 'app-contact',
    templateUrl: './contact.component.html',
    styleUrls: ['./contact.component.css'],
    standalone: true,
    imports: [CommonModule, ReactiveFormsModule, FormsModule],
})
export class ContactComponent {

    contact = {
        name: '',
        email: '',
        message: ''
    };
    submitted = false;

    onSubmit(form: NgForm) {
        if (form.valid) {
            this.submitted = true;
            this.contact = {
                name: '',
                email: '',
                message: ''
            };
            form.resetForm();
        }
        // Reset submitted flag after 3 seconds
        setTimeout(() => {
            this.submitted = false;
        }, 3000);
    }

}
