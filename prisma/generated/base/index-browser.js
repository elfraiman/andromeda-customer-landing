
Object.defineProperty(exports, "__esModule", { value: true });

const {
  Decimal,
  objectEnumValues,
  makeStrictEnum,
  Public,
  getRuntime,
  skip
} = require('./runtime/index-browser.js')


const Prisma = {}

exports.Prisma = Prisma
exports.$Enums = {}

/**
 * Prisma Client JS version: 6.0.1
 * Query Engine version: 5dbef10bdbfb579e07d35cc85fb1518d357cb99e
 */
Prisma.prismaVersion = {
  client: "6.0.1",
  engine: "5dbef10bdbfb579e07d35cc85fb1518d357cb99e"
}

Prisma.PrismaClientKnownRequestError = () => {
  const runtimeName = getRuntime().prettyName;
  throw new Error(`PrismaClientKnownRequestError is unable to run in this browser environment, or has been bundled for the browser (running in ${runtimeName}).
In case this error is unexpected for you, please report it in https://pris.ly/prisma-prisma-bug-report`,
)};
Prisma.PrismaClientUnknownRequestError = () => {
  const runtimeName = getRuntime().prettyName;
  throw new Error(`PrismaClientUnknownRequestError is unable to run in this browser environment, or has been bundled for the browser (running in ${runtimeName}).
In case this error is unexpected for you, please report it in https://pris.ly/prisma-prisma-bug-report`,
)}
Prisma.PrismaClientRustPanicError = () => {
  const runtimeName = getRuntime().prettyName;
  throw new Error(`PrismaClientRustPanicError is unable to run in this browser environment, or has been bundled for the browser (running in ${runtimeName}).
In case this error is unexpected for you, please report it in https://pris.ly/prisma-prisma-bug-report`,
)}
Prisma.PrismaClientInitializationError = () => {
  const runtimeName = getRuntime().prettyName;
  throw new Error(`PrismaClientInitializationError is unable to run in this browser environment, or has been bundled for the browser (running in ${runtimeName}).
In case this error is unexpected for you, please report it in https://pris.ly/prisma-prisma-bug-report`,
)}
Prisma.PrismaClientValidationError = () => {
  const runtimeName = getRuntime().prettyName;
  throw new Error(`PrismaClientValidationError is unable to run in this browser environment, or has been bundled for the browser (running in ${runtimeName}).
In case this error is unexpected for you, please report it in https://pris.ly/prisma-prisma-bug-report`,
)}
Prisma.Decimal = Decimal

/**
 * Re-export of sql-template-tag
 */
Prisma.sql = () => {
  const runtimeName = getRuntime().prettyName;
  throw new Error(`sqltag is unable to run in this browser environment, or has been bundled for the browser (running in ${runtimeName}).
In case this error is unexpected for you, please report it in https://pris.ly/prisma-prisma-bug-report`,
)}
Prisma.empty = () => {
  const runtimeName = getRuntime().prettyName;
  throw new Error(`empty is unable to run in this browser environment, or has been bundled for the browser (running in ${runtimeName}).
In case this error is unexpected for you, please report it in https://pris.ly/prisma-prisma-bug-report`,
)}
Prisma.join = () => {
  const runtimeName = getRuntime().prettyName;
  throw new Error(`join is unable to run in this browser environment, or has been bundled for the browser (running in ${runtimeName}).
In case this error is unexpected for you, please report it in https://pris.ly/prisma-prisma-bug-report`,
)}
Prisma.raw = () => {
  const runtimeName = getRuntime().prettyName;
  throw new Error(`raw is unable to run in this browser environment, or has been bundled for the browser (running in ${runtimeName}).
In case this error is unexpected for you, please report it in https://pris.ly/prisma-prisma-bug-report`,
)}
Prisma.validator = Public.validator

/**
* Extensions
*/
Prisma.getExtensionContext = () => {
  const runtimeName = getRuntime().prettyName;
  throw new Error(`Extensions.getExtensionContext is unable to run in this browser environment, or has been bundled for the browser (running in ${runtimeName}).
In case this error is unexpected for you, please report it in https://pris.ly/prisma-prisma-bug-report`,
)}
Prisma.defineExtension = () => {
  const runtimeName = getRuntime().prettyName;
  throw new Error(`Extensions.defineExtension is unable to run in this browser environment, or has been bundled for the browser (running in ${runtimeName}).
In case this error is unexpected for you, please report it in https://pris.ly/prisma-prisma-bug-report`,
)}

/**
 * Shorthand utilities for JSON filtering
 */
