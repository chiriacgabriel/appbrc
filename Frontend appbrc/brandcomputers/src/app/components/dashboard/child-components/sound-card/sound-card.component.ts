import {Component, ElementRef, OnInit, ViewChild} from '@angular/core';
import {FormBuilder, FormControl, FormGroup, Validators} from '@angular/forms';
import {HttpErrorResponse, HttpParams} from '@angular/common/http';
import {TokenStorageService} from '../../../../services/token-storage.service';
import {ReloadPageService} from '../../../../services/reload-page.service';
import {ActivatedRoute, Router} from '@angular/router';
import {EnumService} from '../../../../../../../brandcomputers_v1.1/src/app/services/enum.service';
import {FilterService} from '../../../../../../../brandcomputers_v1.1/src/app/services/filter.service';
import {Location} from '@angular/common';
import { SoundCardService } from 'src/app/services/components/sound-card.service';
import {EnumState} from '../../../../model/enum/EnumState';
import swal from 'sweetalert';
import { SoundCard } from 'src/app/model/SoundCard';
import { GenerateProductCode } from 'src/app/model/GenerateProductCode';
import { GenerateProductCodeService } from 'src/app/services/components/generate-product-code.service';

@Component({
  selector: 'app-sound-card',
  templateUrl: './sound-card.component.html',
  styleUrls: ['./sound-card.component.scss']
})
export class SoundCardComponent implements OnInit {

  @ViewChild('inputSearch') inputSearch: ElementRef;
  @ViewChild('inputSearchStock')inputSearchStock: ElementRef;

  id: number;
  selectedProductCode: any;
  getProductCode: string;
  query = '';
  errorMessage = '';

  soundCardList = [];
  modelList = [];
  manufacturersList = [];
  stateList: string[] = [];
  productCodesWithStock = [];
  soundCardListByProductCode = [];
  productCodesList: GenerateProductCode[] = [];

  pageSizeSoundCard = 10;
  pageSoundCard = 1;
  count: any;

  pageSizeProductCodeWithStock = 10;
  pageProductCodeWithStock = 1;
  countProductCodeWithStock: any;

  pageSizeSoundCardByProductCode = 10;
  pageSoundCardByProductCode = 1;
  countSoundCardByProductCode: any;

  isAddMode: boolean;
  isTableProductCodeSelected = true;
  isSearchProductCodesWithStock = false;
  isFiltered: boolean = false;
  isSerialNumberPresent = false;

  validatingForm: FormGroup;

  params = new HttpParams();

  constructor(private soundCardService: SoundCardService,
              private formBuilder: FormBuilder,
              private tokenService: TokenStorageService,
              private reloadPageService: ReloadPageService,
              private activatedRoute: ActivatedRoute,
              private router: Router,
              private enumService: EnumService,
              private filterService: FilterService,
              private productCodeService: GenerateProductCodeService,
              private location: Location) { }

  ngOnInit(): void {
    this.stateList = this.enumService.getValues(EnumState);

    this.getRouting();
    this.soundCardForm();
    this.getAllGenerateProductCodes();
    this.getSoundCardSearchResult();
    this.getAllModels();
    this.getAllManufacturers();
    this.getAllProductCodesWithStock();
  }

  get formFields(){
    return this.validatingForm.controls;
  }

  soundCardForm(){
    this.validatingForm = this.formBuilder.group({
      productCode: new FormControl({value: '', disabled: true}, Validators.required),
      productName: new FormControl('', Validators.required),
      serialNumber: new FormControl('', Validators.required),
      manufacturer: new FormControl('', Validators.required),
      model: new FormControl('', Validators.required),
      productInformation: new FormControl('', Validators.required),
      priceIn: new FormControl('', Validators.required),
      state: new FormControl('', Validators.required),
      createdBy: new FormControl(''),
      updatedBy: new FormControl('')
    });
  }


  /***************************** Search, Filter, Pagination for main table tab ***************************/
  getSoundCardSearchResult(){
    const params = this.getPaginationParams(this.pageSoundCard, this.pageSizeSoundCard);
    this.soundCardService.getSearchResult(this.query, params).subscribe((data: any) => {
      this.soundCardList = data.content;
      this.count = data.totalElements;

      if (this.query !== '') {
        this.soundCardList = [];

        for (let item of data.content) {
          this.soundCardList.push(item);
        }

        this.count = data.totalElements;
        this.inputSearch.nativeElement.value = '';

      }
    }, (error: HttpErrorResponse) => {
      this.errorMessage = error.error.message;
    });
  }

  getSoundCardFilterResults(): void {
    let pageParams = this.getPaginationParams(this.pageSoundCard, this.pageSizeSoundCard);
    this.soundCardService.getFilter(this.params, pageParams).subscribe((data: any) => {

      this.count = data.totalElements;
      this.soundCardList = [];
      for (const item of data.content) {
        this.soundCardList.push(item);
      }

      this.query = '';
    }, (error: HttpErrorResponse) => {
      this.errorMessage = error.error.message;
    });
  }

