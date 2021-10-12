import {Component, OnInit, ElementRef} from '@angular/core';
import {Router, ActivatedRoute} from '@angular/router';
import {Location, LocationStrategy, PathLocationStrategy} from '@angular/common';
import {LoginService} from '../../services/login.service';
import {FormBuilder, FormControl, FormGroup, Validators} from '@angular/forms';
import {TokenStorageService} from '../../services/token-storage.service';
import {NotificationService} from '../../helper/notification.service';

declare var $: any;

@Component({
    moduleId: module.id,
    selector: 'login-cmp',
    templateUrl: './login.component.html',
    styleUrls: ['./login.component.css']
})

export class LoginComponent implements OnInit {
    focus;
    focus1;
    focus2;
    test: Date = new Date();
    private toggleButton;
    private sidebarVisible: boolean;
    private nativeElement: Node;
    private roles: string[];

    isLoggedIn: boolean;
    isLoginFailed: boolean;
    validatingForm: FormGroup;

    constructor(private element: ElementRef,
                private tokenStorage: TokenStorageService,
                private loginService: LoginService,
                private notificationService: NotificationService,
                private formBuilder: FormBuilder,
                private router: Router) {
        this.nativeElement = element.nativeElement;
        this.sidebarVisible = false;
        this.isLoggedIn = false;
        this.isLoginFailed = false;
        this.roles = [];
    }

    formLogin() {
        this.validatingForm = this.formBuilder.group({
            email: new FormControl('', Validators.email),
            password: new FormControl('', Validators.required)
        });
    }

    ngOnInit() {
        if (this.tokenStorage.getToken() !== null) {
            this.reloadPage();
        }
        if (this.tokenStorage.getToken()) {
            this.isLoggedIn = true;
            this.roles = this.tokenStorage.getUser().roles;
        }

        this.checkFullPageBackgroundImage();
        let body = document.getElementsByTagName('body')[0];
        body.classList.add('login-page');
        let navbar: HTMLElement = this.element.nativeElement;
        this.toggleButton = navbar.getElementsByClassName('navbar-toggle')[0];

        setTimeout(function () {
            // after 700 ms we add the class animated to the login/register card
            $('.card').removeClass('card-hidden');
        }, 700)

        this.formLogin();
    }

    ngOnDestroy() {
        var body = document.getElementsByTagName('body')[0];
        body.classList.remove('login-page');
    }

    checkFullPageBackgroundImage() {
        let $page = $('.full-page');
        let image_src = $page.data('image');

        if (image_src !== undefined) {
            let image_container = '<div class="full-page-background" style="background-image: url(' + image_src + ') "/>'
            $page.append(image_container);
        }
    };

    sidebarToggle() {
        let toggleButton = this.toggleButton;
        let body = document.getElementsByTagName('body')[0];
        let sidebar = document.getElementsByClassName('navbar-collapse')[0];
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
        this.loginService.login(this.validatingForm.value).subscribe(data => {
            this.tokenStorage.saveToken(data.token);
            this.tokenStorage.saveUser(data);

            this.isLoginFailed = false;
            this.isLoggedIn = true;
            this.roles = this.tokenStorage.getUser().roles;
            this.reloadPage();
        }, error => {
            this.notificationService.showNotification("top", "center", error.error.message, "danger");
            this.isLoginFailed = true;
        });
    }

    reloadPage(): void {
        this.router.navigateByUrl('/dashboard').then();
    }

}
