import { BrowserModule } from '@angular/platform-browser';
import { ErrorHandler, NgModule } from '@angular/core';
import { IonicApp, IonicErrorHandler, IonicModule } from 'ionic-angular';
import { SplashScreen } from '@ionic-native/splash-screen';
import { StatusBar } from '@ionic-native/status-bar';

import { AngularFireModule } from 'angularfire2' ;
import { AngularFireDatabaseModule } from 'angularfire2/database' ;

import { MyApp } from './app.component';
import { AccountListPage } from '../pages/account-list/account-list';
import { AccountDetailPage } from '../pages/account-detail/account-detail' ;
import { FirebaseDataProvider } from '../providers/firebase-data/firebase-data';

export const config = {
  apiKey: "AIzaSyA7xIMSc0d1ZjcBQuAwtSkA9100ggOgrsk",
  authDomain: "finaltest-d5eab.firebaseapp.com",
  databaseURL: "https://finaltest-d5eab.firebaseio.com",
  projectId: "finaltest-d5eab",
  storageBucket: "finaltest-d5eab.appspot.com",
  messagingSenderId: "790373427015"
};

@NgModule({
  declarations: [
    MyApp,
    AccountListPage,
    AccountDetailPage
  ],
  imports: [
    BrowserModule,
    IonicModule.forRoot(MyApp),
    AngularFireModule.initializeApp(config),
    AngularFireDatabaseModule
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    AccountListPage,
    AccountDetailPage
  ],
  providers: [
    StatusBar,
    SplashScreen,
    {provide: ErrorHandler, useClass: IonicErrorHandler},
    FirebaseDataProvider
  ]
})
export class AppModule {}
