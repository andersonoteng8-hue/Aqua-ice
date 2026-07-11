/* ============================================
   ACQUAH ICE — Vanilla JavaScript
   All interactivity: no frameworks
   ============================================ */
(function () {
  'use strict';

  /* ===== Data ===== */
  var products = [
    { id: 'sachet-300', name: 'Sachet Water', size: '300ml', image: 'images/products/2.jpeg', description: 'Convenient and affordable pure water sachets, perfect for everyday hydration on the go.', features: ['300ml pure mineral water', 'Hygienically sealed', 'Affordable pricing', 'Perfect for daily use'], category: 'sachet', badge: 'Best Seller' },
    { id: 'bottle-300', name: 'Bottled Water', size: '300ml', image: 'images/products/3.jpeg', description: 'Compact 300ml bottles ideal for kids, travel, and quick refreshment anywhere.', features: ['300ml premium bottle', 'Easy-sip cap', 'Recyclable packaging', 'On-the-go convenience'], category: 'bottle' },
    { id: 'bottle-500', name: 'Bottled Water', size: '500ml', image: 'images/products/7.jpeg', description: 'Our most popular size — perfect for offices, gyms, and personal hydration.', features: ['500ml standard bottle', 'Sport cap option', 'BPA-free plastic', 'Perfect for offices & gyms'], category: 'bottle', badge: 'Popular' },
    { id: 'bottle-750', name: 'Bottled Water', size: '750ml', image: 'images/products/3.jpeg', description: 'A generous serving of pure refreshment for meetings, dining, and events.', features: ['750ml premium bottle', 'Elegant design', 'Ideal for dining', 'Crystal clear water'], category: 'bottle' },
    { id: 'bottle-1500', name: 'Bottled Water', size: '1.5L', image: 'images/products/6.jpeg', description: 'Family-size bottles for home, travel, and group gatherings.', features: ['1.5L family size', 'Easy-grip design', 'Long-lasting freshness', 'Great value for money'], category: 'bottle' },
    { id: 'bulk-events', name: 'Bulk Supply', size: 'Events', image: 'images/products/5.jpeg', description: 'Large-volume water supply for weddings, conferences, parties, and corporate events.', features: ['Custom quantities', 'Event delivery', 'Special event pricing', 'Reliable supply chain'], category: 'bulk', badge: 'For Events' },
    { id: 'corporate', name: 'Corporate Branded Water', size: 'Custom', image:'images/products/8.jpeg', description:'Custom-branded bottles with your company logo for promotions and corporate gifting.', features: ['Custom logo printing', 'Brand promotion', 'Corporate gifting', 'Minimum order applies'], category: 'bulk', badge: 'Custom' }
  ];

  var processSteps = [
    { icon: 'M12 2.69l5.66 5.66a8 8 0 1 1-11.31 0z', title: 'Water Source', desc: 'Sourced from natural, protected underground springs.' },
    { icon: 'M2 12h20M2 6h20M2 18h20', title: 'Sedimentation', desc: 'Removal of large particles through natural settling.' },
    { icon: 'M22 3H2l8 9.46V19l4 2v-7.54L22 3z', title: 'Multi-stage Filtration', desc: 'Progressive filtration through multiple media layers.' },
    { icon: 'M12 2v4M12 18v4M4.93 4.93l1.41 1.41M17.66 17.66l1.41 1.41M2 12h2M20 12h2', title: 'Activated Carbon Filtration', desc: 'Removes chlorine, odors, and organic compounds.' },
    { icon: 'M12 2v20M2 12h20', title: 'Reverse Osmosis', desc: 'Advanced membrane filtration for ultra-pure water.' },
    { icon: 'M12 1v2M12 21v2M4.22 4.22l1.42 1.42M18.36 18.36l1.42 1.42M1 12h2M21 12h2', title: 'UV Sterilization', desc: 'Ultraviolet light eliminates all microorganisms.' },
    { icon: 'M12 3l1.5 4.5L18 9l-4.5 1.5L12 15l-1.5-4.5L6 9l4.5-1.5z', title: 'Ozonation', desc: 'Ozone treatment for additional purification and freshness.' },
    { icon: 'M9 3h6v4l4 2v12H5V9l4-2V3z', title: 'Mineral Balancing', desc: 'Precise addition of essential natural minerals.' },
    { icon: 'M9 2h6v6l4 2v12H5V10l4-2V2zM9 14h6', title: 'Laboratory Testing', desc: 'Rigorous quality testing in our on-site laboratory.' },
    { icon: 'M2 20h6V8H2zM16 20h6V4h-6zM10 20h4v-6h-4z', title: 'Bottle Manufacturing', desc: 'Bottles produced in-house under sterile conditions.' },
    { icon: 'M21 16V8a2 2 0 0 0-1-1.73l-7-4a2 2 0 0 0-2 0l-7 4A2 2 0 0 0 3 8v8a2 2 0 0 0 1 1.73l7 4a2 2 0 0 0 2 0l7-4A2 2 0 0 0 21 16z', title: 'Automatic Filling', desc: 'Automated, touch-free filling process.' },
    { icon: 'M21 16V8a2 2 0 0 0-1-1.73l-7-4a2 2 0 0 0-2 0l-7 4A2 2 0 0 0 3 8v8a2 2 0 0 0 1 1.73l7 4a2 2 0 0 0 2 0l7-4A2 2 0 0 0 21 16z', title: 'Automatic Sealing', desc: 'Hermetic sealing to preserve absolute purity.' },
    { icon: 'M20.59 13.41l-7.17 7.17a2 2 0 0 1-2.83 0L2 12V2h10l8.59 8.59a2 2 0 0 1 0 2.82z', title: 'Labelling', desc: 'Precise label application for brand identity.' },
    { icon: 'M21 16V8a2 2 0 0 0-1-1.73l-7-4a2 2 0 0 0-2 0l-7 4A2 2 0 0 0 3 8v8a2 2 0 0 0 1 1.73l7 4a2 2 0 0 0 2 0l7-4A2 2 0 0 0 21 16z', title: 'Packaging', desc: 'Careful packing for safe transport and storage.' },
    { icon: 'M14 18V5a2 2 0 0 0-2-2H4a2 2 0 0 0-2 2v13a2 2 0 0 0 2 2h8M14 8h4l2 2v6a2 2 0 0 1-2 2', title: 'Distribution', desc: 'Fast delivery to homes, offices, and businesses.' }
  ];

  var features = [
    { icon: 'M12 2.69l5.66 5.66a8 8 0 1 1-11.31 0z', title: '100% Pure Water', desc: 'Every drop is purified through our 15-stage process.' },
    { icon: 'M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z', title: 'Hygienic Production', desc: 'Produced under strict hygienic conditions.' },
    { icon: 'M12 8a6 6 0 1 0 0 12 6 6 0 0 0 0-12zM12 2v2M12 20v2M4.93 4.93l1.41 1.41M17.66 17.66l1.41 1.41M2 12h2M20 12h2', title: 'FDA Standards', desc: 'Fully compliant with FDA regulations.' },
    { icon: 'M21 16V8a2 2 0 0 0-1-1.73l-7-4a2 2 0 0 0-2 0l-7 4A2 2 0 0 0 3 8v8a2 2 0 0 0 1 1.73l7 4a2 2 0 0 0 2 0l7-4A2 2 0 0 0 21 16z', title: 'Quality Packaging', desc: 'Premium bottles and sachets that preserve freshness.' },
    { icon: 'M12 1v22M17 5H9.5a3.5 3.5 0 0 0 0 7h5a3.5 3.5 0 0 1 0 7H6', title: 'Affordable Prices', desc: 'Quality water at prices everyone can afford.' },
    { icon: 'M14 18V5a2 2 0 0 0-2-2H4a2 2 0 0 0-2 2v13a2 2 0 0 0 2 2h8M14 8h4l2 2v6a2 2 0 0 1-2 2', title: 'Fast Delivery', desc: 'Quick and reliable delivery across Ghana.' },
    { icon: 'M7 10v12M15 5.88 14 10h5.83a2 2 0 0 1 1.92 2.56l-2.33 8A2 2 0 0 1 17.5 22H4a2 2 0 0 1-2-2v-8a2 2 0 0 1 2-2h2.76a2 2 0 0 0 1.79-1.11L12 2a3.13 3.13 0 0 1 3 3.88Z', title: 'Trusted Brand', desc: 'Thousands of loyal customers trust Acquah Ice.' },
    { icon: 'M3 18v-6a9 9 0 0 1 18 0v6M21 19a2 2 0 0 1-2 2h-1a2 2 0 0 1-2-2v-3a2 2 0 0 1 2-2h3zM3 19a2 2 0 0 0 2 2h1a2 2 0 0 0 2-2v-3a2 2 0 0 0-2-2H3z', title: 'Excellent Service', desc: 'Friendly customer support available 24/7.' }
  ];

  var galleryItems = [
    { src: 'images/logo/1.jpeg', title: 'Acquah Ice Logo', category: 'Brand', large: true },
    { src: 'images/products/3.jpeg', title: 'Bottled Water', category: 'Products' },
    { src: 'images/products/2.jpeg', title: 'Sachet Water', category: 'Products' },
    { src: 'images/products/4.jpeg', title: 'Premium Bottle', category: 'Products', large: true },
    { src: 'images/products/3.jpeg', title: 'Product Range', category: 'Products' },
    { src: 'images/products/2.jpeg', title: 'Sachet Pack', category: 'Products' },
    
  ];

  var testimonials = [
    { name: 'Ama Serwaa', role: 'Home Customer', location: 'Mampong, Ashanti', text: 'Acquah Ice has been our family water for over a year now. The taste is incredibly fresh and the delivery is always on time. I trust them completely for my children.', rating: 5 },
    { name: 'Kwame Mensah', role: 'Office Manager', location: 'Kumasi', text: 'We switched our entire office water supply to Acquah Ice and never looked back. Professional service, consistent quality, and competitive pricing. Highly recommended.', rating: 5 },
    { name: 'Akosua Frimpong', role: 'Event Planner', location: 'Accra', text: 'For our wedding with 500 guests, Acquah Ice delivered bulk water on time and in perfect condition. The branded bottles were a hit. Exceptional service!', rating: 5 },
    { name: 'Yaw Owusu', role: 'School Administrator', location: 'Mampong', text: 'Our students love the sachet water. It is affordable, clean, and always available. Acquah Ice has been a reliable partner for our school.', rating: 5 },
    { name: 'Adwoa Boateng', role: 'Restaurant Owner', location: 'Kumasi', text: 'Quality is everything in the restaurant business. Acquah Ice meets our standards every single time. Our customers notice the difference.', rating: 5 },
    { name: 'Kofi Asante', role: 'Corporate Client', location: 'Ashanti Region', text: 'The corporate branded water option is brilliant. Our logo on premium bottles has been a great marketing tool. Acquah Ice delivers excellence.', rating: 5 }
  ];

  var faqs = [
    { q: 'Where is Acquah Ice located?', a: 'Acquah Ice Natural Mineral Water is located at Dada Alex Villa, Mampong, in the Ashanti Region of Ghana. We serve customers across the region and beyond.' },
    { q: 'How do I place an order?', a: 'You can place an order by calling us at +233 54 836 8296, sending a WhatsApp message, or filling out the contact form on our website. Our team will respond promptly to process your order.' },
    { q: 'Do you deliver?', a: 'Yes! We offer fast and reliable delivery to homes, offices, schools, events, and businesses across Ghana. Delivery fees may vary based on location and order size.' },
    { q: 'What bottle sizes are available?', a: 'We offer a range of sizes including 300ml sachet water, 300ml, 500ml, 750ml, and 1.5L bottles. We also provide bulk supply for events and corporate branded water.' },
    { q: 'Is the water FDA approved?', a: 'Absolutely. Acquah Ice is fully FDA approved and produced under strict hygienic conditions. Our water goes through a rigorous 15-stage purification process and is laboratory tested for quality assurance.' },
    { q: 'Do you supply events?', a: 'Yes, we provide bulk water supply for weddings, conferences, parties, corporate events, and more. We also offer custom-branded bottles for promotional purposes. Contact us for special event pricing.' }
  ];

  var searchableContent = [
    { title: 'Sachet Water (300ml)', section: '#products', type: 'Product' },
    { title: '300ml Bottle', section: '#products', type: 'Product' },
    { title: '500ml Bottle', section: '#products', type: 'Product' },
    { title: '750ml Bottle', section: '#products', type: 'Product' },
    { title: '1.5L Bottle', section: '#products', type: 'Product' },
    { title: 'Bulk Supply for Events', section: '#products', type: 'Product' },
    { title: 'Corporate Branded Water', section: '#products', type: 'Product' },
    { title: 'About Us', section: '#about', type: 'Section' },
    { title: 'Our Mission', section: '#about', type: 'Section' },
    { title: 'Our Vision', section: '#about', type: 'Section' },
    { title: 'Core Values', section: '#about', type: 'Section' },
    { title: 'Water Production Process', section: '#process', type: 'Section' },
    { title: 'Quality Assurance', section: '#quality', type: 'Section' },
    { title: 'Why Choose Acquah Ice', section: '#quality', type: 'Section' },
    { title: 'Gallery', section: '#gallery', type: 'Section' },
    { title: 'Testimonials', section: '#testimonials', type: 'Section' },
    { title: 'FAQ', section: '#faq', type: 'Section' },
    { title: 'Contact Us', section: '#contact', type: 'Section' },
    { title: 'Delivery', section: '#delivery', type: 'Section' },
    { title: 'FDA Approved', section: '#quality', type: 'Feature' },
    { title: 'Fast Delivery', section: '#delivery', type: 'Feature' },
    { title: 'Order Now', section: '#contact', type: 'Action' }
  ];

  /* ===== Helpers ===== */
  function $(sel, ctx) { return (ctx || document).querySelector(sel); }
  function $all(sel, ctx) { return Array.prototype.slice.call((ctx || document).querySelectorAll(sel)); }
  function svgIcon(d, size) { size = size || 24; return '<svg width="' + size + '" height="' + size + '" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="' + d + '"/></svg>'; }

  /* ===== Render Products ===== */
  function renderProducts() {
    var grid = $('#productsGrid');
    if (!grid) return;
    grid.innerHTML = products.map(function (p) {
      var featuresHtml = p.features.map(function (f) { return '<li>' + f + '</li>'; }).join('');
      var badge = p.badge ? '<span class="product-badge">' + p.badge + '</span>' : '';
      return '<div class="product-card reveal" data-category="' + p.category + '">' +
        '<div class="product-image">' +
          '<img src="' + p.image + '" alt="' + p.name + ' - ' + p.size + '" />' +
          badge +
        '</div>' +
        '<div class="product-body">' +
          '<div class="product-header">' +
            '<h3 class="product-name">' + p.name + '</h3>' +
            '<span class="product-size">' + p.size + '</span>' +
          '</div>' +
          '<p class="product-desc">' + p.description + '</p>' +
          '<ul class="product-features">' + featuresHtml + '</ul>' +
          '<button class="btn btn-primary product-order" data-product="' + p.name + ' (' + p.size + ')">' +
            '<svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><circle cx="9" cy="21" r="1"/><circle cx="20" cy="21" r="1"/><path d="M1 1h4l2.68 13.39a2 2 0 0 0 2 1.61h9.72a2 2 0 0 0 2-1.61L23 6H6"/></svg>' +
            'Order Now' +
          '</button>' +
        '</div>' +
      '</div>';
    }).join('');

    $all('.product-order').forEach(function (btn) {
      btn.addEventListener('click', function () {
        var product = btn.getAttribute('data-product');
        var msg = 'Hello Acquah Ice, I would like to order: ' + product + '. Please provide pricing and delivery details.';
        window.open('https://wa.me/233548368296?text=' + encodeURIComponent(msg), '_blank');
      });
    });
  }

  /* ===== Render Process Timeline ===== */
  function renderProcess() {
    var container = $('#timeline');
    if (!container) return;
    container.innerHTML = '<div class="timeline-line"></div>' + processSteps.map(function (step, i) {
      return '<div class="timeline-step reveal">' +
        '<div class="timeline-number">' + (i + 1) + '</div>' +
        '<div class="timeline-content">' +
          '<div class="timeline-card">' +
            '<div class="timeline-icon">' + svgIcon(step.icon, 24) + '</div>' +
            '<h3>' + step.title + '</h3>' +
            '<p>' + step.desc + '</p>' +
          '</div>' +
        '</div>' +
      '</div>';
    }).join('');
  }

  /* ===== Render Features ===== */
  function renderFeatures() {
    var grid = $('#featuresGrid');
    if (!grid) return;
    grid.innerHTML = features.map(function (f) {
      return '<div class="feature-card reveal-scale">' +
        '<div class="feature-icon">' + svgIcon(f.icon, 32) + '</div>' +
        '<h3>' + f.title + '</h3>' +
        '<p>' + f.desc + '</p>' +
      '</div>';
    }).join('');
  }

  /* ===== Render Gallery ===== */
  function renderGallery() {
    var grid = $('#galleryGrid');
    if (!grid) return;
    grid.innerHTML = galleryItems.map(function (item, i) {
      return '<div class="gallery-item reveal-scale' + (item.large ? ' large' : '') + '" data-index="' + i + '">' +
        '<img src="' + item.src + '" alt="' + item.title + '" />' +
        '<div class="gallery-overlay">' +
          '<h3>' + item.title + '</h3>' +
          '<span>' + item.category + '</span>' +
        '</div>' +
        '<div class="gallery-zoom">' + svgIcon('M21 21l-6-6m2-5a7 7 0 1 1-14 0 7 7 0 0 1 14 0z', 16) + '</div>' +
      '</div>';
    }).join('');

    $all('.gallery-item').forEach(function (item) {
      item.addEventListener('click', function () {
        openLightbox(parseInt(item.getAttribute('data-index'), 10));
      });
    });
  }

  /* ===== Lightbox ===== */
  var lightboxIndex = 0;
  function openLightbox(index) {
    lightboxIndex = index;
    var lb = $('#lightbox');
    var img = $('#lightboxImg');
    var caption = $('#lightboxCaption');
    img.src = galleryItems[index].src;
    img.alt = galleryItems[index].title;
    caption.textContent = galleryItems[index].title;
    lb.classList.add('open');
    document.body.style.overflow = 'hidden';
  }
  function closeLightbox() {
    $('#lightbox').classList.remove('open');
    document.body.style.overflow = '';
  }
  function lightboxNav(dir) {
    lightboxIndex = (lightboxIndex + dir + galleryItems.length) % galleryItems.length;
    openLightbox(lightboxIndex);
  }

  /* ===== Render Testimonials ===== */
  var currentSlide = 0;
  var slideTimer = null;

  function renderTestimonials() {
    var track = $('#testimonialTrack');
    var dots = $('#sliderDots');
    if (!track) return;
    track.innerHTML = testimonials.map(function (t) {
      var stars = '';
      for (var i = 0; i < t.rating; i++) {
        stars += '<svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor"><path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"/></svg>';
      }
      return '<div class="testimonial-slide">' +
        '<div class="testimonial-card">' +
          '<div class="testimonial-quote">' + svgIcon('M3 21c3 0 7-1 7-8V5c0-1.25-.756-2-2-2H4c-1.25 0-2 .75-2 2v6c0 1.25.75 2 2 2h2.5c0 4-1.5 5-3.5 6zm12 0c3 0 7-1 7-8V5c0-1.25-.757-2-2-2h-4c-1.25 0-2 .75-2 2v6c0 1.25.75 2 2 2h2.5c0 4-1.5 5-3.5 6z', 48) + '</div>' +
          '<div class="testimonial-stars">' + stars + '</div>' +
          '<p class="testimonial-text">"' + t.text + '"</p>' +
          '<div class="testimonial-author">' +
            '<div class="testimonial-avatar">' + t.name.charAt(0) + '</div>' +
            '<div class="testimonial-info">' +
              '<div class="testimonial-name">' + t.name + '</div>' +
              '<div class="testimonial-role">' + t.role + ' · ' + t.location + '</div>' +
            '</div>' +
          '</div>' +
        '</div>' +
      '</div>';
    }).join('');

    if (dots) {
      dots.innerHTML = testimonials.map(function (_, i) {
        return '<button class="slider-dot' + (i === 0 ? ' active' : '') + '" data-slide="' + i + '" aria-label="Go to testimonial ' + (i + 1) + '"></button>';
      }).join('');
      $all('.slider-dot').forEach(function (dot) {
        dot.addEventListener('click', function () {
          goToSlide(parseInt(dot.getAttribute('data-slide'), 10));
        });
      });
    }
    startSlider();
  }

  function goToSlide(index) {
    currentSlide = index;
    var track = $('#testimonialTrack');
    if (track) track.style.transform = 'translateX(-' + (currentSlide * 100) + '%)';
    $all('.slider-dot').forEach(function (dot, i) {
      dot.classList.toggle('active', i === currentSlide);
    });
  }

  function startSlider() {
    stopSlider();
    slideTimer = setInterval(function () {
      currentSlide = (currentSlide + 1) % testimonials.length;
      goToSlide(currentSlide);
    }, 5000);
  }
  function stopSlider() { if (slideTimer) { clearInterval(slideTimer); slideTimer = null; } }

  /* ===== Render FAQ ===== */
  function renderFAQ() {
    var list = $('#faqList');
    if (!list) return;
    list.innerHTML = faqs.map(function (faq, i) {
      return '<div class="faq-item' + (i === 0 ? ' open' : '') + '">' +
        '<button class="faq-question" aria-expanded="' + (i === 0) + '">' +
          '<span class="faq-question-left">' +
            '<span class="faq-question-icon">' + svgIcon('M9.09 9a3 3 0 0 1 5.83 1c0 2-3 3-3 3M12 17h.01', 20) + '</span>' +
            '<span>' + faq.q + '</span>' +
          '</span>' +
          '<span class="faq-chevron">' + svgIcon('m6 9 6 6 6-6', 20) + '</span>' +
        '</button>' +
        '<div class="faq-answer' + (i === 0 ? ' open' : '') + '"><p>' + faq.a + '</p></div>' +
      '</div>';
    }).join('');

    $all('.faq-item').forEach(function (item) {
      var btn = item.querySelector('.faq-question');
      var answer = item.querySelector('.faq-answer');
      btn.addEventListener('click', function () {
        var isOpen = item.classList.contains('open');
        $all('.faq-item').forEach(function (other) {
          other.classList.remove('open');
          other.querySelector('.faq-answer').classList.remove('open');
          other.querySelector('.faq-question').setAttribute('aria-expanded', 'false');
        });
        if (!isOpen) {
          item.classList.add('open');
          answer.classList.add('open');
          btn.setAttribute('aria-expanded', 'true');
        }
      });
    });
  }

  /* ===== Product Filter ===== */
  function initProductFilter() {
    var btns = $all('.filter-btn');
    btns.forEach(function (btn) {
      btn.addEventListener('click', function () {
        var filter = btn.getAttribute('data-filter');
        btns.forEach(function (b) { b.classList.remove('active'); });
        btn.classList.add('active');
        $all('.product-card').forEach(function (card) {
          var cat = card.getAttribute('data-category');
          if (filter === 'all' || cat === filter) {
            card.style.display = '';
          } else {
            card.style.display = 'none';
          }
        });
      });
    });
  }

  /* ===== Navigation ===== */
  function initNav() {
    var navbar = $('#navbar');
    var menuBtn = $('#menuBtn');
    var navLinks = $('#navLinks');

    window.addEventListener('scroll', function () {
      navbar.classList.toggle('scrolled', window.scrollY > 40);
    }, { passive: true });

    menuBtn.addEventListener('click', function () {
      var open = navLinks.classList.toggle('open');
      menuBtn.classList.toggle('open', open);
      menuBtn.setAttribute('aria-expanded', open);
    });

    $all('.nav-link').forEach(function (link) {
      link.addEventListener('click', function () {
        navLinks.classList.remove('open');
        menuBtn.classList.remove('open');
        menuBtn.setAttribute('aria-expanded', 'false');
      });
    });

    // Active section tracking
    var sections = $all('section[id]');
    var navLinkEls = $all('.nav-link');
    var sectionObserver = new IntersectionObserver(function (entries) {
      entries.forEach(function (entry) {
        if (entry.isIntersecting) {
          var id = entry.target.id;
          navLinkEls.forEach(function (link) {
            link.classList.toggle('active', link.getAttribute('href') === '#' + id);
          });
        }
      });
    }, { rootMargin: '-40% 0px -55% 0px' });
    sections.forEach(function (s) { sectionObserver.observe(s); });
  }

  /* ===== Dark Mode ===== */
  function initTheme() {
    var toggle = $('#themeToggle');
    var saved = null;
    try { saved = localStorage.getItem('theme'); } catch (e) {}
    if (saved === 'dark') document.documentElement.setAttribute('data-theme', 'dark');
    toggle.addEventListener('click', function () {
      var isDark = document.documentElement.getAttribute('data-theme') === 'dark';
      if (isDark) {
        document.documentElement.removeAttribute('data-theme');
        try { localStorage.setItem('theme', 'light'); } catch (e) {}
      } else {
        document.documentElement.setAttribute('data-theme', 'dark');
        try { localStorage.setItem('theme', 'dark'); } catch (e) {}
      }
    });
  }

  /* ===== Search ===== */
  function initSearch() {
    var overlay = $('#searchOverlay');
    var input = $('#searchInput');
    var resultsEl = $('#searchResults');
    var searchBtn = $('#searchBtn');
    var closeBtn = $('#searchClose');

    function renderResults(query) {
      var results = query.trim() ? searchableContent.filter(function (item) {
        return item.title.toLowerCase().indexOf(query.toLowerCase()) !== -1;
      }) : searchableContent.slice(0, 6);

      if (results.length === 0) {
        resultsEl.innerHTML = '<p class="search-no-results">No results found for "' + query + '"</p>';
        return;
      }
      resultsEl.innerHTML = results.map(function (r) {
        return '<button class="search-result-item" data-section="' + r.section + '">' +
          '<span><span class="search-result-type">' + r.type + '</span><span class="search-result-title">' + r.title + '</span></span>' +
          svgIcon('M5 12h14M12 5l7 7-7 7', 16) +
        '</button>';
      }).join('');

      $all('.search-result-item').forEach(function (item) {
        item.addEventListener('click', function () {
          var section = item.getAttribute('data-section');
          closeSearch();
          setTimeout(function () {
            var el = document.querySelector(section);
            if (el) el.scrollIntoView({ behavior: 'smooth' });
          }, 100);
        });
      });
    }

    function openSearch() {
      overlay.classList.add('open');
      document.body.style.overflow = 'hidden';
      setTimeout(function () { input.focus(); }, 100);
      renderResults('');
    }
    function closeSearch() {
      overlay.classList.remove('open');
      document.body.style.overflow = '';
      input.value = '';
    }

    searchBtn.addEventListener('click', openSearch);
    closeBtn.addEventListener('click', closeSearch);
    overlay.addEventListener('click', function (e) { if (e.target === overlay) closeSearch(); });
    input.addEventListener('input', function () { renderResults(input.value); });

    document.addEventListener('keydown', function (e) {
      if ((e.metaKey || e.ctrlKey) && e.key === 'k') {
        e.preventDefault();
        openSearch();
      }
      if (e.key === 'Escape' && overlay.classList.contains('open')) closeSearch();
    });
  }

  /* ===== Scroll Reveal ===== */
  function initScrollReveal() {
    var observer = new IntersectionObserver(function (entries) {
      entries.forEach(function (entry) {
        if (entry.isIntersecting) {
          entry.target.classList.add('visible');
          observer.unobserve(entry.target);
        }
      });
    }, { threshold: 0.1, rootMargin: '0px 0px -60px 0px' });

    function observeAll() {
      $all('.reveal:not(.visible), .reveal-left:not(.visible), .reveal-right:not(.visible), .reveal-scale:not(.visible)').forEach(function (el) {
        observer.observe(el);
      });
    }
    // Observe after rendering dynamic content
    setTimeout(observeAll, 100);
  }

  /* ===== Animated Counters ===== */
  function initCounters() {
    var counters = $all('.stat-number');
    var started = {};
    var observer = new IntersectionObserver(function (entries) {
      entries.forEach(function (entry) {
        if (entry.isIntersecting && !started[entry.target.dataset.target]) {
          started[entry.target.dataset.target] = true;
          animateCounter(entry.target);
          observer.unobserve(entry.target);
        }
      });
    }, { threshold: 0.3 });
    counters.forEach(function (c) { observer.observe(c); });
  }

  function animateCounter(el) {
    var target = parseInt(el.dataset.target, 10);
    var suffix = el.dataset.suffix || '';
    var duration = 2000;
    var startTime = null;
    function step(timestamp) {
      if (startTime === null) startTime = timestamp;
      var progress = Math.min((timestamp - startTime) / duration, 1);
      var easeOut = 1 - Math.pow(1 - progress, 3);
      el.textContent = Math.floor(easeOut * target).toLocaleString() + suffix;
      if (progress < 1) requestAnimationFrame(step);
    }
    requestAnimationFrame(step);
  }

  /* ===== Hero Particles ===== */
  function initParticles() {
    var container = $('#heroParticles');
    if (!container) return;
    for (var i = 0; i < 18; i++) {
      var p = document.createElement('div');
      p.className = 'particle';
      p.style.left = Math.random() * 100 + '%';
      var size = 4 + Math.random() * 10;
      p.style.width = size + 'px';
      p.style.height = size + 'px';
      p.style.animationDuration = (10 + Math.random() * 14) + 's';
      p.style.animationDelay = (Math.random() * 10) + 's';
      container.appendChild(p);
    }
  }

  /* ===== Scroll to Top ===== */
  function initScrollTop() {
    var btn = $('#scrollTop');
    window.addEventListener('scroll', function () {
      btn.classList.toggle('show', window.scrollY > 500);
    }, { passive: true });
    btn.addEventListener('click', function () {
      window.scrollTo({ top: 0, behavior: 'smooth' });
    });
  }

  /* ===== Contact Form ===== */
  function initContactForm() {
    var form = $('#contactForm');
    var success = $('#formSuccess');
    if (!form) return;
    form.addEventListener('submit', function (e) {
      e.preventDefault();
      var name = form.querySelector('[name="name"]');
      var phone = form.querySelector('[name="phone"]');
      var message = form.querySelector('[name="message"]');
      var valid = true;

      [name, phone, message].forEach(function (field) {
        if (!field.value.trim()) {
          field.classList.add('error');
          valid = false;
        } else {
          field.classList.remove('error');
        }
      });

      if (!valid) return;

      var msg = 'Hello Acquah Ice,\n\nName: ' + name.value + '\nPhone: ' + phone.value + '\nEmail: ' + (form.querySelector('[name="email"]').value || 'N/A') + '\n\nMessage: ' + message.value;
      window.open('https://wa.me/233548368296?text=' + encodeURIComponent(msg), '_blank');
      success.classList.add('show');
      form.reset();
      setTimeout(function () { success.classList.remove('show'); }, 5000);
    });
  }

  /* ===== Newsletter ===== */
  function initNewsletter() {
    var form = $('#newsletterForm');
    var success = $('#newsletterSuccess');
    if (!form) return;
    form.addEventListener('submit', function (e) {
      e.preventDefault();
      success.classList.add('show');
      form.reset();
      setTimeout(function () { success.classList.remove('show'); }, 4000);
    });
  }

  /* ===== Footer Legal ===== */
  function initFooterLegal() {
    var privacy = $('#privacyBtn');
    var terms = $('#termsBtn');
    if (privacy) privacy.addEventListener('click', function () {
      alert('Privacy Policy\n\nAcquah Ice Natural Mineral Water is committed to protecting your privacy. We collect only the information necessary to process your orders and respond to inquiries. We never share your data with third parties without consent.');
    });
    if (terms) terms.addEventListener('click', function () {
      alert('Terms & Conditions\n\nBy ordering from Acquah Ice Natural Mineral Water, you agree to our terms of service. All products are FDA approved. Delivery times may vary by location. Prices are subject to change without notice.');
    });
  }

  /* ===== Lightbox Events ===== */
  function initLightbox() {
    $('#lightboxClose').addEventListener('click', closeLightbox);
    $('#lightboxPrev').addEventListener('click', function () { lightboxNav(-1); });
    $('#lightboxNext').addEventListener('click', function () { lightboxNav(1); });
    $('#lightbox').addEventListener('click', function (e) {
      if (e.target === $('#lightbox')) closeLightbox();
    });
    document.addEventListener('keydown', function (e) {
      if (!$('#lightbox').classList.contains('open')) return;
      if (e.key === 'Escape') closeLightbox();
      if (e.key === 'ArrowLeft') lightboxNav(-1);
      if (e.key === 'ArrowRight') lightboxNav(1);
    });
  }

  /* ===== Testimonial Slider Controls ===== */
  function initSliderControls() {
    var prev = $('#sliderPrev');
    var next = $('#sliderNext');
    var slider = $('#testimonialSlider');
    if (prev) prev.addEventListener('click', function () {
      currentSlide = (currentSlide - 1 + testimonials.length) % testimonials.length;
      goToSlide(currentSlide);
      startSlider();
    });
    if (next) next.addEventListener('click', function () {
      currentSlide = (currentSlide + 1) % testimonials.length;
      goToSlide(currentSlide);
      startSlider();
    });
    if (slider) {
      slider.addEventListener('mouseenter', stopSlider);
      slider.addEventListener('mouseleave', startSlider);
    }
  }

  /* ===== Current Year ===== */
  function initYear() {
    var el = $('#currentYear');
    if (el) el.textContent = new Date().getFullYear();
  }

  /* ===== Init ===== */
  function init() {
    renderProducts();
    renderProcess();
    renderFeatures();
    renderGallery();
    renderTestimonials();
    renderFAQ();
    initProductFilter();
    initNav();
    initTheme();
    initSearch();
    initScrollReveal();
    initCounters();
    initParticles();
    initScrollTop();
    initContactForm();
    initNewsletter();
    initFooterLegal();
    initLightbox();
    initSliderControls();
    initYear();
  }

  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', init);
  } else {
    init();
  }
})();
