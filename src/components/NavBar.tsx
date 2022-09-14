import React from 'react';
import Link from 'next/link';

const navLinks = [
	{
		name: 'Home',
		link: '/'
	},
	{
		name: 'Projects',
		link: '/projects'
	},
	{
		name: 'Skills',
		link: '/skills'
	},
	{
		name: 'Resume',
		link: 'https://www.canva.com/design/DAEpdC8TFjo/GOGJnPSdjAUrZD8zixV50A/view?utm_content=DAEpdC8TFjo&utm_campaign=designshare&utm_medium=link&utm_source=publishsharelink'
	},
	// {
	// 	name: 'Blog',
	// 	link: '/blog'
	// }
]

const NavBar = () => {
	return (
		<nav className="pt-12 pb-2 text-xl flex justify-center gap-4">
			{
				navLinks.map((link) => (
					<Link
						key={link.name}
						href={link.link}
					>
						<a target={link.name === 'Resume' ? '_blank' : ''} className="rounded hover:text-violet-300 p-2 border border-transparent hover:border-violet-300">
							{link.name}
						</a>
					</Link>
				))
			}

		</nav>
	);
};

export default NavBar;
