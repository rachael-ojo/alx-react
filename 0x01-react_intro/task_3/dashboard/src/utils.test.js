import { getFullYear, getFooterCopy, getLatestNotification } from './utils';

describe('getFullYear', () => {
  it('returns the correct year', () => {
    const date = new Date('2024-10-01T00:00:00.000Z');
    expect(getFullYear(date)).toBe(2024);
  });
});

describe('getFooterCopy', () => {
  it('returns the correct string when true', () => {
    expect(getFooterCopy(true)).toBe('Strivify');
  });

  it('returns the correct string when false', () => {
    expect(getFooterCopy(false)).toBe('Strivify');
  });
});

describe('getLatestNotification', () => {
  it('returns the correct string', () => {
    const date = new Date('2024-10-01T00:00:00.000Z');
    expect(getLatestNotification(date)).toBe('Urgent: Your task is due today!');
  });
});
