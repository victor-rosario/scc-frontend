
import LAYOUT from '@constants/layout'
import { Fragment } from 'react'
import MainLayout from './MainLayout'
import MinimalLayout from './MinimalLayout'
import { LayoutPropsI } from './layout.interface';

export default function Layout({ variant = LAYOUT.main, children }: LayoutPropsI) {
  switch (variant) {
    case LAYOUT.minimal:
      return <MinimalLayout>{children}</MinimalLayout>;

    case LAYOUT.noauth:
      return (
        <Fragment>
          <MinimalLayout>{children}</MinimalLayout>
        </Fragment>
      );

    default:
      return (
        <Fragment>
          <MainLayout>{children}</MainLayout>
        </Fragment>
      );
  }
}
