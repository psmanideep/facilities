import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
@Component({
    selector: 'pv-contact', 
    standalone: true, 
    imports: [FormsModule],
    templateUrl: './contact.component.html',
    styleUrls: ['./contact.component.scss']
})
export class ContactComponent { data = { name: '', company: '', email: '', phone: '', category: '', requirement: '' }; submit() { const subject = encodeURIComponent(`ProcureVanta procurement enquiry — ${this.data.company}`); const body = encodeURIComponent(`Name: ${this.data.name}\nCompany: ${this.data.company}\nEmail: ${this.data.email}\nPhone: ${this.data.phone}\nCategory: ${this.data.category}\n\nRequirement:\n${this.data.requirement}`); window.location.href = `mailto:hello@procurevanta.in?subject=${subject}&body=${body}` } }
