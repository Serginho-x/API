import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';


import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MatButtonModule} from '@angular/material/button';
import { MatInputModule} from '@angular/material/input';
import { StoreModule } from '@ngrx/store';
import { todos } from './redux/reducer';



@NgModule({
  declarations: [
    AppComponent,
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    HttpClientModule,
    FormsModule,
    MatButtonModule,
    MatInputModule,
    ReactiveFormsModule,
    StoreModule.forRoot({ todos })
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
