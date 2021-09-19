import {Component, ElementRef, OnInit, ViewChild} from '@angular/core';
import {FormBuilder, FormControl, FormGroup, Validators} from '@angular/forms';
import {HttpErrorResponse, HttpParams} from '@angular/common/http';
import {GenerateProductCodeService} from '../../../services/components/generate-product-code.service';
import {ActivatedRoute, Router} from '@angular/router';
import {ReloadPageService} from '../../../services/reload-page.service';
import {Case} from '../../../model/components/Case';
import Swal from 'sweetalert2';
import {GenerateProductCode} from '../../../model/components/GenerateProductCode';

@Component({
  moduleId: module.id,
  selector: 'app-product-code-case',
  templateUrl: './product-code-case.component.html',
  styleUrls: ['./product-code-case.component.css',
    '../../../../assets/css/_toggle_switch.css',
    '../../../../assets/css/_table_format.css']
})
export class ProductCodeCaseComponent implements OnInit {

  @ViewChild('inputSearch') inputSearch: ElementRef;
  validatingForm: FormGroup;
  id: number;
  isAddMode = true;
  isOpenForm: boolean;
  errorMessage = '';
  productCodeList = [];
  searchQuery = '';
  params = new HttpParams();
  state_default: boolean = true;

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
      state: new FormControl(''),
      category: new FormControl('Case')
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
    this.params = new HttpParams();
    this.params = this.params.set('category', 'Case');
    this.generateProductCodeService.getAllByCategory(GenerateProductCode.productCodeCategoryURI, this.params).subscribe((data: any) => {

      this.productCodeList = data;

    }, (err: HttpErrorResponse) => {
      this.errorMessage = err.error.message;
    });
  }

  private searchProductCodes(): void {
    this.params = this.params.set('query', this.searchQuery).set('category', 'Case');
    this.generateProductCodeService.search(GenerateProductCode.searchProductCodeURI, this.params).subscribe((data: any) => {

      if (this.searchQuery !== '') {
        this.productCodeList = data;

        this.inputSearch.nativeElement.value = '';
      }
    }, (err: HttpErrorResponse) => {
      this.errorMessage = err.error.message;
    });
  }

  getEventSearchResult(event: any) {
    this.searchQuery = event.target.value;
    this.router.navigate(['/components/' + GenerateProductCode.productCodeURI], {queryParams: {querySearch: this.searchQuery}})
    this.searchProductCodes();
  }

  clearSearch() {
    this.router.navigateByUrl('/components/' + GenerateProductCode.productCodeURI);
    this.getAllProductCodes();
  }

  /************************** Create, Update, Delete ****************************************************/
  private addProductCode(): void {
    this.generateProductCodeService.add(GenerateProductCode.productCodeURI, this.validatingForm.value).subscribe(response => {
      this.reloadPageService.reload();
    }, (err: HttpErrorResponse) => {
      this.errorMessage = err.error.message;
    });
  }

  public editProductCode(): void {
    this.generateProductCodeService.update(GenerateProductCode.productCodeURI, this.id, this.validatingForm.value).subscribe(response => {
      this.router.navigate(['components/' + GenerateProductCode.productCodeURI]).then(() => this.reloadPageService.reload());
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
        this.generateProductCodeService.delete(GenerateProductCode.productCodeURI, Number(productCode.id)).subscribe(response => {
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
      this.router.navigate(['components/' + GenerateProductCode.productCodeURI]);
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
    this.router.navigate(['components/' + GenerateProductCode.productCodeURI],
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
