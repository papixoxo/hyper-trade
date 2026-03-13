import { Request, Response } from 'express';

export const getMetrics = (req: Request, res: Response) => {
  res.json({
    totalVolume: '$420,069,133,337',
    liquidity: '$12,345,678,901',
    traders: 245012,
    tps: 8432
  });
};

export const getTokens = (req: Request, res: Response) => {
  res.json([
    { symbol: 'BTC', name: 'Bitcoin', price: 92450.32, change24h: 3.4 },
    { symbol: 'ETH', name: 'Ethereum', price: 3450.12, change24h: 5.2 },
    { symbol: 'SOL', name: 'Solana', price: 210.45, change24h: -1.2 },
    { symbol: 'HYPE', name: 'Hyperliquid', price: 15.67, change24h: 12.5 }
  ]);
};

export const getMarkets = (req: Request, res: Response) => {
  res.json([
    { pair: 'BTC-PERP', price: 92450.32, fundingRate: 0.0012, volume24h: '1.2B' },
    { pair: 'ETH-PERP', price: 3450.12, fundingRate: 0.0008, volume24h: '800M' },
    { pair: 'SOL-PERP', price: 210.45, fundingRate: -0.0005, volume24h: '350M' }
  ]);
};
