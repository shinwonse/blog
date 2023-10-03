import 'server-only';

export const calculateReadingTime = (content: string) => {
  const { length } = content
    .trim()
    .replace(/(<([^>]+)>)/gi, ' ')
    .replace(/\s+/g, ' ')
    .replace(/[.,/#!$%^&*;:{}=\-_`~()']/g, '')
    .split(' ')
    .filter((word) => !!word);
  const wpm = 200;
  return Math.ceil(length / wpm);
};
