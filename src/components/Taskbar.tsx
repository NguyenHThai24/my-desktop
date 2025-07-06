/** @format */

import React, { useEffect, useState } from 'react';
import TooltipWrapper from './TooltipWrapper';

type AppWindow = {
	id: string;
	title: string;
	icon: string;
	content: React.ReactNode;
	isMinimized: boolean;
	zIndex: number;
};

type TaskbarProps = {
	windows: AppWindow[];
	onFocusWindow: (id: string) => void;
	startIcon: string;
	onToggleStartMenu: () => void;
};

const Taskbar = ({
	windows,
	onFocusWindow,
	startIcon,
	onToggleStartMenu,
}: TaskbarProps) => {
	const [currentTime, setCurrentTime] = useState(new Date());

	useEffect(() => {
		const interval = setInterval(() => setCurrentTime(new Date()), 1000);
		return () => clearInterval(interval);
	}, []);

	return (
		<section className=" w-[40vw] z-999 mx-auto my-1 rounded-full border border-blue-400 h-11 px-7 bg-blue-200 text-white flex items-center justify-between gap-4">
			<button
				type="button"
				onClick={onToggleStartMenu}
				aria-label="Open Start Menu"
				className="rounded hover:bg-white p-1 cursor-pointer">
				<img
					src={startIcon}
					width={30}
					alt="Start"
				/>
			</button>

			<div className="flex gap-4 items-center">
				{windows.map((w) => (
					<TooltipWrapper
						key={w.id}
						content={w.title}>
						<button
							type="button"
							onClick={() => onFocusWindow(w.id)}
							className="rounded hover:bg-white p-1 text-sm">
							<img
								src={w.icon}
								width={30}
								alt={w.title}
							/>
						</button>
					</TooltipWrapper>
				))}
			</div>

			<div className="ml-auto text-right leading-tight text-[13px] font-bold text-black">
				<div>{currentTime.toLocaleDateString()}</div>
				<div>{currentTime.toLocaleTimeString()}</div>
			</div>
		</section>
	);
};

export default Taskbar;
