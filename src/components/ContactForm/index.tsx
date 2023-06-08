"use client";

import { montserrat } from "@/lib/fonts";
import { FORMSPREE_LINK } from "@/lib/constants";
import styles from "./contactForm.module.css";

const ContactForm = () => {
	return (
		<form
			id={styles.contactForm}
			className={montserrat.className}
			action={FORMSPREE_LINK}
			method="POST"
		>
			<input name="name" type="text" placeholder="Full name" required />
			<input name="email" type="email" placeholder="Email address" required />
			<input name="phone" type="tel" placeholder="Phone number" required />
			<textarea name="message" placeholder="Message" rows={12} />
			<input type="submit" value="Submit" />
		</form>
	);
};

export default ContactForm;
