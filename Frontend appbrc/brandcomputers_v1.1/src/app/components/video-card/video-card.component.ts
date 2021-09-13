import {Component, ElementRef, OnInit, ViewChild} from '@angular/core';
import {FormBuilder, FormControl, FormGroup, Validators} from '@angular/forms';
import {HttpErrorResponse, HttpParams} from '@angular/common/http';
import {EnumService} from '../../helper/enum.service';
import {StorageService} from '../../services/components/storage.service';
import {TokenStorageService} from '../../services/token-storage.service';
import {ReloadPageService} from '../../services/reload-page.service';
import {ActivatedRoute, Router} from '@angular/router';
import {FilterService} from '../../helper/filter.service';
import {GenerateProductCodeService} from '../../services/components/generate-product-code.service';
import {Location} from '@angular/common';
import {EnumState} from '../../model/enum/EnumState';
import {Storage} from '../../model/components/Storage';
import Swal from 'sweetalert2';
import { VideoCardService } from 'app/services/components/video-card.service';
import { VideoCard } from 'app/model/components/VideoCard';
import { GenerateProductCode } from 'app/model/components/GenerateProductCode';

@Component({
  selector: 'app-video-card',
  templateUrl: './video-card.component.html',
  styleUrls: ['./video-card.component.css',
    '../../../assets/css/_modal_filter.css',
    '../../../assets/css/_table_format.css',
    '../../../assets/css/_tab_pane_custom.css',
    '../../../assets/css/_fav_icons_custom.css',
    '../../../assets/css/_pagination_custom.css']
})
export class VideoCardComponent implements OnInit {

  @ViewChild('inputSearch') inputSearch: ElementRef;
  @ViewChild('inputSearchStock') inputSearchStock: ElementRef;
  @ViewChild('closeAddEditModal') closeAddEditModal;

  id: number;
  getProductCode: string;
  query = '';
  errorMessage = '';

  videoCardList = [];
  pageSizeVideoCard = 10;
  pageVideoCard = 1;
  count: any;
  isTableProductCodeSelected = true;
  productCodesWithStock = [];
  pageSizeProductCodeWithStock = 10;
  pageProductCodeWithStock = 1;
  countProductCodeWithStock: any;
  videoCardListByProductCode = [];
  pageSizeVideoCardByProductCode = 10;
  pageVideoCardByProductCode = 1;
  countVideoCardByProductCode: any;

  selectedProductCode = new GenerateProductCode();

  isAddMode: boolean;
  isSerialNumberPresent = false;
  validatingForm: FormGroup;
  productCodesList = [];
  productCodesListInactive = [];
  stateList = [];

  manufacturerList = [];
  modelList = [];
  memoryList = [];
  profileList = [];
  typeOfMemoryList = [];
  numberOfBitsList = [];
  seriesList = [];
  stateListFilter = [];

  isFiltered: boolean = false;
  isSearchProductCodesWithStock = false;

  params = new HttpParams();

  constructor(private enumService: EnumService,
              private videoCardService: VideoCardService,
              private fomBuilder: FormBuilder,
              private tokenService: TokenStorageService,
              private reloadPageService: ReloadPageService,
              private activatedRoute: ActivatedRoute,
              private router: Router,
              private filterService: FilterService,
              private productCodeService: GenerateProductCodeService,
              private location: Location) {
  }

  ngOnInit(): void {
    this.stateList = this.enumService.getValues(EnumState);
    this.videoCardForm();
    this.getRouting();
    this.getAllGenerateProductCodes();
    this.getVideoCardSearchResult();
    this.getAllDataForFilter();
    this.getAllProductCodesWithStock();
  }

  get formFields() {
    return this.validatingForm.controls;
  }

  videoCardForm() {
    this.validatingForm = this.fomBuilder.group({
      generateProductCode: new FormControl({value: '', disabled: true}, Validators.required),
      productName: new FormControl('', Validators.required),
      serialNumber: new FormControl('', Validators.required),
      manufacturer: new FormControl('', Validators.required),
      model: new FormControl('', Validators.required),
      memory: new FormControl('', Validators.required),
      profile: new FormControl('', Validators.required),
      vga: new FormControl('', Validators.required),
      hdmi: new FormControl('', Validators.required),
      dvi: new FormControl('', Validators.required),
      displayPort: new FormControl('', Validators.required),
      numberOfPortsVGA: new FormControl('', Validators.required),
      numberOfPortsHDMI: new FormControl('', Validators.required),
      numberOfPortsDVI: new FormControl('', Validators.required),
      numberOfPortsDisplayPort: new FormControl('', Validators.required),
      typeOfMemory: new FormControl('', Validators.required),
      numberOfBits: new FormControl('', Validators.required),
      series: new FormControl('', Validators.required),
      productInformation: new FormControl('', Validators.required),
      priceIn: new FormControl('', Validators.required),
      quantity: new FormControl('', Validators.required),
      unitOfMeasurement: new FormControl('', Validators.required),
      state: new FormControl('', Validators.required),
      createdBy: new FormControl(''),
      updatedBy: new FormControl('')
    });
  }

