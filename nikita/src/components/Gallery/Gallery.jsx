import React from 'react';
import './Gallery.css';

const Gallery = () => {
  const testimonials = [
    {
      initials: "JS",
      name: "Julian Smith",
      role: "Urban Dance Student",
      text: "VIBE changed my life. I came here with zero experience and now I'm performing in the annual showcase. The instructors are genuinely invested in your growth."
    },
    {
      initials: "LM",
      name: "Laura Martinez",
      role: "Salsa Advanced Class",
      text: "The professional atmosphere and high-energy community make every class an experience. It's not just a school, it's a movement family."
    }
  ];

  return (
    <section className="gallery" id="gallery">
      <div className="gallery-container">
        <h2 className="gallery-title">Inside the Studio</h2>
        
        {/* Masonry-style Grid */}
        <div className="masonry-grid">
          <div className="masonry-item">
            <img src="https://lh3.googleusercontent.com/aida-public/AB6AXuDz_TsGZl6iT-Wo9CfMW4Mid6podcnmJpWTYWkIwRkcVmWHta8LHc2eD5bwyl4B_1MFhcnh3Z-eleWUVe8L8qobTzXEuRBOTSJXTaliU-5U6bRdcehcWnrjiC5J-SuskIgAruIECOI5MPU0PASsFhDzDj_R5g4rBvpHxC3qCceOoJWWwK7gdV4tdfO2T1GdfzI761yHx94xIHJlPB4d8PGMFQh8m_bLyglrxY6xvszoEU3GgLsflY6X-o9CaHQzujnDv7O6lUUbnR_q" alt="Studio Life" />
          </div>
          <div className="masonry-item">
            <img src="https://lh3.googleusercontent.com/aida-public/AB6AXuA6eRXUjdCbc69H8EgZW5wFQEQ_1DyzI_FwlY7rqvFuupSX8mp_Zf80kZaUgkJOZty7aPVADAqjjbaiRlo82XUoaTeAI1Soisy99JqnxyDCBkSLVYUrjEwkel3Hl7BkfMRl066La-KmjOKUAe3h3CiFMqUDxW-LZnuxmibnE4rmac96crn882uoQczPgZRayB_cizEmKXtzJacZzjzWYIdHXD3Gc_YN5-cfoGa3z10TGxGYkQDwIcszyoSKLM2BQsWzeVwcD_ovZcWn" alt="Dance Detail" />
          </div>
          <div className="masonry-item">
            <img src="https://lh3.googleusercontent.com/aida-public/AB6AXuD5ceZdrWkNURc3LoyyaNPZ-PpplerUc50RK3sFoK38lgEJR4mr0h8ZDCiFSYbkxV1ugM279A_C2LrrC2dnhrhb8imoMh8FPaxwtJ2IHhXv6gBobTuFijPMu5GSb5T-e1CRnxEbhP5gAXebIMUfskRlWTO_kMjKE3ZFvCWSLXyr-47rhmN7E7XQfIo4ahm7imSAYI9YDJjDBQc_e9YhBoFU5X9lK6sQEkdupMOIB4p7lng7aTRCUQ-7dU0wL74QIGxvhWuvQheK5fgD" alt="Class Formation" />
          </div>
          <div className="masonry-item">
            <img src="https://lh3.googleusercontent.com/aida-public/AB6AXuBLcJ8bwgAYvFATbNIUSAsq1myXOtgG4DX5KK7PtuBSPGSGvueSKC47SocPt0yvQQXCuRPPtETmkwzGSTjnReFnR25oToRHBVxZK2QOBgZIAcftjFlufQDgi5Ek6Ds-VeGffwkw5CSHrk7IpgXvwKgVI29-Ah1VxyeLyW2m9PfZAgWvVaTr5Fcj-SGw7dZPWHlvDKn5fjtsnGNZ0JjeUS7FN4KC7i2-8016kTtnhFWj9DlV2G4RhpfBxzeo14qP8VLZjdWIrcUtAYnP" alt="Ballet Shoes" />
          </div>
        </div>

        {/* Testimonials */}
        <div className="testimonials-grid">
          {testimonials.map((t, index) => (
            <div key={index} className="testimonial-card glass-card">
              <span className="material-symbols-outlined quote-icon">format_quote</span>
              <p className="testimonial-text">"{t.text}"</p>
              <div className="testimonial-author">
                <div className="author-avatar">{t.initials}</div>
                <div>
                  <span className="author-name">{t.name}</span>
                  <span className="author-role">{t.role}</span>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Gallery;