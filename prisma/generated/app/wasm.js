
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

exports.Prisma.CompaniesConfigScalarFieldEnum = {
  CompanyConfigId: 'CompanyConfigId',
  CompanyIdGeneralCRM: 'CompanyIdGeneralCRM',
  CreatedAt: 'CreatedAt',
  PropertyEngName: 'PropertyEngName',
  PropertyValue: 'PropertyValue',
  PropertyTextJsonValue: 'PropertyTextJsonValue',
  PropertyHebDescription: 'PropertyHebDescription'
};

exports.Prisma.CompanyAdminScalarFieldEnum = {
  CompanyAdminId: 'CompanyAdminId',
  CompanyID: 'CompanyID',
  CreatedAt: 'CreatedAt',
  NotShowFields: 'NotShowFields',
  MaxSearchResults: 'MaxSearchResults',
  EditFields: 'EditFields'
};

exports.Prisma.EmployeeHoursScalarFieldEnum = {
  EmployeeHoursId: 'EmployeeHoursId',
  CreatedAt: 'CreatedAt',
  CompanyIdGeneralCRM: 'CompanyIdGeneralCRM',
  EmployeeId: 'EmployeeId',
  EmployeeNumber: 'EmployeeNumber',
  MonthManaged: 'MonthManaged',
  YearManaged: 'YearManaged',
  LeadingDate: 'LeadingDate',
  HourStart: 'HourStart',
  HourEnd: 'HourEnd',
  HourStartSource: 'HourStartSource',
  HourEndSource: 'HourEndSource',
  RealHours: 'RealHours',
  QtyHour: 'QtyHour',
  QtyHour125: 'QtyHour125',
  QtyHour150: 'QtyHour150',
  QtyHour175: 'QtyHour175',
  QtyHour200: 'QtyHour200',
  BreakMinutes: 'BreakMinutes',
  GpsStart: 'GpsStart',
  GpsEnd: 'GpsEnd',
  EmployeeHoursByLocalityId: 'EmployeeHoursByLocalityId',
  IsManualInsert: 'IsManualInsert',
  ManualInsertUserId: 'ManualInsertUserId',
  IsRowDeleted: 'IsRowDeleted',
  ActionTypeID: 'ActionTypeID',
  DayTypeID: 'DayTypeID',
  HolidayName: 'HolidayName',
  StartEndTimeSabat: 'StartEndTimeSabat',
  IsForemanHourApproved: 'IsForemanHourApproved',
  IsForemanApproval: 'IsForemanApproval',
  ForemanApprovalGeneralCRMUserId: 'ForemanApprovalGeneralCRMUserId',
  IsComplementRow: 'IsComplementRow'
};

exports.Prisma.EmployeeHoursByLocalityScalarFieldEnum = {
  EmployeeHoursByLocalityId: 'EmployeeHoursByLocalityId',
  CreatedAt: 'CreatedAt',
  CompanyIdGeneralCRM: 'CompanyIdGeneralCRM',
  EmployeeId: 'EmployeeId',
  NotShowEmployeeHours: 'NotShowEmployeeHours',
  EmployeeHoursLocalityId: 'EmployeeHoursLocalityId',
  HourMinStart: 'HourMinStart',
  HourMaxStop: 'HourMaxStop',
  RoundTime: 'RoundTime',
  EmployeeHoursUserId: 'EmployeeHoursUserId',
  MinimumHours2BreakTime: 'MinimumHours2BreakTime',
  BreakTime: 'BreakTime',
  AlertForMaxMonthHours: 'AlertForMaxMonthHours',
  EmployeeHoursContractId: 'EmployeeHoursContractId'
};

exports.Prisma.EmployeeHoursByLocalityTotalsScalarFieldEnum = {
  EmployeeHoursByLocalityTotalsId: 'EmployeeHoursByLocalityTotalsId',
  CreatedAt: 'CreatedAt',
  CompanyIdGeneralCRM: 'CompanyIdGeneralCRM',
  MonthManaged: 'MonthManaged',
  YearManaged: 'YearManaged',
  EmployeeId: 'EmployeeId',
  EmployeeHoursLocalityId: 'EmployeeHoursLocalityId',
  QtyHour: 'QtyHour',
  QtyHour125: 'QtyHour125',
  QtyHour150: 'QtyHour150',
  QtyHour175: 'QtyHour175',
  QtyHour200: 'QtyHour200',
  RealHours: 'RealHours',
  BreakMinutes: 'BreakMinutes',
  WorkedDays: 'WorkedDays',
  IsCloseSalary: 'IsCloseSalary'
};