Prisma.DbNull = objectEnumValues.instances.DbNull
Prisma.JsonNull = objectEnumValues.instances.JsonNull
Prisma.AnyNull = objectEnumValues.instances.AnyNull

Prisma.NullTypes = {
  DbNull: objectEnumValues.classes.DbNull,
  JsonNull: objectEnumValues.classes.JsonNull,
  AnyNull: objectEnumValues.classes.AnyNull
}



/**
 * Enums
 */

exports.Prisma.TransactionIsolationLevel = makeStrictEnum({
  ReadUncommitted: 'ReadUncommitted',
  ReadCommitted: 'ReadCommitted',
  RepeatableRead: 'RepeatableRead',
  Serializable: 'Serializable',
  Snapshot: 'Snapshot'
});

exports.Prisma.AdvanceNoticeScalarFieldEnum = {
  AdvanceNoticeID: 'AdvanceNoticeID',
  StartPeriod: 'StartPeriod',
  EndPeriod: 'EndPeriod',
  DaysOfNotice: 'DaysOfNotice'
};

exports.Prisma.AutoWordReportScalarFieldEnum = {
  ReportID: 'ReportID',
  ReportName: 'ReportName',
  ReportTemplateName: 'ReportTemplateName',
  IsEmployee: 'IsEmployee',
  IsCustomer: 'IsCustomer',
  StrSQL: 'StrSQL',
  IsChossCustomerOrEmployee: 'IsChossCustomerOrEmployee',
  SaveInArchive: 'SaveInArchive',
  IsView: 'IsView'
};

exports.Prisma.AutoWordReportSubScalarFieldEnum = {
  ReportSubID: 'ReportSubID',
  ReportID: 'ReportID',
  FieldNameTB: 'FieldNameTB',
  FieldNameReport: 'FieldNameReport'
};

exports.Prisma.ChangeHistoryScalarFieldEnum = {
  ChangeHistoryID: 'ChangeHistoryID',
  Application_Name: 'Application_Name',
  ChangeDate: 'ChangeDate',
  Version_Number: 'Version_Number',
  ChangeDescription: 'ChangeDescription',
  ConvertDatabase: 'ConvertDatabase'
};

exports.Prisma.CitysIncomeTaxDiscountScalarFieldEnum = {
  ID: 'ID',
  Year: 'Year',
  GroupCode: 'GroupCode',
  CityName: 'CityName',
  DiscountPercent: 'DiscountPercent',
  MaximumIncome: 'MaximumIncome',
  MaximumIncomePerMonth: 'MaximumIncomePerMonth'
};

exports.Prisma.CompaniesScalarFieldEnum = {
  CompanyID: 'CompanyID',
  CompanyID_OLD: 'CompanyID_OLD',
  CompanyNumber: 'CompanyNumber',
  DeductionsNumber: 'DeductionsNumber',
  AgencyNumber: 'AgencyNumber',
  CompanyName: 'CompanyName',
  CompanyNameEng: 'CompanyNameEng',
  Address: 'Address',
  CityID: 'CityID',
  ZipCode: 'ZipCode',
  POB: 'POB',
  POB_ZipCode: 'POB_ZipCode',
  Email: 'Email',
  WebSite: 'WebSite',
  Phone: 'Phone',
  Fax: 'Fax',
  NumOfPaySlipDisplay: 'NumOfPaySlipDisplay',
  PaySlipDefinitionID: 'PaySlipDefinitionID',
  DbPathOnCloud: 'DbPathOnCloud',
  DocFilesPathOnCloud: 'DocFilesPathOnCloud',
  DbPathAgricultureCRM: 'DbPathAgricultureCRM',
  DisplayTypeID: 'DisplayTypeID',
  IsSuperAdminCompany: 'IsSuperAdminCompany',
  IsActive: 'IsActive',
  IsExportAccounts: 'IsExportAccounts',
  TaxAccountsToken: 'TaxAccountsToken',
  IsGetTaxAccountsCode: 'IsGetTaxAccountsCode',
  CompanyTaxAutoLink: 'CompanyTaxAutoLink',
  UserId: 'UserId',
  CompanyTypeID: 'CompanyTypeID'
};

exports.Prisma.CompaniesProductsScalarFieldEnum = {
  CompaniesProductsId: 'CompaniesProductsId',
  CreatedAt: 'CreatedAt',
  ProductId: 'ProductId',
  CompanyID: 'CompanyID',
  UserId: 'UserId',
  LastVersionDate_Salary: 'LastVersionDate_Salary',
  LastVersionDate_ManPower: 'LastVersionDate_ManPower'
};

