import {Component, ElementRef, OnInit, ViewChild} from '@angular/core';
import {FormBuilder, FormControl, FormGroup, Validators} from '@angular/forms';
import {HttpErrorResponse, HttpParams} from '@angular/common/http';
import {GenerateProductCodeService} from '../../../../../services/components/generate-product-code.service';
import {ActivatedRoute, Router} from '@angular/router';
import {ReloadPageService} from '../../../../../services/reload-page.service';
import {GenerateProductCode} from '../../../../../model/GenerateProductCode';
import swal from 'sweetalert';
import {Processor} from '../../../../../model/Processor';

@Component({
  selector: 'app-generate-product-code-processor',
  templateUrl: './generate-product-code-processor.component.html',
  styleUrls: ['./generate-product-code-processor.component.scss']
})
export class GenerateProductCodeProcessorComponent implements OnInit {
  @ViewChild('inputSearch') inputSearch: ElementRef;
  validatingForm: FormGroup;
  id: number;
  isAddMode = true;
  isOpenForm: boolean;
  errorMessage = '';
  productCodeList = [];
  searchQuery = '';
  params = new HttpParams();
  editFormIndex: any;

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
    this.generateProductCodeService.getAll(Processor.generateProductURL).subscribe((data: any) => {
      this.productCodeList = data;

    }, (err: HttpErrorResponse) => {
      this.errorMessage = err.error.message;
    });
  }

  private searchProductCodes(): void {
    this.params = this.params.set('querySearch', this.searchQuery);
    this.generateProductCodeService.search(Processor.generateProductURLSearch, this.params).subscribe((data: any) => {

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
    this.router.navigate(['/dashboard/' + Processor.generateProductURL], {queryParams: {querySearch: this.searchQuery}})
    this.searchProductCodes();
  }

  clearSearch() {
    this.router.navigateByUrl('/dashboard/' + Processor.generateProductURL);
    this.getAllProductCodes();
  }

  /************************** Create, Update, Delete ****************************************************/
  private addProductCode(): void {
    this.generateProductCodeService.add(Processor.generateProductURL, this.validatingForm.value).subscribe(response => {
      this.reloadPageService.reload();
    }, (err: HttpErrorResponse) => {
      this.errorMessage = err.error.message;
    });
  }

  public editProductCode(): void {
    this.generateProductCodeService.update(Processor.generateProductURL, this.id, this.validatingForm.value).subscribe(response => {
      this.router.navigate(['dashboard/' + Processor.generateProductURL]).finally(() => this.reloadPageService.reload());
      this.validatingForm.reset();
    }, (err: HttpErrorResponse) => {
      this.errorMessage = err.error.message;
    });
  }

  deleteProductCode(productCode: GenerateProductCode): void {
    swal({
      title: 'Esti sigur ?',
      text: 'Inregistrarea va fi stearsa definitiv !',
      icon: 'warning',
      buttons: ['Anulare', 'Sterge'],
      dangerMode: true,
    }).then((willDelete) => {
      if (willDelete) {
        this.generateProductCodeService.delete(Processor.generateProductURL, Number(productCode.id)).subscribe(response => {
          this.reloadPageService.reload();
        }, (err: HttpErrorResponse) => {
          this.errorMessage = err.error.message;
        });
      }
    });
  }

  /***********************End Create, Update, Delete ****************************************************/

  toggleForm(): void {
    this.isOpenForm = !this.isOpenForm;
    const closedForm = document.getElementById('close-btn');

    if (closedForm) {
      this.router.navigate(['dashboard/' + Processor.generateProductURL]);
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
      swal('Inchide sesiunea curenta: Adaugare cod produs !');
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
    this.router.navigate(['dashboard/' + Processor.generateProductURL],
      {queryParams: {id: productCode.id}});
    this.validatingForm.patchValue(data);
  }


}
