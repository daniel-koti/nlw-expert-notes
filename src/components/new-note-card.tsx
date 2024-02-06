export function NewNoteCard() {
  return (
    <div className="rounded-md bg-indigo-800 p-5 space-y-3">
      <span className="text-sm text-indigo-200 font-medium">
        Adicionar nota
      </span>
      <p className="text-sm leading-6 text-indigo-400">
        Grave uma nota em áudio que será convertida para texto automaticamente
      </p>
    </div>
  )
}
