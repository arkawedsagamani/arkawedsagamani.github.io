document.addEventListener('DOMContentLoaded', function() {
  const shlokasContainer = document.getElementById('shlokas-container');
  
  // বিবাহের শ্লোকগুলির অ্যারে (অ্যানিমেশনের জন্য)
  const shlokas = [
    "विवाहमङ्गलम्, यशस्विनम्, सुखमयम्, समृद्धिमयम्।",
    "यत्र विवाहे दम्पति: हर्षं वितरन्ति, तत्र सन्तोषः सर्वत्र वसतु।",
    "सर्वे भवन्तु सुखिनः, विवाहितजीवनं मंगलमयम्।",
    "मङ्गलमस्तु विवाहः, पारस्परप्रेमः सहकारश्च सदैव वर्धताम्।",
    "विवाहं परमं सुखं, दाम्पत्यजीवनं दीर्घकालम्।",
    "विवाहमङ्गलम्, स्नेहेन पूर्णम्, हृदयेषु आनंदः प्रकाशयतु।"
  ];
  
  // শ্লোকের এলিমেন্ট তৈরি ও অ্যানিমেশন ফাংশন
  function createShloka() {
    const shlokaText = shlokas[Math.floor(Math.random() * shlokas.length)];
    const shlokaElement = document.createElement('div');
    shlokaElement.className = 'san-shloka';
    shlokaElement.innerText = shlokaText;
    
    // এলোমেলো অনুভূমিক অবস্থান ও ফন্ট সাইজ সেট করা
    shlokaElement.style.left = Math.random() * 100 + 'vw';
    shlokaElement.style.fontSize = (16 + Math.random() * 10) + 'px';
    
    // বিভিন্নতা আনতে অ্যানিমেশনের সময়কাল এলোমেলো করা
    const duration = 8 + Math.random() * 5;
    shlokaElement.style.animationDuration = duration + 's';
    
    // কনটেইনারে যোগ করা
    shlokasContainer.appendChild(shlokaElement);
    
    // অ্যানিমেশনের শেষে এলিমেন্টটি সরানো
    setTimeout(() => {
      shlokaElement.remove();
    }, duration * 1000);
  }
  
  // প্রতি ১.৫ সেকেন্ডে নতুন শ্লোক তৈরি করা
  setInterval(createShloka, 1500);

  /* ========== Photo Slideshow Logic ========== */
  const slideshows = document.querySelectorAll('.photo-slideshow');

  slideshows.forEach(function(slideshow) {
    let slideIndex = 0;
    const slides = slideshow.querySelectorAll('.photo-slide');
    const prevButton = slideshow.querySelector('.prev-button');
    const nextButton = slideshow.querySelector('.next-button');

    function showSlide(index) {
      slides.forEach((slide, i) => {
        slide.classList.remove('active');
        if (i === index) {
          slide.classList.add('active');
        }
      });
    }

    prevButton.addEventListener('click', function() {
      slideIndex = (slideIndex - 1 + slides.length) % slides.length;
      showSlide(slideIndex);
    });

    nextButton.addEventListener('click', function() {
      slideIndex = (slideIndex + 1) % slides.length;
      showSlide(slideIndex);
    });

    // Show the first slide initially
    showSlide(slideIndex);
  });
});
