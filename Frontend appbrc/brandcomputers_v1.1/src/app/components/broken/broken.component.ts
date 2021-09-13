import {Component, OnInit} from '@angular/core';
import {BrokenService} from '../../services/components/broken.service';
import {EnumService} from '../../helper/enum.service';
import {EnumCategory} from '../../model/enum/EnumCategory';
import { HttpErrorResponse } from '@angular/common/http';
import { ObjCategory } from 'app/model/components/ObjCategory';

@Component({
    selector: 'app-broken',
    templateUrl: './broken.component.html',
    styleUrls: ['./broken.component.css',
        '../../../assets/css/_broken.css',
        '../../../assets/css/_table_format.css',
        '../../../assets/css/_pagination_custom.css'
    ]
})

export class BrokenComponent implements OnInit {

    page = 1;
    pageSize = 10;
    count: any;

    brokenList: any[];
    categoryList: ObjCategory[];
    selectedCategory: string;
    errorMessage = '';

    constructor(private brokenService: BrokenService,
                private enumService: EnumService) {

        this.brokenList = [];
        this.categoryList = [];
        this.selectedCategory = 'All';
    }

    ngOnInit(): void {
        this.getAllBroken();
    }

    getAllBroken() {
        const params = this.getPaginationParams(this.page, this.pageSize);
        this.brokenService.getAll(params).subscribe((data: any) => {

            this.categoryList = [];
            this.brokenList = data[this.selectedCategory].content;
            this.count = data[this.selectedCategory].totalElements;

            for (const enumCategory in EnumCategory){
                const cat = new ObjCategory();
                cat.name = EnumCategory[enumCategory];
                cat.total = data[enumCategory].totalElements;
                this.categoryList.push(cat);
            }


        }, (error: HttpErrorResponse) => {
            this.errorMessage = error.error.message;
        });
    }

    getPaginationParams(page, pageSize) {
        const params = {};

        if (page) {
            params['page'] = page-1;
        }
        if (pageSize) {
            params['size'] = pageSize;
        }
        return params;
    }

    getCategory(category: string) {
        this.page = 1;
        this.selectedCategory = this.enumService.getKeys(EnumCategory, category);
        this.getAllBroken();
    }

    handlePageChange(event) {
        this.page = event;
        this.getAllBroken();
    }
}
