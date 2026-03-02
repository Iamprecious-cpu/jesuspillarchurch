import React, { useState, useRef, useEffect } from 'react';
import { Menu, X, MapPin, Calendar, Clock, Mail, Phone, Facebook, Instagram, Youtube, Twitter, ChevronRight, Users, Heart, Book, Home, ChevronLeft, ZoomIn } from 'lucide-react';
import emailjs from '@emailjs/browser';

const RCCGJesusPillar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [activeTab, setActiveTab] = useState('all');
  const [galleryImageIndexes, setGalleryImageIndexes] = useState({});
  
  // Lightbox state
  const [lightbox, setLightbox] = useState({ open: false, itemId: null, imgIndex: 0 });
  const touchStartX = useRef(null);

  const [formData, setFormData] = useState({
    firstName: '', lastName: '', email: '', phone: '',
    message: '', firstTime: false, decision: false,
    membership: false, moreInfo: false
  });
  const [showGivePage, setShowGivePage] = useState(false);
  const [selectedFund, setSelectedFund] = useState('');
  const [giverName, setGiverName] = useState('');
  const [copied, setCopied] = useState(false);
  const [contactForm, setContactForm] = useState({ firstName: '', lastName: '', email: '', message: '' });

  const handleContactSubmit = async (e) => {
    e.preventDefault();
    try {
      await emailjs.send("service_7u3iszw","template_x9mhz98",{
        from_name: `${contactForm.firstName} ${contactForm.lastName}`,
        from_email: contactForm.email,
        message: contactForm.message,
        to_email: "rjesuspillar@gmail.com",
      },"FApeTy0IYrzB9hEDc");
      alert("Message sent! We'll get back to you soon. God bless! 🙏");
      setContactForm({ firstName: '', lastName: '', email: '', message: '' });
    } catch (error) { alert(error?.text || "Check console for error."); }
  };

  const handleInputChange = (e) => {
    const { name, value, type, checked } = e.target;
    setFormData(prev => ({ ...prev, [name]: type === 'checkbox' ? checked : value }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await emailjs.send("service_7u3iszw","template_x9mhz98",{
        from_name: `${formData.firstName} ${formData.lastName}`,
        from_email: formData.email, phone: formData.phone, message: formData.message,
        first_time: formData.firstTime ? "Yes - First time visitor" : "",
        decision: formData.decision ? "Yes - Made decision for Christ" : "",
        membership: formData.membership ? "Yes - Wants membership" : "",
        more_info: formData.moreInfo ? "Yes - Wants to know more about Christ" : "",
        to_email: "rjesuspillar@gmail.com",
      },"FApeTy0IYrzB9hEDc");
      alert("Thank you! We will be in touch soon. God bless you! 🙏");
      setFormData({ firstName: '', lastName: '', email: '', phone: '', message: '', firstTime: false, decision: false, membership: false, moreInfo: false });
    } catch (error) { alert(error?.text || "Check console for error."); }
  };

  const services = [
    { day: 'SUNDAYS', items: [
      { name: 'First Service (Hour of Supplication)', time: '7:45 AM' },
      { name: 'Second Service (Hour of Restoration)', time: '9:30 AM' },
      { name: 'Thanksgiving Service (1st Sunday)', time: '8:40 AM' }
    ]},
    { day: 'TUESDAYS', items: [
      { name: 'Digging Deep', time: '5:30 PM' },
      { caption: 'There is truth and power in the word of God. Let us come together to learn more at the feet of the Holy Spirit.' }
    ]},
    { day: 'WEDNESDAYS', items: [
      { name: 'Solution Hour (1st Wednesday)', time: '5:30 PM' },
      { name: 'Soulmate Hour (3rd Wednesday)', time: '5:30 PM' }
    ]},
    { day: 'THURSDAYS', items: [
      { name: 'Faith Clinic', time: '5:30 PM' },
      { caption: 'This is a meeting where God touches every aspect of our life. God never fails!' }
    ]},
    { day: 'FRIDAYS', items: [
      { name: 'Holy Ghost Service (First Friday)', time: 'At The Redemption Camp' },
      { name: 'Congregational Vigil (Last Friday)', time: '10:00 PM' },
    ]},
    { day: 'SATURDAYS', items: [
      { name: 'Expectant Hour(2nd and 3rd Saturday)', time: '4:00 PM' },
      { name: "Men's Prayer Meeting (2nd Saturday)", time: '7:00 AM' }
    ]}
  ];

  const galleryImages = [
    { id: 1, category: 'worship', title: 'Sunday Worship', images: ['images/sunday.jpg','images/sunday2.jpg','images/sunday3.jpg', 'images/sundayworship2.jpg', 'images/sundayworship.JPG' ] },
    { id: 2, category: 'worship', title: 'Praise Session', images: ['images/praise.jpg','images/praise4.JPG', 'images/praise5.JPG'] },
    { id: 3, category: 'youth', title: 'Youth', images: ['images/youth.jpg','images/youth2.jpg','images/youth3.jpg','images/youth4.jpg'] },
    { id: 4, category: 'youth', title: 'Young Adults Fellowship', images: ['images/yf3.jpg','images/yf.jpg','images/yf2.jpg'] },
    { id: 5, category: 'outreach', title: 'Community Outreach', images: ['images/outreach.jpg','images/outreach2.jpg','images/outreach3.jpg','images/outreach4.jpg'] },
    { id: 6, category: 'events', title: "Women's Program", images: ['images/women2.jpg','images/women3.jpg','images/women4.jpg','images/women5.jpg'] },
    { id: 7, category: 'prayer', title: 'Prayer Session', images: ['images/prayer1.jpg','images/prayer2.jpg','images/prayer.jpg','images/prayern.jpg'] },
    { id: 8, category: 'events', title: 'Church Anniversary', images: ['images/anni.jpg','images/anni2.jpg','images/anni3.jpg','images/anni4.jpg','images/anni5.jpg'] }
  ];

  const funds = [
    { id: 'tithe', label: 'Tithe And Offering', icon: '🌾', desc: 'Your 10% unto the Lord / A freewill offering', bank: 'Access Bank', accountName: 'RCCG Jesus Pillar Tithe', accountNumber: '0044992158' },
    { id: 'offering', label: 'Project Offering', icon: '🕊️', desc: 'Growing Our Church', bank: 'Zenith Bank', accountName: 'RCCG Jesus Pillar', accountNumber: '1214026981' },
    { id: 'mission', label: 'Children Gift Giving', icon: '🌍', desc: 'Give to the Children Department', bank: 'Zenith Bank', accountName: 'RCCG Jesus Pillar Children Account', accountNumber: '1225585758' },
    { id: 'building', label: 'Church Anniversary', icon: '🏛️', desc: 'Growing our sanctuary', bank: 'Access Bank', accountName: 'Aremu Aanuoluwapo', accountNumber: '1854106597' },
  ];

  const filteredImages = activeTab === 'all' ? galleryImages : galleryImages.filter(img => img.category === activeTab);
  const [currentSlide, setCurrentSlide] = useState(0);

  const heroSlides = [
    { title: "WELCOME TO JESUS PILLAR", subtitle: "The Hall of Restoration, where Jesus Christ Himself is Our Pillar and strength.", bg: "images/Gemini_Generated_Image_d35xltd35xltd35x.png", showButtons: true },
    { title: "DISTANCE IS NOT A BARRIER", subtitle: "Join our services online - We are LIVE every service!", bg: "images/1b550e7b022576b97e03680a60f609f7.jpg", showButtons: true },
    { title: "Follow us on Social Media", subtitle: "Experience powerful worship, biblical teaching, and genuine fellowship", bg: "images/855fea0b54a16869bdcf4ffa81f10279.jpg", showButtons: false, showSocial: true }
  ];

  const nextSlide = () => setCurrentSlide((prev) => (prev + 1) % heroSlides.length);
  const prevSlide = () => setCurrentSlide((prev) => (prev - 1 + heroSlides.length) % heroSlides.length);

  // Lightbox helpers
  const openLightbox = (itemId) => {
    setLightbox({ open: true, itemId, imgIndex: galleryImageIndexes[itemId] || 0 });
  };
  const closeLightbox = () => {
    setLightbox({ open: false, itemId: null, imgIndex: 0 });
  };
  const lightboxNext = () => {
    const item = galleryImages.find(i => i.id === lightbox.itemId);
    if (!item) return;
    setLightbox(prev => ({ ...prev, imgIndex: (prev.imgIndex + 1) % item.images.length }));
  };
  const lightboxPrev = () => {
    const item = galleryImages.find(i => i.id === lightbox.itemId);
    if (!item) return;
    setLightbox(prev => ({ ...prev, imgIndex: (prev.imgIndex - 1 + item.images.length) % item.images.length }));
  };

  // Touch swipe for lightbox
  const handleLightboxTouchStart = (e) => { touchStartX.current = e.touches[0].clientX; };
  const handleLightboxTouchEnd = (e) => {
    if (touchStartX.current === null) return;
    const diff = touchStartX.current - e.changedTouches[0].clientX;
    if (Math.abs(diff) > 50) { diff > 0 ? lightboxNext() : lightboxPrev(); }
    touchStartX.current = null;
  };

  useEffect(() => { emailjs.init("FApeTy0IYrzB9hEDc"); }, []);
  useEffect(() => {
    const timer = setInterval(nextSlide, 8000);
    return () => clearInterval(timer);
  }, []);
  useEffect(() => {
    const timer = setInterval(() => {
      setGalleryImageIndexes(prev => {
        const newIndexes = { ...prev };
        filteredImages.forEach(item => {
          if (item.images && item.images.length > 1) {
            const currentIndex = prev[item.id] || 0;
            newIndexes[item.id] = (currentIndex + 1) % item.images.length;
          }
        });
        return newIndexes;
      });
    }, 3000);
    return () => clearInterval(timer);
  }, [filteredImages]);

  // Close lightbox on ESC
  useEffect(() => {
    const handleKey = (e) => {
      if (!lightbox.open) return;
      if (e.key === 'Escape') closeLightbox();
      if (e.key === 'ArrowRight') lightboxNext();
      if (e.key === 'ArrowLeft') lightboxPrev();
    };
    window.addEventListener('keydown', handleKey);
    return () => window.removeEventListener('keydown', handleKey);
  }, [lightbox]);

  const lightboxItem = lightbox.open ? galleryImages.find(i => i.id === lightbox.itemId) : null;

  return (
    <div className="min-h-screen bg-white">

      {/* Navigation */}
      <nav className="fixed top-0 left-0 w-full z-50 bg-black/10 backdrop-blur-md border-b border-white/10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-24">
            <div className="flex items-center gap-3">
              <img src="1200px-Rccg_logo.png" alt="RCCG Logo" className="h-16 w-16 object-contain" />
              <div>
                <h1 className="text-2xl font-serif text-[#F4B400]">RCCG Jesus Pillar</h1>
                <p className="text-sm text-[#f0f0f0]">Ibadan, Nigeria</p>
              </div>
            </div>
            <div className="hidden lg:flex items-center gap-8">
              <a href="#home" className="text-[#f2f2f2] hover:text-indigo-600 font-medium transition">Home</a>
              <a href="#about" className="text-[#f2f2f2] hover:text-indigo-600 font-medium transition">About Us</a>
              <a href="#services" className="text-[#f2f2f2] hover:text-indigo-600 font-medium transition">Services</a>
              <a href="#gallery" className="text-[#f2f2f2] hover:text-indigo-600 font-medium transition">Gallery</a>
              <a href="#contact" className="text-[#f2f2f2] hover:text-indigo-600 font-medium transition">Contact</a>
                 <button
  onClick={() => setShowGivePage(true)}
  className="text-[#f2f2f2] hover:text-indigo-600 font-medium transition"
>
  Giving
</button>
            </div>
            <button className="lg:hidden text-white" onClick={() => setIsMenuOpen(!isMenuOpen)}>
              {isMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
          {isMenuOpen && (
            <div className="lg:hidden py-4 border-t bg-white">
              <a href="#home" onClick={() => setIsMenuOpen(false)} className="block py-3 px-4 hover:bg-gray-50 text-gray-800">Home</a>
              <a href="#about" onClick={() => setIsMenuOpen(false)} className="block py-3 px-4 hover:bg-gray-50 text-gray-800">About Us</a>
              <a href="#services" onClick={() => setIsMenuOpen(false)} className="block py-3 px-4 hover:bg-gray-50 text-gray-800">Services</a>
              <a href="#gallery" onClick={() => setIsMenuOpen(false)} className="block py-3 px-4 hover:bg-gray-50 text-gray-800">Gallery</a>
              <a href="#contact" onClick={() => setIsMenuOpen(false)} className="block py-3 px-4 hover:bg-gray-50 text-gray-800">Contact</a>
              <button
  onClick={() => { setShowGivePage(true); setIsMenuOpen(false); }}
  className="block w-full text-left py-3 px-4 hover:bg-gray-50 text-gray-800"
>
  Giving
</button>
            </div>
          )}
        </div>
      </nav>

      {/* Hero Carousel */}
      <section id="home" className="relative text-[#f2f2f2] overflow-hidden pt-24">
        {heroSlides.map((slide, index) => (
          <div key={index} className={`absolute inset-0 ${index === currentSlide ? 'block' : 'hidden'}`}>
            <div className="absolute inset-0 bg-cover bg-center bg-no-repeat" style={{ backgroundImage: `url(${slide.bg})` }}></div>
            <div className="absolute inset-0 bg-gradient-to-b from-black/50 via-black/20 to-black/70"></div>
            <div className="absolute inset-0 bg-black/40"></div>
            <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-32 md:py-48 h-full flex items-center">
              <div className="max-w-3xl">
                <h1 className="text-4xl md:text-7xl font-serif mb-6 leading-tight">{slide.title}</h1>
                <p className="text-lg md:text-2xl mb-8 text-gray-300 italic">{slide.subtitle}</p>
                {slide.showSocial && (
                  <div className="flex gap-6 mt-4">
                    <a href="https://www.facebook.com/share/15aifHbLZC5/?mibextid=wwXIfr" className="bg-white/20 hover:bg-white/30 p-4 rounded-full backdrop-blur-sm transition"><Facebook className="w-8 h-8 text-white" /></a>
                    <a href="https://www.instagram.com/rccgyayajp?utm_source=ig_web_button_share_sheet&igsh=ZDNlZDc0MzIxNw==" className="bg-white/20 hover:bg-white/30 p-4 rounded-full backdrop-blur-sm transition"><Instagram className="w-8 h-8 text-white" /></a>
                    <a href="https://x.com/rccgyayajp?t=fdQ5YC5NpWy800eiloI03w&s=09" className="bg-white/20 hover:bg-white/30 p-4 rounded-full backdrop-blur-sm transition"><Twitter className="w-8 h-8 text-white" /></a>
                  </div>
                )}
              </div>
            </div>
          </div>
        ))}
        <button onClick={prevSlide} className="absolute left-0 top-1/2 -translate-y-1/2 w-16 h-32 cursor-pointer z-10" aria-label="Previous slide"><span className="sr-only">Previous</span></button>
        <button onClick={nextSlide} className="absolute right-0 top-1/2 -translate-y-1/2 w-16 h-32 cursor-pointer z-10" aria-label="Next slide"><span className="sr-only">Next</span></button>
        <div className="absolute bottom-8 left-1/2 -translate-x-1/2 flex gap-3 z-10">
          {heroSlides.map((_, index) => (
            <button key={index} onClick={() => setCurrentSlide(index)} className={`w-3 h-3 rounded-full transition ${index === currentSlide ? 'bg-white w-8' : 'bg-white/50 hover:bg-white/75'}`} />
          ))}
        </div>
        <div className="h-[600px] md:h-[700px]"></div>
      </section>

      {/* Connect Section */}
      <section id="groups" className="py-20 px-4 bg-gray-50">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-serif text-gray-900 mb-4">Faith for Every Generation</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto italic">One generation shall praise Your works to another, and shall declare Your mighty acts. — Psalm 145:4 (NKJV)</p>
          </div>
          <div className="grid grid-cols-2 md:grid-cols-2 lg:grid-cols-4 gap-4 md:gap-6">
            {[
              { title: 'YOUNG ADULTS', img: 'images/youth.jpg' },
              { title: 'TEENAGERS', img: 'images/teens.jpg' },
              { title: "MEN'S FELLOWSHIP", img: 'images/men.jpg' },
              { title: "WOMEN'S FELLOWSHIP", img: 'images/women.jpg' }
            ].map((group, idx) => (
              <div key={idx} className="group relative aspect-square overflow-hidden rounded-lg shadow-lg hover:shadow-2xl transition transform hover:scale-105 cursor-pointer">
                <img src={group.img} alt={group.title} className="absolute inset-0 w-full h-full object-cover transition-transform duration-500 group-hover:scale-110" />
                <div className="absolute inset-0 bg-black/40 flex items-end p-4 md:p-6">
                  <h3 className="text-white text-lg md:text-2xl font-serif">{group.title}</h3>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section id="services" className="pb-10 py-20 px-4 bg-[#f0f0f0f]">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-serif text-gray-900 mb-4">OUR SERVICES</h2>
            <p className="text-xl text-gray-900 max-w-3xl mx-auto">We hold various services designed to serve different needs.</p>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {services.map((service, idx) => (
              <div key={idx} className="bg-gray-50 p-8 rounded-lg shadow-md hover:shadow-xl transition">
                <h3 className="text-2xl font-serif text-indigo-600 mb-6">{service.day}</h3>
                <div className="space-y-4">
                  {service.items.map((item, i) => (
                    <div key={i}>
                      <p className="font-serif text-gray-900 border-l-4 border-indigo-600 pl-4">{item.name}</p>
                      <p className="text-gray-600 border-l-4 border-indigo-600 pl-4">{item.time}</p>
                      <p className="text-gray"><b>{item.caption}</b></p>
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ─── GALLERY SECTION ─── */}
      <section id="gallery" className="pb-10 py-20 px-4 bg-white">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-4xl md:text-5xl font-serif text-gray-900 mb-4">GALLERY</h2>
            <p className="text-gray-500 text-sm mt-2">Tap any photo to view full screen</p>
          </div>
          <div className="flex flex-wrap justify-center gap-3 mb-12">
            {['all', 'worship', 'youth', 'outreach', 'prayer', 'events'].map((category) => (
              <button key={category} onClick={() => setActiveTab(category)}
                className={`px-5 py-2 rounded-full text-sm font-medium transition ${activeTab === category ? 'bg-indigo-600 text-white' : 'bg-gray-100 text-gray-700 hover:bg-gray-200'}`}>
                {category.charAt(0).toUpperCase() + category.slice(1)}
              </button>
            ))}
          </div>

          {/* Gallery Grid — 2 cols on mobile, 3 on md, 4 on lg */}
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-3">
            {filteredImages.map((item) => {
              const currentIndex = galleryImageIndexes[item.id] || 0;
              const images = item.images || [];
              return (
                <div
                  key={item.id}
                  onClick={() => openLightbox(item.id)}
                  className="group relative overflow-hidden rounded-xl shadow-md hover:shadow-xl transition cursor-pointer"
                  style={{ aspectRatio: '1/1' }}
                >
                  <img
                    src={images[currentIndex]}
                    alt={item.title}
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                  />
                  {/* Multiple images dot indicator */}
                  {images.length > 1 && (
                    <div className="absolute bottom-2 left-1/2 -translate-x-1/2 flex gap-1 z-10">
                      {images.map((_, imgIdx) => (
                        <div key={imgIdx} className={`rounded-full transition-all duration-300 ${imgIdx === currentIndex ? 'bg-white w-4 h-1.5' : 'bg-white/60 w-1.5 h-1.5'}`} />
                      ))}
                    </div>
                  )}
                  {/* Hover overlay */}
                  <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity flex flex-col items-center justify-center gap-2 pointer-events-none">
                    <ZoomIn className="w-8 h-8 text-white" />
                    <p className="text-white font-semibold text-sm text-center px-3">{item.title}</p>
                  </div>
                  {/* Mobile tap hint badge */}
                  <div className="absolute top-2 right-2 bg-black/40 rounded-full p-1 md:hidden">
                    <ZoomIn className="w-3 h-3 text-white" />
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* ─── ABOUT SECTION ─── */}
      <section id="about" className="pt-20 pb-6 px-4 bg-white">
        <div className="max-w-7xl mx-auto space-y-10">

          {/* ── About Us Block: Text left, Image right ── */}
          <div>
            <h2 className="text-3xl md:text-4xl font-serif text-indigo-700 mb-8 text-center md:text-left">About Us</h2>
            <div className="flex flex-col md:flex-row gap-8 items-start">
              {/* Left: About text */}
              <div className="w-full md:w-1/2 order-2 md:order-1">
                <p className="text-gray-800 leading-relaxed text-lg md:text-xl lg:text-2xl">
                  At RCCG Jesus Pillar (the Hall of Restoration), Jesus Christ Himself is our Pillar and strength.
                  We are a vibrant, Spirit-filled community in Ibadan, Nigeria, committed to worship, prayer,
                  and the transformation of lives through the power of God's Word.
                </p>
                <p className="text-gray-800 leading-relaxed text-lg md:text-xl lg:text-2xl mt-4">
                  We grow in love as one people, a safe community where God leads us, every generation
                  declaring His mighty works to the next.
                </p>
               <div className="text-gray-800 leading-relaxed text-lg md:text-xl lg:text-2xl mt-4">
  <p className="mb-4">
    In the Redeemed Christian Church of God our Mission and Vision are:
  </p>

  <ol className="list-decimal space-y-4 pl-6">
    <li>To make heaven.</li>
    <li>To take as many people with us.</li>
    <li>To have a member of RCCG in every family of all nations.</li>
    <li>To accomplish No. 1 above, holiness will be our lifestyle.</li>
    <li>
      To accomplish No. 2 and 3 above, we will plant churches within five
      minutes walking distance in every city and town of developing countries
      and within five minutes driving distance in every city and town of developed countries.
    </li>
    <li>
      We will pursue these objectives until every Nation in the world is reached
      for the Lord Jesus Christ.
    </li>
  </ol>
</div>
              </div>
              {/* Right: About image */}
              <div className="w-full md:w-1/2 order-1 md:order-2">
                <div className="rounded-2xl overflow-hidden shadow-xl w-full bg-white">
  <img
    src="images/about.png"
    alt="RCCG Jesus Pillar Church"
    className="w-full h-auto object-contain"
    onError={(e) => { e.target.src = 'images/sunday.jpg'; }}
  />
</div>
              </div>
            </div>
          </div>

          {/* ── Lead Pastor (left) + Form (right) on desktop; stacked on mobile ── */}
          <div className="flex flex-col md:flex-row gap-8 items-stretch">

            {/* LEFT col: Pastor image + bio */}
            <div className="w-full md:w-5/12 flex-shrink-0">
              <h3 className="text-2xl md:text-3xl font-serif text-indigo-700 mb-4 text-center md:text-left">Lead Pastor</h3>
              <div className="rounded-2xl overflow-hidden shadow-lg">
                <img src="images/pastor.jpg" alt="Lead Pastor" className="w-full h-auto object-contain" />
              </div>
              <div className="mt-4">
                <p className="text-xs font-bold uppercase tracking-widest text-indigo-500 mb-1">Pastor in Charge of Area</p>
                <h4 className="text-2xl font-serif text-gray-900 mb-3">Pastor Adeyemi Adebanjo Josiah.</h4>
                <p className="text-gray-600 leading-relaxed text-base">
                  Our Lead Pastor shepherds the congregation of RCCG Jesus Pillar with a heart for God
                  and a passion for people. Under his leadership, the church has grown in faith, prayer,
                  and community impact — always anchored in the Word of God.
                </p>
                <p className="text-gray-600 leading-relaxed text-base mt-3">
                  He leads with a vision to see every soul saved, every family restored, and every believer
                  equipped to fulfill their God-given purpose. His ministry is marked by fervent prayer,
                  sound doctrine, and genuine love for people.
                </p>
              </div>
            </div>

            {/* RIGHT col: Next Steps Form */}
            <div className="w-full md:w-7/12 flex flex-col justify-between">
              <h2 className="text-2xl md:text-3xl font-serif text-indigo-600 mb-6 text-center md:text-left">
                Let's help you take your next steps in Christ Jesus.
              </h2>
              <div className="bg-gray-50 p-6 md:p-8 rounded-2xl shadow-lg flex-1">
                <p className="text-gray-700 mb-6">Please check the relevant boxes:</p>
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div className="space-y-3">
                    {[
                      { name: 'firstTime', label: "It's my 1st time at Jesus Pillar" },
                      { name: 'decision', label: "I made the decision to follow Christ today" },
                      { name: 'membership', label: "I want to become a member of Jesus Pillar" },
                      { name: 'moreInfo', label: "Tell me more about Christ" },
                    ].map(item => (
                      <label key={item.name} className="flex items-center gap-3">
                        <input type="checkbox" name={item.name} checked={formData[item.name]} onChange={handleInputChange} className="w-5 h-5 text-indigo-600 flex-shrink-0" />
                        <span className="text-gray-800">{item.label}</span>
                      </label>
                    ))}
                  </div>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <input type="text" name="firstName" placeholder="First Name" value={formData.firstName} onChange={handleInputChange} className="w-full px-4 py-3 border border-gray-300 rounded focus:outline-none focus:border-indigo-600" required />
                    <input type="text" name="lastName" placeholder="Last Name" value={formData.lastName} onChange={handleInputChange} className="w-full px-4 py-3 border border-gray-300 rounded focus:outline-none focus:border-indigo-600" required />
                  </div>
                  <input type="email" name="email" placeholder="Email" value={formData.email} onChange={handleInputChange} className="w-full px-4 py-3 border border-gray-300 rounded focus:outline-none focus:border-indigo-600" required />
                  <input type="tel" name="phone" placeholder="Phone Number" value={formData.phone} onChange={handleInputChange} className="w-full px-4 py-3 border border-gray-300 rounded focus:outline-none focus:border-indigo-600" />
                  <textarea name="message" placeholder="Message/Prayer Request" value={formData.message} onChange={handleInputChange} rows="4" className="w-full px-4 py-3 border border-gray-300 rounded focus:outline-none focus:border-indigo-600"></textarea>
                  <button type="submit" className="w-full bg-indigo-600 text-white py-4 rounded font-serif hover:bg-indigo-700 transition">Submit</button>
                </form>
                {/* Salvation call-to-action */}
<div className="mt-6 pt-6 border-t border-gray-200 text-center">
  <p className="text-indigo-700 font-serif text-lg font-semibold mb-2">
    Have you given your life to Christ?
  </p>
  <p className="text-gray-600 text-sm leading-relaxed mb-3">
    Salvation is the greatest decision you will ever make. If you confess with your mouth that Jesus is Lord 
    and believe in your heart that God raised Him from the dead — you will be saved. It's that simple, 
    and it changes everything.
  </p>
  <p className="text-indigo-500 text-sm italic font-medium">
    "For God so loved the world that He gave His one and only Son, that whoever believes in Him 
    shall not perish but have eternal life." — John 3:16
  </p>
  <p className="text-gray-500 text-xs mt-3">
    Check the box above — we would love to walk this journey with you. 🙏
  </p>
</div>
              </div>
            </div>

          </div>

        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-10 px-4 bg-[#1A237E]">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-serif text-[#F4B400] mb-4">CONTACT US</h2>
            <p className="text-xl text-white">We'd love to hear from you.</p>
            <p className="text-xl text-white">08075316991 (Church Admin)</p>
          </div>
          <div className="grid lg:grid-cols-2 gap-12">
            <div className="bg-gray-50 p-6 md:p-8 rounded-lg shadow-lg">
              <form onSubmit={handleContactSubmit} className="space-y-6">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <input type="text" placeholder="First Name" value={contactForm.firstName} onChange={(e) => setContactForm({ ...contactForm, firstName: e.target.value })} className="w-full px-4 py-3 border border-gray-300 rounded" required />
                  <input type="text" placeholder="Last Name" value={contactForm.lastName} onChange={(e) => setContactForm({ ...contactForm, lastName: e.target.value })} className="w-full px-4 py-3 border border-gray-300 rounded" required />
                </div>
                <input type="email" placeholder="Email" value={contactForm.email} onChange={(e) => setContactForm({ ...contactForm, email: e.target.value })} className="w-full px-4 py-3 border border-gray-300 rounded" required />
                <textarea placeholder="Message" rows="5" value={contactForm.message} onChange={(e) => setContactForm({ ...contactForm, message: e.target.value })} className="w-full px-4 py-3 border border-gray-300 rounded" required></textarea>
                <button type="submit" className="w-full bg-indigo-600 text-white py-4 rounded hover:bg-indigo-700 transition">Send</button>
              </form>
            </div>
            <div>
              <h3 className="text-2xl font-serif text-[#F4B400] mb-4">Locate Us</h3>
              <div className="flex items-start gap-3 text-white mb-6">
                <MapPin className="w-6 h-6 text-indigo-400 flex-shrink-0 mt-1" />
                <div>
                  <p>21 Kumapayi Road,</p>
                  <p>Olodo Garage,</p>
                  <p>Ibadan, Nigeria.</p>
                  <a href="https://maps.app.goo.gl/7rC6DorwsNpQ78Vc8" target="_blank" rel="noopener noreferrer" className="text-indigo-400 hover:text-indigo-300 font-semibold mt-2 inline-block">Get Directions →</a>
                </div>
              </div>
              <div className="rounded-lg overflow-hidden shadow-lg w-full h-64 md:h-80 mb-8">
                <img src="images/map.png" alt="Church location map" className="w-full h-full object-cover" />
              </div>
              <h3 className="text-2xl font-serif text-[#F4B400] mb-4">Follow Us</h3>
              <div className="flex gap-4">
                <a href="https://www.facebook.com/share/15aifHbLZC5/?mibextid=wwXIfr" className="bg-indigo-600 p-3 rounded text-white hover:bg-indigo-700 transition"><Facebook className="w-5 h-5" /></a>
                <a href="https://www.instagram.com/rccgyayajp?utm_source=ig_web_button_share_sheet&igsh=ZDNlZDc0MzIxNw==" className="bg-indigo-600 p-3 rounded text-white hover:bg-indigo-700 transition"><Instagram className="w-5 h-5" /></a>
                <a href="https://x.com/rccgyayajp?t=fdQ5YC5NpWy800eiloI03w&s=09" className="bg-indigo-600 p-3 rounded text-white hover:bg-indigo-700 transition"><Twitter className="w-5 h-5" /></a>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-[#1A237E] text-[#f2f2f2] py-4 px-4 border-t border-white/10">
        <div className="max-w-7xl mx-auto text-center">
          <p className="text-gray-400">2025 RCCG Jesus Pillar. All rights reserved</p>
        </div>
      </footer>

      {/* ─── LIGHTBOX ─── */}
      {lightbox.open && lightboxItem && (
        <div
          className="fixed inset-0 z-[100] bg-black/95 flex flex-col items-center justify-center"
          onTouchStart={handleLightboxTouchStart}
          onTouchEnd={handleLightboxTouchEnd}
        >
          {/* Close button */}
          <button
            onClick={closeLightbox}
            className="absolute top-4 right-4 z-10 bg-white/10 hover:bg-white/20 text-white rounded-full p-2 transition"
          >
            <X className="w-6 h-6" />
          </button>

          {/* Title & counter */}
          <div className="absolute top-4 left-4 right-16 z-10">
            <p className="text-white font-semibold text-base truncate">{lightboxItem.title}</p>
            <p className="text-white/60 text-sm">{lightbox.imgIndex + 1} / {lightboxItem.images.length}</p>
          </div>

          {/* Main image */}
          <div className="relative w-full h-full flex items-center justify-center px-12">
            <img
              src={lightboxItem.images[lightbox.imgIndex]}
              alt={lightboxItem.title}
              className="max-w-full max-h-full object-contain rounded-lg select-none"
              style={{ maxHeight: '80vh' }}
              draggable={false}
            />
          </div>

          {/* Prev / Next arrows */}
          {lightboxItem.images.length > 1 && (
            <>
              <button
                onClick={lightboxPrev}
                className="absolute left-2 md:left-6 top-1/2 -translate-y-1/2 bg-white/10 hover:bg-white/25 text-white rounded-full p-3 transition z-10"
              >
                <ChevronLeft className="w-7 h-7" />
              </button>
              <button
                onClick={lightboxNext}
                className="absolute right-2 md:right-6 top-1/2 -translate-y-1/2 bg-white/10 hover:bg-white/25 text-white rounded-full p-3 transition z-10"
              >
                <ChevronRight className="w-7 h-7" />
              </button>
            </>
          )}

          {/* Dot indicators */}
          {lightboxItem.images.length > 1 && (
            <div className="absolute bottom-6 left-1/2 -translate-x-1/2 flex gap-2 z-10">
              {lightboxItem.images.map((_, idx) => (
                <button
                  key={idx}
                  onClick={() => setLightbox(prev => ({ ...prev, imgIndex: idx }))}
                  className={`rounded-full transition-all ${idx === lightbox.imgIndex ? 'bg-white w-6 h-2' : 'bg-white/40 w-2 h-2'}`}
                />
              ))}
            </div>
          )}

          {/* Swipe hint on mobile */}
          <p className="absolute bottom-16 left-1/2 -translate-x-1/2 text-white/30 text-xs md:hidden select-none">
            Swipe left or right to navigate
          </p>
        </div>
      )}

      {/* Give Modal */}
      {showGivePage && (
        <div className="fixed inset-0 z-50 bg-black/70 backdrop-blur-sm flex items-center justify-center p-4">
          <div className="bg-white rounded-3xl shadow-2xl max-w-lg w-full max-h-[90vh] overflow-y-auto">
            <div className="bg-[#1A237E] rounded-t-3xl px-8 py-6 text-center relative">
              <button onClick={() => { setShowGivePage(false); setSelectedFund(''); setGiverName(''); }} className="absolute top-4 right-4 text-white/60 hover:text-white text-2xl">✕</button>
              <div className="text-4xl mb-2">🙏</div>
              <h2 className="text-3xl font-serif text-[#F4B400]">Give to God</h2>
              <p className="text-white/80 mt-1 text-sm">"Each of you should give what you have decided in your heart." — 2 Cor 9:7</p>
            </div>
            <div className="px-6 md:px-8 py-6 space-y-6">
              <div>
                <p className="text-sm font-bold uppercase tracking-widest text-indigo-500 mb-3">Step 1 — Choose where to give</p>
                <div className="grid grid-cols-2 gap-3">
                  {funds.map((fund) => (
                    <button key={fund.id} onClick={() => setSelectedFund(fund.id)}
                      className={`p-4 rounded-xl border-2 text-left transition ${selectedFund === fund.id ? 'border-indigo-600 bg-indigo-50' : 'border-gray-200 hover:border-indigo-300'}`}>
                      <div className="text-2xl mb-1">{fund.icon}</div>
                      <div className="font-serif text-gray-900 font-bold text-sm">{fund.label}</div>
                      <div className="text-xs text-gray-500 mt-0.5">{fund.desc}</div>
                    </button>
                  ))}
                </div>
              </div>
              <div>
                <p className="text-sm font-bold uppercase tracking-widest text-indigo-500 mb-3">Step 2 — Your name (optional)</p>
                <input type="text" placeholder="Enter your name so we can acknowledge your gift" value={giverName} onChange={(e) => setGiverName(e.target.value)} className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:outline-none focus:border-indigo-600 text-sm" />
              </div>
              {selectedFund && (() => {
                const fund = funds.find(f => f.id === selectedFund);
                return (
                  <div className="bg-gray-50 rounded-2xl p-5 border border-gray-200">
                    <p className="text-sm font-bold uppercase tracking-widest text-indigo-500 mb-4">Step 3 — Transfer to this account</p>
                    <div className="space-y-3 text-sm">
                      <div className="flex justify-between items-center"><span className="text-gray-500">Bank</span><span className="font-bold text-gray-900">{fund.bank}</span></div>
                      <div className="flex justify-between items-center"><span className="text-gray-500">Account Name</span><span className="font-bold text-gray-900 text-right ml-4">{fund.accountName}</span></div>
                      <div className="flex justify-between items-center border-t pt-3">
                        <span className="text-gray-500">Account Number</span>
                        <div className="flex items-center gap-2">
                          <span className="font-bold text-xl text-indigo-700 tracking-widest">{fund.accountNumber}</span>
                          <button onClick={() => { navigator.clipboard.writeText(fund.accountNumber); setCopied(true); setTimeout(() => setCopied(false), 2000); }} className="bg-indigo-600 text-white text-xs px-3 py-1 rounded-lg hover:bg-indigo-700 transition">{copied ? "Copied ✓" : "Copy"}</button>
                        </div>
                      </div>
                      <div className="flex justify-between items-center border-t pt-3">
                        <span className="text-gray-500">Narration</span>
                        <span className="font-bold text-gray-900 capitalize text-right ml-4">{fund.label}{giverName ? ` - ${giverName}` : ''}</span>
                      </div>
                    </div>
                    <p className="text-xs text-gray-400 mt-4 text-center">Please use the narration above when making your transfer so we can identify your gift.</p>
                  </div>
                );
              })()}
              <p className="text-center text-xs text-gray-400 pb-2">Thank you for your faithfulness. Every seed sown here advances God's kingdom. 🌱</p>
            </div>
          </div>
        </div>
      )}

    </div>
  );
};

export default RCCGJesusPillar;