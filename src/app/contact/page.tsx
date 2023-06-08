import ContactForm from "@/components/ContactForm";
import { Title } from "@/components/Typography";
import { Metadata } from "next";

export const metadata: Metadata = {
	title: "Contact",
};

const Contact = () => {
	return (
		<>
			<Title>Contact</Title>
			<ContactForm />
		</>
	);
};

export default Contact;
