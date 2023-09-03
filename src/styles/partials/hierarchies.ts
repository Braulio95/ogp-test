export interface HierarchyInfo {
    rgba: string;
    shadow: string;
}

export enum Hierarchy {
    Hierarchy1,
    Hierarchy2,
    Hierarchy3,
    Hierarchy4,
}

export const Hierarchies: Record<Hierarchy, HierarchyInfo> = {
    [Hierarchy.Hierarchy1]: { rgba: '20, 63, 156, 0.25', shadow: '0px 6px 12px' },
    [Hierarchy.Hierarchy2]: { rgba: '20, 63, 156, 0.2', shadow: '0px 5px 10px' },
    [Hierarchy.Hierarchy3]: { rgba: '20, 63, 156, 0.1', shadow: '0px 5px 10px' },
    [Hierarchy.Hierarchy4]: { rgba: '20, 63, 156, 0.1', shadow: '0px 2px 5px' },
};