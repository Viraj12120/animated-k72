import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/all";
import { useRef } from "react";

const Agence = () => {
	gsap.registerPlugin(ScrollTrigger);

	const imageDivRef = useRef(null);
	const imageRef = useRef(null);

	const imageArray = [
		"https://k72.ca/uploads/teamMembers/Carl_480x640-480x640.jpg",
		"https://k72.ca/uploads/teamMembers/Olivier_480x640-480x640.jpg",
		"https://k72.ca/uploads/teamMembers/Lawrence_480x640-480x640.jpg",
		"https://k72.ca/uploads/teamMembers/HugoJoseph_480x640-480x640.jpg",
		"https://k72.ca/uploads/teamMembers/ChantalG_480x640-480x640.jpg",
		"https://k72.ca/uploads/teamMembers/MyleneS_480x640-480x640.jpg",
		"https://k72.ca/uploads/teamMembers/SophieA_480x640-480x640.jpg",
		"https://k72.ca/uploads/teamMembers/Claire_480x640-480x640.jpg",
		"https://k72.ca/uploads/teamMembers/Michele_480X640-480x640.jpg",
		"https://k72.ca/uploads/teamMembers/MEL_480X640-480x640.jpg",
		"https://k72.ca/uploads/teamMembers/CAMILLE_480X640_2-480x640.jpg",
		"https://k72.ca/uploads/teamMembers/MAXIME_480X640_2-480x640.jpg",
		"https://k72.ca/uploads/teamMembers/MEGGIE_480X640_2-480x640.jpg",
		"https://k72.ca/uploads/teamMembers/joel_480X640_3-480x640.jpg",
	];

	useGSAP(function () {
		gsap.to(imageDivRef.current, {
			scrollTrigger: {
				trigger: imageDivRef.current,
				// markers: true,
				start: "top 28%",
				end: "top -160%",
				pin: true,
				pinSpacing: true,
				pinReparent: true,
				pinType: "transform",
				scrub: 1, // smooth scrubbing with 1s easing
				anticipatePin: 1,
				invalidateOnRefresh: true,
				onUpdate: (elem) => {
					let imageIndex;
					if (elem.progress < 1) {
						imageIndex = Math.floor(elem.progress * imageArray.length);
					} else {
						imageIndex = imageArray.length - 1;
					}
					imageRef.current.src = imageArray[imageIndex];
				},
			},
		});
		gsap.to(".parent", {
			backgroundColor: "#000",
			scrollTrigger: {
				trigger: "#page3",
				start: "top 50%",
				end: "top 0%",
				scrub: true,
			},
		});
		gsap.to(".track", {
			xPercent: -50,
			duration: 20,
			ease: "none",
			repeat: -1,
		});
		gsap.to(".track1", {
			xPercent: -50,
			duration: 20,
			ease: "none",
			repeat: -1,
		});
	});

	return (
		<div className="parent ">
			<div id="page1" className="py-1 ">
				<div
					ref={imageDivRef}
					className="absolute overflow-hidden lg:h-[20vw] h-[30vw] lg:rounded-3xl rounded-xl lg:w-[15vw] w-[25vw]  -top-10 lg:left-[30vw] left-[30vw]">
					<img
						ref={imageRef}
						className="h-full object-cover w-full"
						src="https://k72.ca/uploads/teamMembers/Carl_480x640-480x640.jpg"
						alt=""
					/>
				</div>
				<div className="relative font-[font2]">
					<div className="lg:mt-[55vh] mt-[30vh]">
						<h1 className="text-[20vw] text-center uppercase leading-[18vw] text-black">
							Soixan7e <br />
							Douze
						</h1>
						<div className="lg:pl-[40%]   p-3">
							<p className="lg:text-6xl text-4xl leading-tight text-black">
								&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
								Notre curiosité nourrit notre créativité. On reste humbles et on
								dit non aux gros egos, même le vôtre. Une marque est vivante.
								Elle a des valeurs, une personnalité, une histoire. Si on oublie
								ça, on peut faire de bons chiffres à court terme, mais on la tue
								à long terme. C’est pour ça qu’on s’engage à donner de la
								perspective, pour bâtir des marques influentes.
							</p>
						</div>
					</div>
				</div>
			</div>
			<div id="page2" className="mt-36 h-screen text-black">
				<div className="flex">
					<div className="px-52 text-2xl font-[font2]">Expertise</div>
					<div className="px-52 text-2xl font-[font2]">
						<ul
							class="o-text -medium || u-anim-scroll-parent is-inview"
							data-scroll="">
							<li class="u-anim-scroll -parent -delay-1">Stratégie</li>
							<li class="u-anim-scroll -parent -delay-1">Publicité</li>
							<li class="u-anim-scroll -parent -delay-1">Branding</li>
							<li class="u-anim-scroll -parent -delay-1">Design </li>
							<li class="u-anim-scroll -parent -delay-1">Contenu</li>
						</ul>
					</div>
				</div>
				<div className="mt-36 flex px-52 text-black text-2xl font-[font2] ">
					<div className="px-10">
						Nos projets_ naissent dans l’humilité, grandissent dans la curiosité
						et vivent grâce à la créativité sous toutes ses formes.
					</div>
					<div className="px-10">
						Notre création_ bouillonne dans un environnement où le talent a le
						goût d’exploser. Où on se sent libre d’être la meilleure version de
						soi-même.
					</div>
					<div className="px-10">
						Notre culture_ c’est l’ouverture aux autres. Point. Tout l’équipage
						participe à bâtir une agence dont on est fiers.
					</div>
				</div>
			</div>
			<div id="page3" className="h-screen  -mt-20 flex flex-col ">
				<div className="flex justify-center items-center h-full relative">
					{/* name */}
					<div className="absolute left-0 w-full overflow-hidden">
						<div className="track text-[6vw] flex w-max -mt-4 text-[#D3FD50]">
							<h2 className="elem  font-[font2] uppercase  whitespace-nowrap mr-[8vw] ">
								Joël&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Joël&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Joël&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
							</h2>

							<h2 className=" font-[font2] uppercase  whitespace-nowrap mr-[8vw]">
								Joël&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Joël&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Joël&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
							</h2>
						</div>
					</div>

					<div className="absolute w-[500px] h-[920px] bg-amber-600 justify-center  ">
						<img
							src="https://k72.ca/uploads/teamMembers/joel_480X640_3-480x640.jpg"
							className="h-full object-cover"
						/>
					</div>
					{/* surname */}
					<div className="absolute left-0 w-full overflow-hidden mt-96 z-20">
						<div className="track1 text-[6vw] flex w-max  text-[#D3FD50]">
							<h2 className="elem  flex items-center font-[font2] uppercase  whitespace-nowrap mr-[8vw] px-96 ">
								LETARTE&nbsp;&nbsp;
								<p className="  text-white text-2xl mt-28">
									Directeur de création adjoint
								</p>
							</h2>
							<h2 className="elem  flex items-center font-[font2] uppercase  whitespace-nowrap mr-[8vw] px-96 ">
								LETARTE&nbsp;&nbsp;
								<p className="  text-white text-2xl mt-28">
									Directeur de création adjoint
								</p>
							</h2>
							<h2 className="elem flex items-center font-[font2] uppercase  whitespace-nowrap mr-[8vw] px-96 ">
								LETARTE&nbsp;&nbsp;
								<p className="  text-white text-2xl mt-28">
									Directeur de création adjoint
								</p>
							</h2>
							<h2 className="elem text-[10vw] flex items-center font-[font2] uppercase  whitespace-nowrap mr-[8vw] px-96 ">
								LETARTE&nbsp;&nbsp;
								<p className="  text-white text-2xl mt-28">
									Directeur de création adjoint
								</p>
							</h2>
						</div>
					</div>
				</div>
			</div>
			<div className=""></div>
		</div>
	);
};

export default Agence;
