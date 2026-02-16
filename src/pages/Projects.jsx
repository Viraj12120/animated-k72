import { useGSAP } from "@gsap/react";
import ProjectCard from "../components/projects/ProjectCard";
import gsap, { Linear } from "gsap";
import { ScrollTrigger } from "gsap/all";

const Projects = () => {
	const projects = [
		{
			image1:
				"https://k72.ca/uploads/caseStudies/PJC/Thumbnails/PJC_SiteK72_Thumbnail_1280x960-1280x960.jpg",
			image2:
				"https://k72.ca/uploads/caseStudies/WIDESCAPE/WS---K72.ca---Thumbnail-1280x960.jpg",
		},
		{
			image1:
				"https://k72.ca/uploads/caseStudies/OKA/OKA_thumbnail-1280x960.jpg",
			image2:
				"https://k72.ca/uploads/caseStudies/Opto/thumbnailimage_opto-1280x960.jpg",
		},
		{
			image1:
				"https://k72.ca/uploads/caseStudies/LAMAJEURE_-_Son_sur_mesure/chalaxeur-thumbnail_img-1280x960.jpg",
			image2:
				"https://k72.ca/uploads/caseStudies/SHELTON/thumbnailimage_shelton-1280x960.jpg",
		},
		{
			image1:
				"https://k72.ca/images/caseStudies/FRUITE/Fruite_thumbnail_bbq.jpg?w=1280&h=960&s=953c1f702bec28d66d07e95bc1261821",
			image2:
				"https://k72.ca/images/caseStudies/BAnQ_100TEMPS/100temps_Thumbnail.jpg?w=1280&h=960&s=5c944bb014f8643227ad7bb117fccc14",
		},
		{
			image1:
				"https://k72.ca/images/caseStudies/BEST/BEST_site_menu_Thumbnail.jpg?w=1280&h=960&s=d3b20d81946c6a7f4a6cd7ce1cfbb0fd",
			image2:
				"https://k72.ca/images/caseStudies/Opto_Reseau_Brand/opto_thumbnail2.jpg?w=1280&h=960&s=7f23d7d824eb04c784dcf51380fe3996",
		},
	];

	gsap.registerPlugin(ScrollTrigger);

	useGSAP(function () {
		gsap.from(".hero", {
			height: "100px",
			stagger: {
				amount: 0.4,
			},
			scrollTrigger: {
				trigger: ".lol",
				start: "top 100%",
				end: "top -150%",
				scrub: 5,
			},
		});
	});

	return (
		<div className="lg:p-4 p-2 mb-[100vh] overflow-hidden">
			<div className=" pt-[45vh]">
				<h2 className="font-[font2] lg:text-[9.5vw] text-7xl uppercase text-black">
					Projets
				</h2>
			</div>
			<div className="-lg:mt-20 lol">
				{projects.map(function (elem, idx) {
					return (
						<div
							key={idx}
							className="hero w-full lg:h-[650px] mb-4 flex lg:flex-row flex-col lg:gap-4 gap-2">
							<ProjectCard image1={elem.image1} image2={elem.image2} />
						</div>
					);
				})}
			</div>
		</div>
	);
};

export default Projects;
