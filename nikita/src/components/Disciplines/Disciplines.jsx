import React from 'react';
import './Disciplines.css';

const disciplinesData = [
  {
    id: 1,
    title: 'Salsa',
    description: 'The fire of Latin rhythm. Master the intricate footwork and explosive turns.',
    img: 'https://lh3.googleusercontent.com/aida-public/AB6AXuDVv9xVEmcoSEuipvccY2ZHKOaakZC8g3xEn6UJBqNoAaRqaH86sr36DP0h3ub3HcJ__c8KfPEnlL_WWkmKuYMUwJj-Elwvtl-jDoDiXkLkPccJTTaYDAEkal5RxaYFlOqaF5WschCpBPmENvPKboi5_mDinZmezSz97MxXX7Zjfuo6In63BSb0cuggg883Rk3I3gRGPY_T7bhTciP9t10Y4RhI_3zx1oz4JQjWZCnMj0IfthdQxkruOQnCs4LRPRle8pahosOJPYA5',
    className: 'card-salsa'
  },
  {
    id: 2,
    title: 'Bachata',
    description: 'Sensual and rhythmic. A deep dive into Dominican soul.',
    img: 'https://lh3.googleusercontent.com/aida-public/AB6AXuCclyBcLS7satvAqorAsVinPznKmrSFC9XRuH6PkfBdQg8cqJBR41JzRFkrUtBay7SVqQfk7dnVgbIwP5qG2uKJ_UZwSfArpoAS8mrI_wtyGUlH04a4_yrlCcH4YBeRO-0_KINT0LBxx90dH0iaMAE_zs5AChLeYSgcT8eN3lQww-UmsaWsDAxO3KLO9vLC_bjyeRljDWJ-gGlZ6_iRcc62p6lFrhjgC-aWzt2yoHV9DAMIOPuypqlXsUxLpv7vwHr64AvaVaG_fumn',
    className: 'card-bachata'
  },
  {
    id: 3,
    title: 'Ballet',
    description: 'Precision meets grace. The fundamental technique for every serious dancer.',
    img: 'https://lh3.googleusercontent.com/aida-public/AB6AXuAHwMy7QoG75O5bT0Vxj1m6GCN2nBGFnDdm3SEaRdC4kfPLKlmFZ41qgtCUed9YiKqBB2e39F1EeNt8D-arJXDXzZRlmWz7wv3I1Njkmgsd1Gs8QVikoDNzHxMsabMY7R0UPhcd17KMJs7EWN1L40gQsUAS7VuISjMpnxGHJ_Dk5201sekXiXZnqC1Yez4NoRzVoYj2yE57lhhujad32w2nUoSIaiJkYlc0jXiZyveWsERHIkT_FpSgpG2KfComBmZwuJ4ap5Z2UcT4',
    className: 'card-ballet'
  },
  {
    id: 4,
    title: 'Urban Dance',
    description: 'Street vibes and high intensity. Break boundaries with Hip Hop and Fusion styles.',
    img: 'https://lh3.googleusercontent.com/aida-public/AB6AXuAjMX8gGV7kc6YYtH1GoUSNQoYKGafttgrZYBb9TqYrAcqy4CZatQa0pFy0HaWsroeriSjXTEfJ05R6N6713gjmgGPY-fg33mDe55Hp2-G3zTeGpt3i5MUUjzkqBIjnYfLInAfwVmRjQSIfbE-zwzVwbsIidVpoKMC4_2JiGF5CDjx8C2YcYRY_xO4A-N0TW04Omjxw3pz1MultMQ8VHv_SGL6qrNnpEB8Grx0peg093PNjgo2AQRaI-zj0eRs2BWIbedVsd4dcgYw8',
    className: 'card-urban'
  }
];

const Disciplines = () => {
  return (
    <section className="disciplines" id="disciplines">
      <div className="disciplines-header">
        <h2 className="disciplines-title">Our Disciplines</h2>
        <div className="title-underline"></div>
      </div>

      <div className="bento-grid">
        {disciplinesData.map((item) => (
          <div key={item.id} className={`bento-card ${item.className}`}>
            <img src={item.img} alt={item.title} className="card-img" />
            <div className="card-overlay"></div>
            <div className="card-content">
              <h3>{item.title}</h3>
              <p>{item.description}</p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Disciplines;