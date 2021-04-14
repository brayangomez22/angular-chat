import { Component } from '@angular/core'
import { AngularFirestore } from '@angular/fire/firestore'
import { AngularFireAuth } from '@angular/fire/auth'
import firebase from 'firebase/app'

import { Observable } from 'rxjs'
@Component({
	selector: 'app-chatroom',
	templateUrl: './chatroom.component.html',
	styleUrls: ['./chatroom.component.css'],
})
export class ChatroomComponent {
	items: Observable<any[]>
	user: any
	formValue: any

	constructor(public firestore: AngularFirestore, public auth: AngularFireAuth) {
		const query = firestore.collection('messages', (ref) => {
			return ref.orderBy('createdAt').limitToLast(30)
		})
		this.items = query.valueChanges()
		this.auth.user.subscribe((user) => {
			this.user = user
		})
	}

	sendMessage() {
		this.auth.user.subscribe((user) => {
			this.firestore.collection('messages').add({
				text: this.formValue,
				createdAt: firebase.firestore.FieldValue.serverTimestamp(),
				uid: user?.uid,
				displayName: user?.displayName,
				photoURL: user?.photoURL,
			})

			this.formValue = ''
		})
	}
}
