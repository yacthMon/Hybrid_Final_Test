import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';

import { FormBuilder, FormGroup, Validators } from  '@angular/forms' ;

import { FirebaseDataProvider,Account } from '../../providers/firebase-data/firebase-data' ;


/**
 * Generated class for the AccountDetailPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@Component({
  selector: 'page-account-detail',
  templateUrl: 'account-detail.html',
})
export class AccountDetailPage{

  account: Account = undefined ;
  isShowPassword: boolean;
  accountForm: FormGroup ;
  accountType:string = "1";
  constructor(public navCtrl: NavController, 
  	          public navParams: NavParams, 
  	          public formBuilder: FormBuilder,
  	          public firebaseData: FirebaseDataProvider) {
    
      this.accountForm = this.formBuilder.group({
                        account: ['', Validators.required],
                        accountType: ['', Validators.required],
                        username: [''],
                        email: [''],
                        password: ['', Validators.required],
                        url: [''],
                        note: ['']
                      }) ;

    // put your constructor code here
    this.account = navParams.get("account");
    if(this.account){
      this.accountType = this.account.accountType;
    }
  }

  saveAccount(){
    // push data when new account, ohterwise update data with key
    if(this.accountForm.valid){
      let accountData = {
        account: this.accountForm.controls.account.value,
        accountType: this.accountForm.controls.accountType.value,
        username: this.accountForm.controls.username.value,
        email: this.accountForm.controls.email.value,
        password: this.accountForm.controls.password.value,
        url: this.accountForm.controls.url.value,
        note: this.accountForm.controls.note.value};
      if(this.account){
        this.firebaseData.updateAccount(this.account.$key,accountData, ()=>{this.navCtrl.pop()});
      }else{
         this.firebaseData.addAccount(accountData, ()=>{this.navCtrl.pop()});
      }
    }
  }

  togglePassword(){
    // put your toggle password here
    this.isShowPassword = !this.isShowPassword;
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad AccountDetailPage');
  }

}
