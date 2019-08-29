import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { FormsModule } from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AddModifyDetailsComponent } from './add-modify-details/add-modify-details.component';
import { SearchPipePipe } from './search-pipe.pipe';
import { HttpClientModule } from '@angular/common/http';
import { EditComponent } from './edit/edit.component';
import {ReactiveFormsModule} from '@angular/forms';
const routes:Routes = [
  {
    path:'edit/:id',
    component:EditComponent
  }
];
@NgModule({
  declarations: [
    AppComponent,
    AddModifyDetailsComponent,
    SearchPipePipe,
    EditComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule,
    RouterModule.forRoot(routes)
  ],
  exports:[RouterModule],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