exports.Prisma.EmployeeHoursByLocalityTotalsActionTypeScalarFieldEnum = {
  EmployeeHoursByLocalityTotalsActionTypeId: 'EmployeeHoursByLocalityTotalsActionTypeId',
  CreatedAt: 'CreatedAt',
  EmployeeHoursByLocalityTotalsId: 'EmployeeHoursByLocalityTotalsId',
  ActionTypeId: 'ActionTypeId',
  TotalActionType: 'TotalActionType'
};

exports.Prisma.EmployeeHoursCompaniesSmsAlertScalarFieldEnum = {
  CompaniesSmsAlertId: 'CompaniesSmsAlertId',
  CompanyIdGeneralCRM: 'CompanyIdGeneralCRM',
  CreatedAt: 'CreatedAt',
  EmployeeID: 'EmployeeID',
  SmsNumber: 'SmsNumber',
  SmsResponse: 'SmsResponse',
  UserSend: 'UserSend'
};

exports.Prisma.EmployeeHoursContractsScalarFieldEnum = {
  EmployeeHoursContractsId: 'EmployeeHoursContractsId',
  CreatedAt: 'CreatedAt',
  Active: 'Active',
  HebrewName: 'HebrewName',
  Comments: 'Comments',
  JsonData: 'JsonData',
  CompanyIdGeneralCRM: 'CompanyIdGeneralCRM',
  HoursWeek: 'HoursWeek',
  NumberDayInWeek: 'NumberDayInWeek',
  IsExtraHoursWeekCalc: 'IsExtraHoursWeekCalc',
  IsNightShiftCalc: 'IsNightShiftCalc'
};

exports.Prisma.EmployeeHoursForemansConfigScalarFieldEnum = {
  EmployeeHoursForemanConfigId: 'EmployeeHoursForemanConfigId',
  CreatedAt: 'CreatedAt',
  CompanyIdGeneralCRM: 'CompanyIdGeneralCRM',
  ForemanUserGeneralCRM: 'ForemanUserGeneralCRM',
  CanEdit: 'CanEdit',
  NotShowSourceHours: 'NotShowSourceHours'
};

exports.Prisma.EmployeeHoursLocalitiesScalarFieldEnum = {
  EmployeeHoursLocalityId: 'EmployeeHoursLocalityId',
  CreatedAt: 'CreatedAt',
  NotShowLocality: 'NotShowLocality',
  LocalityName: 'LocalityName',
  LocalityNameEng: 'LocalityNameEng',
  CompanyIdGeneralCRM: 'CompanyIdGeneralCRM',
  Address: 'Address',
  Gps: 'Gps',
  GpsRadius: 'GpsRadius',
  AddressAccess: 'AddressAccess',
  LocalityIDAccess: 'LocalityIDAccess',
  LocalityCodeAccess: 'LocalityCodeAccess',
  CustomerIDAccess: 'CustomerIDAccess',
  CustomerNameAccess: 'CustomerNameAccess',
  ForemanGeneralCRMUserId: 'ForemanGeneralCRMUserId',
  HourMinStart: 'HourMinStart',
  HourMaxStop: 'HourMaxStop',
  RoundTime: 'RoundTime',
  MinimumHours2BreakTime: 'MinimumHours2BreakTime',
  BreakTime: 'BreakTime',
  AlertForMaxMonthHours: 'AlertForMaxMonthHours',
  RestrictDayHoursAbove12: 'RestrictDayHoursAbove12',
  RestrictWeekExtraHoursAbove16: 'RestrictWeekExtraHoursAbove16',
  RestrictGpsActive: 'RestrictGpsActive'
};

exports.Prisma.EmployeeHoursUsersScalarFieldEnum = {
  EmployeeHoursUsersId: 'EmployeeHoursUsersId',
  CreatedAt: 'CreatedAt',
  CompanyIdGeneralCRM: 'CompanyIdGeneralCRM',
  EmployeeId: 'EmployeeId',
  MobileNumber: 'MobileNumber',
  UserName: 'UserName',
  Password: 'Password',
  IsAdmin: 'IsAdmin',
  LastEntry: 'LastEntry',
  IsAllowAccess2WebSite: 'IsAllowAccess2WebSite',
  PhoneData: 'PhoneData',
  CookieError: 'CookieError'
};

