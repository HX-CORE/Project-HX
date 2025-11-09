export type Variables =
    | 'primary'
    | 'primaryDeep'
    | 'primaryMild'
    | 'primarySubtle'
    | 'neutral'

export type ThemeVariables = Record<'light' | 'dark', Record<Variables, string>>

const grayTheme: ThemeVariables = {
    light: {
        primary: '#9e9e9e',
        primaryDeep: '#616161',
        primaryMild: '#bdbdbd',
        primarySubtle: '#9e9e9e1a',
        neutral: '#ffffff',
    },
    dark: {
        primary: '#9e9e9e',
        primaryDeep: '#616161',
        primaryMild: '#bdbdbd',
        primarySubtle: '#9e9e9e1a',
        neutral: '#ffffff',
    },
}

const darkTheme: ThemeVariables = {
    light: {
        primary: '#18181b',
        primaryDeep: '#09090b',
        primaryMild: '#27272a',
        primarySubtle: '#18181b0d',
        neutral: '#ffffff',
    },
    dark: {
        primary: '#ffffff',
        primaryDeep: '#09090b',
        primaryMild: '#e5e7eb',
        primarySubtle: '#ffffff1a',
        neutral: '#111827',
    },
}

const redTheme: ThemeVariables = {
    light: {
        primary: '#f44336',
        primaryDeep: '#c62828',
        primaryMild: '#e57373',
        primarySubtle: '#f443361a',
        neutral: '#ffffff',
    },
    dark: {
        primary: '#f44336',
        primaryDeep: '#c62828',
        primaryMild: '#e57373',
        primarySubtle: '#f443361a',
        neutral: '#ffffff',
    },
}

const pinkTheme: ThemeVariables = {
    light: {
        primary: '#e91e63',
        primaryDeep: '#ad1457',
        primaryMild: '#f06292',
        primarySubtle: '#e91e631a',
        neutral: '#ffffff',
    },
    dark: {
        primary: '#e91e63',
        primaryDeep: '#ad1457',
        primaryMild: '#f06292',
        primarySubtle: '#e91e631a',
        neutral: '#ffffff',
    },
}

const orangeTheme: ThemeVariables = {
    light: {
        primary: '#fb732c',
        primaryDeep: '#cc5c24',
        primaryMild: '#fc8f56',
        primarySubtle: '#fb732c1a',
        neutral: '#ffffff',
    },
    dark: {
        primary: '#fb732c',
        primaryDeep: '#cc5c24',
        primaryMild: '#fc8f56',
        primarySubtle: '#fb732c1a',
        neutral: '#ffffff',
    },
}

const amberTheme: ThemeVariables = {
    light: {
        primary: '#ffc107',
        primaryDeep: '#ff8f00',
        primaryMild: '#ffd54f',
        primarySubtle: '#ffc1071a',
        neutral: '#ffffff',
    },
    dark: {
        primary: '#ffc107',
        primaryDeep: '#ff8f00',
        primaryMild: '#ffd54f',
        primarySubtle: '#ffc1071a',
        neutral: '#ffffff',
    },
}

const yellowTheme: ThemeVariables = {
    light: {
        primary: '#ffeb3b',
        primaryDeep: '#fbc02d',
        primaryMild: '#fff176',
        primarySubtle: '#ffeb3b1a',
        neutral: '#ffffff',
    },
    dark: {
        primary: '#ffeb3b',
        primaryDeep: '#fbc02d',
        primaryMild: '#fff176',
        primarySubtle: '#ffeb3b1a',
        neutral: '#ffffff',
    },
}

const limeTheme: ThemeVariables = {
    light: {
        primary: '#cddc39',
        primaryDeep: '#9e9d24',
        primaryMild: '#dce775',
        primarySubtle: '#cddc391a',
        neutral: '#ffffff',
    },
    dark: {
        primary: '#cddc39',
        primaryDeep: '#9e9d24',
        primaryMild: '#dce775',
        primarySubtle: '#cddc391a',
        neutral: '#ffffff',
    },
}

