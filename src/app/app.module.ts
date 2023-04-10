import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AllData } from './allData/allData.component';
import { ProductComponent } from './product/product.component';
import { ProductsComponent } from './products/products.component';
import { FormsModule } from '@angular/forms';
import { SkillsetsComponent } from './skillsets/skillsets.component';
import { CardsComponent } from './cards/cards.component';
import { StudentsComponent } from './students/students.component';
import { TabComponent } from './tab/tab.component';

@NgModule({
  declarations: [
    AppComponent,
    AllData,
    ProductComponent,
    ProductsComponent,
    SkillsetsComponent,
    CardsComponent,
    StudentsComponent,
    TabComponent,

  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
