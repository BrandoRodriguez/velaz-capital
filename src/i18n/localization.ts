
type Locale = {
  code: string;
  label: string;
  rtl?: boolean; // Add rtl property here, making it optional
};

const localization = {
  defaultLocale: 'es',
  // fallback: true,
  locales: [
    {
      code: 'en',
      label: 'English (English)',
    },
    {
      code: 'es',
      label: 'Spanish (Español)',
    },
    // {
    //   code: 'ar',
    //   label: 'Arabic (العربية)',
    //   rtl: true,
    // },
  ] as Locale[],
}

export default localization
