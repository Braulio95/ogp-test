import { ReactNode } from 'react';

export interface LayoutProps {
    children: ReactNode;
    isTitleLoading?: boolean;
    referred?: boolean;
    title?: string;
    onClickButton?: () => void;
    onClickBackButton?: () => void;
}