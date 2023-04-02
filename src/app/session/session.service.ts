import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { AlertController, LoadingController } from '@ionic/angular';
import { timeout } from 'rxjs';
import { Storage } from '@ionic/storage-angular';

@Injectable({
    providedIn: 'root'
})
export class SessionService {
    api = "http://localhost/regisAppApi";  // ตำแหน่งที่ตั้งของ api
    auth: any;                              // ข้อมูลการล็อกอิน
    constructor(
        private router: Router,
        private http: HttpClient,
        private alertCtrl: AlertController,
        private loadingCtrl: LoadingController,
        private storage: Storage
    ) { }

    async Ajax(url: any, data: any, isloading = true) {
        let formData = new FormData();
        for (const [key, item] of Object.entries(data)) {
            formData.append(key, item + "");
        }
        let loading: any;
        if (isloading == true) {
            loading = await this.loadingCtrl.create({
                message: "กำลังประมวลผล",
            });
            await loading.present();
        }
        return new Promise((resolve, reject) => {
            setTimeout(() => {
                this.http.post(url, formData, { responseType: 'json' })
                    .pipe(
                        timeout(5000)
                    )
                    .subscribe((response: any) => {
                        if (isloading == true) { loading.dismiss(); }
                        resolve(response);
                    }, error => {
                        if (isloading == true) { loading.dismiss(); }
                        reject("Network Fail.");
                    });
            }, 0);
        });
    }
    LinkTo(page: any, type = true) {
        // this.router.navigateByUrl(page);
        if (type == false) {
            this.router.navigateByUrl(page, { replaceUrl: true }); // ไม่จำประวัติหน้าก่อนหน้า
        } else {
            this.router.navigateByUrl(page);  // จำประวัติหน้าก่อนหน้า
        }
    }
    ShowAlert(message: any) {
        let msg: any = message;
        if (typeof message === 'object') msg = JSON.stringify(message);
        if (typeof message === 'string') msg = message;
        return new Promise(async resolve => {
            const alert = await this.alertCtrl.create({
                header: "แจ้งข้อความ",
                message: msg,
                backdropDismiss: false,
                buttons: [
                    {
                        text: "ตกลง",
                        handler: () => {
                            resolve(true);
                        }
                    },
                ]
            });
            await alert.present();
        });
    }
    ShowConfirm(message: any) {
        let msg: any = message;
        if (typeof message === 'object') msg = JSON.stringify(message);
        if (typeof message === 'string') msg = message;
        return new Promise(async resolve => {
            let alert = await this.alertCtrl.create({
                header: "คำยืนยัน",
                message: msg,
                backdropDismiss: false,
                buttons: [
                    {
                        text: "ยกเลิก",
                        role: 'cancel',
                        handler: () => {
                            resolve(false);
                        }
                    },
                    {
                        text: "ตกลง",
                        handler: () => {
                            resolve(true);
                        }
                    }
                ]
            });
            await alert.present();
        });

    }
    SetStorage(key: any, val: any) {
        return this.storage.set(key, val);
    }
    GetStorage(key: any) {
        return this.storage.get(key);
    }
    RemoveStorage(key: any) {
        return this.storage.remove(key);
    }
}
