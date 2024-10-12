// src/global.d.ts
import { LanguageContent } from "./types/i18n";

declare module "*.json" {
  const value: LanguageContent;
  export default value;
}
