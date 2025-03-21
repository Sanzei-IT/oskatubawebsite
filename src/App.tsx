import React from 'react';
import { Menu, Phone, Mail, Users, BookOpen, Award, Calendar, Crown, UserCircle2, ClipboardList, Wallet, Users2 } from 'lucide-react';
import { useState } from 'react';

const sections = [
  { id: 'home', label: 'Home' },
  { id: 'structure', label: 'Structure' },
  { id: 'contact', label: 'Contact' },
  { id: 'about', label: 'About' }
];

const structureData = {
  pembina: { title: 'Pembina Osis', name: 'Gita Dwi Amelia, S.Pd', icon: UserCircle2 },
  mainBoard: [
    { title: 'Ketua Osis', name: 'M. Habiburrohman A.K', icon: Crown },
    { title: 'Wakil Ketua Osis', name: 'Syaifuddin', icon: Users },
    { title: 'Sekretaris', name: 'Nabila Tus Sahro', icon: ClipboardList },
    { title: 'Bendahara', name: 'Farah Kayana', icon: Wallet }
  ],
  divisions: [
    {
      name: 'Sekbid 1',
      description: 'Keimanan & Ketaqwaan Terhadap Tuhan Yang Maha Esa',
      icon: Users2,
      members: ['Jeffri (Ketua)', 'Riski Wildan Wafani Putra', 'Reni', 'Inas Sahlina H.']
    },
    {
      name: 'Sekbid 2',
      description: 'Kehidupan Berbangsa & Bernegara',
      icon: Users2,
      members: ['Bayu Arrosyidin (Ketua)', 'Muhammad Ainur Ridho', 'Zhanieta Nuril Hanufah']
    },
    {
      name: 'Sekbid 3',
      description: 'Wawasan Kebangsaan & Bela Negara',
      icon: Users2,
      members: ['Moh.Nurul Haqiqi (Ketua)', 'Muhammad Ibrohim', 'Lailatul Badriah']
    },
    {
      name: 'Sekbid 4',
      description: 'Kepribadian & Budi Pekerti Luhur',
      icon: Users2,
      members: ['Firgo Fernando (Ketua)', 'Nur Hidayati Oktaviani', 'Fika Amaliya', 'Briant F. R']
    },
    {
      name: 'Sekbid 5',
      description: 'Pendidikan Politik & Kepemimpinan',
      icon: Users2,
      members: ['Muhammad Akbar Maulana (Ketua)', 'Romli', 'Jesica Putri']
    },
    {
      name: 'Sekbid 6',
      description: 'Kreaktivitas, Keterampilan & Kewwirausahaan',
      icon: Users2,
      members: ['Siti Nur Atika (Ketua)', 'Hudzaifah', 'Putri Yani', 'Muhammad Ilham Arifin']
    },
    {
      name: 'Sekbid 7',
      description: 'Jasmani & Kesehatan',
      icon: Users2,
      members: ['Robi\'ul Maulana (Ketua)', 'Zainal Arifin', 'Deslan Agung', 'Rofiqo Alfan H.', 'Anindita Putri']
    },
    {
      name: 'Sekbid 8',
      description: 'Presepsi, Apresiasi & Kreatis Seni',
      icon: Users2,
      members: ['Rizma Nadhifatun N. (Ketua)', 'Dwita Puspa N.', 'Amelia Afkarina']
    }
  ]
};