exports.Prisma.CompaniesProductsExpireDatesScalarFieldEnum = {
  CompaniesProductsExpireDateId: 'CompaniesProductsExpireDateId',
  CreatedAt: 'CreatedAt',
  ProductId: 'ProductId',
  CompanyID: 'CompanyID',
  StartDate: 'StartDate',
  EndDate: 'EndDate',
  Comments: 'Comments',
  UserId: 'UserId'
};

exports.Prisma.CompaniesTypeScalarFieldEnum = {
  CompaniesTypeID: 'CompaniesTypeID',
  CompaniesType: 'CompaniesType'
};

exports.Prisma.CompaniesUsersScalarFieldEnum = {
  CompaniesUsersID: 'CompaniesUsersID',
  CompanyID: 'CompanyID',
  CompanyID_OLD: 'CompanyID_OLD',
  EmployeeIdentity: 'EmployeeIdentity',
  BirthDate: 'BirthDate',
  LastName: 'LastName',
  FirstName: 'FirstName',
  JobsID: 'JobsID',
  Gender: 'Gender',
  MobileNumber: 'MobileNumber',
  Phone: 'Phone',
  Fax: 'Fax',
  Email: 'Email',
  UserName: 'UserName',
  Password: 'Password',
  AreaMan: 'AreaMan',
  IsAdmin: 'IsAdmin',
  LastEntry: 'LastEntry',
  IsAllowAccess2WebSite: 'IsAllowAccess2WebSite',
  UserId: 'UserId',
  CreatedAt: 'CreatedAt',
  TwoFactorBase32Secret: 'TwoFactorBase32Secret',
  DeviceData: 'DeviceData'
};

exports.Prisma.CompaniesUsersProductsExpireDatesScalarFieldEnum = {
  CompaniesUsersProductsExpireDateId: 'CompaniesUsersProductsExpireDateId',
  CreatedAt: 'CreatedAt',
  ProductId: 'ProductId',
  CompanyID: 'CompanyID',
  CompaniesUsersID: 'CompaniesUsersID',
  StartDate: 'StartDate',
  EndDate: 'EndDate',
  UserId: 'UserId',
  Comments: 'Comments'
};

exports.Prisma.CopyrightScalarFieldEnum = {
  CopyrightID: 'CopyrightID',
  Copyright: 'Copyright',
  DbGeneralVer: 'DbGeneralVer'
};

exports.Prisma.CountriesScalarFieldEnum = {
  CountryID: 'CountryID',
  CountryCode: 'CountryCode',
  CountryName: 'CountryName',
  CountryNameEnglish: 'CountryNameEnglish',
  MultipleSelect: 'MultipleSelect',
  CommentPayslip: 'CommentPayslip',
  CommentHour: 'CommentHour',
  DefaultLanguageCol: 'DefaultLanguageCol'
};

exports.Prisma.CreditShiftScalarFieldEnum = {
  CreditShiftID: 'CreditShiftID',
  CreditShiftDate: 'CreditShiftDate',
  MaxCreditShiftPrecent: 'MaxCreditShiftPrecent',
  MaxCreditShiftLimit: 'MaxCreditShiftLimit',
  CreditPrecent: 'CreditPrecent'
};

exports.Prisma.DaysInMonthScalarFieldEnum = {
  DateManagedID: 'DateManagedID',
  DateManaged: 'DateManaged',
  YearManaged: 'YearManaged',
  MonthManaged: 'MonthManaged',
  DayInMonth: 'DayInMonth',
  DayInWeek: 'DayInWeek',
  WeekInYear: 'WeekInYear',
  WeekInMonth: 'WeekInMonth',
  DayTypeID: 'DayTypeID',
  StartEndTimeSabat: 'StartEndTimeSabat',
  HolidayName: 'HolidayName'
};

exports.Prisma.DaysInMonth_NewYearScalarFieldEnum = {
  DateManagedID: 'DateManagedID',
  DateManaged: 'DateManaged',
  YearManaged: 'YearManaged',
  MonthManaged: 'MonthManaged',
  DayInMonth: 'DayInMonth',
  DayInWeek: 'DayInWeek',
  WeekInYear: 'WeekInYear',
  WeekInMonth: 'WeekInMonth',
  DayTypeID: 'DayTypeID',
  StartEndTimeSabat: 'StartEndTimeSabat',
  HolidayName: 'HolidayName'
};

exports.Prisma.DayTypeScalarFieldEnum = {
  DayTypeID: 'DayTypeID',
  DayTypeName: 'DayTypeName',
  SetOrder: 'SetOrder'
};

exports.Prisma.DisplayTypeScalarFieldEnum = {
  DisplayTypeID: 'DisplayTypeID',
  DisplayType: 'DisplayType',
  URL: 'URL',
  IsShowInDanzarCRM: 'IsShowInDanzarCRM'
};

