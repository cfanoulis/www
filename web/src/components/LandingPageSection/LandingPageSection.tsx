const LandingPageSection = ({ children, title }: { children: React.ReactNode; title: string }) => {
	return (
		<div className="pt-16 md:flex">
			<div id="title-wrapper" className="md:pl-4 md:vertical-text md:rotate-180 flex md:justify-end text-xl md:text-2xl tracking-widest font-heading">
				<div>{title}</div>
			</div>
			<div>{children}</div>
		</div>
	);
};

export default LandingPageSection;
