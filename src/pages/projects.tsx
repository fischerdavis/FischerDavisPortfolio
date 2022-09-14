import React from 'react';
import Link from 'next/link';

export const projectsList = [
	{
		title: 'Cryptoverse',
		description: 'Cryptoverse is a React web application that uses an API called CoinRanking to get current and historical statistics about crypto currencies, and it also uses the bing API to retrieve articles about crypto currencies.',
		techUsed: ['React', 'Ant design', 'ChartJs', 'moment', 'millify', 'RapidAPI (CoinRanking, and Bing)'],
		link: 'https://cryptoverse-app-fischer.netlify.app/',
		gitHub: 'https://github.com/fischerdavis/crypto-app'
	},
	{
		title: 'MernShoppingCart',
		description: 'MernShopping is a e-commerce MERN stack application that allows users to add items to a cart and checkout. The web app will also persist items that the user adds to their cart in the browser in case the user leaves and revisits the website at a later time.',
		techUsed: ['React', 'ExpressJs', 'NodeJs', 'MongoDB'],
		link: 'https://github.com/fischerdavis/MERNShoppingCart',
		gitHub: 'https://github.com/fischerdavis/MERNShoppingCart'
	}
]

const Projects = () => {
	return (
		<div className="flex justify-center pt-16 gap-4">
			{
				projectsList.map((project) => (
					<ProjectCard
						key={project.title}
						title={project.title}
						description={project.description}
						gitHubUrl={project.gitHub}
						techUsed={project.techUsed}
					/>
				))
			}
		</div>
	);
};

type ProjectCardProp = {
	title: string,
	description: string,
	gitHubUrl: string,
	techUsed: string[]
};

const ProjectCard = ({ title, description, gitHubUrl, techUsed }: ProjectCardProp) => (

	<div className="max-w-sm bg-white rounded-lg border border-gray-200 shadow-md bg-gray-800 border-gray-700">
		<div className="p-4">
			<Link
				href={gitHubUrl}
			>
				<h5 className="mb-2 text-2xl font-bold tracking-tight text-white cursor-pointer underline">
					{title}
				</h5>
			</Link>
			<p className="mb-3 font-normal text-gray-400">
				{description}
			</p>
			<div className="flex gap-1 flex-wrap pb-4">
				{
					techUsed.map((tech) => (
						<span
							className="border border-gray-300 hover:bg-gray-300 hover:text-slate-800 rounded pt-1 pb-1 pl-1.5 pr-1.5"
						>
							#{tech}
						</span>
					))
				}
			</div>
		</div>
	</div>
);

export default Projects;