  /***************************** Search, Filter, Pagination for main table tab ***************************/

  getVideoCardSearchResult() {
    const params = this.getPaginationParams(this.pageVideoCard, this.pageSizeVideoCard);
    this.videoCardService.getSearchResult(this.query, params).subscribe((data: any) => {
      this.videoCardList = data.content;
      this.count = data.totalElements;

      if (this.query !== '') {
        this.videoCardList = [];

        for (let item of data.content) {
          this.videoCardList.push(item);
        }

        this.count = data.totalElements;
        this.inputSearch.nativeElement.value = '';

      }
    }, (error: HttpErrorResponse) => {
      this.errorMessage = error.error.message;
    });
  }

  getVideoCardFilterResults(): void {
    let pageParams = this.getPaginationParams(this.pageVideoCard, this.pageSizeVideoCard);
    this.videoCardService.getFilter(this.params, pageParams).subscribe((data: any) => {

      this.count = data.totalElements;
      this.videoCardList = [];
      for (const item of data.content) {
        this.videoCardList.push(item);
      }

      this.query = '';
    }, (error: HttpErrorResponse) => {
      this.errorMessage = error.error.message;
    });
  }

  getAllDataForFilter() {
    this.videoCardService.getDataForFilter().subscribe((data: any) => {
      this.manufacturerList = data.manufacturers;
      this.memoryList = data.memory;
      this.modelList = data.models;
      this.numberOfBitsList = data.numberOfBits;
      this.profileList = data.profile;
      this.seriesList = data.series;
      this.stateListFilter = data.state;
      this.typeOfMemoryList = data.typeOfMemory;
    }, (error: HttpErrorResponse) => {
      this.errorMessage = error.error.message;
    });
  }

  getEventSearchResult(event) {
    this.isFiltered = false;
    this.query = event.target.value;
    this.getVideoCardSearchResult();
  }

  handlePageChangeSearchAndFilter(event) {
    this.pageVideoCard = event;

    if (this.isFiltered) {
      this.getVideoCardFilterResults();
    } else {
      this.getVideoCardSearchResult();
    }
  }

  handlePageSizeChangeSearchAndFilter(event) {
    this.pageSizeVideoCard = event.target.value;
    this.pageVideoCard = 1;

    if (this.isFiltered) {
      this.getVideoCardFilterResults();
    } else {
      this.getVideoCardSearchResult();
    }
  }

