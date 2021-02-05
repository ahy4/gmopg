import { Result, SiteArgs } from '../client.type';
export declare type SaveMemberArgs = SiteArgs & {
    MemberName?: string;
};
export declare type SaveMemberResult = Result & {
    MemberID: string;
};
export declare type UpdateMemberArgs = SiteArgs & {
    MemberName?: string;
};
export declare type UpdateMemberResult = Result & {
    MemberID: string;
};
export declare type DeleteMemberArgs = Result & {
    MemberID: string;
};
export declare type DeleteMemberResult = Result & {
    MemberID: string;
};
export declare type SearchMemberArgs = Result & {
    MemberID: string;
};
export declare type SearchMemberResult = Result & {
    MemberID: string;
    MemberName: string;
    DeleteFlag: string;
};
