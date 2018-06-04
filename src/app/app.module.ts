import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { AppComponent } from './app.component';
import { BannerModule, AddToCardModule, ProductRatingModule, ProductIntroModule } from 'sample-components';
import { CssVarConfigModule } from './css-var-config/css-var-config.module';

@NgModule({
  declarations: [AppComponent],
  imports: [
    BrowserModule,
    NgbModule.forRoot(),
    CssVarConfigModule,
    BannerModule,
    AddToCardModule,
    ProductRatingModule,
    ProductIntroModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {}
