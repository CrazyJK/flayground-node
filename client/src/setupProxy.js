import { createProxyMiddleware } from 'http-proxy-middleware';

export default function proxy(app) {
	app.use(
		createProxyMiddleware('/api', {
			target: 'http://localhost:5000',
			changeOrigin: true,
		}),
	);
}
