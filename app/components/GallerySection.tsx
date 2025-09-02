import Image from "next/image"

const thumbnails = [
  {
    src: "/Gandhi.jpg",
    alt: "Gandhi Thumbnail"
  },
  {
    src: "/Partition.jpg",
    alt: "Partition Thumbnail"
  },
  {
    src: "/procrastination.jpg",
    alt: "Procrastination Thumbnail"
  },
  {
    src: "/Rat race.jpg",
    alt: "Rat Race Thumbnail"
  },
  {
    src: "/Russian.jpg",
    alt: "Russian Thumbnail"
  },
  {
    src: "/Toppers.jpg",
    alt: "Toppers Thumbnail"
  },
]

export default function GallerySection() {
  return (
    <section className="py-16 bg-gradient-to-b from-gray-50 to-white">
      <div className="max-w-7xl mx-auto px-6">
        <h2 className="text-4xl md:text-6xl font-bold text-center mb-10 font-outfit">
          <span className="italic bg-gradient-to-r from-gray-600 to-gray-800 bg-clip-text text-transparent drop-shadow-lg">
            Thumbnail Gallery
          </span>
        </h2>
  <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8">
          {thumbnails.map((thumb, idx) => (
            <div key={idx} className="rounded-2xl overflow-hidden shadow-xl bg-white border border-gray-200 hover:scale-105 transition-transform duration-300">
              <Image src={thumb.src} alt={thumb.alt} width={400} height={250} className="object-cover w-full h-auto" />
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
