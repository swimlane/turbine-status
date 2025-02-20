import { Region } from './types';

export const statusPollingIntervalInMs = 30000;

export const labels = {
  bannerTitle: 'Welcome to the Swimlane Status Page',
  bannerSubtitle:
    "Below you'll find status information for Swimlane's Cloud-native Turbine platform",
  supportButton: 'Go to Support Portal',
  copyright:
    '© ' + new Date().getFullYear() + ' Swimlane Inc. All rights reserved.',
  privacyPolicy: 'Privacy Policy',
  legalResources: 'Legal Resources',
  contact: 'Contact',
  support: 'Support',
};

export const urls = {
  facebook: '',
  github: '',
  linkedin: 'https://www.linkedin.com/company/swimlane',
  twitter: 'https://www.X.com/swimlane',
  youtube: 'https://www.youtube.com/channel/UCs6qP3QXytOsCD1TRIw0EYg',
  privacyPolicy: 'https://swimlane.com/privacy-policy',
  legalResources: 'https://swimlane.com/legal',
  contact: 'https://swimlane.com/contact',
  support: 'https://swimlane.freshdesk.com/support/login',
};

export const regions: Array<Region> = [
  {
    name: 'Americas (US East)',
    url: 'https://useast.swimlanestatus.com',
  },
  {
    name: 'Americas (US East 2)',
    url: 'https://useast2.swimlanestatus.com',
  },
  {
    name: 'Americas (US West)',
    url: 'https://uswest.swimlanestatus.com',
  },
  {
    name: 'Asia Pacific (Japan)',
    url: 'https://japan.swimlanestatus.com',
  },
  {
    name: 'Europe (UK)',
    url: 'https://uk.swimlanestatus.com',
  },
  {
    name: 'Asia Pacific (Singapore)',
    url: 'https://singapore.swimlanestatus.com',
  },
  {
    name: 'Europe (Germany)',
    url: 'https://germany.swimlanestatus.com',
  },
  {
    name: 'Asia Pacific (Australia)',
    url: 'https://australia.swimlanestatus.com',
  },
];

export const regionStatusApiPath = '/api/v2/status.json';
