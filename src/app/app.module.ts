import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import {ReactiveFormsModule} from '@angular/forms';
import {HttpClientModule} from '@angular/common/http';
import {HttpModule} from '@angular/http';
import {HttpClientInMemoryWebApiModule} from 'angular-in-memory-web-api';
import {InMemoryDataService} from './service/in-memory-data.service';
import { AppRouterModule } from './app-router.module';
import { AppComponent } from './app.component';
import {UserListComponent} from './user/userlist.component';
import {UserDetailComponent} from './user/userdetail.component';
import { UserService } from './service/user.service';

@NgModule({
  imports: [
    BrowserModule,
    ReactiveFormsModule,
    HttpModule,
    HttpClientModule,
    HttpClientInMemoryWebApiModule.forRoot(
      InMemoryDataService, {dataEncapsulation: false, delay: 100}
    ),
    AppRouterModule
  ],
  declarations: [
    AppComponent,
    UserListComponent,
    UserDetailComponent
  ],
  providers: [UserService],
  bootstrap: [AppComponent]
})
export class AppModule { }
