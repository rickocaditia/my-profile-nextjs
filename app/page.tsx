"use client";

import { motion } from "framer-motion";

import { 
  Globe, Mail, Video, Car, Code2, ExternalLink, Terminal, Laptop, 
  Database, Smartphone, RefreshCw, Layers 
} from "lucide-react";

export default function Portfolio() {
  // Varians untuk animasi list agar muncul satu per satu (Stagger)
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.2 }
    }
  };

  const itemVariants = {
  hidden: { y: 20, opacity: 0 },
  visible: {
    y: 0,
    opacity: 1,
    transition: {
      duration: 0.5 // Hapus baris 'ease' jika menyebabkan error, atau pastikan nilainya benar
    }
  }
};

  return (
    <div className="min-h-screen bg-[#fafafa] text-slate-900 selection:bg-blue-100 overflow-x-hidden">
      {/* Navigation */}
      <nav className="sticky top-0 z-50 bg-white/80 backdrop-blur-md border-b border-slate-100">
        <div className="max-w-5xl mx-auto px-6 h-16 flex justify-between items-center">
          <motion.h1 
            initial={{ x: -20, opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            className="text-xl font-bold tracking-tighter bg-gradient-to-r from-blue-600 to-indigo-600 bg-clip-text text-transparent"
          >
            RICKO ADITIA.DEV
          </motion.h1>
          <div className="hidden md:flex space-x-8 text-sm font-medium text-slate-600">
            <a href="#projects" className="hover:text-blue-600 transition">Projects</a>
            <a href="#skills" className="hover:text-blue-600 transition">Skills</a>
            <motion.a 
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              href="mailto:rickoaditia@example.com" 
              className="bg-slate-900 text-white px-5 py-2 rounded-full hover:bg-blue-600 transition shadow-sm"
            >
              Contact Me
            </motion.a>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="py-24 px-6 max-w-5xl mx-auto flex flex-col md:flex-row items-center gap-12 relative">
        <motion.div 
          initial={{ opacity: 0, x: -50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
          className="flex-1 space-y-6 z-10"
        >
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-blue-50 text-blue-700 text-xs font-bold uppercase tracking-wider">
            <span className="relative flex h-2 w-2">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-blue-400 opacity-75"></span>
              <span className="relative inline-flex rounded-full h-2 w-2 bg-blue-500"></span>
            </span>
            Available for New Projects
          </div>
          <h2 className="text-5xl md:text-7xl font-extrabold leading-[1.1] tracking-tight">
            Full Stack <span className="text-blue-600 text-shadow-sm">Developer</span>
          </h2>
          <p className="text-lg text-slate-600 max-w-xl leading-relaxed">
            Spesialis dalam membangun sistem ERP logistik yang kompleks dan efisien menggunakan <b>Laravel & React</b>,
            dirancang untuk mengoptimalkan operasional dan manajemen data perusahaan secara real-time.
          </p>
          <div className="flex flex-wrap gap-4 pt-4">
            <motion.button 
              whileHover={{ scale: 1.05, translateY: -4 }}
              whileTap={{ scale: 0.95 }}
              className="bg-blue-600 text-white px-8 py-4 rounded-xl font-bold hover:bg-blue-700 shadow-lg shadow-blue-200 transition-all"
            >
              Explore My Projects
            </motion.button>
            <div className="flex gap-3 items-center">
              <motion.a whileHover={{ y: -3 }} href="#" className="p-3 rounded-xl border border-slate-200 hover:bg-white hover:shadow-md transition"><Terminal className="w-5 h-5" /></motion.a>
              <motion.a whileHover={{ y: -3 }} href="#" className="p-3 rounded-xl border border-slate-200 hover:bg-white hover:shadow-md transition text-red-600"><Video className="w-5 h-5" /></motion.a>
            </div>
          </div>
        </motion.div>

        {/* FOTO PROFIL DENGAN GRADIENT BLUR & FLOATING ANIMATION */}
        <motion.div 
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="flex-1 flex justify-center md:justify-end relative"
        >
          {/* Animated Gradient Blur Background */}
          <motion.div 
            animate={{ 
              scale: [1, 1.2, 1],
              rotate: [0, 90, 0],
              opacity: [0.3, 0.5, 0.3]
            }}
            transition={{ duration: 8, repeat: Infinity, ease: "linear" }}
            className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-64 h-64 bg-gradient-to-tr from-blue-400 to-indigo-500 rounded-full blur-[80px] -z-10"
          />

          <div className="relative group">
            {/* Soft Glow di pinggir kotak */}
            <div className="absolute -inset-1 bg-gradient-to-r from-blue-600 to-indigo-600 rounded-2xl blur opacity-25 group-hover:opacity-50 transition duration-1000"></div>
            
            {/* Container Foto dengan Floating Effect */}
            <motion.div 
              animate={{ y: [0, -15, 0] }}
              transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
              className="relative w-72 h-72 md:w-80 md:h-80 overflow-hidden rounded-2xl border-4 border-white shadow-2xl"
            >
              <img 
                src="/remov1.png" 
                alt="Ricko Aditia" 
                className="w-full h-full object-cover object-top group-hover:scale-110 transition duration-700 ease-in-out"
              />
            </motion.div>

            {/* Label Identitas */}
            <motion.div 
              initial={{ x: 20, opacity: 0 }}
              animate={{ x: 0, opacity: 1 }}
              transition={{ delay: 1 }}
              className="absolute -bottom-4 -left-4 bg-white p-4 rounded-xl shadow-xl border border-slate-100 hidden md:block z-20"
            >
              <p className="text-[10px] font-black text-blue-600 uppercase tracking-widest">Identity</p>
              <p className="text-sm font-bold text-slate-800">Ricko Aditia</p>
            </motion.div>
          </div>
        </motion.div>
      </section>

      {/* Stats Ribbon */}
      <motion.div 
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        className="bg-white border-y border-slate-100 py-8"
      >
        <div className="max-w-5xl mx-auto px-6 grid grid-cols-2 md:grid-cols-4 gap-8">
          {[
            { label: "Tech Stack", val: "Laravel & React" },
            { label: "Focus", val: "Logistics ERP" },
            { label: "Community", val: "Tech Community" },
            { label: "Role", val: "Full Stack Developer" }
          ].map((stat, i) => (
            <motion.div 
              key={i} 
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: i * 0.1 }}
              className="text-center md:text-left"
            >
              <p className="text-xs font-bold text-slate-400 uppercase tracking-widest mb-1">{stat.label}</p>
              <p className="text-sm font-bold text-slate-800">{stat.val}</p>
            </motion.div>
          ))}
        </div>
      </motion.div>

      {/* --- SECTION: STATS & TECH STACK --- */}
<section className="py-20 bg-white">
  <div className="max-w-5xl mx-auto px-6">
    
    {/* Numbers of Impact */}
    <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-24">
      {[
        { label: "Sistem Terintegrasi", val: "10+", desc: "ERP & Management Systems" },
        { label: "Konten Otomotif", val: "50+", desc: "Video Produksi di YouTube" },
        { label: "Database Optimization", val: "40%", desc: "Peningkatan Kecepatan Query" }
      ].map((stat, i) => (
        <motion.div 
          key={i}
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: i * 0.1 }}
          className="p-8 rounded-3xl bg-slate-50 border border-slate-100 text-center hover:shadow-xl hover:shadow-blue-50 transition-all duration-500"
        >
          <h4 className="text-4xl font-black text-blue-600 mb-2">{stat.val}</h4>
          <p className="font-bold text-slate-800 text-sm uppercase tracking-wider">{stat.label}</p>
          <p className="text-slate-500 text-xs mt-1">{stat.desc}</p>
        </motion.div>
      ))}
    </div>

    {/* Tech Stack Grid */}
    <div className="text-center mb-12">
      <h3 className="text-2xl font-bold text-slate-900">Tech Stack & Mastered Tools</h3>
      <p className="text-slate-500 text-sm mt-2">Teknologi yang saya gunakan untuk membangun solusi digital.</p>
    </div>

    <div className="grid grid-cols-2 sm:grid-cols-4 lg:grid-cols-6 gap-4">
        {[
          { name: "React", icon: <Code2 className="w-6 h-6 text-blue-500" /> },
          { name: "Next.js", icon: <Laptop className="w-6 h-6 text-black" /> },
          { name: "Laravel", icon: <Terminal className="w-6 h-6 text-red-600" /> },
          { name: "PHP", icon: <Globe className="w-6 h-6 text-indigo-500" /> },
          { name: "Python", icon: <Terminal className="w-6 h-6 text-yellow-500" /> },
          { name: "React Native", icon: <Smartphone className="w-6 h-6 text-blue-400" /> },
          { name: "MySQL", icon: <Database className="w-6 h-6 text-blue-800" /> },
          { name: "MongoDB", icon: <Layers className="w-6 h-6 text-green-600" /> },
          { name: "Tailwind", icon: <Globe className="w-6 h-6 text-cyan-400" /> },
          { name: "Git", icon: <Terminal className="w-6 h-6 text-orange-600" /> },
          { name: "CI/CD", icon: <RefreshCw className="w-6 h-6 text-slate-700" /> },
          { name: "Premiere", icon: <Video className="w-6 h-6 text-indigo-700" /> }
        ].map((tech, i) => (
          <motion.div 
            key={i}
            whileHover={{ scale: 1.1, backgroundColor: "#fff" }}
            className="flex flex-col items-center justify-center p-4 rounded-2xl border border-slate-100 bg-slate-50/50 transition-colors"
          >
            {tech.icon}
            <span className="text-[10px] font-bold mt-2 text-slate-600 uppercase">{tech.name}</span>
          </motion.div>
        ))}
      </div>
  </div>
</section>

      {/* Projects Section */}
      <section id="projects" className="py-24 px-6 max-w-7xl mx-auto">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="flex flex-col md:flex-row justify-between items-end mb-16 gap-4"
        >
          <div>
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-blue-50 text-blue-600 text-[10px] font-bold uppercase tracking-widest mb-4">
              Portfolio
            </div>
            <h3 className="text-4xl font-black tracking-tight text-slate-900">Featured Projects</h3>
            <p className="text-slate-500 mt-2 max-w-md">Sistem logistik dan aplikasi inovatif yang telah saya kembangkan.</p>
          </div>
        </motion.div>

        <motion.div 
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="grid md:grid-cols-2 lg:grid-cols-3 gap-8"
        >
          {[
            { title: "R-Logistics ERP", img: "/r-logistics.jpg", tags: ["REACT", "ERP"], desc: "Sistem ERP logistik kustom dengan manajemen pengiriman." },
            { title: "Kiyo Refleksi", img: "/kiyo-refleksi.jpg", tags: ["LARAVEL", "WA API"], desc: "Sistem booking otomatis dengan integrasi WhatsApp." },
            { title: "Coffee Shop UI", img: "/coffee.jpg", tags: ["NEXT.JS", "UI/UX"], desc: "Landing page modern dengan visual estetik." },
            { title: "Inventory Monitoring", img: "/pheosesmobile.jpg", tags: ["PHP", "NATIVE"], desc: "Manajemen stok gudang yang akurat." },
            { title: "NDE Cargo ERP", img: "/nde-cargo.jpg", tags: ["DHTMLX", "ERP"], desc: "Sistem manajemen kargo skala besar." },
            { title: "TMS Alog", img: "/tms-alog.jpg", tags: ["PHP", "TMS"], desc: "Manajemen transportasi dan armada logistik." }
          ].map((proj, idx) => (
            <motion.div 
              key={idx}
              variants={itemVariants}
              whileHover={{ 
                y: -15,
                transition: { duration: 0.3 }
              }}
              className="group bg-white border border-slate-100 rounded-[2rem] overflow-hidden hover:shadow-[0_20px_50px_rgba(37,99,235,0.1)] transition-all duration-500"
            >
              <div className="aspect-[4/3] overflow-hidden relative">
                <img src={proj.img} alt={proj.title} className="w-full h-full object-cover group-hover:scale-110 transition duration-700" />
                <div className="absolute inset-0 bg-gradient-to-t from-slate-900/60 to-transparent opacity-0 group-hover:opacity-100 transition duration-500" />
              </div>
              <div className="p-8">
                <div className="flex gap-2 mb-4">
                  {proj.tags.map(tag => (
                    <span key={tag} className="px-3 py-1 bg-blue-50 text-blue-600 text-[10px] font-bold rounded-lg">{tag}</span>
                  ))}
                </div>
                <h4 className="text-xl font-bold mb-2 group-hover:text-blue-600 transition">{proj.title}</h4>
                <p className="text-slate-500 text-sm mb-6 line-clamp-2">{proj.desc}</p>
                <div className="flex items-center gap-2 text-sm font-bold text-slate-900 group-hover:text-blue-600 transition">
                  View Details <ExternalLink className="w-4 h-4" />
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </section>

      {/* Footer */}
      <footer className="py-12 border-t border-slate-100 text-center text-slate-400 text-sm">
        <p>© 2026 Ricko Aditia. Built with Next.js & Tailwind.</p>
      </footer>

      {/* Floating WhatsApp Button */}
      <motion.a 
        initial={{ scale: 0 }}
        animate={{ scale: 1 }}
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.9 }}
        href="https://wa.me/6282376848266" 
        target="_blank" 
        className="fixed bottom-8 right-8 z-50 bg-[#25D366] text-white p-4 rounded-full shadow-2xl group"
      >
        <div className="flex items-center gap-2">
          <span className="max-w-0 overflow-hidden group-hover:max-w-xs transition-all duration-500 font-bold text-sm whitespace-nowrap px-0 group-hover:px-2">Chat Me</span>
          <svg viewBox="0 0 24 24" className="w-6 h-6 fill-current"><path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L0 24l6.335-1.662c1.72.94 3.675 1.439 5.662 1.439h.05c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413Z"/></svg>
        </div>
      </motion.a>
    </div>
  );
}