import { Component } from '@angular/core'
import { AngularFireAuth } from '@angular/fire/auth'
import firebase from 'firebase/app'

@Component({
	selector: 'app-root',
	templateUrl: './app.component.html',
	styleUrls: ['./app.component.css'],
})
export class AppComponent {
	user: any

	constructor(public auth: AngularFireAuth) {
		this.auth.user.subscribe((user) => {
			this.user = user
		})
	}

	signIn() {
		this.auth.signInWithPopup(new firebase.auth.GoogleAuthProvider())
		this.auth.user.subscribe((user) => {
			this.user = user
		})
	}

	signOut() {
		this.auth.signOut()
		this.user = null
	}
}
