export interface Tabs {
    id: number;
    label: string;
    routePath: string;
}

export interface NavBarProps {
    pageName: string;
    tabItems?: Tabs[];
}