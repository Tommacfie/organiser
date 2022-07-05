import { SocialNetworkType } from './SocialNetwork';
import { AddressType } from './Address';
export type ContactInfoType = {
  mobile: string;
  home: string;
  email: string;
  socials: SocialNetworkType[];
  currentAddress: AddressType;
};
