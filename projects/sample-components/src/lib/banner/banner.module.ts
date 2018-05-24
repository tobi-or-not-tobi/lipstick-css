import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { BannerComponent } from './banner.component';

@NgModule({
  imports: [CommonModule, NgbModule],
  declarations: [BannerComponent],
  exports: [BannerComponent]
})
export class BannerModule {}
