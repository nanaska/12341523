import React from "react";
import { motion } from 'framer-motion';
function HeroSection() {
	return (<>
		<motion.div >
			<div className="h-screen">
				<div className="select-none flex justify-center items-center flex-col pt-40  h-screen px-20 text-center font-bold lg:text-9xl text-6xl space-y-2">
					<motion.h1 animate={{ y: -100 }}
						transition={{ ease: "easeOut", duration: 2 }} className="text-gray-900 pb-3">
						<span className="text-green-500">Bag</span><span className="text-white">Табак </span>
					</motion.h1>
					<motion.h2 animate={{ y: -100 }}
						transition={{ ease: "easeOut", duration: 2 }} className="text-white select-none font pb-10 ">
						Табачный магазин🍀
					</motion.h2>
					{/* <div className="flex justify-center items-center cursor-pointer hover:shadow-lg  text-3xl font-semibold text-black bg-white rounded-lg w-64 h-16">
					<h1 className="text-center">Let's start 🚀 </h1>
				</div> */}
				</div>
			</div>
		</motion.div>
	</>
	);
}

export default HeroSection;
