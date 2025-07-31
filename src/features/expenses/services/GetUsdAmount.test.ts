import { describe, it, expect, vi, beforeEach, afterEach } from 'vitest';

import getUsdAmount from "./GetUsdAmount";

beforeEach(() => {
  global.fetch = vi.fn();
});

afterEach(() => {
  vi.resetAllMocks();
});

describe('getUsdAmount', () => {
  it('returns correct converted amount', async () => {
    (fetch as any).mockResolvedValueOnce({
      json: async () => ({
        rates: { EGP: 30 },
      }),
    });
    const result = await getUsdAmount('EGP', 300);
    expect(result).toEqual({ amount: '10.00', currency: 'USD' });
  });

  it('returns undefined if fetch fails', async () => {
    (fetch as any).mockRejectedValueOnce(new Error('API error'));
    const result = await getUsdAmount('EGP', 300);
    expect(result).toBeUndefined();
  });
});
