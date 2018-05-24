import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CssVarConfigComponent } from './css-var-config.component';
import { FormsModule } from '@angular/forms';
import { ColorPickerModule } from 'ngx-color-picker';

@NgModule({
    imports: [CommonModule, FormsModule, ColorPickerModule],
    declarations: [CssVarConfigComponent],
    exports: [CssVarConfigComponent]
})
export class CssVarConfigModule {}
