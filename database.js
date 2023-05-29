import {BaseEntity, DataSource, EntitySchema} from "typeorm";
import notes from "./routes/notes.js";

class Note extends BaseEntity {
    id;
    title;
    body;
}

const NoteEntity = new EntitySchema({
    name: "note",
    target: Note,
    columns: {
        id: {
            type: Number,
            generated: true,
            primary: true,
        },
        title: {
            type: String,
        },
        text: {
            type: String,
        }

    }
});


const AppDataSource = new DataSource({
    type: "postgres",
    host: "localhost",
    port: 5432,
    username: "",
    password: "omer",
    database: "ai_dojo",
    entities: [
        NoteEntity
    ],
    synchronize: true
})

AppDataSource.initialize().then(dataSource => {
    console.log(`The database connected successfully`);
    // let newNote = new Note;
    // newNote.body = "This is note body";
    // newNote.title = "This is title";
    // newNote.save().then(note => {
    //     console.log(`The note has been created with id: ${note.id}`);
    // });

    Note.find().then(results => {
        console.log(results);
    });
    Note.update({
        id: 1
    },{
        title: "This is new title"
    }).then(note => {
        console.log(note)
    })

    Note.delete({id: 1})
    Note.sum('id').then(result =>{
        console.log(`the result is: ${result}`)
    });

}).catch(error => {
    console.log(error);
})