exports.Prisma.HashIndexGeneralScalarFieldEnum = {
  HashCode: 'HashCode',
  HashName: 'HashName'
};

exports.Prisma.HashSecurityScalarFieldEnum = {
  HashID: 'HashID',
  HashCode: 'HashCode',
  IsUse: 'IsUse'
};

exports.Prisma.JobsScalarFieldEnum = {
  JobsID: 'JobsID',
  JobTitle: 'JobTitle'
};

exports.Prisma.KupaGemelScalarFieldEnum = {
  KupaID: 'KupaID',
  KupaName: 'KupaName',
  AllowanceEmployeePercent: 'AllowanceEmployeePercent',
  AllowanceEmployerPercent: 'AllowanceEmployerPercent',
  AllowanceCompensationPercen: 'AllowanceCompensationPercen',
  IsAndromedaRecord: 'IsAndromedaRecord',
  EducationFundPercentEmp: 'EducationFundPercentEmp',
  EducationFundPercentEmpoyer: 'EducationFundPercentEmpoyer'
};

exports.Prisma.LandPagesScalarFieldEnum = {
  LandPageRowId: 'LandPageRowId',
  CompanyID: 'CompanyID',
  CreatedAt: 'CreatedAt',
  JsonData: 'JsonData',
  ViewDate: 'ViewDate',
  CompletedDate: 'CompletedDate'
};

exports.Prisma.LanguageDefinitionScalarFieldEnum = {
  LanguageDefinitionID: 'LanguageDefinitionID',
  ObjectName: 'ObjectName',
  ControlTypeID: 'ControlTypeID',
  ControlName: 'ControlName',
  CaptionEnglish: 'CaptionEnglish',
  CaptionHebrow: 'CaptionHebrow',
  CaptionRomanian: 'CaptionRomanian',
  CaptionRussian: 'CaptionRussian',
  CaptionChinese: 'CaptionChinese',
  CaptionTurkish: 'CaptionTurkish'
};

exports.Prisma.Lkup_AreaScalarFieldEnum = {
  AreaID: 'AreaID',
  AreaCode: 'AreaCode',
  AreaName: 'AreaName',
  Amount: 'Amount'
};

exports.Prisma.Lkup_BanksScalarFieldEnum = {
  BankID: 'BankID',
  BankName: 'BankName',
  BankNumber: 'BankNumber',
  CountryID: 'CountryID'
};

exports.Prisma.Lkup_BanksVerBranchScalarFieldEnum = {
  BranchID: 'BranchID',
  BankID: 'BankID',
  BranchName: 'BranchName',
  BranchCode: 'BranchCode',
  Address: 'Address',
  SortCode: 'SortCode',
  Phone_1: 'Phone_1',
  Phone_2: 'Phone_2',
  FaxNumber: 'FaxNumber',
  EMail: 'EMail',
  Comment: 'Comment'
};

exports.Prisma.Lkup_CityScalarFieldEnum = {
  CityID: 'CityID',
  CityCode: 'CityCode',
  CityName: 'CityName',
  CityNameEng: 'CityNameEng'
};

exports.Prisma.Lkup_CorporationScalarFieldEnum = {
  CorporationID: 'CorporationID',
  CorporationName: 'CorporationName',
  IsActive: 'IsActive',
  CorporationNumber: 'CorporationNumber',
  Address: 'Address',
  Email: 'Email',
  Phone: 'Phone',
  Cfo_email: 'Cfo_email',
  Contact_name: 'Contact_name',
  Contact_phone: 'Contact_phone',
  Ops_email: 'Ops_email',
  SoftTalkTaxToken: 'SoftTalkTaxToken',
  CorporationAutoLink: 'CorporationAutoLink'
};

exports.Prisma.Lkup_CountryScalarFieldEnum = {
  CountryID: 'CountryID',
  CountryCode: 'CountryCode',
  CountryName: 'CountryName',
  CountryNameEnglish: 'CountryNameEnglish',
  MultipleSelect: 'MultipleSelect'
};

exports.Prisma.Lkup_CreaditCardScalarFieldEnum = {
  CardID: 'CardID',
  CardName: 'CardName',
  CardCode: 'CardCode'
};

exports.Prisma.Lkup_EmployeesTypeScalarFieldEnum = {
  TypeID: 'TypeID',
  TypeName: 'TypeName'
};

exports.Prisma.Lkup_LanguageScalarFieldEnum = {
  LanguageID: 'LanguageID',
  LanguageName: 'LanguageName'
};

