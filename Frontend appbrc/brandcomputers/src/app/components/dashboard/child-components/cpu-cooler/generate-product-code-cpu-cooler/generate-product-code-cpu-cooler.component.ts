import {HttpErrorResponse, HttpParams } from '@angular/common/http';
import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import {FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { ReloadPageService } from 'src/app/services/reload-page.service';
import swal from 'sweetalert';
import {GenerateProductCodeService} from '../../../../../services/components/generate-product-code.service';
import {CpuCooler} from '../../../../../model/CpuCooler';
import {GenerateProductCode} from '../../../../../model/GenerateProductCode';

@Component({
  selector: 'app-generate-product-code-cpu-cooler',
  templateUrl: './generate-product-code-cpu-cooler.component.html',
  styleUrls: ['./generate-product-code-cpu-cooler.component.scss']
})
export class GenerateProductCodeCpuCoolerComponent implements OnInit {

  @ViewChild('inputSearch') inputSearch: ElementRef;
  validatingForm: FormGroup;
  id: number;
  isOpenForm: boolean;
  isAddMode: boolean;
  errorMessage = '';
  productCodeList = [];
  searchQuery = '';
  urlSearchQuery = '';
  params = new HttpParams();

  constructor(private generateProductCodeService: GenerateProductCodeService,
              private formBuilder: FormBuilder,
              private reloadPageService: ReloadPageService,
              private activatedRoute: ActivatedRoute,
              private router: Router) {
  }

  ngOnInit(): void {
    this.activatedRoute.queryParams.subscribe(param => {
      this.id = param['id'];
    });
    this.productCodeForm();
    this.getAllProductCodes();

  }

  private productCodeForm(): void {
    this.validatingForm = this.formBuilder.group({
      productCode: new FormControl('', Validators.required),
      productName: new FormControl('', Validators.required)
    });
  }

  onSubmit(): void {

    if (this.validatingForm.invalid) {
      return;
    }

    if (this.isAddMode) {
      this.addProductCode();
    } else {
      this.editProductCode();
    }
  }

  private getAllProductCodes(): void {
    this.generateProductCodeService.getAll(CpuCooler.generateProductURL).subscribe((data: any) => {
      this.productCodeList = data;
    }, (error: HttpErrorResponse) => {
      this.errorMessage = error.error.message;
    });
  }

  private searchProductCodes(): void {
    this.params = this.params.set('querySearch', this.searchQuery);
    this.generateProductCodeService.search(CpuCooler.generateProductURLSearch, this.params).subscribe((data: any) => {

      if (this.searchQuery !== '') {
        this.productCodeList = [];

        for (let productCode of data) {
          this.productCodeList.push(productCode);
        }
        this.inputSearch.nativeElement.value = '';
      }

    }, (error: HttpErrorResponse) => {
      this.errorMessage = error.error.message;
    });
  }

  getEventSearchResult(event: any): void {
    this.searchQuery = event.target.value;
    this.router.navigate(['/dashboard/' + CpuCooler.generateProductURL], {queryParams: {querySearch: this.searchQuery}});
    this.searchProductCodes();
  }

  clearSearch() {
    this.router.navigateByUrl('/dashboard/' + CpuCooler.generateProductURL);
    this.getAllProductCodes();
  }

  /************************** Create, Update, Delete ****************************************************/

  private addProductCode(): void {
    this.generateProductCodeService.add(CpuCooler.generateProductURL, this.validatingForm.value).subscribe(response => {
      this.reloadPageService.reload();
    }, (error: HttpErrorResponse) => {
      this.errorMessage = error.error.message;
    });
  }

  private editProductCode(): void {
    this.generateProductCodeService.update(CpuCooler.generateProductURL, this.id, this.validatingForm.value).subscribe(response => {
      this.router.navigate(['dashboard/' + CpuCooler.generateProductURL]).finally(() => this.reloadPageService.reload());
      this.validatingForm.reset();
    }, (error: HttpErrorResponse) => {
      this.errorMessage = error.error.message;
    });
  }

  deleteProductCode(generateProductCode: GenerateProductCode): void {
    swal({
      title: 'Esti sigur ?',
      text: 'Inregistrarea va fi stearsa definitiv !',
      icon: 'warning',
      buttons: ['Anulare', 'Sterge'],
      dangerMode: true,
    })
      .then((willDelete) => {
        if (willDelete) {
          this.generateProductCodeService.delete(CpuCooler.generateProductURL, Number(generateProductCode.id)).subscribe(response => {
            this.reloadPageService.reload();
          }, (error: HttpErrorResponse) => {
            this.errorMessage = error.error.message;
          });
        }
      });
  }

  /***********************End Create, Update, Delete ****************************************************/

  toggleForm(): void {
    this.isOpenForm = !this.isOpenForm;
    const closeForm = document.getElementById('close-btn');

    if (closeForm) {
      this.router.navigate(['dashboard/' + CpuCooler.generateProductURL]);
      this.isAddMode = true;
      this.validatingForm.reset();
    }

    if (!this.id) {
      this.isAddMode = true;
    } else {
      this.isAddMode = false;
    }
  }

  getMyObject(productCode) {

    if (this.isAddMode && this.isOpenForm) {
      swal('Inchide sesiunea curenta: Adaugare cod produs');
      return;
    }

    if (!this.isAddMode && this.isOpenForm) {
      this.patchForm(productCode);
    } else {
      this.toggleForm();
      this.isAddMode = !this.isAddMode;
      this.patchForm(productCode);
    }
  }

  patchForm(productCode) {
    const data = this.productCodeList.find(i => i.id == productCode.id);
    this.router.navigate(['dashboard/' + CpuCooler.generateProductURL],
      {queryParams: {id: productCode.id}});
    this.validatingForm.patchValue(data);
  }
}
