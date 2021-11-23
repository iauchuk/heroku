export const isPresent = (obj: any): boolean => {
  return obj !== undefined && obj !== null && obj !== "undefined";
};

export const getCookie = (name: string) => {
  const cookieArr = document.cookie.replace(/\s/g, "").split(";");
  const cookies: Record<string, string> = {};
  cookieArr.forEach((c) => {
    const itemArr = c.split("=");
    [, cookies[itemArr[0]]] = itemArr;
  });
  return cookies[name];
};
