import React from "react";
export type UploadFileStatus = "uploading" | "success" | "error"
export type UploadListType = 'text' | 'picture' | 'picture-card';

export interface UploadFile {
  uid: string;
  size?: number;
  name: string;
  status?: UploadFileStatus | string;
  percent?: number;
  fileName?: string;
  url?: string;
  thumbUrl?: string;
  preview?: string;
  originFileObj?: File;
  response?: any;
  type?: string;
  linkProps?: any;
  error?: any;
}
export interface ShowUploadListInterface {
  showRemoveIcon?: boolean;
  showPreviewIcon?: boolean;
  showDownloadIcon?: boolean;
  removeIcon?: React.ReactNode | ((file: UploadFile) => React.ReactNode);
  downloadIcon?: React.ReactNode | ((file: UploadFile) => React.ReactNode);
}
export interface UploadLocale {
  uploading?: string;
  removeFile?: string;
  downloadFile?: string;
  uploadError?: string;
  previewFile?: string;
}
