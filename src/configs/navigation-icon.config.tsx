import {
    TbLayoutDashboard,
    TbFileText,
    TbUsersGroup, // Personalabteilung
    TbShieldStar // Dienstaufsicht

} from 'react-icons/tb'

import { 
    GiArmorUpgrade, // SWAT
    GiCityCar,
    GiHelicopter,
    GiAirplane,
    GiTec9,
    GiDarkSquad,
    GiHomeGarage,
    GiPoliceCar,
    GiPathDistance,
    GiSettingsKnobs,
    GiTrafficLightsGreen,
    GiCalendar,
    GiLockedDoor,
    GiPerson,
    GiLockers,
    GiOpenFolder,
    GiDesk,
    GiServerRack,
    GiLawStar

} from 'react-icons/gi'

import { 
    RiCriminalLine // Criminal Division

} from "react-icons/ri";

import { 
    MdOutlineSchool // Ausbildungsabteilung

} from "react-icons/md";

import type { JSX } from 'react'

export type NavigationIcons = Record<string, JSX.Element>

const navigationIcon: NavigationIcons = {
    control: <TbLayoutDashboard />,
    official: <GiPerson />,
    document: <TbFileText />,
    personal: <TbUsersGroup />, // Personalabteilung
    supervision: <TbShieldStar />, // Dienstaufsicht
    swat: <GiArmorUpgrade />, // SWAT
    criminal: <RiCriminalLine />, // Criminal Division
    school: <MdOutlineSchool />, // Ausbildungsabteilung
    appointments: <GiCalendar />,
    acts: <GiOpenFolder />,
    reports: <GiDesk />,
    register: <GiServerRack />,
    car: <GiCityCar />,
    helicopter: <GiHelicopter />,
    airplane: <GiAirplane />,
    weapon: <GiTec9 />,
    organization: <GiDarkSquad />,
    garage: <GiHomeGarage />,
    evidenceRoom: <GiLockedDoor />,
    law: <GiLawStar />,
    police: <GiPoliceCar />,
    location: <GiPathDistance />,
    settings: <GiSettingsKnobs />,
    trafficLight: <GiTrafficLightsGreen />,
    clothingRegulation: <GiLockers />
}

export default navigationIcon