exports.Prisma.Lkup_PaySlipScalarFieldEnum = {
  PaySlipCode: 'PaySlipCode',
  PaySlipName: 'PaySlipName',
  PaySlipNameSource: 'PaySlipNameSource',
  IsTytle: 'IsTytle'
};

exports.Prisma.Lkup_SectorScalarFieldEnum = {
  SectorID: 'SectorID',
  SectorCode: 'SectorCode',
  SectorName: 'SectorName'
};

exports.Prisma.Lkup_SocialSecuritySectorScalarFieldEnum = {
  SocialSecurityID: 'SocialSecurityID',
  SocialSecurityCode: 'SocialSecurityCode',
  SocialSecurityName: 'SocialSecurityName'
};

exports.Prisma.Lkup_streetScalarFieldEnum = {
  StrretID: 'StrretID',
  StreetName: 'StreetName',
  StreetCode: 'StreetCode',
  Citycode: 'Citycode',
  StreetNameEng: 'StreetNameEng'
};

exports.Prisma.PensionDetailScalarFieldEnum = {
  PensionDetailID: 'PensionDetailID',
  TypePension: 'TypePension',
  StartYearPension: 'StartYearPension',
  EmployerRate: 'EmployerRate',
  EmployeeRate: 'EmployeeRate',
  EmployerCompensationRate: 'EmployerCompensationRate',
  TotalPensionRate: 'TotalPensionRate',
  AvarageSalaryPension: 'AvarageSalaryPension',
  Deposit: 'Deposit'
};

exports.Prisma.ProductsScalarFieldEnum = {
  ProductsId: 'ProductsId',
  ProductName: 'ProductName',
  ProductDescription: 'ProductDescription'
};

exports.Prisma.RankScalarFieldEnum = {
  RankID: 'RankID',
  SectorCode: 'SectorCode',
  RankYear: 'RankYear',
  RankMonth: 'RankMonth',
  RankCode: 'RankCode',
  RankName: 'RankName',
  Salary: 'Salary',
  RankNumber: 'RankNumber'
};

exports.Prisma.RecoveryDefinitionScalarFieldEnum = {
  RecoveryDefinitionID: 'RecoveryDefinitionID',
  RecoveryDefinitionName: 'RecoveryDefinitionName',
  RecoveryYear: 'RecoveryYear'
};

exports.Prisma.RecoveryDefinitionDetailsScalarFieldEnum = {
  RewardRecoveryVectorID: 'RewardRecoveryVectorID',
  RecoveryDefinitionID: 'RecoveryDefinitionID',
  StartYearRewardRecovery: 'StartYearRewardRecovery',
  EndYearRewardRecovery: 'EndYearRewardRecovery',
  RecoveryDayQuantity: 'RecoveryDayQuantity',
  RecoveryYearDescription: 'RecoveryYearDescription'
};

exports.Prisma.RecoveryDefinitionRateDetailsScalarFieldEnum = {
  RecoveryRewardID: 'RecoveryRewardID',
  RecoveryDefinitionID: 'RecoveryDefinitionID',
  RewardYearMonth: 'RewardYearMonth',
  RecoveryRewardRatePerDay: 'RecoveryRewardRatePerDay'
};

exports.Prisma.ReportDefinitionsScalarFieldEnum = {
  ReportID: 'ReportID',
  ReportName: 'ReportName',
  OrderBy: 'OrderBy',
  FieldName: 'FieldName',
  Caption: 'Caption',
  Color: 'Color',
  Background: 'Background',
  ColumnWidth: 'ColumnWidth',
  FontStyle: 'FontStyle',
  FontSize: 'FontSize',
  ReportTitle: 'ReportTitle',
  IsSum: 'IsSum',
  ColorIndex: 'ColorIndex'
};

exports.Prisma.RewardRecoveryRateScalarFieldEnum = {
  RecoveryRewardID: 'RecoveryRewardID',
  RewardYear: 'RewardYear',
  RecoveryRewardRatePerDay: 'RecoveryRewardRatePerDay'
};

exports.Prisma.RewardRecoveryVectorScalarFieldEnum = {
  RewardRecoveryVectorID: 'RewardRecoveryVectorID',
  StartYearRewardRecovery: 'StartYearRewardRecovery',
  EndYearRewardRecovery: 'EndYearRewardRecovery',
  RecoveryDayQuantity: 'RecoveryDayQuantity'
};

exports.Prisma.RewardSickVectorScalarFieldEnum = {
  RewardSickVectorID: 'RewardSickVectorID',
  StartYearRewardSick: 'StartYearRewardSick',
  EndYearRewardSick: 'EndYearRewardSick',
  SickDayQuantity: 'SickDayQuantity'
};

