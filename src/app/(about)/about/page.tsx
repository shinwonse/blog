import { redirect } from 'next/navigation';

// About information is now integrated into the home page
// Redirect to home page for better UX
export default function AboutPage() {
	redirect('/');
}