exports.Prisma.EmployeesAccessDocumentsTempScalarFieldEnum = {
  EmployeesAccessDocumentTempId: 'EmployeesAccessDocumentTempId',
  CompanyGeneralCrmId: 'CompanyGeneralCrmId',
  CreatedAt: 'CreatedAt',
  EmployeeID: 'EmployeeID',
  DocumemtID: 'DocumemtID',
  Date: 'Date',
  DocumemtType: 'DocumemtType',
  Comment: 'Comment',
  DocumentName: 'DocumentName'
};

exports.Prisma.EmployeesAccessHouseTempScalarFieldEnum = {
  EmployeesAccessHouseTempId: 'EmployeesAccessHouseTempId',
  CompanyGeneralCrmId: 'CompanyGeneralCrmId',
  CreatedAt: 'CreatedAt',
  HouseID: 'HouseID',
  HouseCode: 'HouseCode',
  CityName: 'CityName',
  Street: 'Street',
  HouseNumber: 'HouseNumber',
  ZipCode: 'ZipCode',
  EmployeesQtyMax: 'EmployeesQtyMax',
  ElectricityCounter_Start: 'ElectricityCounter_Start',
  ElectricityCounter_End: 'ElectricityCounter_End',
  GasCounter_Start: 'GasCounter_Start',
  GasCounter_End: 'GasCounter_End',
  WaterCounter_Start: 'WaterCounter_Start',
  WaterCounter_End: 'WaterCounter_End',
  ElectricityNumber: 'ElectricityNumber',
  GasNumber: 'GasNumber',
  WaterNumber: 'WaterNumber',
  HouseField: 'HouseField',
  ArnonaNumber: 'ArnonaNumber',
  EvacuationDate: 'EvacuationDate',
  AreaMan: 'AreaMan',
  GasContainer: 'GasContainer',
  GasCompanyID: 'GasCompanyID',
  SleepingRooms: 'SleepingRooms',
  Salon: 'Salon',
  Toilet: 'Toilet',
  Baths: 'Baths',
  HouseCommittee: 'HouseCommittee',
  HouseCommitteePhone: 'HouseCommitteePhone',
  Status: 'Status',
  Name: 'Name',
  Street_: 'Street_',
  CityName_: 'CityName_',
  ZipCode_: 'ZipCode_',
  Phone_1: 'Phone_1',
  Phone_2: 'Phone_2',
  FaxNumber: 'FaxNumber',
  StartDateContract: 'StartDateContract',
  EndDateContract: 'EndDateContract',
  Security: 'Security',
  SecurityAmount: 'SecurityAmount',
  PaymentFrequency: 'PaymentFrequency',
  Rant: 'Rant',
  Comment: 'Comment',
  IsInsured: 'IsInsured',
  InsureEndDate: 'InsureEndDate',
  IsUpdate: 'IsUpdate',
  LivingArea: 'LivingArea',
  HouseRelation: 'HouseRelation',
  CableTypeID: 'CableTypeID',
  CableInstallationdate: 'CableInstallationdate',
  AccountNumber: 'AccountNumber',
  PathNumber: 'PathNumber',
  AppartmentNum: 'AppartmentNum',
  IsBroker: 'IsBroker',
  BrokerName: 'BrokerName',
  BrokerPhone: 'BrokerPhone',
  ElectricityCode: 'ElectricityCode',
  GasNumberCode: 'GasNumberCode',
  WaterNumberCode: 'WaterNumberCode',
  ElectricityComment: 'ElectricityComment',
  GasCounteComment: 'GasCounteComment',
  WaterCounterComment: 'WaterCounterComment',
  AgencyFee: 'AgencyFee',
  IdNumber: 'IdNumber',
  ArrivalInstructions: 'ArrivalInstructions',
  OwnerEmail: 'OwnerEmail',
  OwnerBankAcount: 'OwnerBankAcount',
  CustomerID: 'CustomerID',
  LocalityName: 'LocalityName',
  Contractor_billing: 'Contractor_billing',
  Floor: 'Floor',
  Entrance: 'Entrance',
  OwnerBranchCode: 'OwnerBranchCode',
  OwnerBankID: 'OwnerBankID'
};

