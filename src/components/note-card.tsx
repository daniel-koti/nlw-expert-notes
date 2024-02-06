export function NoteCard() {
  return (
    <div className="rounded-md text-left bg-indigo-900 p-5 space-y-3 overflow-hidden relative hover:ring-2 hover:ring-indigo-600 cursor-pointer outline-none focus:ring-2 focus-visible:ring-2 focus-visible:ring-indigo-600">
      <span className="text-sm text-indigo-200 font-medium">há 2 dias</span>
      <p className="text-sm leading-6 text-indigo-400">
        Lorem ipsum dolor sit, amet consectetur adipisicing elit. Autem vero
        cumque architecto quidem, rerum, quaerat laboriosam ipsam voluptatum
        perferendis distinctio quam magni! Unde tempora laboriosam
        exercitationem aut delectus dolore facere. Lorem ipsum dolor sit, amet
        consectetur adipisicing elit. Autem vero cumque architecto quidem,
        rerum, quaerat laboriosam ipsam voluptatum perferendis distinctio quam
        magni! Unde tempora laboriosam exercitationem aut delectus dolore facere
      </p>

      <div className="absolute bottom-0 left-0 right-0 h-1/2  bg-gradient-to-t from-black/60 to-black/0 pointer-events-none" />
    </div>
  )
}
