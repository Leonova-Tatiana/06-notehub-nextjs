import { useState } from "react";
import NoteModal from "@/components/Modal/Modal";

interface Note {
  id: string;
  title: string;
  description: string;
}

const Notes = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [notes, setNotes] = useState<Note[]>([]);

  const handleOpenModal = () => setIsModalOpen(true);
  const handleCloseModal = () => {
    setIsModalOpen(false);
    setTitle("");
    setDescription("");
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    const newNote: Note = {
      id: Date.now().toString(),
      title,
      description,
    };

    setNotes((prev) => [...prev, newNote]);
    handleCloseModal();
  };

  return (
    <div>
      <button onClick={handleOpenModal}>Створити нотатку</button>

      {isModalOpen && (
        <NoteModal onClose={handleCloseModal}>
          <div style={{ padding: "1rem" }}>
            <h2>Нова нотатка</h2>
            <form onSubmit={handleSubmit}>
              <label>
                Назва:
                <input
                  type="text"
                  name="title"
                  value={title}
                  onChange={(e) => setTitle(e.target.value)}
                  required
                />
              </label>
              <br />
              <label>
                Опис:
                <textarea
                  name="description"
                  value={description}
                  onChange={(e) => setDescription(e.target.value)}
                  required
                />
              </label>
              <br />
              <button type="submit">Зберегти</button>
              <button type="button" onClick={handleCloseModal}>
                Скасувати
              </button>
            </form>
          </div>
        </NoteModal>
      )}

      <div style={{ marginTop: "2rem" }}>
        <h2>Мої нотатки</h2>
        {notes.length === 0 ? (
          <p>Немає нотаток</p>
        ) : (
          notes.map((note) => (
            <div key={note.id} style={{ marginBottom: "1rem" }}>
              <strong>{note.title}</strong>
              <p>{note.description}</p>
            </div>
          ))
        )}
      </div>
    </div>
  );
};

export default Notes;
