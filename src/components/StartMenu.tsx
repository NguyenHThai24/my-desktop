/** @format */

// components/StartMenu.tsx
import React from 'react';
import cvIcon from '../assets/icon-cv.png';
import vscodeIcon from '../assets/icon-vscode.png';

type StartMenuProps = {
	openWindow: (
		id: string,
		title: string,
		icon: string,
		content: React.ReactNode
	) => void;
};

const StartMenu = ({ openWindow }: StartMenuProps) => {
	return (
		<div className="w-[40vw] left-[30%] right-[50%] absolute bottom-16 bg-white border rounded-lg shadow-lg p-3 z-50">
			<h3 className="text-sm font-bold mb-2 text-blue-600">Start Menu</h3>

			<button
				onClick={() =>
					openWindow(
						'cv',
						'My CV',
						cvIcon,
						<iframe
							src="/cv.pdf"
							className="w-full h-full"
							title="My CV"
						/>
					)
				}
				className="flex items-center gap-2 w-full p-2 hover:bg-blue-100 rounded">
				<img
					src={cvIcon}
					alt="My CV"
					width={20}
				/>
				<span>My CV</span>
			</button>

			<button
				onClick={() =>
					openWindow(
						'vscode',
						'VS Code',
						vscodeIcon,
						<div className="p-4 text-black">VS Code Emulator (Demo)</div>
					)
				}
				className="flex items-center gap-2 w-full p-2 hover:bg-blue-100 rounded">
				<img
					src={vscodeIcon}
					alt="VS Code"
					width={20}
				/>
				<span>VS Code</span>
			</button>

			<hr className="my-2" />

			<button
				onClick={() => window.location.reload()}
				className="text-black text-sm p-2 hover:bg-blue-100 rounded text-left">
				Close all tab
			</button>
		</div>
	);
};

export default StartMenu;
