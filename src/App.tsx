/** @format */

import { useState } from 'react';
import DesktopIcon from './components/DesktopIcon';
import Taskbar from './components/Taskbar';
import WindowApp from './components/WindowApp';

import cvIcon from './assets/icon-cv.png';
import vscodeIcon from './assets/icon-vscode.png';
import startIcon from './assets/icon-start.png';
import StartMenu from './components/StartMenu';

type AppWindow = {
	id: string;
	title: string;
	icon: string;
	content: React.ReactNode;
	isMinimized: boolean;
	zIndex: number;
};

const App = () => {
	const [windows, setWindows] = useState<AppWindow[]>([]);
	const [zIndexCounter, setZIndexCounter] = useState(1);
	const [showStartMenu, setShowStartMenu] = useState(false); // dùng để hiển thị Start Menu

	const openWindow = (
		id: string,
		title: string,
		icon: string,
		content: React.ReactNode
	) => {
		setWindows((prev) => {
			const existing = prev.find((w) => w.id === id);
			if (existing) {
				return prev.map((w) =>
					w.id === id
						? { ...w, isMinimized: false, zIndex: zIndexCounter + 1 }
						: w
				);
			}
			return [
				...prev,
				{
					id,
					title,
					icon,
					content,
					isMinimized: false,
					zIndex: zIndexCounter + 1,
				},
			];
		});
		setZIndexCounter((z) => z + 1);
	};

	const closeWindow = (id: string) => {
		setWindows((prev) => prev.filter((w) => w.id !== id));
	};

	const minimizeWindow = (id: string) => {
		setWindows((prev) =>
			prev.map((w) => (w.id === id ? { ...w, isMinimized: true } : w))
		);
	};

	const focusWindow = (id: string) => {
		setWindows((prev) =>
			prev.map((w) =>
				w.id === id
					? { ...w, isMinimized: false, zIndex: zIndexCounter + 1 }
					: w
			)
		);
		setZIndexCounter((z) => z + 1);
	};

	return (
		<main className="w-screen h-screen bg-[url('/bg.png')] bg-cover bg-center overflow-hidden flex flex-col">
			<section className="flex-1 relative p-4 flex flex-col flex-wrap items-start justify-start gap-5">
				<DesktopIcon
					icon={cvIcon}
					label="My CV"
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
				/>

				<DesktopIcon
					icon={vscodeIcon}
					label="VS Code"
					onClick={() =>
						openWindow(
							'vscode',
							'VS Code',
							vscodeIcon,
							<div className="p-4 text-black">VS Code Emulator (Demo)</div>
						)
					}
				/>

				{windows.map(
					(win) =>
						!win.isMinimized && (
							<WindowApp
								key={win.id}
								title={win.title}
								onClose={() => closeWindow(win.id)}
								onMinimize={() => minimizeWindow(win.id)}
								style={{ zIndex: win.zIndex }}
								onMouseDown={() => focusWindow(win.id)}>
								{win.content}
							</WindowApp>
						)
				)}
			</section>

			<Taskbar
				windows={windows}
				onFocusWindow={focusWindow}
				startIcon={startIcon}
				onToggleStartMenu={() => setShowStartMenu((prev) => !prev)}
			/>
			{showStartMenu && <StartMenu openWindow={openWindow} />}
		</main>
	);
};

export default App;
