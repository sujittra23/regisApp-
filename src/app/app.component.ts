import { Component } from '@angular/core';
import { Storage } from '@ionic/storage-angular';
import { SessionService } from './session/session.service';

@Component({
    selector: 'app-root',
    templateUrl: 'app.component.html',
    styleUrls: ['app.component.scss'],
})
export class AppComponent {
    constructor(
        private storage: Storage,
        private session: SessionService
    ) {
        this.Init();
    }
    async Init() {
        await this.storage.create();
        let auth = await this.session.GetStorage("auth");
        if (auth == null) {
            this.session.LinkTo("login", false);
        } else {
            this.session.auth = auth;
            this.session.LinkTo("home", false);
        }
    }
}
