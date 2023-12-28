import { MeSliceI } from '@redux/slices/me/me.interface';
import { ReactElement } from 'react';

export interface LayoutPropsI {
    children: ReactElement;
    variant?: 'main' | 'minimal' | 'noauth';
}

export interface MainLayoutPropsI {
  children?: ReactElement<MeSliceI>  
}