import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { CountUpModule } from 'countup.js-angular2';
import { AppComponent } from './app.component';
import { NavTopComponent } from './components/nav-top/nav-top.component';
import { NavLeftComponent } from './components/nav-left/nav-left.component';
import { MainComponent } from './components/main/main.component';
import { TablesComponent } from './components/tables/tables.component';
import { QuickStartComponent } from './components/quick-start/quick-start.component';
import { FooterComponent } from './components/footer/footer.component';
import { CardGreenComponent } from './UI components/card-green/card-green.component';
import { CardWhiteComponent } from './UI components/card-white/card-white.component';
import { BreadcrumbComponent } from './UI components/breadcrumb/breadcrumb.component';
import { MulticoloredProgressComponent } from './UI components/multicolored-progress/multicolored-progress.component';
import { AccordionComponent } from './UI components/accordion/accordion.component';
import { TableComponent } from './UI components/table/table.component';
import { TableTabsComponent } from './UI components/table-tabs/table-tabs.component';
import { QuickstartCardsComponent } from './components/quickstart-cards/quickstart-cards.component';
import { RightFixedTabButtonComponent } from './UI components/right-fixed-tab-button/right-fixed-tab-button.component';
import { CheckboxComponent } from './form-components/checkbox/checkbox.component';
import { CheckboxDisabledComponent } from './form-components/checkbox-disabled/checkbox-disabled.component';
import { RadioButtonsComponent } from './form-components/radio-buttons/radio-buttons.component';
import { SelectComponent } from './form-components/select/select.component';
import { InputPasswordComponent } from './form-components/input-password/input-password.component';
import { InputDefaultComponent } from './form-components/input-default/input-default.component';
import { InputLargeComponent } from './form-components/input-large/input-large.component';
import { InputSmallComponent } from './form-components/input-small/input-small.component';
import { InputLabelHelperTextComponent } from './form-components/input-label-helper-text/input-label-helper-text.component';
import { InputTextAfterComponent } from './form-components/input-text-after/input-text-after.component';
import { SelectTextBeforeComponent } from './form-components/select-text-before/select-text-before.component';
import { FileUploadComponent } from './form-components/file-upload/file-upload.component';
import { InputTextAfterAndBeforeComponent } from './form-components/input-text-after-and-before/input-text-after-and-before.component';
import { ButtonDefaultComponent } from './form-components/button-default/button-default.component';
import { ButtonSecondaryComponent } from './form-components/button-secondary/button-secondary.component';
import { ButtonSuccessComponent } from './form-components/button-success/button-success.component';
import { ButtonWarningComponent } from './form-components/button-warning/button-warning.component';
import { ButtonInfoComponent } from './form-components/button-info/button-info.component';
import { ButtonDangerComponent } from './form-components/button-danger/button-danger.component';
import { ButtonLightComponent } from './form-components/button-light/button-light.component';
import { ButtonDarkComponent } from './form-components/button-dark/button-dark.component';
import { ButtonDefaultOutlineComponent } from './form-components/button-default-outline/button-default-outline.component';
import { ButtonSecondaryOutlineComponent } from './form-components/button-secondary-outline/button-secondary-outline.component';
import { ButtonSuccessOutlineComponent } from './form-components/button-success-outline/button-success-outline.component';
import { ButtonWarningOutlineComponent } from './form-components/button-warning-outline/button-warning-outline.component';
import { ButtonInfoOultineComponent } from './form-components/button-info-oultine/button-info-oultine.component';
import { ButtonDangerOutlineComponent } from './form-components/button-danger-outline/button-danger-outline.component';
import { ButtonLightOutlineComponent } from './form-components/button-light-outline/button-light-outline.component';
import { ButtonDarkOutlineComponent } from './form-components/button-dark-outline/button-dark-outline.component';
import { ButtonLinkComponent } from './form-components/button-link/button-link.component';
import { QuicstartContentComponent } from './components/quicstart-content/quicstart-content.component';


@NgModule({
  declarations: [
    AppComponent,
    NavTopComponent,
    NavLeftComponent,
    MainComponent,
    TablesComponent,
    QuickStartComponent,
    FooterComponent,
    CardGreenComponent,
    CardWhiteComponent,
    BreadcrumbComponent,
    MulticoloredProgressComponent,
    AccordionComponent,
    TableComponent,
    TableTabsComponent,
    QuickstartCardsComponent,
    RightFixedTabButtonComponent,
    CheckboxComponent,
    CheckboxDisabledComponent,
    RadioButtonsComponent,
    SelectComponent,
    InputPasswordComponent,
    InputDefaultComponent,
    InputLargeComponent,
    InputSmallComponent,
    InputLabelHelperTextComponent,
    InputTextAfterComponent,
    SelectTextBeforeComponent,
    FileUploadComponent,
    InputTextAfterAndBeforeComponent,
    ButtonDefaultComponent,
    ButtonSecondaryComponent,
    ButtonSuccessComponent,
    ButtonWarningComponent,
    ButtonInfoComponent,
    ButtonDangerComponent,
    ButtonLightComponent,
    ButtonDarkComponent,
    ButtonDefaultOutlineComponent,
    ButtonSecondaryOutlineComponent,
    ButtonSuccessOutlineComponent,
    ButtonWarningOutlineComponent,
    ButtonInfoOultineComponent,
    ButtonDangerOutlineComponent,
    ButtonLightOutlineComponent,
    ButtonDarkOutlineComponent,
    ButtonLinkComponent,
    QuicstartContentComponent
  ],
  imports: [
    BrowserModule,
    CountUpModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