  getRequestParamsForFilter(event) {
    this.isFiltered = true;
    if (event.target.checked) {
      this.params = this.filterService.setParamsFilter(event);
      this.getVideoCardFilterResults();
    }

    if (!event.target.checked) {
      this.params = this.filterService.deleteFilter(event);
      this.getVideoCardFilterResults();
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
    this.videoCardService.getAllProductCodesWithStock(params).subscribe((data: any) => {
      this.productCodesWithStock = data.content;
      this.countProductCodeWithStock = data.totalElements;
    }, (error: HttpErrorResponse) => {
      this.errorMessage = error.error.message;
    });
  }

  getAllSearchProductCodesWithStock(): void {
    const pageParams = this.getPaginationParams(this.pageProductCodeWithStock, this.pageSizeProductCodeWithStock);
    this.videoCardService.getAllSearchProductCodesWithStock(this.params, pageParams).subscribe((data: any) => {

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

  getVideoCardByProductCode(productCode: any) {
    this.toggleProductCodeTable();
    this.getProductCode = productCode;
    const params = this.getPaginationParams(this.pageVideoCardByProductCode, this.pageSizeVideoCardByProductCode);
    this.videoCardService.getByProductCode(productCode, params).subscribe((data: any) => {
      this.videoCardListByProductCode = data.content;
      this.countVideoCardByProductCode = data.totalElements;
    }, (error: HttpErrorResponse) => {
      this.errorMessage = error.error.message;
    });
  }

  clearSearchProductCodesWithStock() {
    this.query = '';
    this.getAllProductCodesWithStock();
  }

  handlePageSizeChangeVideoCardByProductCode(event) {
    this.pageSizeVideoCardByProductCode = event.target.value;
    this.pageVideoCardByProductCode = 1;

    this.getVideoCardByProductCode(this.getProductCode);
    this.toggleProductCodeTable();
  }

  handlePageChangeVideoCardByProductCode(event) {
    this.pageVideoCardByProductCode = event;
    this.getVideoCardByProductCode(this.getProductCode);
    this.toggleProductCodeTable();
  }

  /***************************** End Search, Pagination, Filter for second table tab **********************/

  /************************** General Functions **********************************************************/
  closeModal() {
    this.isAddMode = true;
    this.validatingForm.reset();
    this.closeAddEditModal.nativeElement.click();

    if (this.isSerialNumberPresent) {
      this.isSerialNumberPresent = false;
      this.errorMessage = '';
    }

    this.router.navigate([], {});
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
    this.getVideoCardSearchResult();
  }

  goBack() {
    if (this.getProductCode) {
      this.getProductCode = null;
      this.toggleProductCodeTable();
    }

    //TODO
    // redo the location.back it causes some errors
  }

  /************************** End General Functions ******************************************************/

  /************************** Create, Update, Delete, Submit, Patch Form ****************************************************/

  private addVideoCard(): void {
    this.validatingForm.get('createdBy').setValue(this.tokenService.getUser().firstName + ' ' + this.tokenService.getUser().lastName);

    this.formFields.generateProductCode.enable();
    this.formFields.productName.disable();
    this.validatingForm.get('generateProductCode').setValue(this.selectedProductCode);

    this.videoCardService.add(this.validatingForm.value)
        .toPromise()
        .then((response) => {
          this.closeAddEditModal.nativeElement.click();
          this.isSerialNumberPresent = false;
          this.formFields.generateProductCode.disable();
          this.formFields.productName.enable();
          this.getVideoCardSearchResult();
          this.getAllProductCodesWithStock();
        }).catch((error: HttpErrorResponse) => {
          this.isSerialNumberPresent = true;
          this.errorMessage = error.error.message;
          document.getElementById('addVideoCard-btn').setAttribute('data-backdrop', 'static');
    });
  }

  private editVideoCard(): void {
    this.validatingForm.get('updatedBy').setValue(this.tokenService.getUser().firstName + ' ' + this.tokenService.getUser().lastName);

    this.formFields.generateProductCode.enable();
    this.formFields.productName.disable();
    this.validatingForm.get('generateProductCode').setValue(this.selectedProductCode);

    this.videoCardService.editById(this.id, this.validatingForm.value)
        .toPromise()
        .then((response) => {
          this.closeAddEditModal.nativeElement.click();
          this.formFields.generateProductCode.disable();
          this.formFields.productName.enable();
          this.isAddMode = true;
          this.isSerialNumberPresent = false;
          this.getAllProductCodesWithStock();
          this.getVideoCardSearchResult();
          this.router.navigate([], {});
        }).catch((error: HttpErrorResponse) => {
          this.isSerialNumberPresent = true;
          this.errorMessage = error.error.message;
          document.getElementById('editVideoCard-btn').setAttribute('data-backdrop', 'static');
    });
  }

  deleteVideoCard(videoCard: VideoCard) {
    Swal.fire({
      title: 'Esti sigur?',
      text: "Inregistrarea va fi stearsa definitiv si produsele asociate!",
      icon: 'warning',
      showCancelButton: true,
      confirmButtonColor: '#3085d6',
      cancelButtonColor: '#d33',
      confirmButtonText: 'Da, sterge!'
    }).then((willDelete) => {
          if (willDelete.isConfirmed) {
            this.videoCardService.deleteById(Number(videoCard.id)).subscribe(response => {
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
      this.addVideoCard();
    } else {
      this.editVideoCard();
    }
  }

  patchForm(videoCard: any, param: any) {
    this.isAddMode = false;

    const productCodeInactive = this.productCodesListInactive
        .find(s => s.productCode === videoCard.generateProductCode.productCode);
    const productCodeActive = this.productCodesList
        .find(s => s.productCode === videoCard.generateProductCode.productCode);

    if (productCodeInactive !== undefined && productCodeInactive.state === false) {
      this.productCodeService.inactiveProductCode(param, productCodeInactive);
      return;
    }

    this.selectedProductCode = videoCard.generateProductCode;
    this.validatingForm.patchValue(videoCard);
    this.validatingForm.get('productName')
        .setValue(productCodeActive);

    this.router.navigate(['components/video-card'], {queryParams: {id: videoCard.id}});
  }

  getAllGenerateProductCodes(): void {
    this.productCodeService.getAll(VideoCard.generateProductURL).subscribe((data: any) => {
      this.productCodesList = data.filter(productCode => productCode.state === true);
      this.productCodesListInactive = data.filter(productCode => productCode.state === false);
    }, (error: HttpErrorResponse) => {
      this.errorMessage = error.error.message;
    });
  }

  setGeneratedProductCode(event: any) {
    if (event === undefined || event === null) {
      return;
    }
    this.selectedProductCode = this.productCodesList.find(p => p.productName == event.productName);

  }

  getSelectedPort(event: any) {
    const vga = event.target.id == 'vga';
    const hdmi = event.target.id == 'hdmi';
    const dvi = event.target.id == 'dvi';
    const displayPort = event.target.id == 'displayPort';

    const bool = event.target.value == 'false';

    if (vga && bool) {
      this.formFields.numberOfPortsVGA.setValue(0);
    }
    if (hdmi && bool) {
      this.formFields.numberOfPortsHDMI.setValue(0);
    }
    if (dvi && bool) {
      this.formFields.numberOfPortsDVI.setValue(0);
    }
    if (displayPort && bool) {
      this.formFields.numberOfPortsDisplayPort.setValue(0);
    }
  }

  /***********************End Create, Update, Delete ****************************************************/
}
