import React from 'react';

const Skills = () => (
	<>
		<div className="text-2xl pt-16 pb-2 font-bold font-mono text-center">Welcome to the Skills page!</div>
		<div className="flex justify-center gap-4">
			<div className="flex justify-center gap-6">
				<div>
					<div>Professionally I have experience using the following technologies:</div>
					<div className="flex gap-20 pt-2">
						<div>
							<div className="pb-1.5">- Javascript</div>
							<div className="pb-1.5">- React</div>
							<div className="pb-1.5">- Redux</div>
							<div className="pb-1.5">- NodeJs</div>
						</div>
						<div>
							<div className="pb-1.5">- .Net C#</div>
							<div className="pb-1.5">- MSSQL (Microsoft SQL Server)</div>
							<div className="pb-1.5">- Docker</div>
							<div className="pb-1.5">- Azure</div>
						</div>
					</div>

					<div className="pt-6 pb-6 font-bold">But thats not all!</div>
					<div>Outside of work I'm always trying to improve and try new tech!</div>
					<div>My current go to stack is the t3-stack it includes the following:</div>
					<div className="flex gap-20 pt-2">
						<div>
							<div className="pb-1.5">- Nextjs (typescript)</div>
							<div className="pb-1.5">- tRPC (API layer)</div>
							<div className="pb-1.5">- zod (validation)</div>
						</div>
						<div>
							<div className="pb-1.5">- Tailwind css (Styling)</div>
							<div className="pb-1.5">- PlanetScale (MySQL Database)</div>
							<div className="pb-1.5">- Prisma (ORM)</div>
						</div>
					</div>
					<div className="pt-6 pb-6">
						<span className="font-bold font-mono">Psssstt.</span>
						This portfolio is written using the t3-stack.
					</div>

					<div>Skills I'm currently in the process of learning:</div>
					<div>
						<div>- BlockChain</div>
						<div>- Solidity</div>
						<div>- Go</div>
					</div>
				</div>
			</div>
		</div>
	</>
);

export default Skills;
