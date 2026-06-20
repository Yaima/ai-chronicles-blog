// ===== Site-wide configuration =====
// Edit these values once and they apply everywhere.

export const SITE_TITLE = 'AI Chronicles';
// Shown as the browser tab title on the home page (and as the default title).
export const SITE_TITLE_FULL = 'AI Chronicles | Blog';
export const SITE_DESCRIPTION =
  'AI Chronicles | Explore the world of AI with Yaima Valdivia.';
export const AUTHOR = 'Yaima Valdivia';

// Resume PDF lives in /public — replace the file to update it.
export const RESUME_URL = '/resume.pdf';

// --- Forms ---------------------------------------------------------------
// 1) Web3Forms (contact form): create a free access key at https://web3forms.com
//    and paste it here. Until then the contact form shows a friendly notice.
export const WEB3FORMS_ACCESS_KEY = '155ca6c7-e90f-43b1-83c5-bb2b3beed2fb';

// 2) Buttondown (email subscriptions): after creating a free account at
//    https://buttondown.com, put your username here (buttondown.com/<username>).
export const BUTTONDOWN_USERNAME = 'yaimavaldivia';

// --- Social links (optional, shown in footer) ----------------------------
export const SOCIAL = {
  instagram: 'https://www.instagram.com/yaima/',
  email: 'mailto:yaimamvaldivia@gmail.com',
};

// The logo links home (the post listing), so no separate "Home"/"Blog" item.
export const NAV = [
  { label: 'Blog', href: '/' },
  { label: 'About', href: '/about' },
  { label: 'Contact', href: '/contact' },
  { label: 'Resume', href: RESUME_URL, external: true },
];
