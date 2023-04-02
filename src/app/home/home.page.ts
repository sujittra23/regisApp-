import { Component } from '@angular/core';
import { SessionService } from '../session/session.service';

@Component({
    selector: 'app-home',
    templateUrl: 'home.page.html',
    styleUrls: ['home.page.scss'],
})
export class HomePage {
    constructor(
        private session: SessionService
    ) {
        this.Init();

    }
    async Init() {

    }
    async Logout() {
        let st = await this.session.ShowConfirm("คุณต้องการออกจากระบบใช่หรือไม่ ?")
        if (st == true) {
            this.session.RemoveStorage("auth");
            this.session.LinkTo("login");
        }
    }
    GoToMenu() {
        this.session.LinkTo("menu");
    }
    GoToHistory() {
        this.session.LinkTo("history");
    }
}
