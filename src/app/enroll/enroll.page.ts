import { Component, OnInit } from '@angular/core';
import { SessionService } from '../session/session.service';

@Component({
    selector: 'app-enroll',
    templateUrl: './enroll.page.html',
    styleUrls: ['./enroll.page.scss'],
})
export class EnrollPage implements OnInit {
    idcard = "";
    birthday = "";
    title = "";
    firstname = "";
    lastname = "";
    sex = "";
    nation = "";
    relig = "";
    talent = "";
    disab = "";
    fhname = "";
    fhoccup = "";
    mhname = "";
    mhoccup = ""
    address1 = "";
    address2 = "";
    address3 = "";
    address4 = "";
    address5 = "";
    address6 = "";
    address7 = "";
    address8 = "";
    email = "";
    phone = "";
    finish = "";
    grade = "";
    apply = "";
    dep = "";
    image1 = "";
    image2 = "";
    image3 = "";
    constructor(
        private session: SessionService
    ) { }

    ngOnInit() {
    }
    async Add() {
        let res: any = await this.session.Ajax(this.session.api + "/student-add.php", {
            idcard: this.idcard,
            birthday: this.birthday,
            title: this.title,
            firstname: this.firstname,
            lastname: this.lastname,
            sex: this.sex,
            nation: this.nation,
            relig: this.relig,
            talent: this.talent,
            disab: this.disab,
            fhname: this.fhname,
            fhoccup: this.fhoccup,
            mhname: this.fhoccup,
            mhoccup: this.fhoccup,
            address1: this.address1,
            address2: this.address2,
            address3: this.address3,
            address4: this.address4,
            address5: this.address5,
            address6: this.address6,
            address7: this.address7,
            address8: this.address8,
            email: this.email,
            phone: this.phone,
            finish: this.finish,
            grade: this.grade,
            apply: this.apply,
            dep: this.dep,
            image1: this.image1,
            image2: this.image2,
            image3: this.image3,
        }
        );
        if (res.status == "ok") {
            this.session.ShowAlert("ลงทะเบียนสำเร็จแล้ว");
            this.session.LinkTo("login", false);
        } else {
            this.session.ShowAlert("กรุณาตรวจสอบข้อมูลให้ถูกต้อง");
        }
    }
    async onBlur() {
        let res: any = await this.session.Ajax(this.session.api + "/check-card.php", {
            idcard: this.idcard,
        });
        if (res.status == "ok") {
            this.session.ShowAlert("เลขบัตรประชนชนนี้ได้ลงทะเบียนแล้ว");
            this.idcard = "";
        } else {

        }
    }
    Clear() {
        this.idcard = "";
        this.birthday = "";
        this.idcard = "";
        this.birthday = "";
        this.title = "";
        this.firstname = "";
        this.lastname = "";
        this.sex = "";
        this.nation = "";
        this.relig = "";
        this.talent = "";
        this.disab = "";
        this.fhname = "";
        this.fhoccup = "";
        this.fhoccup = "";
        this.address1 = "";
        this.address2 = "";
        this.address3 = "";
        this.address4 = "";
        this.address5 = "";
        this.address6 = "";
        this.address7 = "";
        this.address8 = "";
        this.email = "";
        this.phone = "";
        this.finish = "";
        this.grade = "";
        this.apply = "";
        this.dep = "";
        this.image1 = "";
        this.image2 = "";
        this.image3 = "";
    }
}