exports.Prisma.EmployeesAccessLkupDocumentTypeTempScalarFieldEnum = {
  EmployeesAccessLkupDocumentTypeTempId: 'EmployeesAccessLkupDocumentTypeTempId',
  CompanyGeneralCrmId: 'CompanyGeneralCrmId',
  CreatedAt: 'CreatedAt',
  DocumemtType: 'DocumemtType'
};

exports.Prisma.EmployeesAccessTempScalarFieldEnum = {
  EmployeesAccessTempId: 'EmployeesAccessTempId',
  CompanyGeneralCrmId: 'CompanyGeneralCrmId',
  CreatedAt: 'CreatedAt',
  AgentID: 'AgentID',
  AreaMan: 'AreaMan',
  AppartmentNum: 'AppartmentNum',
  BirthDate: 'BirthDate',
  CityName: 'CityName',
  CoatReceivingDate: 'CoatReceivingDate',
  CoatSize: 'CoatSize',
  CountryID: 'CountryID',
  CountryName: 'CountryName',
  CourseAtatDate: 'CourseAtatDate',
  CourseAtatExpireDate: 'CourseAtatExpireDate',
  CustomerName: 'CustomerName',
  CustomerStatus: 'CustomerStatus',
  CustomerID: 'CustomerID',
  EmployeeFirstName: 'EmployeeFirstName',
  EmployeeID: 'EmployeeID',
  EmployeeLastName: 'EmployeeLastName',
  EmployeeNumber: 'EmployeeNumber',
  EndInsuranceDate: 'EndInsuranceDate',
  EntranceDate: 'EntranceDate',
  HealthFund: 'HealthFund',
  HouseID: 'HouseID',
  HouseNumber: 'HouseNumber',
  InsuranceCompany: 'InsuranceCompany',
  InsuranceNumber: 'InsuranceNumber',
  InsuredNumber: 'InsuredNumber',
  IsCourseAtat: 'IsCourseAtat',
  Isbriefing: 'Isbriefing',
  LocalityName: 'LocalityName',
  LocalityCode: 'LocalityCode',
  LocalityID: 'LocalityID',
  LongshirtReceivingDate: 'LongshirtReceivingDate',
  LongshirtSize: 'LongshirtSize',
  MobilePhone: 'MobilePhone',
  PantsReceivingDate: 'PantsReceivingDate',
  PassportNumber: 'PassportNumber',
  ProfessionName: 'ProfessionName',
  ProfessionSecondName: 'ProfessionSecondName',
  ProfessionThirdName: 'ProfessionThirdName',
  ShoesNumber: 'ShoesNumber',
  ShoesReceiveDate: 'ShoesReceiveDate',
  SizeOfPantes: 'SizeOfPantes',
  SizeOfshirt: 'SizeOfshirt',
  StartDate: 'StartDate',
  StatusName: 'StatusName',
  Street: 'Street',
  TshirReceivingDate: 'TshirReceivingDate',
  briefingDate: 'briefingDate',
  briefingExpireDate: 'briefingExpireDate',
  startInsuranceDate: 'startInsuranceDate'
};

exports.Prisma.ErrorsPhpLogsScalarFieldEnum = {
  ErrorsPhpLogsId: 'ErrorsPhpLogsId',
  CreatedAt: 'CreatedAt',
  tokenData: 'tokenData',
  urlController: 'urlController',
  sendData: 'sendData',
  errorMessg: 'errorMessg'
};

exports.Prisma.Lkup_ActionTypeScalarFieldEnum = {
  ActionTypeID: 'ActionTypeID',
  ActionType: 'ActionType',
  IsIgnoreHours: 'IsIgnoreHours'
};

exports.Prisma.LogEnterEmployeeScalarFieldEnum = {
  LogEnterEmployee: 'LogEnterEmployee',
  UserID: 'UserID',
  CompanyID: 'CompanyID',
  EmployeeID: 'EmployeeID',
  CreatedAt: 'CreatedAt',
  ResultsData: 'ResultsData'
};

exports.Prisma.LogSearchsScalarFieldEnum = {
  LogSearchsId: 'LogSearchsId',
  UserID: 'UserID',
  CompanyID: 'CompanyID',
  CreatedAt: 'CreatedAt',
  searchData: 'searchData',
  resultsCount: 'resultsCount'
};

exports.Prisma.LogSignUpScalarFieldEnum = {
  LogSignUpId: 'LogSignUpId',
  UserID: 'UserID',
  CompanyID: 'CompanyID',
  CreatedAt: 'CreatedAt'
};

