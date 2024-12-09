import React from 'react';
import { BentoGrid, BentoGridItem } from './ui/bento-grid';
import { gridItems } from '@/data';

const Grid = () => {
	return (
		<section id="about" className="relative">
			<BentoGrid className="w-full py-20">
				{gridItems.map(
					({
						id,
						title,
						titleClassName,
						description,
						className,
						img,
						imgClassName,
						spareImg,
					}) => (
						<BentoGridItem
                            key={id}
							id={id}
							title={title}
							description={description}
							titleClassName={titleClassName}
							img={img}
                            className={className}
                            imgClassName={imgClassName}
                            spareImg={spareImg}
						/>
					)
				)}
			</BentoGrid>
		</section>
	);
};

export default Grid;
