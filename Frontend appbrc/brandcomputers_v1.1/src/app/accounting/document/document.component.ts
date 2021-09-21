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
            console.log(data);
            this.nirList = data;
        }, (error: HttpErrorResponse) => {
            this.errorMessage = error.error.message;
        });
    }

    downloadFile(nirFile: any) {
        this.nameOfDocument = 'nir' + nirFile.nirNumber + '.pdf';
        this.pdfFileUrl = this.sanitizer.bypassSecurityTrustResourceUrl(`data:application/pdf;base64, ${nirFile.file}`);
    }

}