exports.Prisma.RewardVacationVectorScalarFieldEnum = {
  RewardVocationVectorID: 'RewardVocationVectorID',
  StartYearRewardVocation: 'StartYearRewardVocation',
  EndYearRewardVocation: 'EndYearRewardVocation',
  VocationDayQuantity6days: 'VocationDayQuantity6days',
  VocationDayQuantity5days: 'VocationDayQuantity5days'
};

exports.Prisma.SickDefinitionScalarFieldEnum = {
  SickDefinitionID: 'SickDefinitionID',
  SickDescription: 'SickDescription'
};

exports.Prisma.SickDefinitionDetailScalarFieldEnum = {
  RewardSickVectorID: 'RewardSickVectorID',
  SickDefinitionID: 'SickDefinitionID',
  StartYearRewardSick: 'StartYearRewardSick',
  EndYearRewardSick: 'EndYearRewardSick',
  SickDayQuantity: 'SickDayQuantity',
  SocialYearDescription: 'SocialYearDescription'
};

exports.Prisma.SocialSecurityScalarFieldEnum = {
  SocialSecurityID: 'SocialSecurityID',
  SocialSecurityYear: 'SocialSecurityYear',
  SocialSecurityMonth: 'SocialSecurityMonth',
  CurrentSocialSecurity: 'CurrentSocialSecurity',
  MinAccountTotalForDivuach: 'MinAccountTotalForDivuach'
};

exports.Prisma.SocialSecurityDetileScalarFieldEnum = {
  SocialSecurityDetailID: 'SocialSecurityDetailID',
  SocialSecurityID: 'SocialSecurityID',
  SocialYear: 'SocialYear',
  SocialMonth: 'SocialMonth',
  Sector: 'Sector',
  SocialSecurityCode: 'SocialSecurityCode',
  AverageSalary: 'AverageSalary',
  MinNationalInsByMony: 'MinNationalInsByMony',
  MaxNationalInsByMony: 'MaxNationalInsByMony',
  MinDeductionNationalInsByMony: 'MinDeductionNationalInsByMony',
  MinNationalInsByEmployee: 'MinNationalInsByEmployee',
  MaxNationalInsByEmployee: 'MaxNationalInsByEmployee',
  MinNationalInsByEmployer: 'MinNationalInsByEmployer',
  MaxNationalInsByEmployer: 'MaxNationalInsByEmployer',
  MaxNationalInsByMonyEmployee: 'MaxNationalInsByMonyEmployee',
  AverageEmbodiment: 'AverageEmbodiment',
  DeductionMax: 'DeductionMax',
  DeductionPercent: 'DeductionPercent',
  CreditPoint: 'CreditPoint',
  FactorToReduction: 'FactorToReduction',
  MinHoursToPay: 'MinHoursToPay',
  MinimumPayFor5Day: 'MinimumPayFor5Day',
  MinimumPayFor6Day: 'MinimumPayFor6Day',
  MaxPrecentReduction: 'MaxPrecentReduction',
  hourPerDayfor5: 'hourPerDayfor5',
  hourPerDayfor6: 'hourPerDayfor6',
  hourInfridayDay: 'hourInfridayDay',
  TaxPrecent: 'TaxPrecent',
  EmployerTax: 'EmployerTax',
  DiscountInTaxInEilat: 'DiscountInTaxInEilat',
  TaxUnitNumber: 'TaxUnitNumber',
  FundPercentConstruction: 'FundPercentConstruction',
  Hour100: 'Hour100',
  Hour125: 'Hour125',
  Hour150: 'Hour150',
  Hour175: 'Hour175',
  Hour200: 'Hour200',
  CreditCardMan: 'CreditCardMan',
  CreditCardWoman: 'CreditCardWoman',
  CreditCardChild: 'CreditCardChild',
  CreditCardBaby: 'CreditCardBaby',
  CreditCardInAddition: 'CreditCardInAddition',
  CreditCardLackMobilityChild: 'CreditCardLackMobilityChild',
  CreditCardImmigrant18: 'CreditCardImmigrant18',
  ControlingShareholder: 'ControlingShareholder',
  HealthInsuranceEmployeeLow: 'HealthInsuranceEmployeeLow',
  HealthInsuranceEmployeeAbove: 'HealthInsuranceEmployeeAbove',
  HealthInsuranceEmployerLow: 'HealthInsuranceEmployerLow',
  HealthInsuranceEmployerAbove: 'HealthInsuranceEmployerAbove',
  ValueOfVehicleUseHibberdDiscount: 'ValueOfVehicleUseHibberdDiscount',
  Deposit: 'Deposit',
  ValueOfMobileUse: 'ValueOfMobileUse',
  PensionCeiling: 'PensionCeiling',
  PensionCredit: 'PensionCredit',
  DepositEmployerPrecent: 'DepositEmployerPrecent',
  DepositEmployeePrecent: 'DepositEmployeePrecent',
  TotalHourPerWeek: 'TotalHourPerWeek',
  CreditCardAdultChild: 'CreditCardAdultChild',
  CreditCardChild1_5: 'CreditCardChild1_5',
  DepositEmployeePrecentExecption: 'DepositEmployeePrecentExecption'
};

