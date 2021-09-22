import {Component, OnInit} from '@angular/core';
import {NirService} from '../../services/accounting/nir.service';
import {HttpErrorResponse} from '@angular/common/http';
import {DomSanitizer} from '@angular/platform-browser';

@Component({
    selector: 'app-document',
    templateUrl: './document.component.html',
    styleUrls: ['./document.component.css',
        '../../../assets/css/_table_format.css',
        '../../../assets/css/_tab_pane_custom.css',
        '../../../assets/css/_fav_icons_custom.css', ]
})
export class DocumentComponent implements OnInit {

    nirList = [];
    errorMessage = '';
    pdfFileUrl;
    nameOfDocument: string;

    constructor(private nirService: NirService,
                private sanitizer: DomSanitizer) {
    }

    ngOnInit(): void {
        this.getAllNir();
    }

    getAllNir() {
        this.nirService.getAll().subscribe((data: any) => {
            this.nirList = data;
        }, (error: HttpErrorResponse) => {
            this.errorMessage = error.error.message;
        });
    }

    downloadFile(nirFile: any) {
        this.nameOfDocument = 'nir' + nirFile.nirNumber + '.pdf';
        this.pdfFileUrl = this.sanitizer.bypassSecurityTrustResourceUrl(`data:application/pdf;base64, ${nirFile.file}`);
    }

    viewFile(nirFile: any) {
        // Embed the PDF into the HTML page and show it to the user
        const obj = document.createElement('object');
        obj.style.width = '100%';
        obj.style.height = '80vh';
        obj.type = 'application/pdf';
        obj.data = 'data:application/pdf;base64,' + nirFile.file;


        const contentViewPdf = document.getElementById('content-view-pdf');

        if (contentViewPdf.children.length >= 1) {
            contentViewPdf.removeChild(contentViewPdf.children[0]);
        }
        contentViewPdf.appendChild(obj);
    }
}
