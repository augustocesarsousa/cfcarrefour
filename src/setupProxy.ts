import express from 'express';
import { createProxyMiddleware } from 'http-proxy-middleware';

const app = express();

const proxy = {
  target: 'https://mercado.carrefour.com.br',
  changeOrigin: true
};

app.use('/api', createProxyMiddleware(proxy));
