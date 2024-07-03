import { Component, ElementRef, ViewChild } from '@angular/core';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrl: './contact.component.css'
})
export class ContactComponent {
  isSubmit = false;
  @ViewChild('fname') fname: ElementRef;
  @ViewChild('lname') lname: ElementRef;
  @ViewChild('country') country: ElementRef;
  @ViewChild('subject') subject: ElementRef;
  onSubmit() {
    if(this.fname.nativeElement.value!='' && this.lname.nativeElement.value!='' && this.subject.nativeElement.value!=''){
      this.isSubmit=true;
      alert("submitted succesfully")
    } else alert("Fill All the field")
  }
  onExit(){
    if(this.isSubmit) return true;
    if(this.fname.nativeElement.value=='' && this.lname.nativeElement.value=='' && this.subject.nativeElement.value=='') return true;
    return confirm('want to navigate');
  }

}
