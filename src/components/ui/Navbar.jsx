import React from 'react';

const Navbar = () => {
    const navLinks = [
        { label: 'La Brasserie', href: '#la-brasserie' },
        { label: 'Les Marques', href: '#les-marques' },
        { label: 'Engagements', href: '#engagements' },
        { label: 'Actualités', href: '#actualités' },
        { label: 'Contacts', href: '#contacts' }
    ];

    return (
        <nav style={{
            position: 'fixed',
            top: 0,
            left: 0,
            width: '100%',
            height: '100px',
            background: 'var(--color-bralico-red)',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            zIndex: 1000,
            padding: '0 2rem'
        }}>
            <div style={{
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'space-between',
                width: '100%',
                maxWidth: '1400px'
            }}>
                {/* Left Side Links */}
                <div style={{ display: 'flex', gap: '3rem', flex: 1, justifyContent: 'center' }}>
                    {navLinks.slice(0, 3).map((link) => (
                        <a key={link.label} href={link.href} style={{
                            color: 'white',
                            textDecoration: 'none',
                            fontSize: '1rem',
                            fontFamily: 'var(--font-serif)',
                            fontWeight: '700',
                            transition: 'opacity 0.2s'
                        }} onMouseEnter={(e) => e.currentTarget.style.opacity = '0.7'} onMouseLeave={(e) => e.currentTarget.style.opacity = '1'}>
                            {link.label}
                        </a>
                    ))}
                </div>

                {/* Center Logo */}
                <div style={{
                    display: 'flex',
                    flexDirection: 'column',
                    alignItems: 'center',
                    justifyContent: 'center',
                    margin: '0 2rem'
                }}>
                    <img
                        src="/logo-white.png"
                        alt="Bralico Logo"
                        style={{
                            height: '60px',
                            width: 'auto',
                            objectFit: 'contain',
                            mixBlendMode: 'screen'
                        }}
                    />
                </div>

                {/* Right Side Links */}
                <div style={{ display: 'flex', gap: '3rem', flex: 1, alignItems: 'center', justifyContent: 'center' }}>
                    {navLinks.slice(3).map((link) => (
                        <a key={link.label} href={link.href} style={{
                            color: 'white',
                            textDecoration: 'none',
                            fontSize: '1rem',
                            fontFamily: 'var(--font-serif)',
                            fontWeight: '700',
                            transition: 'opacity 0.2s'
                        }} onMouseEnter={(e) => e.currentTarget.style.opacity = '0.7'} onMouseLeave={(e) => e.currentTarget.style.opacity = '1'}>
                            {link.label}
                        </a>
                    ))}

                    {/* Newsletter Button */}
                    <a href="#newsletter" style={{
                        border: '1px solid white',
                        borderRadius: '6px',
                        padding: '0.4rem 0.8rem',
                        color: 'white',
                        textDecoration: 'none',
                        fontSize: '0.9rem',
                        fontFamily: 'var(--font-serif)',
                        fontWeight: '700',
                        textTransform: 'uppercase',
                        marginLeft: '1rem',
                        transition: 'all 0.3s'
                    }} onMouseEnter={(e) => {
                        e.currentTarget.style.background = 'white';
                        e.currentTarget.style.color = 'var(--color-bralico-red)';
                    }} onMouseLeave={(e) => {
                        e.currentTarget.style.background = 'transparent';
                        e.currentTarget.style.color = 'white';
                    }}>
                        Newsletter
                    </a>
                </div>
            </div>
        </nav>
    );
};

export default Navbar;
