


import { BrowserModule } from '@angular/platform-browser';
import { FormsModule }   from '@angular/forms';
import { NgModule, APP_INITIALIZER} from '@angular/core';
import { NoopAnimationsModule} from '@angular/platform-browser/animations';
import { HttpModule } from '@angular/http';

import { InputTextModule, ButtonModule, TabViewModule , SelectButtonModule, InputSwitchModule, SharedModule,
         DropdownModule , ToggleButtonModule, CalendarModule, InputTextareaModule, DataTableModule, SplitButtonModule,
         MenuModule, StepsModule, ContextMenuModule, DialogModule, FieldsetModule, PickListModule, PanelModule,
         PaginatorModule, DataGridModule}  from 'primeng/primeng';
import { AppComponent } from './app.component';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
      BrowserModule, InputTextModule,FormsModule, ButtonModule, TabViewModule, SelectButtonModule, DropdownModule,
    NoopAnimationsModule, ToggleButtonModule, CalendarModule, InputSwitchModule, InputTextareaModule, DataTableModule, 
    SharedModule, HttpModule, MenuModule, StepsModule, ContextMenuModule, DialogModule, FieldsetModule, PickListModule,
    PanelModule, PaginatorModule, DataGridModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
