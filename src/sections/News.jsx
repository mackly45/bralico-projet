import React from 'react';

const News = () => {
    const news = [
        {
            date: '05 fév 2026',
            title: 'BRALICO COMMUNIQUE DE PRESSE',
            desc: 'Beaufort Lager annonce un partenariat panafricain d’exception avec Fally Ipupa Une alliance iconique placée sous le signe de la modernité, du prestige et de la fraîcheur.',
            tag: 'PRESSE'
        },
        {
            date: '05 sept 2025',
            title: 'Nomination – Direction Générale',
            desc: 'Nous avons le plaisir d’annoncer la nomination de Monsieur Mario RUSSO au poste de Directeur Général de BRALICO. Fort de plus de vingt années d’expérience...',
            tag: 'GROUPE'
        },
        {
            date: 'août 2025',
            title: 'LE MICRO-PATRIOTE BY STARK',
            desc: 'À l’occasion du 65ᵉ anniversaire de l’indépendance de la république du Congo, Bralico, à travers sa marque STARK, a lancé une initiative originale et citoyenne.',
            tag: 'MARQUE'
        }
    ];

    return (
        <section id="actualités" className="news-section" style={{ minHeight: '100vh', padding: '15vh 0', background: 'white', color: 'black' }}>
            <div className="container">
                <p className="premium-subtitle" style={{ color: 'var(--color-bralico-red)' }}>Actualités</p>
                <h2 className="premium-title" style={{ color: 'black', marginBottom: '5rem' }}>Vivre BRALICO</h2>

                <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))', gap: '3rem' }}>
                    {news.map((item, i) => (
                        <div key={i} className="news-card reveal" style={{
                            background: '#f8f8f8',
                            padding: '2.5rem',
                            borderRadius: '0.5rem',
                            border: '1px solid #eee',
                            transition: 'all 0.3s'
                        }} onMouseEnter={(e) => {
                            e.currentTarget.style.transform = 'translateY(-10px)';
                            e.currentTarget.style.boxShadow = '0 20px 40px rgba(0,0,0,0.05)';
                        }} onMouseLeave={(e) => {
                            e.currentTarget.style.transform = 'translateY(0)';
                            e.currentTarget.style.boxShadow = 'none';
                        }}>
                            <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '1.5rem' }}>
                                <span style={{ color: 'var(--color-bralico-red)', fontSize: '0.8rem', fontWeight: '800' }}>{item.date}</span>
                                <span style={{ fontSize: '0.6rem', border: '1px solid #ddd', padding: '0.2rem 0.6rem', borderRadius: '10px' }}>{item.tag}</span>
                            </div>
                            <h3 style={{ marginBottom: '1rem', fontSize: '1.2rem', fontFamily: 'var(--font-serif)', textTransform: 'none' }}>{item.title}</h3>
                            <p style={{ color: '#666', lineHeight: '1.6', fontSize: '0.9rem' }}>{item.desc}</p>
                            <div style={{ marginTop: '2rem' }}>
                                <a href="#" style={{ color: 'var(--color-bralico-red)', textDecoration: 'none', fontWeight: '700', fontSize: '0.8rem', textTransform: 'uppercase' }}>Lire la suite →</a>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default News;
