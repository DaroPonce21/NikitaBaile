import React from 'react';
import './SocialFeed.css';

const socialPosts = [
  { id: 1, type: 'video', url: 'https://lh3.googleusercontent.com/aida-public/AB6AXuD5ceZdrWkNURc3LoyyaNPZ-PpplerUc50RK3sFoK38lgEJR4mr0h8ZDCiFSYbkxV1ugM279A_C2LrrC2dnhrhb8imoMh8FPaxwtJ2IHhXv6gBobTuFijPMu5GSb5T-e1CRnxEbhP5gAXebIMUfskRlWTO_kMjKE3ZFvCWSLXyr-47rhmN7E7XQfIo4ahm7imSAYI9YDJjDBQc_e9YhBoFU5X9lK6sQEkdupMOIB4p7lng7aTRCUQ-7dU0wL74QIGxvhWuvQheK5fgD' },
  { id: 2, type: 'image', url: 'https://lh3.googleusercontent.com/aida-public/AB6AXuDz_TsGZl6iT-Wo9CfMW4Mid6podcnmJpWTYWkIwRkcVmWHta8LHc2eD5bwyl4B_1MFhcnh3Z-eleWUVe8L8qobTzXEuRBOTSJXTaliU-5U6bRdcehcWnrjiC5J-SuskIgAruIECOI5MPU0PASsFhDzDj_R5g4rBvpHxC3qCceOoJWWwK7gdV4tdfO2T1GdfzI761yHx94xIHJlPB4d8PGMFQh8m_bLyglrxY6xvszoEU3GgLsflY6X-o9CaHQzujnDv7O6lUUbnR_q' },
  { id: 3, type: 'image', url: 'https://lh3.googleusercontent.com/aida-public/AB6AXuAHwMy7QoG75O5bT0Vxj1m6GCN2nBGFnDdm3SEaRdC4kfPLKlmFZ41qgtCUed9YiKqBB2e39F1EeNt8D-arJXDXzZRlmWz7wv3I1Njkmgsd1Gs8QVikoDNzHxMsabMY7R0UPhcd17KMJs7EWN1L40gQsUAS7VuISjMpnxGHJ_Dk5201sekXiXZnqC1Yez4NoRzVoYj2yE57lhhujad32w2nUoSIaiJkYlc0jXiZyveWsERHIkT_FpSgpG2KfComBmZwuJ4ap5Z2UcT4' },
  { id: 4, type: 'video', url: 'https://lh3.googleusercontent.com/aida-public/AB6AXuCclyBcLS7satvAqorAsVinPznKmrSFC9XRuH6PkfBdQg8cqJBR41JzRFkrUtBay7SVqQfk7dnVgbIwP5qG2uKJ_UZwSfArpoAS8mrI_wtyGUlH04a4_yrlCcH4YBeRO-0_KINT0LBxx90dH0iaMAE_zs5AChLeYSgcT8eN3lQww-UmsaWsDAxO3KLO9vLC_bjyeRljDWJ-gGlZ6_iRcc62p6lFrhjgC-aWzt2yoHV9DAMIOPuypqlXsUxLpv7vwHr64AvaVaG_fumn' },
];

const SocialFeed = () => {
  return (
    <section className="social-feed" id="social">
      <div className="social-container">
        <div className="social-header">
          <span className="social-tag">@VIBE_ACADEMY</span>
          <h2 className="social-title">Vibe on Social</h2>
          <p className="social-subtitle">
            Catch the latest moves and behind-the-scenes energy on our feed.
          </p>
        </div>

        <div className="social-grid">
          {socialPosts.map((post) => (
            <div key={post.id} className="social-post-card group">
              <img src={post.url} alt={`Social post ${post.id}`} className="social-img" />
              
              <div className="social-overlay">
                {post.type === 'video' ? (
                  <span className="material-symbols-outlined play-icon">play_circle</span>
                ) : (
                  <span className="material-symbols-outlined plus-icon">add</span>
                )}
              </div>

              {post.type === 'video' && (
                <div className="post-type-badge">
                  <span className="material-symbols-outlined">movie</span>
                </div>
              )}
            </div>
          ))}
        </div>

        <div className="social-footer">
          <button className="instagram-btn">
            <span className="material-symbols-outlined">photo_camera</span>
            Follow us on Instagram
          </button>
        </div>
      </div>
    </section>
  );
};

export default SocialFeed;