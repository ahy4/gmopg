"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.CvsCode = exports.DefaultFlag = exports.SeqMode = exports.JobCd = exports.Status = exports.Method = exports.PayType = void 0;
var PayType;
(function (PayType) {
    PayType["Cash"] = "Z";
    PayType["Credit"] = "0";
    PayType["Suica"] = "1";
    PayType["Edy"] = "2";
    PayType["Cvs"] = "3";
    PayType["DirectDebit"] = "28";
})(PayType = exports.PayType || (exports.PayType = {}));
var Method;
(function (Method) {
    Method["Lump"] = "1";
    Method["Installment"] = "2";
    Method["BonusLump"] = "3";
    Method["Revolving"] = "4";
    Method["BonusInstallment"] = "5";
})(Method = exports.Method || (exports.Method = {}));
var Status;
(function (Status) {
    Status["Unprocessed"] = "UNPROCESSED";
    Status["Authenticated"] = "AUTHENTICATED";
    Status["Check"] = "CHECK";
    Status["Capture"] = "CAPTURE";
    Status["Auth"] = "AUTH";
    Status["Sales"] = "SALES";
    Status["Void"] = "VOID";
    Status["Return"] = "RETURN";
    Status["Returnx"] = "RETURNX";
    Status["Sauth"] = "SAUTH";
    Status["Reqsuccess"] = "REQSUCCESS";
    Status["Paysuccess"] = "PAYSUCCESS";
    Status["Payfail"] = "PAYFAIL";
    Status["Expired"] = "EXPIRED";
    Status["Cancel"] = "CANCEL";
})(Status = exports.Status || (exports.Status = {}));
var JobCd;
(function (JobCd) {
    JobCd["Check"] = "CHECK";
    JobCd["Capture"] = "CAPTURE";
    JobCd["Auth"] = "AUTH";
    JobCd["Sales"] = "SALES";
    JobCd["Void"] = "VOID";
    JobCd["Return"] = "RETURN";
    JobCd["Returnx"] = "RETURNX";
    JobCd["Sauth"] = "SAUTH";
})(JobCd = exports.JobCd || (exports.JobCd = {}));
var SeqMode;
(function (SeqMode) {
    SeqMode["Logic"] = "0";
    SeqMode["Physics"] = "1";
})(SeqMode = exports.SeqMode || (exports.SeqMode = {}));
var DefaultFlag;
(function (DefaultFlag) {
    DefaultFlag["BillingObject"] = "0";
    DefaultFlag["NotSubjectToCharge"] = "1";
})(DefaultFlag = exports.DefaultFlag || (exports.DefaultFlag = {}));
var CvsCode;
(function (CvsCode) {
    CvsCode["_Lawson"] = "00001";
    CvsCode["_FamilyMart"] = "00002";
    CvsCode["_Sunkus"] = "00003";
    CvsCode["_CircleK"] = "00004";
    CvsCode["_MiniStop"] = "00005";
    CvsCode["_DailyYamazaki"] = "00006";
    CvsCode["_SeicoMart"] = "00008";
    CvsCode["Lawson"] = "10001";
    CvsCode["FamilyMart"] = "10002";
    CvsCode["Sunkus"] = "10003";
    CvsCode["CircleK"] = "10004";
    CvsCode["MiniStop"] = "10005";
    CvsCode["SevenEleven"] = "00007";
    CvsCode["SeicoMart"] = "10008";
})(CvsCode = exports.CvsCode || (exports.CvsCode = {}));
