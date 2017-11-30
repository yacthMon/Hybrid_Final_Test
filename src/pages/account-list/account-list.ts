import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';

import { FirebaseDataProvider, Account } from '../../providers/firebase-data/firebase-data' ;
import { AccountDetailPage } from '../account-detail/account-detail' ;

@Component({
  selector: 'page-account-list',
  templateUrl: 'account-list.html'
})
export class AccountListPage {

  accounts: Account[] = null ;
  icons : string[] = ['none','mail','basketball','wifi','cloud','apps'] ;

  constructor(public navCtrl: NavController,firebaseData: FirebaseDataProvider) {
    firebaseData.getAccounts().subscribe(data=>{
      this.accounts = data;
    });
  }

  addAccount(){
  	//put your code when click the icon Add
    this.navCtrl.push(AccountDetailPage) ;
  }

  showAccount(account:Account){
    //put your code when click the account item
    this.navCtrl.push(AccountDetailPage, {account:account}) ;
  }

}
