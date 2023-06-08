import { usePathname } from "next/navigation";
import { ReactNode, createContext, useContext, useState } from "react";

export type NavbarContextType = {
	isOpen: boolean;
	setOpen: (open: boolean) => void;
	currentRoute: string;
};

const NavbarContext = createContext<NavbarContextType>({
	isOpen: false,
	setOpen: () => {},
	currentRoute: "/",
});

export const NavbarProvider = ({ children }: { children: ReactNode }) => {
	const [isOpen, setOpen] = useState(false);
	const currentRoute = usePathname();

	return (
		<NavbarContext.Provider value={{ isOpen, setOpen, currentRoute }}>
			{children}
		</NavbarContext.Provider>
	);
};

export const useNavbar = () => useContext(NavbarContext);
