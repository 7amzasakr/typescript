"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class User {
    Id;
    name;
    email;
    Password;
    phone;
    age;
    notebooks = [];
    constructor(Id, name, email, Password, phone, age) {
        this.Id = Id,
            this.Password = Password,
            this._age = age,
            this.email = email,
            this.name = name,
            this.phone = phone;
    }
    get _age() {
        return this.age;
    }
    set _age(value) {
        if (value < 18 || value > 60) {
            throw new Error("age must be between 18 and 60");
        }
        else {
            this.age = value;
        }
    }
    displayInfo() {
        console.log("ID :", this.Id);
        console.log("Password :", this.Password);
        console.log("age : ", this._age);
        console.log("email : ", this.email);
        console.log("name : ", this.name);
        console.log("phone : ", this.phone);
    }
    addNotebook(notebook) {
        this.notebooks.push(notebook);
    }
}
class Admin extends User {
    manageNotes() {
        console.log("sakr");
    }
}
class Note {
    Id;
    title;
    content;
    userId;
    constructor(Id, title, content, userId) {
        this.Id = Id,
            this.title = title,
            this.content = content,
            this.userId = userId;
    }
    preview() {
        return this.content;
    }
}
class NoteBook {
    notes = [];
    addNote(value) {
        this.notes.push(value);
    }
    removeNote(noteId) {
        this.notes = this.notes.filter(note => note.Id !== noteId);
    }
}
class Storage {
    items = [];
    addItem(value) {
        this.items.push(value);
    }
    removeItem(value) {
        this.items = this.items.filter(i => i !== value);
    }
    getAllItems() {
        return this.items;
    }
}
// const user1 = new User(
//     1,
//     "Hamza",
//     "hamza@gmail.com",
//     "123456",
//     "01012345678",
//     21
// );
// user1.displayInfo();
// const note1 = new Note(
//     1,
//     "My First Note",
//     "This is my first note in the Notes Management System",
//     user1
// );
// console.log(note1.preview());
// const notebook1 = new NoteBook();
// notebook1.addNote(note1);
// console.log(notebook1.notes);
// // notebook1.removeNote(1);
// console.log(notebook1.notes);
// user1.addNotebook(notebook1);
// console.log(user1.notebooks);\
const numberStorage = new Storage();
numberStorage.addItem(10);
numberStorage.addItem(20);
numberStorage.addItem(30);
console.log(numberStorage.getAllItems());
numberStorage.removeItem(20);
console.log(numberStorage.getAllItems());
