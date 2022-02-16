const LandingPageSection = ({ children, title }: { children: React.ReactNode; title: string }) => {
	return (
		<div className="w-3/4 pt-4 md:flex lg:pt-14">
			<div
				id="title-wrapper"
				className="md:vertical-text font-heading flex text-xl font-medium tracking-widest md:rotate-180 md:justify-end md:pl-4 md:text-2xl"
			>
				<h3>{title}</h3>
			</div>
			<div>{children}</div>
		</div>
	);
};

export default LandingPageSection;
