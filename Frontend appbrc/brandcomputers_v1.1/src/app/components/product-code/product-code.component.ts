import {Component, ElementRef, OnChanges, OnInit, SimpleChanges, ViewChild} from '@angular/core';
import {FormBuilder, FormControl, FormGroup, Validators} from '@angular/forms';
import {HttpErrorResponse, HttpParams} from '@angular/common/http';
import {GenerateProductCodeService} from '../../services/components/generate-product-code.service';
import {ActivatedRoute, Router} from '@angular/router';
import {ReloadPageService} from '../../services/reload-page.service';
import {GenerateProductCode} from '../../model/components/GenerateProductCode';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-product-code',
  templateUrl: './product-code.component.html',
  styleUrls: ['./product-code.component.css',
    '../../../assets/css/_toggle_switch.css',
    '../../../assets/css/_table_format.css']
})
export class ProductCodeComponent implements OnInit {

  @ViewChild('inputSearch') inputSearch: ElementRef;
  @ViewChild('closeProductCodeModal') closeProductCodeModal: ElementRef;
  validatingForm: FormGroup;
  id: number;
  activeCategory: string;
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
              private router: Router) {
    //for every value in params.get('category') recall necesary functions
    this.activatedRoute.params.subscribe(value => {
        this.ngOnInit();
    });
  }

  ngOnInit(): void {

    this.id = Number(this.activatedRoute.snapshot.paramMap.get('id'));
    this.activeCategory = this.activatedRoute.snapshot.paramMap.get('category');

    this.getRouting();
    this.productCodeForm();
    this.getAllProductCodes();
  }

  private productCodeForm(): void {
    this.validatingForm = this.formBuild.group({
      productCode: new FormControl('', Validators.required),
      productName: new FormControl('', Validators.required),
      state: new FormControl(''),
      category: new FormControl(this.activeCategory)
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
    this.generateProductCodeService.getAllByCategory(GenerateProductCode.productCodeURI, this.activeCategory).subscribe((data: any) => {

      this.productCodeList = data;

    }, (err: HttpErrorResponse) => {
      this.errorMessage = err.error.message;
    });
  }

  private searchProductCodes(): void {
    this.params = this.params.set('query', this.searchQuery).set('category', this.activeCategory);
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
    this.searchProductCodes();
  }

  clearSearch() {
    this.inputSearch.nativeElement.value = '';
    this.searchQuery = '';
    this.getAllProductCodes();
  }

  /************************** Create, Update, Delete ****************************************************/
  private addProductCode(): void {
    const formCategory = this.validatingForm.get('category');

    formCategory.value === null ? formCategory.setValue(this.activeCategory) : formCategory;

    this.generateProductCodeService.add(GenerateProductCode.productCodeURI, this.validatingForm.value)
        .subscribe(response => {

          this.closeProductCodeModal.nativeElement.click();
          this.getAllProductCodes();

        }, (err: HttpErrorResponse) => {
          this.errorMessage = err.error.message;
        });
  }

  public editProductCode(): void {

    this.generateProductCodeService.update(GenerateProductCode.productCodeURI, this.id, this.validatingForm.value).subscribe(response => {

      this.getAllProductCodes();
      this.closeProductCodeModal.nativeElement.click();

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
  closeModal(): void {
    this.isAddMode = true;
    this.validatingForm.reset();
    this.toggleForm();
  }

  openAddForm() {
    if (!this.isAddMode && this.isOpenForm){
      this.sessionMessage();
      return;
    }
    this.toggleForm();
  }

  sessionMessage(): void{
    Swal.fire('Inchide sesiunea curenta !');
  }

  toggleForm(): void {
    this.isOpenForm = !this.isOpenForm;
  }

  getMyObject(productCode) {
    if (this.isAddMode && this.isOpenForm) {
      this.sessionMessage();
      return;
    }else {
      this.isAddMode = false;
      this.toggleForm();
      this.patchForm(productCode);
    }
  }

  patchForm(productCode) {
    const data = this.productCodeList.find(i => i.id == productCode.id);
    this.id = productCode.id;
    // this.router.navigate(['components/' + GenerateProductCode.productCodeURI],
    //     {queryParams: {id: productCode.id}});
    this.validatingForm.patchValue(data);
  }

  setState(event, productCode: GenerateProductCode) {
    this.id = productCode.id;
    this.validatingForm.patchValue(productCode);
    this.validatingForm.get('state').setValue(event.currentValue);
    this.editProductCode();
  }

  getRouting() {
    this.activatedRoute.queryParams.subscribe(param => {
      this.id = param['id'];
    });
  }

}