  getAllModels(){
    this.soundCardService.getModels().subscribe((data: any) => {
      this.modelList = data;
    }, (error: HttpErrorResponse) => {
      this.errorMessage = error.error.message;
    });
  }

  getAllManufacturers(){
    this.soundCardService.getManufacturers().subscribe((data: any) => {
      this.manufacturersList = data;
    }, (error: HttpErrorResponse) => {
      this.errorMessage = error.error.message;
    });
  }

  getEventSearchResult(event) {
    this.isFiltered = false;
    this.query = event.target.value;
    this.getSoundCardSearchResult();
  }

  handlePageChangeSearchAndFilter(event) {
    this.pageSoundCard = event;

    if (this.isFiltered) {
      this.getSoundCardFilterResults();
    } else {
      this.getSoundCardSearchResult();
    }
  }

  handlePageSizeChangeSearchAndFilter(event) {
    this.pageSizeSoundCard = event.target.value;
    this.pageSoundCard = 1;

    if (this.isFiltered) {
      this.getSoundCardFilterResults();
    } else {
      this.getSoundCardSearchResult();
    }
  }

  getRequestParamsForFilter(event) {
    this.isFiltered = true;
    if (event.target.checked) {
      this.params = this.filterService.setParamsFilter(event);
      this.getSoundCardFilterResults();
    }

    if (!event.target.checked) {
      this.params = this.filterService.deleteFilter(event);
      this.getSoundCardFilterResults();
    }
  }

  resetFilters() {
    this.isFiltered = false;
    window.location.reload();
  }
  /***************************** End Search, Filter, Pagination for main table tab ************************/

  /***************************** Search, Pagination, Filter for second table tab **************************/
  getAllProductCodesWithStock(): void {
    const params = this.getPaginationParams(this.pageProductCodeWithStock, this.pageSizeProductCodeWithStock);
    this.soundCardService.getAllProductCodesWithStock(params).subscribe((data: any) => {
      this.productCodesWithStock = data.content;
      this.countProductCodeWithStock = data.totalElements;
    }, (error: HttpErrorResponse) => {
      this.errorMessage = error.error.message;
    });
  }

  getAllSearchProductCodesWithStock(): void {
    const pageParams = this.getPaginationParams(this.pageProductCodeWithStock, this.pageSizeProductCodeWithStock);
    this.soundCardService.getAllSearchProductCodesWithStock(this.params, pageParams).subscribe((data: any) => {

      this.productCodesWithStock = [];
      this.productCodesWithStock = data.content;
      this.countProductCodeWithStock = data.totalElements;
      this.inputSearchStock.nativeElement.value = '';

    }, (error: HttpErrorResponse) => {
      this.errorMessage = error.error.message;
    });
  }

  getSearchResultProductCodesWithStock(event) {
    this.isSearchProductCodesWithStock = true;
    this.query = event.target.value;
    this.params = this.params.set('search', this.query);
    this.getAllSearchProductCodesWithStock();
  }

  handlePageChangeProductCodesWithStock(event) {
    this.pageProductCodeWithStock = event;
    if (this.isSearchProductCodesWithStock) {
      this.getAllSearchProductCodesWithStock();
    } else {
      this.getAllProductCodesWithStock();
    }
  }

  handlePageSizeChangeProductCodesWithStock(event) {
    this.pageSizeProductCodeWithStock = event.target.value;
    this.pageProductCodeWithStock = 1;

    if (this.isSearchProductCodesWithStock) {
      this.getAllSearchProductCodesWithStock();
    } else {
      this.getAllProductCodesWithStock();
    }
  }

  getSoundCardByProductCode(productCode: any) {
    this.toggleProductCodeTable();
    this.getProductCode = productCode;
    this.router.navigate(['dashboard/sound-card'], {queryParams: {productCode: productCode}});
    const params = this.getPaginationParams(this.pageSoundCardByProductCode, this.pageSizeSoundCardByProductCode);
    this.soundCardService.getByProductCode(productCode, params).subscribe((data: any) => {
      this.soundCardListByProductCode = data.content;
      this.countSoundCardByProductCode = data.totalElements;
    }, (error: HttpErrorResponse) => {
      this.errorMessage = error.error.message;
    });
  }

  clearSearchProductCodesWithStock() {
    this.query = '';
    this.getAllProductCodesWithStock();
  }

  handlePageSizeChangeSoundCardByProductCode(event) {
    this.pageSizeSoundCardByProductCode = event.target.value;
    this.pageSoundCardByProductCode = 1;

    this.getSoundCardByProductCode(this.getProductCode);
    this.toggleProductCodeTable();
  }

