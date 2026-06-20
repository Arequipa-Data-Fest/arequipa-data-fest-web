export const siteConfig = {
	name: 'Arequipa Data Fest 2026',
	description:
		'El encuentro de datos, tecnología e innovación que impulsa ideas, decisiones y el futuro en Arequipa.',
	logoUrl:
		'https://res.cloudinary.com/dohwcedep/image/upload/f_auto,q_auto/arequipa-data-fest.png',
	registrationUrl: '',
	informativeGroupUrl: '',
} as const;

export const navigationLinks = [
	{ label: 'Inicio', href: '/' },
	{ label: 'Ponencias', href: '/ponentes' },
	{ label: 'Agenda', href: '/agenda' },
	{ label: 'Certificado', href: '/certificado' },
] as const;
