/** @format */

import { useState } from 'react';
import DesktopIcon from './components/DesktopIcon';
import WindowApp from './components/WindowApp';

// icon desktop
import cvIcon from './assets/icon-cv.png';

// icon taskbar
import startIcon from './assets/icon-start.png';
import Taskbar from './components/Taskbar';

function App() {
	const [isCVOpen, setIsCVOpen] = useState(false);
	const [isCVMinimized, setIsCVMinimized] = useState(false);

	const handleOpenCV = () => {
		setIsCVOpen(true);
		setIsCVMinimized(false);
	};

	const handleCloseCV = () => {
		setIsCVOpen(false);
		setIsCVMinimized(false);
	};

	const handleMinimizeCV = () => {
		setIsCVMinimized(true);
	};

	return (
		<main className="w-screen h-screen bg-gradient-to-br from-sky-700 to-blue-900 overflow-hidden flex flex-col">
			{/* Workspace area */}
			<section className="flex-1 relative p-4">
				<DesktopIcon
					icon={cvIcon}
					label="My CV"
					onClick={handleOpenCV}
				/>

				{/* CV Window */}
				{isCVOpen && !isCVMinimized && (
					<WindowApp
						title="My CV"
						onClose={handleCloseCV}
						onMinimize={handleMinimizeCV}>
						<iframe
							src="/cv.pdf"
							className="w-full h-full"
							title="My CV"
						/>
					</WindowApp>
				)}
			</section>

			{/* Taskbar */}
			<Taskbar
				isCVOpen={isCVOpen}
				onClickCV={handleOpenCV}
				startIcon={startIcon}
				cvIcon={cvIcon}
			/>
		</main>
	);
}

export default App;
