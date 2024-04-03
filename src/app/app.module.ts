import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { CustomModalModule } from './modules/custom-modal/custom-modal.module';
import { ExampleComponentComponent } from './components/example-component/example-component.component';
import { FormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    AppComponent,
    ExampleComponentComponent,
  ],
  imports: [
    BrowserModule,
    CustomModalModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
