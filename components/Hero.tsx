import React from 'react';
import { Spotlight } from './ui/Spotlight';
import { TextGenerateEffect } from './ui/TextGenerateEffect';
import MagicButton from './ui/MagicButton';
import { BackgroundBeams } from './ui/BackgroundBeam';
import { redirect } from 'next/navigation';

const Hero = () => {
	const words = "Learn from yesterday, live for today, hope for tomorrow. The important thing is not to stop questioning."
	return (
		<div className="pb-20 pt-36">
			<div
				className="h-screen w-full dark:bg-black-100 bg-white dark:bg-grid-white/[0.03] bg-grid-black-100/[0.2]
        top-0 left-0 flex items-center justify-center absolute"
			>
				<div
					className="absolute pointer-events-none inset-0 flex items-center justify-center dark:bg-black-100
         bg-white [mask-image:radial-gradient(ellipse_at_center,transparent_20%,black)]"
				></div>
			</div>

			<div className="flex justify-center relative my-20 z-10">
				<div className="max-w-[89vw] md:max-w-2xl lg:max-w-[60vw] flex flex-col items-center justify-center">
					<p className="uppercase tracking-widest text-xs text-center text-blue-100 max-w-80">
						A Modern Next.js Portfolio
					</p>
					<TextGenerateEffect
						words={words}
						className="text-center text-[40px] md:text-5xl lg:text-6xl"
					/>

					<div className="text-center md:tracking-wider mb-4 text-sm md:text-lg lg:text-2xl p-0">
					Hello! I&apos;m Huy, a Software Engineer based in Ho Chi
						Minh City, Vietnam.
					</div>

					<div>
						<MagicButton size='lg' message="Learn More" handleClick={() => redirect("#about")} />
					</div>
				</div>
			</div>
			<BackgroundBeams />
		</div>
	);
};

export default Hero;
