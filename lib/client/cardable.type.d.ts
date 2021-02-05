import { SeqMode } from '../client.enum';
import { Result, SiteArgs, ShopArgs } from '../client.type';
export declare type SaveCardArgs = SiteArgs & {
    SeqMode?: SeqMode;
    CardSeq?: number;
    DefaultFlag?: string;
    CardName?: string;
    CardNo?: string;
    CardPass?: string;
    Expire?: string;
    HolderName?: string;
    Token?: string;
};
export declare type SaveCardResult = Result & {
    CardSeq: string;
    CardNo: string;
    Forward: string;
    Brand?: string;
    DomesticFlag?: string;
    IssuerCode?: string;
    DebitPrepaidFlag?: string;
    DebitPrepaidIssuerName?: string;
    ForwardFinal?: string;
};
export declare type DeleteCardArgs = SiteArgs & {
    SeqMode?: SeqMode;
    CardSeq: string;
};
export declare type DeleteCardResult = Result & {
    CardSeq: string;
};
export declare type SearchCardArgs = SiteArgs & {
    SeqMode: SeqMode;
    CardSeq?: string;
};
export declare type SearchCardResult = Result & {
    CardSeq: string;
    DefaultFlag: string;
    CardName: string;
    CardNo: string;
    Expire: string;
    HolderName: string;
    DeleteFlag: string;
    Brand?: string;
    DomesticFlag?: string;
    IssuerCode?: string;
    DebitPrepaidFlag?: string;
    DebitPrepaidIssuerName?: string;
    ForwardFinal?: string;
};
export declare type SearchCardDetailArgs = ShopArgs & SiteArgs & {
    Token?: string;
    SearchType?: string;
    CardNo?: string;
    OrderID?: string;
    SeqMode?: SeqMode;
    CardSeq?: string;
};
export declare type SearchCardDetailResult = Result & {
    CardNo?: string;
    Brand?: string;
    DomesticFlag?: string;
    IssuerCode?: string;
    DebitPrepaidFlag?: string;
    DebitPrepaidIssuerName?: string;
    ForwardFinal?: string;
};
