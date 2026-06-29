import axios from 'axios';
import type { Note } from '../types/note';

const BASE_URL = 'https://notehub-public.goit.study/api';

const token = import.meta.env.VITE_NOTEHUB_TOKEN;

axios.defaults.headers.common['Authorization'] = `Bearer ${token}`;

export interface FetchNotesResponse {
  notes: Note[];
  totalPages: number;
}

export type CreateNoteDTO = {
  title: string;
  content: string;
  tag: Note['tag'];
};

export const fetchNotes = async (page: number, search: string) => {
  const { data } = await axios.get<FetchNotesResponse>(`${BASE_URL}/notes`, {
    params: {
      page,
      perPage: 12,
      search,
    },
  });

  
  return {
    notes: data.notes ?? [],
    totalPages: data.totalPages ?? 1,
  };
};

export const createNote = async (note: CreateNoteDTO) => {
  const { data } = await axios.post<Note>(`${BASE_URL}/notes`, note);
  return data;
};

export const deleteNote = async (id: string) => {
  const { data } = await axios.delete<Note>(`${BASE_URL}/notes/${id}`);
  return data;
};