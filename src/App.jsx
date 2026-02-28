import React, { useState } from 'react';
import { Menu, X, MapPin, Calendar, Clock, Mail, Phone, Facebook, Instagram, Youtube, Twitter, ChevronRight, Users, Heart, Book, Home } from 'lucide-react';
import emailjs from '@emailjs/browser';

const RCCGJesusPillar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [activeTab, setActiveTab] = useState('all');
  const [galleryImageIndexes, setGalleryImageIndexes] = useState({});
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    email: '',
    phone: '',
    message: '',
    firstTime: false,
    decision: false,
    membership: false,
    moreInfo: false
  });
  const [showGivePage, setShowGivePage] = useState(false);
const [selectedFund, setSelectedFund] = useState('');
const [giverName, setGiverName] = useState('');
const [copied, setCopied] = useState(false);

  const [contactForm, setContactForm] = useState({ firstName: '', lastName: '', email: '', message: '' });

const handleContactSubmit = async (e) => {
  e.preventDefault();
  try {
    await emailjs.send(
      "service_7u3iszw",
      "template_x9mhz98",
      {
        from_name: `${contactForm.firstName} ${contactForm.lastName}`,
        from_email: contactForm.email,
        message: contactForm.message,
        to_email: "rjesuspillar@gmail.com",  // ← set your email here
      },
        "FApeTy0IYrzB9hEDc"
    );
    alert("Message sent! We'll get back to you soon. God bless! 🙏");
    setContactForm({ firstName: '', lastName: '', email: '', message: '' });
  } catch (error) {
  console.error("EmailJS error:", error);
  alert(error?.text || "Check console for error.");
}
};


  const handleInputChange = (e) => {
    const { name, value, type, checked } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: type === 'checkbox' ? checked : value
    }));
  };

  
  const handleSubmit = async (e) => {
  e.preventDefault();
  
  try {
    await emailjs.send(
      "service_7u3iszw",     // from emailjs.com dashboard
      "template_x9mhz98",    // from emailjs.com dashboard
      {
        from_name: `${formData.firstName} ${formData.lastName}`,
        from_email: formData.email,
        phone: formData.phone,
        message: formData.message,
        first_time: formData.firstTime ? "Yes - First time visitor" : "",
        decision: formData.decision ? "Yes - Made decision for Christ" : "",
        membership: formData.membership ? "Yes - Wants membership" : "",
        more_info: formData.moreInfo ? "Yes - Wants to know more about Christ" : "",
        to_email: "rjesuspillar@gmail.com",  // ← set your email here
      },
      "FApeTy0IYrzB9hEDc"
    );
    alert("Thank you! We will be in touch soon. God bless you! 🙏");
    setFormData({
      firstName: '', lastName: '', email: '', phone: '',
      message: '', firstTime: false, decision: false,
      membership: false, moreInfo: false
    });

  } catch (error) {
  console.error("EmailJS error:", error);
  alert(error?.text || "Check console for error.");
}
};

  const services = [
    {
      day: 'SUNDAYS',
      items: [
        { name: 'First Service (Hour of Supplication)', time: '7:45 AM' },
        { name: 'Second Service (Hour of Restoration)', time: '9:30 AM' },
        { name: 'Thanksgiving Service (1st Sunday)', time: '8:40 AM' }
      ]
    },
    {
      day: 'TUESDAYS',
      items: [
        { name: 'Digging Deep', time: '5:30 PM' },
        { caption: 'There is truth and power in the word of God. Let us come together to learn more at the feet of the Holy Spirit.' }
      ]
    },
    {
      day: 'WEDNESDAYS',
      items: [
        { name: 'Solution Hour (1st Wednesday)', time: '5:30 PM' },
        { name: 'Soulmate Hour (3rd Wednesday)', time: '5:30 PM' }
      ]
    },
    {
      day: 'THURSDAYS',
      items: [
        { name: 'Faith Clinic', time: '5:30 PM' },
        { caption: 'This is a meeting where God touches every aspect of our life. God never fails!' }
      ]
    },
    {
      day: 'FRIDAYS',
      items: [
        { name: 'Holy Ghost Service (First Friday)', time: 'At The Redemption Camp' },
        { name: 'Congregational Vigil (Last Friday)', time: '10:00 PM' },
      ]
    },
    {
      day: 'SATURDAYS',
      items: [
        { name: 'Expectant Hour(2nd and 3rd Saturday)', time: '4:00 PM' },
        { name: "Men's Prayer Meeting (2nd Saturday)", time: '7:00 AM' }
      ]
    }
  ];

  const galleryImages = [
  { 
    id: 1, 
    category: 'worship', 
    title: 'Sunday Worship',
    images: [
      '/images/sunday.jpg',
      '/images/sunday2.jpg',
      '/images/sunday3.jpg',
    ]
  },
  { 
    id: 2, 
    category: 'worship', 
    title: 'Praise Session',
    images: [
      '/images/praise.jpg',
      '/images/praise.jpg'
    ]
  },
  { 
    id: 3, 
    category: 'youth', 
    title: 'Youth',
    images: [
      '/images/youth.jpg',
      '/images/youth2.jpg',
      '/images/youth3.jpg',
      '/images/youth4.jpg'
    ]
  },
  { 
    id: 4, 
    category: 'youth', 
    title: 'Young Adults Fellowship',
    images: [
      '/images/yf3.jpg',
      '/images/yf.jpg',
      '/images/yf2.jpg',
    ]
  },
  { 
    id: 5, 
    category: 'outreach', 
    title: 'Community Outreach',
    images: [
      '/images/outreach.jpg',
      '/images/outreach2.jpg',
      '/images/outreach3.jpg',
      '/images/outreach4.jpg'
    ]
  },
  { 
    id: 6, 
    category: 'events', 
    title: "Women's Program",
    images: [
      '/images/women2.jpg',
       '/images/women3.jpg',
       '/images/women4.jpg',
       '/images/women5.jpg'
    ]
  },
  { 
    id: 7, 
    category: 'prayer', 
    title: 'Prayer Session',
    images: [
      '/images/prayer1.jpg',
      '/images/prayer2.jpg',
      '/images/prayer.jpg',
      '/images/prayern.jpg',
    ]
  },
  { 
    id: 8, 
    category: 'events', 
    title: 'Church Anniversary',
    images: [
      '/images/anni.jpg',
      '/images/anni2.jpg',
      '/images/anni3.jpg',
      '/images/anni4.jpg',
      '/images/anni5.jpg',
    ]
  }
];