exports.Prisma.SysdiagramsScalarFieldEnum = {
  name: 'name',
  principal_id: 'principal_id',
  diagram_id: 'diagram_id',
  version: 'version',
  definition: 'definition'
};

exports.Prisma.SystemDefinitionScalarFieldEnum = {
  SystemDefinitionId: 'SystemDefinitionId',
  CreatedAt: 'CreatedAt',
  FieldDescription: 'FieldDescription',
  FieldValue: 'FieldValue'
};

exports.Prisma.SystemMaintenancScalarFieldEnum = {
  SystemMaintenancID: 'SystemMaintenancID',
  UserMsg: 'UserMsg',
  LogOutFrequency: 'LogOutFrequency',
  SystemMaintenanc: 'SystemMaintenanc'
};

exports.Prisma.TaxStepDetileScalarFieldEnum = {
  TaxStepDetileID: 'TaxStepDetileID',
  TaxStapID: 'TaxStapID',
  TaxYear: 'TaxYear',
  TaxMonth: 'TaxMonth',
  StepNumber: 'StepNumber',
  TaxStap: 'TaxStap',
  TaxStapPercent: 'TaxStapPercent'
};

exports.Prisma.TaxStepsScalarFieldEnum = {
  TaxStapID: 'TaxStapID',
  TaxMonth: 'TaxMonth',
  TaxYear: 'TaxYear',
  CurrentTaxStep: 'CurrentTaxStep'
};

exports.Prisma.UnionFeeScalarFieldEnum = {
  ID: 'ID',
  UnionCode: 'UnionCode',
  UnionName: 'UnionName'
};

exports.Prisma.UnionFeeDetileScalarFieldEnum = {
  ID: 'ID',
  UnionCode: 'UnionCode',
  SocialYear: 'SocialYear',
  SocialMonth: 'SocialMonth',
  FeePercentage_No: 'FeePercentage_No',
  FeePercentage_Yes: 'FeePercentage_Yes',
  MaxFee: 'MaxFee',
  MaxAdminFee: 'MaxAdminFee'
};

exports.Prisma.VacationDefinitionDetailsScalarFieldEnum = {
  VacationlDefinitionDetaillID: 'VacationlDefinitionDetaillID',
  VacationlDefinitionID: 'VacationlDefinitionID',
  StartMonthReward: 'StartMonthReward',
  EndMonthrReward: 'EndMonthrReward',
  DayQuantity6days: 'DayQuantity6days',
  DayQuantity5days: 'DayQuantity5days',
  SocialYearDescription: 'SocialYearDescription',
  DayQuantity: 'DayQuantity'
};

exports.Prisma.VacationlDefinitionScalarFieldEnum = {
  VacationlDefinitionID: 'VacationlDefinitionID',
  VacationlDefinitionName: 'VacationlDefinitionName'
};

exports.Prisma.ValueOfVehicleUseScalarFieldEnum = {
  ValueOfVehicleUselID: 'ValueOfVehicleUselID',
  Year: 'Year',
  Month: 'Month',
  GroupOfVehicle: 'GroupOfVehicle',
  Value: 'Value'
};

exports.Prisma.ValueOfVehicleUseByDetileScalarFieldEnum = {
  ID: 'ID',
  Year: 'Year',
  RegistryYear: 'RegistryYear',
  VehicleCode: 'VehicleCode',
  ProductCode: 'ProductCode',
  ProductName: 'ProductName',
  ModelCode: 'ModelCode',
  ModelName: 'ModelName',
  FuelType: 'FuelType',
  CommercialName: 'CommercialName',
  Automatic: 'Automatic',
  Hybrid: 'Hybrid',
  GreenGrade: 'GreenGrade',
  PolutionGrade: 'PolutionGrade',
  EngineVolume: 'EngineVolume',
  Weight: 'Weight',
  BeginDate: 'BeginDate',
  ListPrice: 'ListPrice',
  AjustedPrice: 'AjustedPrice',
  Value: 'Value'
};

