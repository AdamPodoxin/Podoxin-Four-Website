export const enableScroll = (enable: boolean) => {
	document.documentElement.style.overflowY = enable ? "scroll" : "hidden";
};
