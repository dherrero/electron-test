const { Menu, app } = require('electron')

const template = [{
        label: 'Window',
        submenu: [{
                role: 'togglefullscreen',

            }, {
                role: 'minimize'
            },
            {
                type: 'separator'
            },
            {
                label: 'Salir',
                role: 'close'
            }
        ]
    },
    {
        role: 'help',
        submenu: [{
            label: 'Autor',
            click() { require('electron').shell.openExternal('https://www.linkedin.com/in/daniel-herrero-tom%C3%A1s-7781b143/') }
        }]
    }
]

const menu = Menu.buildFromTemplate(template)
Menu.setApplicationMenu(menu)