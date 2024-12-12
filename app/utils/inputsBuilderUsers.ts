

export function createInputsBuilder() {
    const response = [

        {
            'name': 'FirstName',
            'label': 'שם פרטי',
            'type': 'text',
            'isDisabled': false,
            validate: ['notEmpty', 'upTo20'],
            'defaultValue': '',
            'colSize': 6
        },
        {
            'name': 'LastName',
            'label': 'שם משפחה',
            'type': 'text',
            'isDisabled': false,
            validate: ['notEmpty', 'upTo20'],
            'defaultValue': '',
            //'colSize' : 4
        },
        {
            'name': 'EmployeeIdentity',
            'label': 'ת.ז.',
            'direction': 'ltr',
            'type': 'text',
            'isDisabled': false,
            validate: ['notEmpty', 'tz'],
            'defaultValue': '',
            //'colSize' : 2
        },

        {
            'name': 'MobileNumber',
            'label': 'מספר נייד',
            'type': 'text',
            'direction': 'ltr',
            'isDisabled': false,
            validate: ['notEmpty', 'phone', 'upTo11'],
            'defaultValue': '',
            //'colSize' : 3
        },

        {
            'name': 'BirthDate',
            'label': 'תאריך לידה',
            'direction': 'ltr',
            'type': 'date',
            'isDisabled': false,
            //validate : ['notEmpty'],
            'defaultValue': '',
            'colSize': 6
        },

        {
            'name': 'Gender',
            'label': 'מין',
            'defaultValue': '',
            'colSize': 6,
            validate: ['notEmpty'],
            'isDisabled': false,//trueIfNotEmpty(visitData.CustomerGender),
            'type': 'select',
            'options': [
                {
                    id: 1,
                    name: 'זכר'
                },
                {
                    id: 2,
                    name: 'נקבה'
                }
            ],
        },
        {
            'name': 'Email',
            'label': 'כתובת מייל',
            'type': 'text',
            validate: ['notEmpty', 'email', 'upTo100'],
            'isDisabled': false,
            'direction': 'ltr',
            'defaultValue': '',
            'colSize': 12
        },

        {
            'name': 'UserName',
            'label': 'שם משתמש',
            'type': 'text',
            validate: ['username', 'upTo20'],
            //'isDisabled' : true,
            'defaultValue': '',
            'direction': 'ltr',
            'colSize': 6
        },

        {
            'name': 'Password',
            'label': 'סיסמה',
            'type': 'password',
            //validate : ['username','upTo20'],
            'isDisabled': true,
            'defaultValue': '',
            'colSize': 6
        },
        {

            'name': 'IsAdmin',
            'label': 'תפקיד ניהולי?',
            'defaultValue': '',
            'colSize': 6,
            //validate : ['notEmpty'],
            'isDisabled': false,//trueIfNotEmpty(visitData.CustomerGender),
            'type': 'select',
            'options': [
                {
                    id: 1,
                    name: 'כן'
                },
                {
                    id: 0,
                    name: 'לא'
                }
            ]
        },
        {
            'name': 'IsAllowAccess2WebSite',
            'label': 'אישור כניסה לפורטל?',
            'defaultValue': '',
            'colSize': 12,
            //validate : ['notEmpty'],
            'isDisabled': false,//trueIfNotEmpty(visitData.CustomerGender),
            'type': 'select',
            'options': [
                {
                    id: 1,
                    name: 'כן'
                },
                {
                    id: 0,
                    name: 'לא'
                }
            ]
        },


    ]

    return response;

}
