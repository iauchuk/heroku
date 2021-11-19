import { NewsColumnConfigInterface } from "../../interfaces/newsInterfaces/newsColumnConfigInterface";

export const columnConfig: NewsColumnConfigInterface[] = [
  { field: "lang", headerName: "Language", minWidth: 200 },
  { field: "fieldId", headerName: "ID", minWidth: 200 },
  { field: "fingerprint", headerName: "Attribute", minWidth: 200 },
  { field: "keywords", headerName: "Main keywords", minWidth: 200 },
  { field: "originId", headerName: "News source id", minWidth: 200 },
  { field: "origin", headerName: "News source", minWidth: 200 },
  { field: "title", headerName: "Title", minWidth: 200 },
  { field: "author", headerName: "Author", minWidth: 200 },
  { field: "crawled", headerName: "Crawled date", minWidth: 200 },
  { field: "published", headerName: "Published date", minWidth: 200 },
  { field: "summary", headerName: "Description", maxWidth: 800 },
  { field: "alternate", headerName: "More details", minWidth: 200 },
  { field: "visual", headerName: "News image", minWidth: 200 },
  { field: "canonicalUrl", headerName: "News link", minWidth: 200 },
  { field: "unread", headerName: "Read status", minWidth: 200 },
];
