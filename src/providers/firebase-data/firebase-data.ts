import { AngularFireDatabase, FirebaseListObservable, FirebaseObjectObservable  } from 'angularfire2/database' ;
import { Injectable } from '@angular/core';

/*
  Generated class for the FirebaseDataProvider provider.

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/

export class Account {
	$key?: any;
	account: string ;
  accountType: string ;
	username: string ;
	email: string ;
	password: string ;
	url: string ;
	note: string ;
}


@Injectable()
export class FirebaseDataProvider {

  accountPath : string = '/accounts' ;
  accounts : FirebaseListObservable<Account[]>  ;
  account : FirebaseObjectObservable<Account> ;

  constructor(public angularfire: AngularFireDatabase) {
    console.log('Hello FirebaseDataProvider Provider');
  }

  getAccounts(): FirebaseListObservable<Account[]> {
    this.accounts = this.angularfire.list(this.accountPath) ;
    return this.accounts ;
  }

  addAccount(account: Account , callback:any){
    this.accounts.push(account).then(callback);
  }

  updateAccount(key:any,value:any, callback:any){
    console.dir(value);
    this.accounts.update(key,value).then(callback);
  }

  removeAccount(key: any){
    this.accounts.remove(key);
  }

}
