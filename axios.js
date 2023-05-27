import axios from "axios";

console.log((await axios.get('http://localhost:3000/notes')).data);
try {
    const responseOne = await axios.delete('http://localhost:3000/notes/1')
    console.log(responseOne.data);
} catch (error) {
    console.log(`Note not found`);
}
console.log((await axios.get('http://localhost:3000/notes')).data);