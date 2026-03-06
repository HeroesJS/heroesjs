import { i18n } from './i18n';

it('should translate', () => {
  expect(i18n.t('title')).toBe('HeroesJS');
});
