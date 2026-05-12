import React from 'react';
import './Instructors.css';

const instructorsData = [
  {
    id: 1,
    name: 'Marco Santini',
    specialty: 'Urban & Fusion',
    bio: 'Former lead choreographer for international tours, bringing 15 years of street experience.',
    img: 'https://lh3.googleusercontent.com/aida-public/AB6AXuDN8thDfdf2U1zZgxcWVoUv8id-F20kUNdLqAUV95E5brRaiRBBWVM6wEEV36KHZMJ14vEtDd1UA_SEKaK75ZRUXnczWnTJ8PrH9jIDeAferoHqsQT0Qmf1LVcR-PCFjAcfsmeIYWr4vA0eMvktHXWdWCMCbk3MTDrZChUmSOkplh1qnmJFWYMuEg3Nd772Bh4m4yH1lI1B5KDWLwrpehLg9pwJnhSFTJ1ysmCKqS2T56dAPPwZSmZWCbvWik0naQSeTXCUukQFNzBN'
  },
  {
    id: 2,
    name: 'Elena Rodriguez',
    specialty: 'Salsa & Bachata',
    bio: '3-time World Salsa Champion with a passion for teaching the emotional soul of dance.',
    img: 'https://lh3.googleusercontent.com/aida-public/AB6AXuAcXKx4ai7Yt3aXph3buA9TNkuOuKOdRlz9qti6DV_Mb48PyXuonQzGz2xRuEvNR0ILNymWBiTfzP1TvpBCB4HivSJSc71pyfDITFPKxX74w8DX6kJn2ULE_3uvuZfKZvwMpS8V5iJJfjd5lh9LhAL6duBJJ64gUQpCai9Adms5OYPYRCrUWbNUPcOMWQ-rCFKPlTxjXtYOhz3JjXpXTXiW0C4Jyg9eYRduCBdjPd2qg4xGAxGK2RkZJOM9Uyr_8Fl93bIrTvgF4Z0x'
  },
  {
    id: 3,
    name: 'Sophia Chen',
    specialty: 'Classical Ballet',
    bio: 'Royal Academy of Dance certified, focusing on precision, strength, and modern artistry.',
    img: 'https://lh3.googleusercontent.com/aida-public/AB6AXuAJ28MvmYDc2ATKJjkpk3mmPcvxIw64vnqnVYXBonGN4szeMigP6qdmIhTH95kl528uq-yT83ySudCIJLqoqnyl0fTdNOJ-ziWra2z8JCkad6cXtbywek6NTt5w43LTGdbwkPeY0fSh8LVsfnyAjJtKT__X1rJFFkSqsBUtKLWHhJD47e-821E4P3pG9t4L9bw6n0RgKTgMIMKSi4SgfwI_PE-S0-JLM1ScptJeEIe37pYaRF7FkRtGwjK561kAo0SJSZ4EghU4GAEA'
  }
];

const Instructors = () => {
  return (
    <section className="instructors" id="instructors">
      <div className="instructors-header">
        <h2 className="instructors-title">Meet the Masters</h2>
        <p className="instructors-subtitle">
          Taught by world-class professionals who live and breathe the art of dance.
        </p>
      </div>

      <div className="instructors-grid">
        {instructorsData.map((instructor) => (
          <div key={instructor.id} className="instructor-card group">
            <div className="instructor-img-wrapper">
              <img 
                src={instructor.img} 
                alt={instructor.name} 
                className="instructor-img" 
              />
              <div className="instructor-overlay"></div>
            </div>
            
            <h3 className="instructor-name">{instructor.name}</h3>
            <span className="instructor-specialty">{instructor.specialty}</span>
            <p className="instructor-bio">{instructor.bio}</p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Instructors;