import { Component, OnInit } from '@angular/core';
import { DomSanitizer } from '@angular/platform-browser';

@Component({
    selector: 'app-css-var-config',
    templateUrl: './css-var-config.component.html',
    styleUrls: ['./css-var-config.component.scss']
})
export class CssVarConfigComponent implements OnInit {
    primaryColor;
    secondaryColor;
    fontFamily;
    fonts = [
        'Karla',
        'Lora',
        'Frank Ruhl Libre',
        'Playfair Display',
        'Archivo',
        'Spectral',
        'Fjalla One',
        'Roboto',
        'Montserrat',
        'Rubik',
        'Source Sans',
        'Cardo',
        'Cormorant',
        'Yatra One',
        'Arvo',
        'Lato'
    ];
    borderRadius;

    fontUrl;

    constructor(public sanitizer: DomSanitizer) {}

    ngOnInit() {
        this.primaryColor = this.getCssVar('--primary');
        this.secondaryColor = this.getCssVar('--secondary');
        this.fontFamily = this.getCssVar('--font');
        this.fontFamily = this.getCssVar('--font');
        this.borderRadius = this.getCssVar('--radius');
    }

    save(event) {
        if (this.primaryColor) {
            document.documentElement.style.setProperty('--primary-color', this.primaryColor);
            document.documentElement.style.setProperty(
                `--primary-darken-color`,
                this.lightenColor(this.primaryColor, -15)
            );
        }
        if (this.secondaryColor) {
            document.documentElement.style.setProperty('--secondary-color', this.secondaryColor);
            document.documentElement.style.setProperty(
                `--secondary-darken-color`,
                this.lightenColor(this.secondaryColor, -15)
            );
        }
        if (this.fontFamily) {
            this.fontUrl = `https://fonts.googleapis.com/css?family=${this.fontFamily}`;
            document.documentElement.style.setProperty('--font-family', this.fontFamily);
        }
        if (this.borderRadius) {
            document.documentElement.style.setProperty('--border-radius', this.borderRadius);
        }
    }

    getCssVar(name: string) {
        const bodyStyles = window.getComputedStyle(document.body);
        let value = bodyStyles.getPropertyValue(name).trim();
        // in case this is a string, we need to get ride of the quotes
        value = value.replace(/"/g, '');
        return value;
    }

    private lightenColor(color, percent) {
        color = color.trim().slice(1);

        var num = parseInt(color, 16),
            amt = Math.round(2.55 * percent),
            R = (num >> 16) + amt,
            B = ((num >> 8) & 0x00ff) + amt,
            G = (num & 0x0000ff) + amt;
        if (!num) {
            console.error('could not transform the color', color, num);
            return color;
        }
        const value = (
            0x1000000 +
            (R < 255 ? (R < 1 ? 0 : R) : 255) * 0x10000 +
            (B < 255 ? (B < 1 ? 0 : B) : 255) * 0x100 +
            (G < 255 ? (G < 1 ? 0 : G) : 255)
        )
            .toString(16)
            .slice(1);
        return '#' + value;
    }
}
