import { Component } from '@angular/core';
import { TranslateService } from '@ngx-translate/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'cakes';
  constructor(public translate: TranslateService) {
    translate.setDefaultLang('esp');
    translate.addLangs(['en', 'esp']);
    translate.use('esp');
  }
}
