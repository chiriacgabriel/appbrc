import {Component, ElementRef, OnInit, ViewChild} from '@angular/core';
import {FormBuilder, FormControl, FormGroup, Validators} from '@angular/forms';
import {HttpErrorResponse, HttpParams} from '@angular/common/http';
import {GenerateProductCodeService} from '../../../services/components/generate-product-code.service';
import {ActivatedRoute, Router} from '@angular/router';
import {ReloadPageService} from '../../../services/reload-page.service';
import Swal from 'sweetalert2';
import {Motherboard} from '../../../model/components/Motherboard';
import { GenerateProductCode } from 'app/model/components/GenerateProductCode';

@Component({
  selector: 'app-product-code-motherboard',
  templateUrl: './product-code-motherboard.component.html',
  styleUrls: ['./product-code-motherboard.component.css',
    '../../../../assets/css/_toggle_switch.css',
    '../../../../assets/css/_table_format.css']
})
export class ProductCodeMotherboardComponent implements OnInit {

  @ViewChild('inputSearch') inputSearch: ElementRef;
  validatingForm: FormGroup;
  id: number;
  isAddMode = true;
  isOpenForm: boolean;
  errorMessage = '';
  productCodeList = [];
  searchQuery = '';
  params = new HttpParams();


  constructor(private generateProductCodeService: GenerateProductCodeService,
              private formBuild: FormBuilder,
              private activatedRoute: ActivatedRoute,
              private reloadPageService: ReloadPageService,
              private router: Router) { }

  ngOnInit(): void {
    this.activatedRoute.queryParams.subscribe(param => {
      this.id = param['id'];
    });

    this.productCodeForm();
    this.getAllProductCodes();

  }

  private productCodeForm(): void {
    this.validatingForm = this.formBuild.group({
      productCode: new FormControl('', Validators.required),
      productName: new FormControl('', Validators.required),
      state: new FormControl('')
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

  public getAllProductCodes(): void {
    this.generateProductCodeService.getAll(Motherboard.generateProductURL).subscribe((data: any) => {
      this.productCodeList = data;

    }, (err: HttpErrorResponse) => {
      this.errorMessage = err.error.message;
    });
  }

  private searchProductCodes(): void {
    this.params = this.params.set('querySearch', this.searchQuery);
    this.generateProductCodeService.search(Motherboard.generateProductURLSearch, this.params).subscribe((data: any) => {

      if (this.searchQuery !== '') {
        this.productCodeList = [];

        for (let productCode of data) {
          this.productCodeList.push(productCode);
        }
        this.inputSearch.nativeElement.value = '';
      }
    }, (err: HttpErrorResponse) => {
      this.errorMessage = err.error.message;
    });
    console.log(this.activatedRoute.queryParams);
  }

  getEventSearchResult(event: any) {
    this.searchQuery = event.target.value;
    this.router.navigate(['/components/' + Motherboard.productCodeURI], {queryParams: {querySearch: this.searchQuery}})
    this.searchProductCodes();
  }

  clearSearch() {
    this.router.navigateByUrl('/components/' + Motherboard.productCodeURI);
    this.getAllProductCodes();
  }

  /************************** Create, Update, Delete ****************************************************/
  private addProductCode(): void {
    this.generateProductCodeService.add(Motherboard.generateProductURL, this.validatingForm.value).subscribe(response => {
      this.reloadPageService.reload();
    }, (err: HttpErrorResponse) => {
      this.errorMessage = err.error.message;
    });
  }

  public editProductCode(): void {
    this.generateProductCodeService.update(Motherboard.generateProductURL, this.id, this.validatingForm.value).subscribe(response => {
      this.router.navigate(['components/' + Motherboard.productCodeURI]).then(() => this.reloadPageService.reload());
      this.validatingForm.reset();
    }, (err: HttpErrorResponse) => {
      this.errorMessage = err.error.message;
    });
  }

  deleteProductCode(productCode: GenerateProductCode): void {
    Swal.fire({
      title: 'Esti sigur?',
      text: "Inregistrarea va fi stearsa definitiv si produsele asociate!",
      icon: 'warning',
      showCancelButton: true,
      confirmButtonColor: '#3085d6',
      cancelButtonColor: '#d33',
      confirmButtonText: 'Da, sterge!'
    }).then((result) => {
      if (result.isConfirmed) {
        this.generateProductCodeService.delete(Motherboard.generateProductURL, Number(productCode.id)).subscribe(response => {
          this.reloadPageService.reload();
        }, (err: HttpErrorResponse) => {
          this.errorMessage = err.error.message;
        });
      }
    })
  }

  /***********************End Create, Update, Delete ****************************************************/

  toggleForm(): void {
    this.isOpenForm = !this.isOpenForm;
    const closedForm = document.getElementById('close-btn');

    if (closedForm) {
      this.router.navigate(['components/' + Motherboard.productCodeURI]);
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
      Swal.fire('Inchide sesiunea curenta: Adaugare cod produs !');
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
    this.router.navigate(['components/' + Motherboard.productCodeURI],
        {queryParams: {id: productCode.id}});
    this.validatingForm.patchValue(data);
  }

  setState(event, productCode: GenerateProductCode) {
    this.id = productCode.id;
    this.validatingForm.patchValue(productCode);
    this.validatingForm.get('state').setValue(event.currentValue);
    this.editProductCode();
  }

}
