import next from 'next';

const PORT = Number(process.env) || 300;

export const nextApp = next({
	dev: process.env.NODE_ENV !== 'production',
	port: PORT,
});

export const nextHandler = nextApp.getRequestHandler();
