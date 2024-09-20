import { type TemplateProps } from "rasengan";

export default function Template({
	Head,
	Body,
	Script,
}: TemplateProps) {
	return (
		<html lang='en'>
			<Head>
				<meta charSet='UTF-8' />
				<link rel='icon' type='image/svg+xml' href='/rasengan.svg' />
				<meta name='viewport' content='width=device-width, initial-scale=1.0' />

				<link rel='preconnect' href='https://fonts.googleapis.com' />
				<link rel='preconnect' href='https://fonts.gstatic.com' />
				<link
					href='https://fonts.googleapis.com/css2?family=Inter:ital,opsz,wght@0,14..32,100..900;1,14..32,100..900&display=swap'
					rel='stylesheet'
				></link>
			</Head>

			<Body>
				<Script />
			</Body>
		</html>
	);
}
