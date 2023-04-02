import { Component, OnInit } from '@angular/core';
import { SessionService } from '../session/session.service';

@Component({
    selector: 'app-login',
    templateUrl: './login.page.html',
    styleUrls: ['./login.page.scss'],
})
export class LoginPage implements OnInit {
    username = "somchai";
    password = "123456";
    constructor(
        private session: SessionService
    ) { }

    ngOnInit() {
    }
    async Login() {
        let res: any = await this.session.Ajax(this.session.api + "/login.php", {
            username: this.username,
            password: this.password
        });
        if (res.status == "ok") {
            this.session.auth = res.data;
            this.session.SetStorage("auth", res.data);
            this.session.LinkTo("home");
        } else {
            this.session.ShowAlert("คุณใส่รหัสผ่านผิด");
        }
    }
    Clear() {
        this.username = "";
        this.password = "";
    }
    GoToHome() {
        this.session.LinkTo("home");
    }
    GoTocourse() {
        this.session.LinkTo("course");
    }
    GoToenroll() {
        this.session.LinkTo("enroll");
    }
    GoTocheck() {
        this.session.LinkTo("check");
    }
    GoTocontact() {
        this.session.LinkTo("contact");
    }
}
