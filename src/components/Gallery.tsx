const Gallery = () => {
  return (
    <section className="py-10 px-6 text-center">
      <h3 className="text-2xl font-bold mb-6">Galeri</h3>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
        <img src="https://img.freepik.com/free-photo/beautiful-bride-groom-having-beach-wedding_23-2149043969.jpg?semt=ais_hybrid&w=740" className="rounded-xl object-cover w-full" />
        <img src="https://img.freepik.com/free-photo/beautiful-bride-groom-having-beach-wedding_23-2149043969.jpg?semt=ais_hybrid&w=740" className="rounded-xl object-cover w-full" />
        <img src="https://img.freepik.com/free-photo/beautiful-bride-groom-having-beach-wedding_23-2149043969.jpg?semt=ais_hybrid&w=740" className="rounded-xl object-cover w-full" />
      </div>
    </section>
  )
}

export default Gallery
