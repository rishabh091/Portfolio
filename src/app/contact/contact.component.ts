import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.css']
})
export class ContactComponent implements OnInit {

  email;
  name;
  desc;

  constructor() { }

  showError=false;

  ngOnInit() {
  }

  enterName(name){
    this.name=name.target.value;
  }
  enterEmail(email){
    this.email=email.target.value;
  }
  enterDesc(desc){
    this.desc=desc.target.value;
  }

  isValidated(element){
    if(element != null  && element != ' ' && element.length != 0){
      return true;
    }

    return false;
  }

  isEmailValidated(email){
    var regex=/^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    return regex.test(String(email).toLowerCase());
  }

  sendForm(){
    if(this.isValidated(this.name) &&
      this.isEmailValidated(this.email) &&
      this.isValidated(this.desc)){
        this.showError=false;
        alert("mail sent");
      }
      else{
        this.showError=true;
      }
  }

}
