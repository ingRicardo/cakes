import { Component } from '@angular/core';
import { TranslateService } from '@ngx-translate/core';

@Component({
  selector: 'app-changelang',
  templateUrl: './changelang.component.html',
  styleUrl: './changelang.component.css'
})
export class ChangelangComponent {


  username: string = "";
  password: string = "";
  selectLang: string = "";
  TransLang : any[] = [];
  LoginFormLabels = {
    username: "Username",
    password: "Password",
    submit: "Submit"
  }
  constructor(public translate: TranslateService) {
    translate.setDefaultLang('esp');
    translate.addLangs(['en', 'esp']);
    translate.use('esp');
  }
  setTransLanguage() {
    this.translate.use(this.selectLang);
  }
  getTransLanguage() {
    this.TransLang = [...this.translate.getLangs()];
  }
  ngOnInit() {
    this.getTransLanguage();
  }
}
