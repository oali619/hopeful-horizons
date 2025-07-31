import {
	Links,
	Meta,
	Outlet,
	Scripts,
	ScrollRestoration,
} from '@remix-run/react';
import './root.css';
import '../app/components/index.css';
import { Toaster } from 'sonner';
import img from './images/autism0.jpg';

export function Layout({ children }: { children: React.ReactNode }) {
	return (
		<html lang='en'>
			<head>
				<meta charSet='utf-8' />
				<meta name='keywords' content='Autism, ABA, Minnesota, Twin-Cities, Support,Therapy, Resources, Children, Social work' />
				<meta name='description' content='Compassionate autism support, ABA therapy, resources, and services for individuals and families in Minnesota.' />
				<meta name='robots' />
				<meta property='og:title' content='Hopeful Horizons - ABA Therapy' />
				<meta property='og:description' content='Compassionate autism support, ABA therapy, resources, and services for individuals and families in Minnesota.' />
				<meta property='og:image' content={img} />
				<meta name='viewport' content='width=device-width, initial-scale=1' />
				<Meta />
				<Links />
			</head>
			<body>
				<Toaster closeButton richColors />
				{children}
				<ScrollRestoration />
				<Scripts />
			</body>
		</html>
	);
}

export default function App() {
	return <Outlet />;
}
