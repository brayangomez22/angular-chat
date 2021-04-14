import { NgModule } from '@angular/core'
import { FormsModule } from '@angular/forms'
import { BrowserModule } from '@angular/platform-browser'
import { AngularFireModule } from '@angular/fire'

import { AppComponent } from './app.component'
import { environment } from '../environments/environment'
import { ChatroomComponent } from './chatroom/chatroom.component'
import { from } from 'rxjs'

@NgModule({
	imports: [BrowserModule, FormsModule, AngularFireModule.initializeApp(environment.firebase)],
	declarations: [AppComponent, ChatroomComponent],
	bootstrap: [AppComponent],
})
export class AppModule {}