const funds = [
  { 
    id: 'tithe', 
    label: 'Tithe And Offering', 
    icon: '🌾', 
    desc: 'Your 10% unto the Lord / A freewill offering',
    bank: 'Access Bank',
    accountName: 'RCCG Jesus Pillar Tithe',
    accountNumber: '0044992158'
  },
  { 
    id: 'offering', 
    label: 'Project Offering', 
    icon: '🕊️', 
    desc: 'Growing Our Church',
    bank: 'Zenith Bank',
    accountName: 'RCCG Jesus Pillar',
    accountNumber: '1214026981'
  },
  { 
    id: 'mission', 
    label: 'Children Gift Giving', 
    icon: '🌍', 
    desc: 'Give to the Children Department',
    bank: 'Zenith Bank',
    accountName: 'RCCG Jesus Pillar Children Account',
    accountNumber: '1225585758'
  },
  { 
    id: 'building', 
    label: 'Church Anniversary', 
    icon: '🏛️', 
    desc: 'Growing our sanctuary',
    bank: 'Access Bank',
    accountName: 'Aremu Aanuoluwapo',
    accountNumber: '1854106597'
  },
];

  const filteredImages = activeTab === 'all' 
    ? galleryImages 
    : galleryImages.filter(img => img.category === activeTab);

  const [currentSlide, setCurrentSlide] = useState(0);

  const heroSlides = [
    {
      title: "WELCOME TO JESUS PILLAR",
      subtitle: "The Hall of Restoration, where Jesus Christ Himself is Our Pillar and strength.",
      bg: "/images/Gemini_Generated_Image_d35xltd35xltd35x.png",
      showButtons: true
    },
    {
      title: "DISTANCE IS NOT A BARRIER",
      subtitle: "Join our services online - We are LIVE every service!",
       bg: "/images/1b550e7b022576b97e03680a60f609f7.jpg",
      showButtons: true
    },
    {
      title: "Follow us on Social Media",
      subtitle: "Experience powerful worship, biblical teaching, and genuine fellowship",
      bg: "/images/855fea0b54a16869bdcf4ffa81f10279.jpg",
      showButtons: false,
      showSocial: true
    }
  ];

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % heroSlides.length);
  };

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + heroSlides.length) % heroSlides.length);
  };
  
React.useEffect(() => {
  emailjs.init("FApeTy0IYrzB9hEDc");
}, []);

  React.useEffect(() => {
    const timer = setInterval(nextSlide, 8000);
    return () => clearInterval(timer);
  }, []);