const greenTheme: ThemeVariables = {
    light: {
        primary: '#0CAF60',
        primaryDeep: '#088d50',
        primaryMild: '#34c779',
        primarySubtle: '#0CAF601a',
        neutral: '#ffffff',
    },
    dark: {
        primary: '#0CAF60',
        primaryDeep: '#088d50',
        primaryMild: '#34c779',
        primarySubtle: '#0CAF601a',
        neutral: '#ffffff',
    },
}

const tealTheme: ThemeVariables = {
    light: {
        primary: '#00bfa5',
        primaryDeep: '#00897b',
        primaryMild: '#4db6ac',
        primarySubtle: '#00bfa51a',
        neutral: '#ffffff',
    },
    dark: {
        primary: '#00bfa5',
        primaryDeep: '#00897b',
        primaryMild: '#4db6ac',
        primarySubtle: '#00bfa51a',
        neutral: '#ffffff',
    },
}

const cyanTheme: ThemeVariables = {
    light: {
        primary: '#00bcd4',
        primaryDeep: '#0097a7',
        primaryMild: '#4dd0e1',
        primarySubtle: '#00bcd41a',
        neutral: '#ffffff',
    },
    dark: {
        primary: '#00bcd4',
        primaryDeep: '#0097a7',
        primaryMild: '#4dd0e1',
        primarySubtle: '#00bcd41a',
        neutral: '#ffffff',
    },
}

const blueTheme: ThemeVariables = {
    light: {
        primary: '#1e90ff',
        primaryDeep: '#1565c0',
        primaryMild: '#64b5f6',
        primarySubtle: '#1e90ff1a',
        neutral: '#ffffff',
    },
    dark: {
        primary: '#1e90ff',
        primaryDeep: '#1565c0',
        primaryMild: '#64b5f6',
        primarySubtle: '#1e90ff1a',
        neutral: '#ffffff',
    },
}

const defaultTheme: ThemeVariables = {
    light: {
        primary: '#2a85ff',
        primaryDeep: '#0069f6',
        primaryMild: '#4996ff',
        primarySubtle: '#2a85ff1a',
        neutral: '#ffffff',
    },
    dark: {
        primary: '#2a85ff',
        primaryDeep: '#0069f6',
        primaryMild: '#4996ff',
        primarySubtle: '#2a85ff1a',
        neutral: '#ffffff',
    },
}

const indigoTheme: ThemeVariables = {
    light: {
        primary: '#3f51b5',
        primaryDeep: '#283593',
        primaryMild: '#7986cb',
        primarySubtle: '#3f51b51a',
        neutral: '#ffffff',
    },
    dark: {
        primary: '#3f51b5',
        primaryDeep: '#283593',
        primaryMild: '#7986cb',
        primarySubtle: '#3f51b51a',
        neutral: '#ffffff',
    },
}

const purpleTheme: ThemeVariables = {
    light: {
        primary: '#8C62FF',
        primaryDeep: '#704acc',
        primaryMild: '#a784ff',
        primarySubtle: '#8C62FF1a',
        neutral: '#ffffff',
    },
    dark: {
        primary: '#8C62FF',
        primaryDeep: '#704acc',
        primaryMild: '#a784ff',
        primarySubtle: '#8C62FF1a',
        neutral: '#ffffff',
    },
}

const brownTheme: ThemeVariables = {
    light: {
        primary: '#795548',
        primaryDeep: '#4e342e',
        primaryMild: '#a1887f',
        primarySubtle: '#7955481a',
        neutral: '#ffffff',
    },
    dark: {
        primary: '#795548',
        primaryDeep: '#4e342e',
        primaryMild: '#a1887f',
        primarySubtle: '#7955481a',
        neutral: '#ffffff',
    },
}

const presetThemeSchemaConfig: Record<string, ThemeVariables> = {
    gray: grayTheme,
    dark: darkTheme,
    red: redTheme,
    pink: pinkTheme,
    orange: orangeTheme,
    amber: amberTheme,
    yellow: yellowTheme,
    lime: limeTheme,
    green: greenTheme,
    teal: tealTheme,
    cyan: cyanTheme,
    blue: blueTheme,
    default: defaultTheme,
    indigo: indigoTheme,
    purple: purpleTheme,
    brown: brownTheme,
}

export default presetThemeSchemaConfig
