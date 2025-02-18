
type Locale = {
  code: string;
  label: string;
  custom?: string;
  rtl?: boolean; // Add rtl property here, making it optional
};

const localization = {
  defaultLocale: 'es',
  // fallback: true,
  locales: [
    {
      code: 'en',
      label: 'English (English)',
      custom: 'EN',
    },
    {
      code: 'es',
      label: 'Spanish (Español)',
      custom: 'ES',
    },
    // {
    //   code: 'ar',
    //   label: 'Arabic (العربية)',
    //   rtl: true,
    // },
  ] as Locale[],
}

export default localization
