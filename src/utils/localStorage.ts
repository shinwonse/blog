import { v4 as uuidv4 } from 'uuid';

const KEY = {
  ID: 'id',
  VIEW_MAP: 'view-map',
};

const getViewMap = () => JSON.parse(localStorage.getItem(KEY.VIEW_MAP) ?? '{}');

export const getViewCount = (slug: string) => Number(getViewMap()[slug] ?? 0);

export const getIsViewed = (slug: string) => getViewCount(slug) > 0;

export const incrementViewCount = (slug: string) =>
  localStorage.setItem(
    KEY.VIEW_MAP,
    JSON.stringify({ ...getViewMap(), [slug]: getViewCount(slug) + 1 }),
  );

export const getUserID = () => {
  const userID = localStorage.getItem(KEY.ID);
  if (userID) {
    return userID;
  }
  const newUserID = uuidv4();
  localStorage.setItem(KEY.ID, newUserID);
  return newUserID;
};