exports.Prisma.SortOrder = {
  asc: 'asc',
  desc: 'desc'
};

exports.Prisma.NullsOrder = {
  first: 'first',
  last: 'last'
};


exports.Prisma.ModelName = {
  AdvanceNotice: 'AdvanceNotice',
  AutoWordReport: 'AutoWordReport',
  AutoWordReportSub: 'AutoWordReportSub',
  ChangeHistory: 'ChangeHistory',
  CitysIncomeTaxDiscount: 'CitysIncomeTaxDiscount',
  Companies: 'Companies',
  CompaniesProducts: 'CompaniesProducts',
  CompaniesProductsExpireDates: 'CompaniesProductsExpireDates',
  CompaniesType: 'CompaniesType',
  CompaniesUsers: 'CompaniesUsers',
  CompaniesUsersProductsExpireDates: 'CompaniesUsersProductsExpireDates',
  Copyright: 'Copyright',
  Countries: 'Countries',
  CreditShift: 'CreditShift',
  DaysInMonth: 'DaysInMonth',
  DaysInMonth_NewYear: 'DaysInMonth_NewYear',
  DayType: 'DayType',
  DisplayType: 'DisplayType',
  HashIndexGeneral: 'HashIndexGeneral',
  HashSecurity: 'HashSecurity',
  Jobs: 'Jobs',
  KupaGemel: 'KupaGemel',
  LandPages: 'LandPages',
  LanguageDefinition: 'LanguageDefinition',
  Lkup_Area: 'Lkup_Area',
  Lkup_Banks: 'Lkup_Banks',
  Lkup_BanksVerBranch: 'Lkup_BanksVerBranch',
  Lkup_City: 'Lkup_City',
  Lkup_Corporation: 'Lkup_Corporation',
  Lkup_Country: 'Lkup_Country',
  Lkup_CreaditCard: 'Lkup_CreaditCard',
  Lkup_EmployeesType: 'Lkup_EmployeesType',
  Lkup_Language: 'Lkup_Language',
  Lkup_PaySlip: 'Lkup_PaySlip',
  Lkup_Sector: 'Lkup_Sector',
  Lkup_SocialSecuritySector: 'Lkup_SocialSecuritySector',
  Lkup_street: 'Lkup_street',
  PensionDetail: 'PensionDetail',
  Products: 'Products',
  Rank: 'Rank',
  RecoveryDefinition: 'RecoveryDefinition',
  RecoveryDefinitionDetails: 'RecoveryDefinitionDetails',
  RecoveryDefinitionRateDetails: 'RecoveryDefinitionRateDetails',
  ReportDefinitions: 'ReportDefinitions',
  RewardRecoveryRate: 'RewardRecoveryRate',
  RewardRecoveryVector: 'RewardRecoveryVector',
  RewardSickVector: 'RewardSickVector',
  RewardVacationVector: 'RewardVacationVector',
  SickDefinition: 'SickDefinition',
  SickDefinitionDetail: 'SickDefinitionDetail',
  SocialSecurity: 'SocialSecurity',
  SocialSecurityDetile: 'SocialSecurityDetile',
  sysdiagrams: 'sysdiagrams',
  SystemDefinition: 'SystemDefinition',
  SystemMaintenanc: 'SystemMaintenanc',
  TaxStepDetile: 'TaxStepDetile',
  TaxSteps: 'TaxSteps',
  UnionFee: 'UnionFee',
  UnionFeeDetile: 'UnionFeeDetile',
  VacationDefinitionDetails: 'VacationDefinitionDetails',
  VacationlDefinition: 'VacationlDefinition',
  ValueOfVehicleUse: 'ValueOfVehicleUse',
  ValueOfVehicleUseByDetile: 'ValueOfVehicleUseByDetile'
};

/**
 * This is a stub Prisma Client that will error at runtime if called.
 */
class PrismaClient {
  constructor() {
    return new Proxy(this, {
      get(target, prop) {
        let message
        const runtime = getRuntime()
        if (runtime.isEdge) {
          message = `PrismaClient is not configured to run in ${runtime.prettyName}. In order to run Prisma Client on edge runtime, either:
- Use Prisma Accelerate: https://pris.ly/d/accelerate
- Use Driver Adapters: https://pris.ly/d/driver-adapters
`;
        } else {
          message = 'PrismaClient is unable to run in this browser environment, or has been bundled for the browser (running in `' + runtime.prettyName + '`).'
        }
        
        message += `
If this is unexpected, please open an issue: https://pris.ly/prisma-prisma-bug-report`

        throw new Error(message)
      }
    })
  }
}

exports.PrismaClient = PrismaClient

Object.assign(exports, Prisma)
