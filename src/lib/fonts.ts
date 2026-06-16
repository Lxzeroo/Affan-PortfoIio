import { Kalam } from 'next/font/google';
import { Patrick_Hand } from 'next/font/google';

export const kalam = Kalam({
  weight: ['700'],
  subsets: ['latin'],
  display: 'swap',
  variable: '--font-kalam',
});

export const patrickHand = Patrick_Hand({
  weight: ['400'],
  subsets: ['latin'],
  display: 'swap',
  variable: '--font-patrick',
});