exports.Prisma.MessagesEmployeesScalarFieldEnum = {
  MessageEmployeeId: 'MessageEmployeeId',
  CreatedAt: 'CreatedAt',
  FinalDateForTask: 'FinalDateForTask',
  ReadedAt: 'ReadedAt',
  DoneAt: 'DoneAt',
  SendResponseAtStatusDone: 'SendResponseAtStatusDone',
  CompanyIdGeneralCRM: 'CompanyIdGeneralCRM',
  UserFromIdGeneralCRM: 'UserFromIdGeneralCRM',
  UserToIdGeneralCRM: 'UserToIdGeneralCRM',
  IsReplyToMessageId: 'IsReplyToMessageId',
  MessageStatusId: 'MessageStatusId',
  MessageSubject: 'MessageSubject',
  MessageText: 'MessageText',
  LinkEmployees: 'LinkEmployees',
  LinkHouses: 'LinkHouses'
};

exports.Prisma.MessagesStatusScalarFieldEnum = {
  MessagesStatusId: 'MessagesStatusId',
  MessagesStatusName: 'MessagesStatusName',
  CreatedAt: 'CreatedAt',
  Sort: 'Sort',
  Comments: 'Comments'
};

exports.Prisma.SiteConfigScalarFieldEnum = {
  SiteConfigId: 'SiteConfigId',
  PropertyEngName: 'PropertyEngName',
  PropertyIntValue: 'PropertyIntValue',
  PropertyTextValue: 'PropertyTextValue',
  PropertyHebDescription: 'PropertyHebDescription',
  CreatedAt: 'CreatedAt'
};

exports.Prisma.SysdiagramsScalarFieldEnum = {
  name: 'name',
  principal_id: 'principal_id',
  diagram_id: 'diagram_id',
  version: 'version',
  definition: 'definition'
};

exports.Prisma.UsersLinkedViewRoleScalarFieldEnum = {
  UsersLinkedViewRoleId: 'UsersLinkedViewRoleId',
  CreatedAt: 'CreatedAt',
  CompanyID: 'CompanyID',
  UserID: 'UserID',
  UserViewRolesId: 'UserViewRolesId'
};

exports.Prisma.UserViewRolesScalarFieldEnum = {
  UserViewRolesId: 'UserViewRolesId',
  CreatedAt: 'CreatedAt',
  CompanyID: 'CompanyID',
  UserViewRoleName: 'UserViewRoleName',
  NotShowFields: 'NotShowFields',
  MaxSearchResults: 'MaxSearchResults',
  EditFields: 'EditFields'
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
  CompaniesConfig: 'CompaniesConfig',
  CompanyAdmin: 'CompanyAdmin',
  EmployeeHours: 'EmployeeHours',
  EmployeeHoursByLocality: 'EmployeeHoursByLocality',
  EmployeeHoursByLocalityTotals: 'EmployeeHoursByLocalityTotals',
  EmployeeHoursByLocalityTotalsActionType: 'EmployeeHoursByLocalityTotalsActionType',
  EmployeeHoursCompaniesSmsAlert: 'EmployeeHoursCompaniesSmsAlert',
  EmployeeHoursContracts: 'EmployeeHoursContracts',
  EmployeeHoursForemansConfig: 'EmployeeHoursForemansConfig',
  EmployeeHoursLocalities: 'EmployeeHoursLocalities',
  EmployeeHoursUsers: 'EmployeeHoursUsers',
  EmployeesAccessDocumentsTemp: 'EmployeesAccessDocumentsTemp',
  EmployeesAccessHouseTemp: 'EmployeesAccessHouseTemp',
  EmployeesAccessLkupDocumentTypeTemp: 'EmployeesAccessLkupDocumentTypeTemp',
  EmployeesAccessTemp: 'EmployeesAccessTemp',
  ErrorsPhpLogs: 'ErrorsPhpLogs',
  Lkup_ActionType: 'Lkup_ActionType',
  LogEnterEmployee: 'LogEnterEmployee',
  LogSearchs: 'LogSearchs',
  LogSignUp: 'LogSignUp',
  MessagesEmployees: 'MessagesEmployees',
  MessagesStatus: 'MessagesStatus',
  SiteConfig: 'SiteConfig',
  sysdiagrams: 'sysdiagrams',
  UsersLinkedViewRole: 'UsersLinkedViewRole',
  UserViewRoles: 'UserViewRoles'
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
