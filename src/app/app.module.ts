import { HttpClientModule } from '@angular/common/http';
import { BrowserModule } from '@angular/platform-browser';
import { HttpModule } from '@angular/http';
import { ErrorHandler, NgModule } from '@angular/core';
import { IonicApp, IonicErrorHandler, IonicModule } from 'ionic-angular';

import { FindMeThisPic } from './app.component';
import { HomePage } from '../pages/home/home';
import { PixabayService } from '../providers/pixabay-service/pixabay-service';

@NgModule({
  declarations: [
    FindMeThisPic,
    HomePage
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    IonicModule.forRoot(FindMeThisPic)
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    FindMeThisPic,
    HomePage
  ],
  providers: [
    {provide: ErrorHandler, useClass: IonicErrorHandler}
  ]
})
export class AppModule {}