function App() {
  const [activeSection, setActiveSection] = useState('home');
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-indigo-100">
      {/* Navigation */}
      <nav className="bg-white/80 backdrop-blur-md shadow-lg fixed w-full z-50">
        <div className="max-w-7xl mx-auto px-4">
          <div className="flex justify-between items-center h-16">
            <div className="flex items-center">
              <span className="font-bold text-gray-800 text-xl">OSKATUBA</span>
            </div>
            
            {/* Mobile menu button */}
            <div className="md:hidden">
              <button
                onClick={() => setIsMenuOpen(!isMenuOpen)}
                className="text-gray-700 hover:text-gray-900"
              >
                <Menu size={24} />
              </button>
            </div>

            {/* Desktop menu */}
            <div className="hidden md:flex space-x-8">
              {sections.map(section => (
                <button
                  key={section.id}
                  onClick={() => setActiveSection(section.id)}
                  className={`transition-all duration-300 relative ${
                    activeSection === section.id
                      ? 'text-indigo-600 font-semibold'
                      : 'text-gray-600 hover:text-gray-900'
                  }`}
                >
                  {section.label}
                  {activeSection === section.id && (
                    <span className="absolute bottom-0 left-0 w-full h-0.5 bg-indigo-600 transform origin-left animate-slideRight" />
                  )}
                </button>
              ))}
            </div>
          </div>
        </div>

        {/* Mobile menu */}
        {isMenuOpen && (
          <div className="md:hidden">
            <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
              {sections.map(section => (
                <button
                  key={section.id}
                  onClick={() => {
                    setActiveSection(section.id);
                    setIsMenuOpen(false);
                  }}
                  className="block w-full text-left px-3 py-2 text-base font-medium text-gray-700 hover:text-gray-900 hover:bg-gray-50"
                >
                  {section.label}
                </button>
              ))}
            </div>
          </div>
        )}
      </nav>

      {/* Main Content */}
      <main className="pt-16">
        {/* Home Section */}
        {activeSection === 'home' && (
          <div className="min-h-screen flex flex-col items-center justify-center p-4 animate-fadeIn">
            <div className="text-center mb-12">
              <h1 className="text-5xl font-bold text-gray-800 mb-4 animate-slideUp">
                OSIS SMKN 1 BANYUANYAR
              </h1>
              <p className="text-xl text-gray-600 animate-slideUp delay-200">
                Membentuk Generasi Muda yang Berintegritas dan Berprestasi
              </p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-4xl mx-auto">
              <div className="bg-white/80 backdrop-blur-sm p-8 rounded-xl shadow-xl transform hover:scale-105 transition-all duration-300">
                <Users className="w-12 h-12 text-indigo-600 mb-4 mx-auto" />
                <h3 className="text-xl font-semibold text-center mb-2">Kepemimpinan</h3>
                <p className="text-gray-600 text-center">Mengembangkan jiwa kepemimpinan siswa</p>
              </div>
              <div className="bg-white/80 backdrop-blur-sm p-8 rounded-xl shadow-xl transform hover:scale-105 transition-all duration-300">
                <BookOpen className="w-12 h-12 text-indigo-600 mb-4 mx-auto" />
                <h3 className="text-xl font-semibold text-center mb-2">Akademik</h3>
                <p className="text-gray-600 text-center">Mendukung prestasi akademik</p>
              </div>
              <div className="bg-white/80 backdrop-blur-sm p-8 rounded-xl shadow-xl transform hover:scale-105 transition-all duration-300">
                <Award className="w-12 h-12 text-indigo-600 mb-4 mx-auto" />
                <h3 className="text-xl font-semibold text-center mb-2">Prestasi</h3>
                <p className="text-gray-600 text-center">Meraih prestasi di berbagai bidang</p>
              </div>
            </div>
          </div>
        )}

        {/* Structure Section */}
        {activeSection === 'structure' && (
          <div className="max-w-6xl mx-auto p-4 py-12 animate-fadeIn">
            <h2 className="text-4xl font-bold text-center mb-12 text-gray-800">
              Struktur Organisasi
            </h2>
            
            {/* Pembina */}
            <div className="bg-white/80 backdrop-blur-sm rounded-xl shadow-xl p-8 mb-12 transform hover:scale-105 transition-all duration-300">
              <div className="flex items-center justify-center mb-4">
                <structureData.pembina.icon className="w-16 h-16 text-indigo-600" />
              </div>
              <h3 className="text-2xl font-semibold text-indigo-600 text-center mb-2">{structureData.pembina.title}</h3>
              <p className="text-gray-700 text-center text-lg">{structureData.pembina.name}</p>
            </div>

            {/* Main Board */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
              {structureData.mainBoard.map((position, index) => {
                const Icon = position.icon;
                return (
                  <div 
                    key={index}
                    className="bg-white/80 backdrop-blur-sm rounded-xl shadow-xl p-6 transform hover:scale-105 transition-all duration-300"
                  >
                    <div className="flex items-center justify-center mb-4">
                      <Icon className="w-12 h-12 text-indigo-600" />
                    </div>
                    <h3 className="text-xl font-semibold text-indigo-600 text-center mb-2">{position.title}</h3>
                    <p className="text-gray-700 text-center">{position.name}</p>
                  </div>
                );
              })}
            </div>

            {/* Divisions */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              {structureData.divisions.map((division, index) => {
                const Icon = division.icon;
                return (
                  <div 
                    key={index}
                    className="bg-white/80 backdrop-blur-sm rounded-xl shadow-xl p-6 transform hover:scale-105 transition-all duration-300"
                  >
                    <div className="flex items-center justify-center mb-4">
                      <Icon className="w-12 h-12 text-indigo-600" />
                    </div>
                    <h3 className="text-xl font-semibold text-indigo-600 text-center mb-2">{division.name}</h3>
                    <p className="text-gray-600 text-center text-sm mb-4">{division.description}</p>
                    <ul className="space-y-2">
                      {division.members.map((member, mIndex) => (
                        <li key={mIndex} className="text-gray-700 text-center">{member}</li>
                      ))}
                    </ul>
                  </div>
                );
              })}
            </div>
          </div>
        )}

        {/* Contact Section */}
        {activeSection === 'contact' && (
          <div className="min-h-screen flex items-center justify-center p-4 animate-fadeIn">
            <div className="max-w-4xl w-full bg-white/80 backdrop-blur-sm rounded-xl shadow-xl p-8">
              <h2 className="text-3xl font-bold text-center mb-8 text-gray-800">Hubungi Kami</h2>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                <div className="space-y-6">
                  <div className="flex items-center space-x-4 p-4 bg-indigo-50 rounded-lg">
                    <Phone className="w-8 h-8 text-indigo-600" />
                    <span className="text-gray-700">+62 123 4567 8900</span>
                  </div>
                  <div className="flex items-center space-x-4 p-4 bg-indigo-50 rounded-lg">
                    <Mail className="w-8 h-8 text-indigo-600" />
                    <span className="text-gray-700">osissmkn1bx@gmail.com</span>
                  </div>
                  <div className="flex items-center space-x-4 p-4 bg-indigo-50 rounded-lg">
                    <Calendar className="w-8 h-8 text-indigo-600" />
                    <span className="text-gray-700">Senin - Jumat: 07:00 - 15:00</span>
                  </div>
                </div>
                <form className="space-y-4">
                  <input
                    type="text"
                    placeholder="Nama"
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-500 bg-white/50 backdrop-blur-sm"
                  />
                  <input
                    type="email"
                    placeholder="Email"
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-500 bg-white/50 backdrop-blur-sm"
                  />
                  <textarea
                    placeholder="Pesan"
                    rows={4}
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-500 bg-white/50 backdrop-blur-sm"
                  ></textarea>
                  <button
                    type="submit"
                    className="w-full bg-indigo-600 text-white py-3 px-6 rounded-lg hover:bg-indigo-700 transition-colors transform hover:scale-105 transition-transform duration-300"
                  >
                    Kirim Pesan
                  </button>
                </form>
              </div>
            </div>
          </div>
        )}

        {/* About Section */}
        {activeSection === 'about' && (
          <div className="min-h-screen flex items-center justify-center p-4 animate-fadeIn">
            <div className="max-w-4xl w-full bg-white/80 backdrop-blur-sm rounded-xl shadow-xl p-8">
              <h2 className="text-3xl font-bold text-center mb-8 text-gray-800">Tentang OSIS</h2>
              <div className="space-y-6 text-gray-700">
                <p className="text-lg">
                  OSIS SMKN 1 BANYUANYAR merupakan organisasi siswa intra sekolah yang berperan sebagai wadah untuk mengembangkan potensi kepemimpinan dan kreativitas siswa.
                </p>
                <p className="text-lg">
                  Visi kami adalah membentuk generasi muda yang berintegritas, berprestasi, dan memiliki jiwa kepemimpinan yang kuat untuk membangun masa depan yang lebih baik.
                </p>
                <p className="text-lg font-semibold">
                  Melalui berbagai program dan kegiatan, kami berkomitmen untuk:
                </p>
                <ul className="list-none space-y-4">
                  <li className="flex items-center space-x-3">
                    <Users className="w-6 h-6 text-indigo-600" />
                    <span>Mengembangkan potensi kepemimpinan siswa</span>
                  </li>
                  <li className="flex items-center space-x-3">
                    <BookOpen className="w-6 h-6 text-indigo-600" />
                    <span>Meningkatkan prestasi akademik dan non-akademik</span>
                  </li>
                  <li className="flex items-center space-x-3">
                    <Users2 className="w-6 h-6 text-indigo-600" />
                    <span>Membangun karakter dan kepribadian yang positif</span>
                  </li>
                  <li className="flex items-center space-x-3">
                    <Users2 className="w-6 h-6 text-indigo-600" />
                    <span>Menumbuhkan semangat gotong royong dan kebersamaan</span>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        )}
      </main>
    </div>
  );
}

export default App;
