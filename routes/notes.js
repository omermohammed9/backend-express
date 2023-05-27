import express from "express";
import {Router} from "express";

const router = Router();

import {createNewNote, deleteNote, getAllNotes, getSpecificNote, updateNote} from "../controllers/notes.js";

router.get('/', getAllNotes);

router.get('/:id', getSpecificNote)


router.delete('/:id', deleteNote);

router.patch('/:id', updateNote)

router.post('/', createNewNote)

export default router;