React.useEffect(() => {
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
  }, 3000); // Change every 3 seconds
  
  return () => clearInterval(timer);
}, [filteredImages]);

  return (
    <div className="min-h-screen bg-white">

      {/* Navigation */}
      <nav className="fixed top-0 left-0 w-full z-50 bg-black/10 backdrop-blur-md border-b border-white/10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-24">
            {/* Logo */}
            <div className="flex items-center gap-3">
              <img 
                src="/1200px-Rccg_logo.png" 
                alt="RCCG Logo" 
                className="h-16 w-16 object-contain"
              />
              <div>
                <h1 className="text-2xl font-serif text-[#F4B400]">RCCG Jesus Pillar</h1>
                <p className="text-sm text-[#f0f0f0]">Ibadan, Nigeria</p>
              </div>
            </div>

            {/* Desktop Menu */}
            <div className="hidden lg:flex items-center gap-8">
              <a href="#home" className="text-[#f2f2f2] hover:text-indigo-600 hover:text-indigo-600 font-medium transition">Home</a>
              <a href="#about" className="text-[#f2f2f2] hover:text-indigo-600 hover:text-indigo-600 font-medium transition">About Us</a>
              <a href="#services" className="text-[#f2f2f2] hover:text-indigo-600 hover:text-indigo-600 font-medium transition">Services</a>
              <a href="#gallery" className="text-[#f2f2f2] hover:text-indigo-600 hover:text-indigo-600 font-medium transition">Gallery</a>
              <a href="#contact" className="text-[#f2f2f2] hover:text-indigo-600 hover:text-indigo-600 font-medium transition">Contact</a>
              <button
  onClick={() => setShowGivePage(true)}
  className="bg-indigo-600 text-[#f2f2f2] px-6 py-2 rounded hover:bg-indigo-700 transition"
>
  Give
</button>
            </div>

            {/* Mobile Menu Button */}
            <button
              className="lg:hidden"
              onClick={() => setIsMenuOpen(!isMenuOpen)}
            >
              {isMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>

          {/* Mobile Menu */}
{isMenuOpen && (
  <div className="lg:hidden py-4 border-t">
    <a href="#home" className="block py-3 px-4 hover:bg-gray-50">Home</a>
    <a href="#about" className="block py-3 px-4 hover:bg-gray-50">About Us</a>
    <a href="#services" className="block py-3 px-4 hover:bg-gray-50">Services</a>
    <a href="#gallery" className="block py-3 px-4 hover:bg-gray-50">Gallery</a>
    <a href="#contact" className="block py-3 px-4 hover:bg-gray-50">Contact</a>
    <div className="px-4 mt-2">
      <button
        onClick={() => { setShowGivePage(true); setIsMenuOpen(false); }}
        className="w-full bg-indigo-600 text-white py-3 rounded font-medium hover:bg-indigo-700 transition"
      >
        Give
      </button>
    </div>
  </div>
)}
        </div>
      </nav>

      {/* Hero Carousel Section */}
      <section 
  id="home" 
  className="relative text-[#f2f2f2] overflow-hidden pt-24"
>
        {/* Carousel Slides */}
{heroSlides.map((slide, index) => (
  <div
    key={index}
    className={`absolute inset-0 ${
  index === currentSlide ? 'block' : 'hidden'
}`}

  >
    {/* Background Image */}
<div 
  className="absolute inset-0 bg-cover bg-center bg-no-repeat"
  style={{ backgroundImage: `url(${slide.bg})` }}
></div>
    
    {/* Dark Overlay for Text Readability */}
    <div className="absolute inset-0 
bg-gradient-to-b from-black/50 via-black/20 to-black/70"></div>
    
    {/* Optional: Gradient Overlay for Extra Style */}
    <div className="absolute inset-0 bg-black/40"></div>
            <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-32 md:py-48 h-full flex items-center">
              <div className="max-w-3xl">
                <h1 className="text-5xl md:text-7xl font-serif mb-6 leading-tight">
                  {slide.title}
                </h1>
                <p className="text-xl md:text-2xl mb-8 text-gray-300 italic">
                  {slide.subtitle}
                </p>
                {slide.showButtons && (
  <div> 
  </div>
)}

{slide.showSocial && (
  <div className="flex gap-6 mt-4">
    <a href="https://www.facebook.com/share/15aifHbLZC5/?mibextid=wwXIfr" className="bg-white/20 hover:bg-white/30 p-4 rounded-full backdrop-blur-sm transition">
      <Facebook className="w-8 h-8 text-white" />
    </a>
    <a href="https://www.instagram.com/rccgyayajp?utm_source=ig_web_button_share_sheet&igsh=ZDNlZDc0MzIxNw==" className="bg-white/20 hover:bg-white/30 p-4 rounded-full backdrop-blur-sm transition">
      <Instagram className="w-8 h-8 text-white" />
    </a>
    <a href="https://x.com/rccgyayajp?t=fdQ5YC5NpWy800eiloI03w&s=09&fbclid=PAZXh0bgNhZW0CMTEAc3J0YwZhcHBfaWQMMjU2MjgxMDQwNTU4AAGn39ycGMrJSzJ62mDqvfPkoRMtCmyfU88nnS-JZjf51t7tNDufqJtqTTA3rJQ_aem_62vXHc_GRXc5lqpjrdjchg" className="bg-white/20 hover:bg-white/30 p-4 rounded-full backdrop-blur-sm transition">
      <Twitter className="w-8 h-8 text-white" />
    </a>
  </div>
)}
              </div>
            </div>
          </div>
        ))}

       {/* Navigation Arrows - Invisible but clickable */}
        <button
          onClick={prevSlide}
          className="absolute left-0 top-1/2 -translate-y-1/2 w-16 h-32 cursor-pointer z-10"
          aria-label="Previous slide"
        >
          <span className="sr-only">Previous</span>
        </button>
        <button
          onClick={nextSlide}
          className="absolute right-0 top-1/2 -translate-y-1/2 w-16 h-32 cursor-pointer z-10"
          aria-label="Next slide"
        >
          <span className="sr-only">Next</span>
        </button>

        {/* Slide Indicators */}
        <div className="absolute bottom-8 left-1/2 -translate-x-1/2 flex gap-3 z-10">
          {heroSlides.map((_, index) => (
            <button
              key={index}
              onClick={() => setCurrentSlide(index)}
              className={`w-3 h-3 rounded-full transition ${
                index === currentSlide ? 'bg-white w-8' : 'bg-white/50 hover:bg-white/75'
              }`}
              aria-label={`Go to slide ${index + 1}`}
            />
          ))}
        </div>

        {/* Spacer for relative positioning */}
        <div className="h-[600px] md:h-[700px]"></div>
      </section>

     

      {/* Connect Section */}
      <section id="groups" className="py-20 px-4 bg-gray-50">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-serif text-[gray-900] mb-4">
              Faith for Every Generation
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto italic">
              One generation shall praise Your works to another, and shall declare Your mighty acts. — Psalm 145:4 (NKJV)
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              { title: 'YOUNG ADULTS', img: '/images/youth.jpg' },
              { title: 'TEENAGERS', img: '/images/teens.jpg' },
              { title: "MEN'S FELLOWSHIP", img: '/images/men.jpg' },
              { title: "WOMEN'S FELLOWSHIP", img: '/images/women.jpg' }
            ].map((group, idx) => (
              <div
                key={idx}
                className="group relative overflow-hidden rounded-lg shadow-lg hover:shadow-2xl transition transform hover:scale-105 cursor-pointer"
              >

               <div
  key={idx}
  className="group relative aspect-square overflow-hidden rounded-lg shadow-lg hover:shadow-2xl transition transform hover:scale-105 cursor-pointer"
>
  <img
    src={group.img}
    alt={group.title}
    className="absolute inset-0 w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
  />

  <div className="absolute inset-0 bg-black/40 flex items-end p-6">
    <h3 className="text-white text-2xl font-serif">
      {group.title}
    </h3>
  </div>
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
            <p className="text-xl text-gray-900 max-w-3xl mx-auto">
              We hold various services designed to serve different needs.
            </p>
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
                      <p className="text-gray"> <b>{item.caption}</b></p>
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Gallery Section */}
      <section id="gallery" className=" pb-10 py-20 px-4 bg-[#f0f0f0f]">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-4xl md:text-5xl font-serif text-gray-900 mb-4">GALLERY</h2>
          </div>

          {/* Gallery Filters */}
          <div className="flex flex-wrap justify-center gap-4 mb-12">
            {['all', 'worship', 'youth', 'outreach', 'prayer', 'events'].map((category) => (
              <button
                key={category}
                onClick={() => setActiveTab(category)}
                className={`px-6 py-2 rounded font-medium transition ${
                  activeTab === category
                    ? 'bg-indigo-600 text-[#f2f2f2]'
                    : 'bg-white text-gray-700 hover:bg-gray-100'
                }`}
              >
                {category.charAt(0).toUpperCase() + category.slice(1)}
              </button>
            ))}
          </div>

          {/* Gallery Grid */}
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
  {filteredImages.map((item) => {
    const currentIndex = galleryImageIndexes[item.id] || 0;
    const images = item.images || [];
    
    const nextImage = (e) => {
      e.stopPropagation();
      if (images.length > 1) {
        setGalleryImageIndexes(prev => ({
          ...prev,
          [item.id]: (currentIndex + 1) % images.length
        }));
      }
    };
    
    const prevImage = (e) => {
      e.stopPropagation();
      if (images.length > 1) {
        setGalleryImageIndexes(prev => ({
          ...prev,
          [item.id]: (currentIndex - 1 + images.length) % images.length
        }));
      }
    };
    
    return (
      <div
        key={item.id}
        className="group relative overflow-hidden rounded-lg shadow-md hover:shadow-xl transition cursor-pointer aspect-square"
      >
        {/* Image Carousel */}
        <div className="relative w-full h-full">
          {images.map((imgSrc, imgIdx) => (
            <div
              key={imgIdx}
              className={`absolute inset-0 transition-opacity duration-500 ${
                imgIdx === currentIndex ? 'opacity-100' : 'opacity-0'
              }`}
            >
              <img 
  src={imgSrc} 
  alt={`${item.title} - Photo ${imgIdx + 1}`}
  className="w-full h-full object-cover"
/>
            </div>
          ))}
          
          {/* Invisible Clickable Areas */}
          {images.length > 1 && (
            <>
              <button
                onClick={prevImage}
                className="absolute left-0 top-0 h-full w-1/3 z-10"
                aria-label="Previous image"
              >
                <span className="sr-only">Previous</span>
              </button>
              <button
                onClick={nextImage}
                className="absolute right-0 top-0 h-full w-1/3 z-10"
                aria-label="Next image"
              >
                <span className="sr-only">Next</span>
              </button>
            </>
          )}
          
          {/* Dot Indicators */}
          {images.length > 1 && (
            <div className="absolute bottom-3 left-1/2 -translate-x-1/2 flex gap-2 z-20">
              {images.map((_, imgIdx) => (
                <div
                  key={imgIdx}
                  className={`w-2 h-2 rounded-full transition ${
                    imgIdx === currentIndex ? 'bg-white w-4' : 'bg-white/60'
                  }`}
                />
              ))}
            </div>
          )}
        </div>
        
        {/* Hover Overlay with Title */}
        <div className="absolute inset-0 bg-black/50 opacity-0 group-hover:opacity-100 transition flex items-center justify-center pointer-events-none">
          <p className="text-white font-bold text-lg text-center px-4">{item.title}</p>
        </div>
      </div>
    );
  })}
</div>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="pt-20 pb-10 px-4 bg-white">
        <div className="max-w-7xl mx-auto">

          {/* Two-column layout: About Info + Form */}
          <div className="grid lg:grid-cols-2 gap-12 items-start">

            {/* LEFT: About Us Info + Pastor Profile */}
            <div className="space-y-10">
              {/* About Us Text */}
              <div>
                <h3 className="text-3xl font-serif text-indigo-700 mb-4">About Us</h3>
                <p className="text-[#000000] leading-relaxed text-lg">
                  At RCCG Jesus Pillar (the Hall of Restoration), Jesus Christ Himself is our Pillar and strength.
                  We are a vibrant, Spirit-filled community in Ibadan, Nigeria, committed to worship, prayer, 
                  and the transformation of lives through the power of God's Word.
                </p>
                <p className="text-[#000000] leading-relaxed text-lg mt-4">
                  We grow in love as one people, a safe community where God leads us, every generation 
                  declaring His mighty works to the next. 
                </p>
                <p className="text-[#000000] leading-relaxed text-lg mt-4">
                  In the Redeemed Christian Church of God our Vision is; To make heaven, take as many people with us, and have a member of RCCG in every family of all nations.
                </p>
              </div>

              {/* Lead Pastor Profile */}
             
<div className="space-y-6">
  <div className=" flex gap-6 items-start ">
    {/* Pastor Image - Left */}
    <div className="w-1/2 flex-shrink-0 rounded-2xl overflow-hidden shadow-lg">
      <img
        src="/images/pastor.jpg"
        alt="Lead Pastor"
        className="w-full h-auto object-contain"
      />
    </div>

    {/* Pastor Details - Right */}
    <div className="w-1/2">
      <p className="text-xs font-bold uppercase tracking-widest text-indigo-500 mb-1">Pastor in Charge of Area</p>
      <h4 className="text-2xl font-serif text-gray-900 mb-2">Pastor Adeyemi Adebanjo Josiah.</h4>
      <p className="text-gray-600 leading-relaxed text-md">
        Our Lead Pastor shepherds the congregation of RCCG Jesus Pillar with a heart for God 
        and a passion for people. Under his leadership, the church has grown in faith, prayer, 
        and community impact always anchored in the Word of God. 
      </p>
    </div>
  </div>
</div>
            </div>

            {/* RIGHT: Next Steps Form */}
            <div>
              {/* Heading above form only */}
              <h2 className="text-3xl md:text-4xl font-serif text-indigo-600 mb-8">
                Let's help you take your next steps in Christ Jesus.
              </h2>

              <div className="bg-gray-50 p-8 rounded-2xl shadow-lg">
                <p className="text-gray-700 mb-6">Please check the relevant boxes:</p>
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div className="space-y-3">
                    <label className="flex items-center gap-3">
                      <input 
                        type="checkbox" 
                        name="firstTime"
                        checked={formData.firstTime}
                        onChange={handleInputChange}
                        className="w-5 h-5 text-indigo-600"
                      />
                      <span>It's my 1st time at Jesus Pillar</span>
                    </label>
                    <label className="flex items-center gap-3">
                      <input 
                        type="checkbox"
                        name="decision"
                        checked={formData.decision}
                        onChange={handleInputChange}
                        className="w-5 h-5 text-indigo-600"
                      />
                      <span>I made the decision to follow Christ today</span>
                    </label>
                    <label className="flex items-center gap-3">
                      <input 
                        type="checkbox"
                        name="membership"
                        checked={formData.membership}
                        onChange={handleInputChange}
                        className="w-5 h-5 text-indigo-600"
                      />
                      <span>I want to become a member of Jesus Pillar</span>
                    </label>
                    <label className="flex items-center gap-3">
                      <input 
                        type="checkbox"
                        name="moreInfo"
                        checked={formData.moreInfo}
                        onChange={handleInputChange}
                        className="w-5 h-5 text-indigo-600"
                      />
                      <span>Tell me more about Christ</span>
                    </label>
                  </div>

                  <div className="grid md:grid-cols-2 gap-4">
                    <input
                      type="text"
                      name="firstName"
                      placeholder="First Name"
                      value={formData.firstName}
                      onChange={handleInputChange}
                      className="w-full px-4 py-3 border border-gray-300 rounded focus:outline-none focus:border-indigo-600"
                      required
                    />
                    <input
                      type="text"
                      name="lastName"
                      placeholder="Last Name"
                      value={formData.lastName}
                      onChange={handleInputChange}
                      className="w-full px-4 py-3 border border-gray-300 rounded focus:outline-none focus:border-indigo-600"
                      required
                    />
                  </div>

                  <input
                    type="email"
                    name="email"
                    placeholder="Email"
                    value={formData.email}
                    onChange={handleInputChange}
                    className="w-full px-4 py-3 border border-gray-300 rounded focus:outline-none focus:border-indigo-600"
                    required
                  />

                  <input
                    type="tel"
                    name="phone"
                    placeholder="Phone Number"
                    value={formData.phone}
                    onChange={handleInputChange}
                    className="w-full px-4 py-3 border border-gray-300 rounded focus:outline-none focus:border-indigo-600"
                  />

                  <textarea
                    name="message"
                    placeholder="Message/Prayer Request"
                    value={formData.message}
                    onChange={handleInputChange}
                    rows="4"
                    className="w-full px-4 py-3 border border-gray-300 rounded focus:outline-none focus:border-indigo-600"
                  ></textarea>

                  <button
                    type="submit"
                    className="w-full bg-indigo-600 text-white py-4 rounded font-serif hover:bg-indigo-700 transition"
                  >
                    Submit
                  </button>
                </form>
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-20 px-4 bg-[#1A237E]"> 
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-serif text-[#F4B400] mb-4">CONTACT US</h2>
            <p className="text-xl text-[#ffffff]">We'd love to hear from you.</p>
            <p className="text-xl text-[#ffffff]">08075316991 (Church Admin)</p>
            
          </div>

          <div className="grid lg:grid-cols-2 gap-12">
            {/* Contact Form */}
            <div className="bg-gray-50 p-8 rounded-lg shadow-lg">
              <form onSubmit={handleContactSubmit} className="space-y-6">
  <div className="grid md:grid-cols-2 gap-4">
    <input
      type="text"
      name="firstName"
      placeholder="First Name"
      value={contactForm.firstName}
      onChange={(e) =>
        setContactForm({ ...contactForm, firstName: e.target.value })
      }
      className="w-full px-4 py-3 border border-gray-300 rounded"
      required
    />
    <input
      type="text"
      name="lastName"
      placeholder="Last Name"
      value={contactForm.lastName}
      onChange={(e) =>
        setContactForm({ ...contactForm, lastName: e.target.value })
      }
      className="w-full px-4 py-3 border border-gray-300 rounded"
      required
    />
  </div>

  <input
    type="email"
    name="email"
    placeholder="Email"
    value={contactForm.email}
    onChange={(e) =>
      setContactForm({ ...contactForm, email: e.target.value })
    }
    className="w-full px-4 py-3 border border-gray-300 rounded"
    required
  />

  <textarea
    name="message"
    placeholder="Message"
    rows="5"
    value={contactForm.message}
    onChange={(e) =>
      setContactForm({ ...contactForm, message: e.target.value })
    }
    className="w-full px-4 py-3 border border-gray-300 rounded"
    required
  ></textarea>

  <button
    type="submit"
    className="w-full bg-indigo-600 text-white py-4 rounded"
  >
    Send
  </button>
</form>
            </div>

            {/* Contact Info */}
            <div className=""><div>
  <h3 className="text-2xl font-serif text-[#F4B400] mb-4">Locate Us</h3>
  
  <div className="grid md:grid-cols-2 gap-6">
    {/* Address */}
    <div className="flex items-start gap-3 text-[#ffffff]">
      <MapPin className="w-6 h-6 text-indigo-600 flex-shrink-0 mt-1" />
      <div>
         <p>21 Kumapayi Road,</p>
                    <p>Olodo Garage,</p>
                    <p>Ibadan, Nigeria.</p>
        <a 
          href="https://maps.app.goo.gl/7rC6DorwsNpQ78Vc8" 
          target="_blank"
          rel="noopener noreferrer"
          className="text-indigo-600 hover:text-indigo-700 font-semibold mt-2 inline-block"
        >
          Get Directions →
        </a>
      </div>
    </div>

    {/* Map Image */}

<div className="md:col-span-2 mt-6">
  <div className="rounded-lg overflow-hidden shadow-lg w-full h-[400px]">
    <img
      src="/images/map.png"
      alt="Church location map"
      className="w-full h-full object-cover"
    />
  </div>
</div>


  </div>
</div>

              <div>
                <h3 className="text-2xl font-serif text-[#F4B400] space-y-6 mt-7 mb-4">Follow Us</h3>
                <div className="flex gap-4">
                  <a href="https://www.facebook.com/share/15aifHbLZC5/?mibextid=wwXIfr" className="bg-indigo-600 p-3 rounded text-[#f2f2f2] hover:bg-indigo-700 transition">
                    <Facebook className="w-5 h-5" />
                  </a>
                  <a href="https://www.instagram.com/rccgyayajp?utm_source=ig_web_button_share_sheet&igsh=ZDNlZDc0MzIxNw==" className="bg-indigo-600 p-3 rounded text-[#f2f2f2] hover:bg-indigo-700 transition">
                    <Instagram className="w-5 h-5" />
                  </a>
                  <a href="https://x.com/rccgyayajp?t=fdQ5YC5NpWy800eiloI03w&s=09&fbclid=PAZXh0bgNhZW0CMTEAc3J0YwZhcHBfaWQMMjU2MjgxMDQwNTU4AAGn39ycGMrJSzJ62mDqvfPkoRMtCmyfU88nnS-JZjf51t7tNDufqJtqTTA3rJQ_aem_62vXHc_GRXc5lqpjrdjchg" className="bg-indigo-600 p-3 rounded text-[#f2f2f2] hover:bg-indigo-700 transition">
                    <Twitter className="w-5 h-5" />
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-[#1A237E] text-[#f2f2f2] py-4 px-4">
        <div className="max-w-7xl mx-auto text-center">
          <p className="text-gray-400">2025 RCCG Jesus Pillar. All rights reserved</p>
        </div>
      </footer>

       {showGivePage && (
  <div className="fixed inset-0 z-50 bg-black/70 backdrop-blur-sm flex items-center justify-center p-4">
    <div className="bg-white rounded-3xl shadow-2xl max-w-lg w-full max-h-[90vh] overflow-y-auto">
      
      {/* Header */}
      <div className="bg-[#1A237E] rounded-t-3xl px-8 py-6 text-center relative">

       

        <button
          onClick={() => { setShowGivePage(false); setSelectedFund(''); setGiverName(''); }}
          className="absolute top-4 right-4 text-white/60 hover:text-white text-2xl"
        >
          ✕
        </button>
        <div className="text-4xl mb-2">🙏</div>
        <h2 className="text-3xl font-serif text-[#F4B400]">Give to God</h2>
        <p className="text-white/80 mt-1 text-sm">
          "Each of you should give what you have decided in your heart." — 2 Cor 9:7
        </p>
      </div>
      

      

      <div className="px-8 py-6 space-y-6">

        {/* Step 1: Choose Fund */}
        <div>
          <p className="text-sm font-bold uppercase tracking-widest text-indigo-500 mb-3">
            Step 1 — Choose where to give
          </p>

          
         <div className="grid grid-cols-2 gap-3">
  {funds.map((fund) => (
    <button
      key={fund.id}
      onClick={() => setSelectedFund(fund.id)}
      className={`p-4 rounded-xl border-2 text-left transition ${
        selectedFund === fund.id
          ? 'border-indigo-600 bg-indigo-50'
          : 'border-gray-200 hover:border-indigo-300'
      }`}
    >
      <div className="text-2xl mb-1">{fund.icon}</div>
      <div className="font-serif text-gray-900 font-bold text-sm">{fund.label}</div>
      <div className="text-xs text-gray-500 mt-0.5">{fund.desc}</div>
    </button>
  ))}
</div>
          
        </div>

        {/* Step 2: Your Name */}
        <div>
          <p className="text-sm font-bold uppercase tracking-widest text-indigo-500 mb-3">
            Step 2 — Your name (optional)
          </p>
          <input
            type="text"
            placeholder="Enter your name so we can acknowledge your gift"
            value={giverName}
            onChange={(e) => setGiverName(e.target.value)}
            className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:outline-none focus:border-indigo-600 text-sm"
          />
        </div>

        {/* Step 3: Bank Details */}
       
       {selectedFund && (() => {
  const fund = funds.find(f => f.id === selectedFund);
  return (
    <div className="bg-gray-50 rounded-2xl p-5 border border-gray-200">
      <p className="text-sm font-bold uppercase tracking-widest text-indigo-500 mb-4">
        Step 3 — Transfer to this account
      </p>

      <div className="space-y-3 text-sm">
        <div className="flex justify-between items-center">
          <span className="text-gray-500">Bank</span>
          <span className="font-bold text-gray-900">{fund.bank}</span>
        </div>
        <div className="flex justify-between items-center">
          <span className="text-gray-500">Account Name</span>
          <span className="font-bold text-gray-900">{fund.accountName}</span>
        </div>
        <div className="flex justify-between items-center border-t pt-3">
          <span className="text-gray-500">Account Number</span>
          <div className="flex items-center gap-2">
            <span className="font-bold text-xl text-indigo-700 tracking-widest">{fund.accountNumber}</span>
            <button
              onClick={() => {
                navigator.clipboard.writeText(fund.accountNumber);
                setCopied(true);
                setTimeout(() => setCopied(false), 2000);
              }}
              className="bg-indigo-600 text-white text-xs px-3 py-1 rounded-lg hover:bg-indigo-700 transition"
            >
              {copied ? "Copied ✓" : "Copy"}
            </button>
          </div>
        </div>
        <div className="flex justify-between items-center border-t pt-3">
          <span className="text-gray-500">Narration / Reference</span>
          <span className="font-bold text-gray-900 capitalize">
            {fund.label}{giverName ? ` - ${giverName}` : ''}
          </span>
        </div>
      </div>

      <p className="text-xs text-gray-400 mt-4 text-center">
        Please use the narration above when making your transfer so we can identify your gift.
      </p>
    </div>
  );
})()}

        {/* Footer note */}
        <p className="text-center text-xs text-gray-400 pb-2">
          Thank you for your faithfulness. Every seed sown here advances God's kingdom. 🌱
        </p>
      </div>
    </div>
  </div>
)}

    </div>
  );
};

export default RCCGJesusPillar;