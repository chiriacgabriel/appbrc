import {Component, OnInit, ElementRef} from '@angular/core';
import {Router, ActivatedRoute} from '@angular/router';
import {Location, LocationStrategy, PathLocationStrategy} from '@angular/common';
import {FormControl, FormGroup, Validators} from '@angular/forms';
import {NotificationService} from '../../helper/notification.service';
import { RegisterService } from 'app/services/register.service';
import {TokenStorageService} from '../../services/token-storage.service';

declare var $: any;

@Component({
    moduleId: module.id,
    selector: 'register-cmp',
    templateUrl: './register.component.html',
    styleUrls: ['./register.component.css']
})

export class RegisterComponent implements OnInit {
    focus;
    focus1;
    focus2;
    focus3;
    focus4;
    test: Date = new Date();
    isRegistered: boolean;
    isSignupFailed = false;
    validatingForm: FormGroup;
    private toggleButton;
    private sidebarVisible: boolean;
    private nativeElement: Node;

    constructor(private element: ElementRef,
                private registerService: RegisterService,
                private tokenStorage: TokenStorageService,
                private notificationService: NotificationService,
                private router: Router) {
        this.nativeElement = element.nativeElement;
        this.sidebarVisible = false;
        this.isRegistered = false;
        this.isSignupFailed = false;
    }

    registerForm() {
        this.validatingForm = new FormGroup({
            firstName: new FormControl('', Validators.required),
            lastName: new FormControl('', Validators.required),
            email: new FormControl('', Validators.email),
            password: new FormControl('', Validators.required),
            confirmPassword: new FormControl('', Validators.required)
        });
    }

    ngOnInit() {
        if (this.tokenStorage.getToken() !== null) {
            this.router.navigateByUrl('/dashboard').then();
        }
        this.registerForm();
        this.checkFullPageBackgroundImage();

        const navbar: HTMLElement = this.element.nativeElement;
        this.toggleButton = navbar.getElementsByClassName('navbar-toggle')[0];

        setTimeout(function () {
            // after 1000 ms we add the class animated to the login/register card
            $('.card').removeClass('card-hidden');
        }, 700)
    }

    ngOnDestroy() {
        const body = document.getElementsByTagName('body')[0];
        body.classList.remove('register-page');
    }

    checkFullPageBackgroundImage() {
        const $page = $('.full-page');
        const image_src = $page.data('image');
        const body = document.getElementsByTagName('body')[0];
        body.classList.add('register-page');
        if (image_src !== undefined) {
            const image_container = '<div class="full-page-background" style="background-image: url(' + image_src + ') "/>'
            $page.append(image_container);
        }
    };

    sidebarToggle() {
        const toggleButton = this.toggleButton;
        const body = document.getElementsByTagName('body')[0];
        const sidebar = document.getElementsByClassName('navbar-collapse')[0];
        if (this.sidebarVisible == false) {
            setTimeout(function () {
                toggleButton.classList.add('toggled');
            }, 500);
            body.classList.add('nav-open');
            this.sidebarVisible = true;
        } else {
            this.toggleButton.classList.remove('toggled');
            this.sidebarVisible = false;
            body.classList.remove('nav-open');
        }
    }

    onSubmit(): void {
        this.registerService.register(this.validatingForm.value).subscribe(data => {
            this.isRegistered = true;
            this.isSignupFailed = false;
            this.router.navigateByUrl('pages/login').then();
            this.notificationService
                .showNotification('top',
                                    'center',
                                    'Te-ai inregistrat cu succes!',
                                    'success');
        }, error => {
            const message = error.error.message.split(/\r\n|\r|\n/);

            this.notificationService.showNotification('top',
                'center',
                message.join('<span style="display: block"/>' +
                    '<span style="margin-left: 2vw"/>' +
                    '<i class="fa fa-circle" ' +
                    'style="font-size: 8px; ' +
                    'padding-right: 5px; ' +
                    'text-align: center;" aria-hidden="true"></i>'),
                'danger');
            this.isSignupFailed = true;
        });
    }
}
