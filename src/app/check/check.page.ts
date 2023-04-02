import { Component, OnInit } from '@angular/core';
import { SessionService } from '../session/session.service';

@Component({
    selector: 'app-check',
    templateUrl: './check.page.html',
    styleUrls: ['./check.page.scss'],
})
export class CheckPage implements OnInit {
    idcard = "333333333333";
    birthday = "2023-03-05";
    data: any = {};
    constructor(
        private session: SessionService
    ) { }

    ngOnInit() {
    }
    async Search() {
        let res: any = await this.session.Ajax(this.session.api + "/student-search.php", {
            idcard: this.idcard,
            birthday: this.birthday
        });
        if (res.status == "ok") {
            this.data = res.data;
            // this.session.ShowAlert(res.data.idcard);
            // this.session.LinkTo("login", false);
        } else {
            this.session.ShowAlert("No ");
        }
    }
    Clear() {
        this.idcard = "";
        this.birthday = "";
    }
}
