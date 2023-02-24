export enum RouteName {
  BlogContent = 'BlogContent',
  BlogList = 'BlogList',
  NotFound = 'NotFound',
  Home = 'Home',
  Music = 'Music',
  Movie = 'Movie',
}

export const StorageKeys: Record<string, string> = {
  ColorScheme: 'ColorScheme',
}

Object.keys(StorageKeys).forEach((k) => {
  StorageKeys[k] = 'lovetingyuan:' + k
})