  handlePageChangeSoundCardByProductCode(event) {
    this.pageSoundCardByProductCode = event;
    this.getSoundCardByProductCode(this.getProductCode);
    this.toggleProductCodeTable();
  }
  /***************************** End Search, Pagination, Filter for second table tab **************************/
  /************************** General Functions **********************************************************/
  closeModal() {
    this.isAddMode = true;
    this.validatingForm.reset();
    this.reloadPageService.skipLocation('dashboard/sound-card');

    if (this.isSerialNumberPresent){
      this.isSerialNumberPresent = false;
      this.errorMessage = '';
    }
  }

  getRouting() {
    this.activatedRoute.queryParams.subscribe(param => {
      this.id = param['id'];
    });
    if (!this.id) {
      this.isAddMode = true;
    } else {
      this.isAddMode = false;
    }
  }

  getPaginationParams(page, pageSize) {
    let params = {};
    if (page) {
      params['page'] = page - 1;
    }
    if (pageSize) {
      params['size'] = pageSize;
    }
    return params;
  }

  toggleProductCodeTable() {
    this.isTableProductCodeSelected = !this.isTableProductCodeSelected;
  }

  clearSearch() {
    this.query = '';
    this.getSoundCardSearchResult();
  }

  goBack() {
    if (this.getProductCode) {
      this.getProductCode = null;
      this.toggleProductCodeTable();
      this.location.back();
    }

    //TODO
    // redo the location.back it causes some errors
  }

  /************************** End General Functions ******************************************************/
  /************************** Create, Update, Delete, Submit, Patch Form ****************************************************/

  private addSoundCard(): void {
    this.validatingForm.get('createdBy').setValue(this.tokenService.getUser().firstName + ' ' + this.tokenService.getUser().lastName);
    this.formFields.productCode.enable();
    this.validatingForm.get('productCode').setValue(this.selectedProductCode);
    this.soundCardService.add(this.validatingForm.value)
      .toPromise()
      .then((response) => {
        this.reloadPageService.reload();
        this.isSerialNumberPresent = false;
        document.querySelector('.modal-backdrop').remove();
      }).catch((error: HttpErrorResponse) => {
      this.isSerialNumberPresent = true;
      this.errorMessage = error.error.message;
      document.getElementById('addSoundCard-btn').setAttribute('data-backdrop', 'static');
    });
  }

  private editSoundCard(): void {
    this.validatingForm.get('updatedBy').setValue(this.tokenService.getUser().firstName + ' ' + this.tokenService.getUser().lastName);
    this.formFields.productCode.enable();
    this.validatingForm.get('productCode').setValue(this.selectedProductCode);
    this.soundCardService.editById(this.id, this.validatingForm.value)
      .toPromise()
      .then((response) => {
        this.router.navigate(['dashboard/sound-card']).finally(() => this.reloadPageService.reload());
        this.isAddMode = true;
        this.isSerialNumberPresent = false;
        document.querySelector('.modal-backdrop').remove();
      }).catch((error: HttpErrorResponse) => {

        this.isSerialNumberPresent = true;
        this.errorMessage = error.error.message;
      document.getElementById('editSoundCard-btn').setAttribute('data-backdrop', 'static');
    });
  }

  deleteSoundCard(soundCard: SoundCard) {
    swal({
      title: 'Esti sigur ?',
      text: 'Inregistrarea va fi stearsa definitiv !',
      icon: 'warning',
      buttons: ['Anulare', 'Sterge'],
      dangerMode: true,
    })
      .then((willDelete) => {
        if (willDelete) {
          this.soundCardService.deleteById(Number(soundCard.id)).subscribe(response => {
            this.reloadPageService.reload();
          }, (error: HttpErrorResponse) => {
            this.errorMessage = error.error.message;
          });
        }
      });
  }

  onSubmit() {
    if (this.validatingForm.invalid) {
      return;
    }

    if (this.isAddMode) {
      this.addSoundCard();
    } else {
      this.editSoundCard();
    }
  }

  patchForm(soundCard: any) {
    this.isAddMode = false;
    const data = this.soundCardList.find(i => i.id == soundCard.id);
    this.router.navigate(['dashboard/sound-card'], {queryParams: {id: soundCard.id}});
    this.validatingForm.patchValue(data);
  }

  getAllGenerateProductCodes(): void {
    this.productCodeService.getAll(SoundCard.generateProductURL).subscribe((data: any) => {
      this.productCodesList = data;
    }, (error: HttpErrorResponse) => {
      this.errorMessage = error.error.message;
    });
  }

  setGeneratedProductCode(event: any) {
    if (event === undefined || event === null) {
      return;
    }
    this.selectedProductCode = this.productCodesList.find(p => p.productName == event).productCode;

  }
  /***********************End Create, Update, Delete ****************************************************/


}
