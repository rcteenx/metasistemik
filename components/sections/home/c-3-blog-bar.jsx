export default function BlogBar() {
  return (
    <section className="bg-bilincSonrasix bg-cover bg-fixed ">
      <div className="py-12 lg:py-24  mx-auto text-center text-gray-800 bg-gradient-to-r from-slate via-gray-300 to-slate ">
        <h2 className="text-2xl lg:text-6xl text-center border-b-4 inline-block border-black">
          BLOG
        </h2>
        <p>İçgörü, ilham ve dönüşümle dolu bir dünyaya adım atın.</p>
        <p>
          Blogumuz, düşündürücü makalelerden, uzman bakış açılarından ve pratik
          araçlardan oluşan seçilmiş bir koleksiyondur:
        </p>
        {/* <div className="grid grid-cols-1 lg:grid-cols-4 gap-4 lg:divide-x divide-slate-600 lg:[&>*]:pl-14 mt-10 md:text-left">
          {info.items.map((i, index) => (
            <div key={index} className="text-center lg:text-left">
              <div className="text-lg lg:text-2xl text-gray-400 ">
                {i.title}
              </div>
              <div className="text-2xl lg:text-[2.5rem] text-white font-extrabold lg:mt-2">
                {i.info} +
              </div>
            </div>
          ))}
        </div> */}
      </div>
    </section>
  );
}
