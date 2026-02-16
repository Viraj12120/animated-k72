import React from "react";

const Footer = () => {
	return (
		<div className="w-full h-96 bg-black/90 border-t-4 ">
			<div className="mt-6">
				<div className="flex ml-4 -pt-12 gap-4">
					<ul className="px-8  text-8xl font-[font2] border border-2 rounded-full w-fit">
						FB
					</ul>
					<ul className="px-8  text-8xl font-[font2] border border-2 rounded-full w-fit">
						IG
					</ul>
					<ul className="px-8  text-8xl font-[font2] border border-2 rounded-full w-fit">
						IE
					</ul>
					<ul className="px-8  text-8xl font-[font2] border border-2 rounded-full w-fit">
						BE
					</ul>
					<h1 className="uppercase px-8 ml-auto mr-4  text-8xl font-[font2] border border-2 rounded-full w-fit">
						Contact 
					</h1>
				</div>
			</div>
		</div>
	);
};

export default Footer;
