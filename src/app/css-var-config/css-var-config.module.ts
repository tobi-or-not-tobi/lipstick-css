import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CssVarConfigComponent } from './css-var-config.component';
import { FormsModule } from '@angular/forms';

@NgModule({
    imports: [CommonModule, FormsModule],
    declarations: [CssVarConfigComponent],
    exports: [CssVarConfigComponent]
})
export class CssVarConfigModule {}
