class User {

    public  Id :number 
    public  name :string  
    public email : string 
    private Password : string 
    public phone  : string 
    private age !: number

    public notebooks: NoteBook[] = [];


    constructor(Id :number ,
        name :string  ,
        email : string ,
        Password : string , 
        phone : string ,
        age : number
    ){
        this.Id = Id,
        this.Password = Password,
        this._age = age ,
        this.email = email,
        this.name = name,
        this.phone = phone 
    }

    get _age ():number{
        return this.age;
    } 

    set _age (value: number){
        if(value <18 ||value >60){
            throw new Error("age must be between 18 and 60")
        }else {
            this.age = value
        }
    }
    displayInfo() :void {
        console.log("ID :", this.Id);
        console.log("Password :", this.Password);
        console.log("age : ", this._age);
        console.log("email : ",this.email);
        console.log("name : ",this.name);
        console.log("phone : ",this.phone);
         
    }

    addNotebook(notebook: NoteBook): void {
        this.notebooks.push(notebook);
    }
}

class Admin extends User {
    manageNotes () :void {
        console.log("sakr");
    }
} 

class Note {
    public Id :number
    public title : string 
    public content : string
    public userId : User

    constructor (Id:number, title: string ,
        content : string,
        userId: User
    ){
        this.Id = Id,
        this.title = title,
        this.content = content,
        this.userId = userId
    }

    preview() : string {
        return this.content
    }

}

class NoteBook {
    public notes : Note[]=[]

    addNote(value : Note) :void {
        this.notes.push(value)
    }

    removeNote(noteId: number):void {
        this.notes = this.notes.filter(note => note.Id !== noteId);
    }
}

class Storage <T>{
    private items : T[] = []
    addItem(value: T) : void{
        this.items.push(value)
    }
    removeItem(value : T) : void{
        this.items = this.items.filter(i => i !== value)
    }
    getAllItems() : T[]{
        return this.items
    }
}
