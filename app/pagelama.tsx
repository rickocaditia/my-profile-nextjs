import { Globe, Mail, Video, Car, Code2, ExternalLink, Terminal, Laptop } from "lucide-react";


export default function Portfolio() {
  return (
    <div className="min-h-screen bg-[#fafafa] text-slate-900 selection:bg-blue-100">
      {/* Navigation */}
      <nav className="sticky top-0 z-50 bg-white/80 backdrop-blur-md border-b border-slate-100">
        <div className="max-w-5xl mx-auto px-6 h-16 flex justify-between items-center">
          <h1 className="text-xl font-bold tracking-tighter bg-gradient-to-r from-blue-600 to-indigo-600 bg-clip-text text-transparent">
            ADITIA.DEV
          </h1>
          <div className="hidden md:flex space-x-8 text-sm font-medium text-slate-600">
            <a href="#projects" className="hover:text-blue-600 transition">Projects</a>
            <a href="#skills" className="hover:text-blue-600 transition">Skills</a>
            <a href="mailto:rickoaditia@example.com" className="bg-slate-900 text-white px-5 py-2 rounded-full hover:bg-blue-600 transition shadow-sm">
              Contact Me
            </a>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
<section className="py-24 px-6 max-w-5xl mx-auto flex flex-col md:flex-row items-center gap-12">
  <div className="flex-1 space-y-6">
    {/* ... (kode teks kamu tetap sama seperti sebelumnya) ... */}
    <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-blue-50 text-blue-700 text-xs font-bold uppercase tracking-wider">
      <span className="relative flex h-2 w-2">
        <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-blue-400 opacity-75"></span>
        <span className="relative inline-flex rounded-full h-2 w-2 bg-blue-500"></span>
      </span>
      Available for New Projects
    </div>
    <h2 className="text-5xl md:text-7xl font-extrabold leading-[1.1] tracking-tight">
      Software Developer <br />
      <span className="text-slate-400">&</span> Content Creator.
    </h2>
    <p className="text-lg text-slate-600 max-w-xl leading-relaxed">
      Membangun sistem ERP logistik yang kompleks dengan <b>Laravel & React</b>, 
      sambil mendokumentasikan perjalanan otomotif melalui konten visual yang menarik.
    </p>
    <div className="flex flex-wrap gap-4 pt-4">
      <button className="bg-blue-600 text-white px-8 py-4 rounded-xl font-bold hover:bg-blue-700 hover:shadow-xl hover:-translate-y-1 transition-all">
        Explore My Projects
      </button>
      <div className="flex gap-3 items-center">
        <a href="#" className="p-3 rounded-xl border border-slate-200 hover:bg-white hover:shadow-md transition"><Terminal className="w-5 h-5" /></a>
        <a href="#" className="p-3 rounded-xl border border-slate-200 hover:bg-white hover:shadow-md transition text-red-600"><Video className="w-5 h-5" /></a>
      </div>
    </div>
  </div>

  {/* BAGIAN FOTO PROFIL (Area Garis Merah) */}
  <div className="flex-1 flex justify-center md:justify-end">
    <div className="relative group">
      {/* Efek Bingkai Belakang */}
      <div className="absolute -inset-4 bg-gradient-to-r from-blue-600 to-indigo-600 rounded-2xl blur opacity-20 group-hover:opacity-40 transition duration-1000"></div>
      
      {/* Container Foto */}
      <div className="relative w-72 h-72 md:w-80 md:h-80 overflow-hidden rounded-2xl border-4 border-white shadow-2xl">
        <img 
          src="/profile.jpg" 
          alt="Ricko Aditia" 
          className="w-full h-full object-cover group-hover:scale-110 transition duration-500"
        />
      </div>

      {/* Badge Melayang (Opsional) */}
      <div className="absolute -bottom-4 -left-4 bg-white p-4 rounded-xl shadow-lg border border-slate-100 hidden md:block">
        <p className="text-xs font-bold text-slate-400 uppercase tracking-tighter">Identity</p>
        <p className="text-sm font-bold text-slate-800">Ricko Aditia</p>
      </div>
    </div>
  </div>
</section>

      {/* Stats/Skills Ribbon */}
      <div className="bg-white border-y border-slate-100 py-8">
        <div className="max-w-5xl mx-auto px-6 grid grid-cols-2 md:grid-cols-4 gap-8">
          {[
            { label: "Tech Stack", val: "Laravel & React" },
            { label: "Focus", val: "Logistics ERP" },
            { label: "Community", val: "YouTube Creator" },
            { label: "Role", val: "Ayah & Developer" }
          ].map((stat, i) => (
            <div key={i} className="text-center md:text-left">
              <p className="text-xs font-bold text-slate-400 uppercase tracking-widest mb-1">{stat.label}</p>
              <p className="text-sm font-bold text-slate-800">{stat.val}</p>
            </div>
          ))}
        </div>
      </div>

      {/* Projects Section */}
<section id="projects" className="py-24 px-6 max-w-5xl mx-auto">
  <div className="flex justify-between items-end mb-12">
    <div>
      <h3 className="text-3xl font-bold tracking-tight">Featured Projects</h3>
      <p className="text-slate-500 mt-2">Daftar sistem dan aplikasi yang telah saya kembangkan.</p>
    </div>
  </div>

  <div className="grid md:grid-cols-2 gap-8">
    {/* 1. R-Logistics ERP */}
    <div className="group bg-white border border-slate-200 rounded-3xl overflow-hidden hover:shadow-2xl transition-all duration-500">
      <div className="aspect-video bg-blue-600 flex items-center justify-center group-hover:scale-105 transition-transform duration-500">
        <Laptop className="w-12 h-12 text-white/20" />
      </div>
      <div className="p-8">
        <div className="flex gap-2 mb-4">
          <span className="px-3 py-1 bg-blue-50 text-blue-600 text-[10px] font-bold rounded-md">REACT</span>
          <span className="px-3 py-1 bg-slate-50 text-slate-600 text-[10px] font-bold rounded-md">ERP SYSTEM</span>
        </div>
        <h4 className="text-2xl font-bold mb-2 group-hover:text-blue-600 transition">R-Logistics ERP</h4>
        <p className="text-slate-600 text-sm leading-relaxed mb-6">
          Sistem ERP logistik kustom dengan modul manajemen pengiriman, operasional, dan analitik laporan keuangan.
        </p>
        <div className="flex items-center gap-4 text-sm font-bold text-slate-900 cursor-pointer hover:text-blue-600 transition">
          View Details <ExternalLink className="w-4 h-4" />
        </div>
      </div>
    </div>

    {/* 2. Kiyo Refleksi */}
    <div className="group bg-white border border-slate-200 rounded-3xl overflow-hidden hover:shadow-2xl transition-all duration-500">
      <div className="aspect-video bg-emerald-500 flex items-center justify-center group-hover:scale-105 transition-transform duration-500">
        <Globe className="w-12 h-12 text-white/20" />
      </div>
      <div className="p-8">
        <div className="flex gap-2 mb-4">
          <span className="px-3 py-1 bg-emerald-50 text-emerald-600 text-[10px] font-bold rounded-md">LARAVEL</span>
          <span className="px-3 py-1 bg-slate-50 text-slate-600 text-[10px] font-bold rounded-md">TAILWIND</span>
        </div>
        <h4 className="text-2xl font-bold mb-2 group-hover:text-emerald-600 transition">Kiyo Refleksi</h4>
        <p className="text-slate-600 text-sm leading-relaxed mb-6">
          Sistem booking dan reservasi untuk bisnis refleksi dengan fitur konfirmasi reservasi via WhatsApp secara otomatis.
        </p>
        <div className="flex items-center gap-4 text-sm font-bold text-slate-900 cursor-pointer hover:text-emerald-600 transition">
          Live Preview <ExternalLink className="w-4 h-4" />
        </div>
      </div>
    </div>

    {/* 3. Coffee Shop Landing Page */}
    <div className="group bg-white border border-slate-200 rounded-3xl overflow-hidden hover:shadow-2xl transition-all duration-500">
      <div className="aspect-video bg-[#3d2b1f] flex items-center justify-center group-hover:scale-105 transition-transform duration-500">
        <Code2 className="w-12 h-12 text-white/20" />
      </div>
      <div className="p-8">
        <div className="flex gap-2 mb-4">
          <span className="px-3 py-1 bg-amber-50 text-amber-700 text-[10px] font-bold rounded-md">NEXT.JS</span>
          <span className="px-3 py-1 bg-slate-50 text-slate-600 text-[10px] font-bold rounded-md">LANDING PAGE</span>
        </div>
        <h4 className="text-2xl font-bold mb-2 group-hover:text-amber-700 transition">Coffee Shop UI</h4>
        <p className="text-slate-600 text-sm leading-relaxed mb-6">
          Landing page modern untuk bisnis kopi dengan desain yang estetik, responsif, dan fokus pada user experience.
        </p>
        <div className="flex items-center gap-4 text-sm font-bold text-slate-900 cursor-pointer hover:text-amber-700 transition">
          Explore Code <ExternalLink className="w-4 h-4" />
        </div>
      </div>
    </div>

    {/* 4. YouTube Content Area */}
    <div className="group bg-white border border-slate-200 rounded-3xl overflow-hidden hover:shadow-2xl transition-all duration-500">
      <div className="aspect-video bg-red-600 flex items-center justify-center group-hover:scale-105 transition-transform duration-500">
        <Video className="w-12 h-12 text-white/20" />
      </div>
      <div className="p-8">
        <div className="flex gap-2 mb-4">
          <span className="px-3 py-1 bg-red-50 text-red-600 text-[10px] font-bold rounded-md">CREATIVE</span>
          <span className="px-3 py-1 bg-slate-50 text-slate-600 text-[10px] font-bold rounded-md">AUTOMOTIVE</span>
        </div>
        <h4 className="text-2xl font-bold mb-2 group-hover:text-red-600 transition">Content Creator</h4>
        <p className="text-slate-600 text-sm leading-relaxed mb-6">
          Dokumentasi perjalanan roadtrip dan simulasi otomotif yang diunggah secara berkala di channel YouTube.
        </p>
        <div className="flex items-center gap-4 text-sm font-bold text-slate-900 cursor-pointer hover:text-red-600 transition">
          Watch Now <Video className="w-4 h-4" />
        </div>
      </div>
    </div>
  </div>
</section>

      {/* Footer */}
      <footer className="py-12 border-t border-slate-100 text-center text-slate-400 text-sm">
        <p>© 2026 Aditia Dev. Built with Next.js & Tailwind.</p>
      </footer>

{/* Floating WhatsApp Button */}
<a 
  href="https://wa.me/6282376848266?text=Halo%20Aditia,%20saya%20tertarik%20dengan%20layanan%20pengembangan%20web%20Anda." 
  target="_blank" 
  rel="noopener noreferrer"
  className="fixed bottom-8 right-8 z-50 bg-[#25D366] text-white p-4 rounded-full shadow-2xl hover:scale-110 hover:bg-[#20ba5a] transition-all duration-300 group"
  aria-label="Chat on WhatsApp"
>
  <div className="flex items-center gap-2">
    <span className="max-w-0 overflow-hidden group-hover:max-w-xs transition-all duration-500 ease-in-out font-bold text-sm whitespace-nowrap">
      Chat Me
    </span>
    <svg 
      viewBox="0 0 24 24" 
      className="w-6 h-6 fill-current"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L0 24l6.335-1.662c1.72.94 3.675 1.439 5.662 1.439h.05c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413Z"/>
    </svg>
  </div>
</a>


    </div>
  );
}