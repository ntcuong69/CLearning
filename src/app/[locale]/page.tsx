'use client';
import React from 'react';
import { useRouter, usePathname } from 'next/navigation';

const locales = [
  { code: 'en', label: 'EN', flag: '/EN.png' },
  { code: 'vi', label: 'VN', flag: '/VN.png' },
];

function getCurrentLocale(pathname: string) {
  const segments = pathname.split('/');
  return locales.find(l => l.code === segments[1])?.code || 'vi';
}

export default function LandingPage() {
  const router = useRouter();
  const pathname = usePathname();
  const currentLocale = getCurrentLocale(pathname);
  const nextLocale = currentLocale === 'en' ? 'vi' : 'en';
  const nextFlag = locales.find(l => l.code === nextLocale)?.flag;
  const nextLabel = locales.find(l => l.code === nextLocale)?.label;

  const handleLocaleSwitch = () => {
    const segments = pathname.split('/');
    segments[1] = nextLocale;
    router.replace(segments.join('/'));
  };

  return (
    <div className="min-h-screen flex flex-col justify-between bg-gradient-to-br from-[#0f2027] via-[#203a43] to-[#2c5364] text-white font-sans">
      {/* Header */}
      <header className="w-full flex items-center justify-between px-6 md:px-16 py-4 bg-[#181c24]/80 backdrop-blur-md border-b border-blue-900 fixed top-0 left-0 z-30 shadow-lg">
        <div className="flex items-center gap-3">
          <img src="/code-logo.png" alt="Code Forge Logo" className="w-10 h-10" />
          <span className="text-2xl font-extrabold tracking-tight text-blue-200 select-none">Code Forge</span>
        </div>
        <div className="flex items-center gap-4">
          <button
            onClick={handleLocaleSwitch}
            className="flex items-center gap-2 px-4 py-2 bg-white/10 border border-blue-700 text-white font-semibold rounded-full shadow-sm transition-all duration-200 hover:bg-white/20 hover:border-blue-400 focus:outline-none focus:ring-2 focus:ring-blue-400"
            title={`Chuyển sang ${nextLabel}`}
          >
            <img src={nextFlag} alt={nextLabel} className="w-6 h-4 rounded shadow border border-white" />
            <span className="font-bold text-white text-base tracking-wide drop-shadow">{nextLabel}</span>
          </button>
          <button
            className="ml-2 px-5 py-2 bg-white/10 border border-blue-700 text-white font-semibold rounded-full shadow-sm transition-all duration-200 hover:bg-white/20 hover:border-blue-400 focus:outline-none focus:ring-2 focus:ring-blue-400"
            onClick={() => router.push('/auth')}
          >
            Đăng nhập
          </button>
        </div>
      </header>
      {/* Hero Section */}
      <section className="w-full flex flex-col md:flex-row items-center justify-between px-6 md:px-20 pt-32 pb-10 md:pb-20">
        <div className="flex-1 text-center md:text-left">
          <h1 className="text-5xl md:text-6xl font-extrabold leading-tight mb-4 drop-shadow-xl">
            Luyện Tập Lập Trình <span className="text-blue-400">C</span>
          </h1>
          <p className="text-xl md:text-2xl text-blue-100 mb-8 max-w-xl mx-auto md:mx-0">
            Nền tảng học, luyện tập và chấm code tự động hiện đại, dành cho người mới bắt đầu.
          </p>
          <button
            className="inline-flex items-center gap-2 px-8 py-4 bg-white/10 border border-blue-700 text-white font-semibold rounded-full shadow-sm transition-all duration-200 hover:bg-white/20 hover:border-blue-400 focus:outline-none focus:ring-2 focus:ring-blue-400"
            onClick={() => router.push('/home')}
          >
            <svg width="28" height="28" fill="none" viewBox="0 0 24 24"><path d="M8 5v14l11-7z" fill="currentColor"/></svg>
            Bắt đầu ngay
          </button>
        </div>
        {/* SVG Illustration replaced by VSCode-like code block */}
        <div className="flex-1 flex justify-center mt-10 md:mt-0">
          <div className="w-[340px] md:w-[400px] rounded-xl shadow-2xl bg-[#1e1e2f] border border-[#232b39] overflow-hidden font-mono">
            {/* Fake VSCode window controls */}
            <div className="flex items-center gap-2 px-4 py-2 bg-[#232b39] border-b border-[#232b39]">
              <span className="w-3 h-3 rounded-full bg-red-400 inline-block"></span>
              <span className="w-3 h-3 rounded-full bg-yellow-400 inline-block"></span>
              <span className="w-3 h-3 rounded-full bg-green-400 inline-block"></span>
              <span className="ml-4 text-xs text-gray-400">hello.c</span>
            </div>
            <pre className="px-4 py-3 text-sm leading-relaxed whitespace-pre overflow-x-auto">
              <code>
                <span className="text-[#569CD6]">#include</span> <span className="text-[#CE9178]">&lt;stdio.h&gt;</span>{'\n'}
                {'\n'}
                <span className="text-[#4EC9B0]">int</span> <span className="text-[#9CDCFE]">main</span><span className="text-white">()</span> <span className="text-white">{'{'}</span>{'\n'}
                &nbsp;&nbsp;<span className="text-[#DCDCAA]">printf</span><span className="text-white">(</span><span className="text-[#CE9178]">"Hello, World!\n"</span><span className="text-white">);</span>{'\n'}
                &nbsp;&nbsp;<span className="text-[#B5CEA8]">return</span> <span className="text-[#B5CEA8]">0</span><span className="text-white">;</span>{'\n'}
                <span className="text-white">{'}'}</span>
              </code>
            </pre>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="w-full max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-4 gap-8 px-6 md:px-0 -mt-10 z-10">
        <div className="backdrop-blur-md bg-white/10 border border-blue-700 rounded-2xl shadow-xl p-6 flex flex-col items-center hover:scale-105 transition-transform duration-200">
          <svg width="40" height="40" fill="none" viewBox="0 0 24 24" className="mb-3 text-green-400"><path d="M4 4h16v16H4z" stroke="currentColor" strokeWidth="2"/><path d="M8 8h8v8H8z" fill="currentColor" fillOpacity=".2"/></svg>
          <h3 className="text-lg font-bold text-green-300 mb-1">Video Bài Giảng</h3>
          <p className="text-center text-blue-100 text-sm">Học lý thuyết qua video sinh động, dễ hiểu, bám sát chương trình C căn bản.</p>
        </div>
        <div className="backdrop-blur-md bg-white/10 border border-yellow-600 rounded-2xl shadow-xl p-6 flex flex-col items-center hover:scale-105 transition-transform duration-200">
          <svg width="40" height="40" fill="none" viewBox="0 0 24 24" className="mb-3 text-yellow-400"><path d="M3 5h18M3 12h18M3 19h18" stroke="currentColor" strokeWidth="2"/></svg>
          <h3 className="text-lg font-bold text-yellow-200 mb-1">Bài Tập Code & Trắc Nghiệm</h3>
          <p className="text-center text-blue-100 text-sm">Làm bài tập trắc nghiệm, bài tập code với hệ thống chấm điểm tự động, phản hồi tức thì.</p>
        </div>
        <div className="backdrop-blur-md bg-white/10 border border-pink-600 rounded-2xl shadow-xl p-6 flex flex-col items-center hover:scale-105 transition-transform duration-200">
          <svg width="40" height="40" fill="none" viewBox="0 0 24 24" className="mb-3 text-pink-400"><path d="M12 2l3 7h7l-5.5 4.5L18 21l-6-4-6 4 1.5-7.5L2 9h7z" stroke="currentColor" strokeWidth="2"/></svg>
          <h3 className="text-lg font-bold text-pink-200 mb-1">Nhiệm Vụ & Thành Tích</h3>
          <p className="text-center text-blue-100 text-sm">Hoàn thành nhiệm vụ, nhận huy hiệu, theo dõi tiến trình học tập và thành tích cá nhân.</p>
        </div>
        <div className="backdrop-blur-md bg-white/10 border border-blue-600 rounded-2xl shadow-xl p-6 flex flex-col items-center hover:scale-105 transition-transform duration-200">
          <svg width="40" height="40" fill="none" viewBox="0 0 24 24" className="mb-3 text-blue-400"><rect x="3" y="4" width="18" height="16" rx="2" stroke="currentColor" strokeWidth="2"/><path d="M7 8h10M7 12h6" stroke="currentColor" strokeWidth="2"/></svg>
          <h3 className="text-lg font-bold text-blue-200 mb-1">Chấm Code Tự Động</h3>
          <p className="text-center text-blue-100 text-sm">Nộp bài, nhận kết quả chấm code tự động, giúp bạn tiến bộ từng ngày.</p>
        </div>
      </section>

      {/* Footer */}
      <footer className="w-full text-center py-6 mt-16 text-blue-200 text-sm bg-gradient-to-t from-[#232b39]/80 to-transparent">
        © {new Date().getFullYear()} CodeC Platform. Made with <span className="text-pink-400">♥</span> for C learners.
      </footer>
    </div>
  );
}
