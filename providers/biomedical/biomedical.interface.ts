export interface IGetCreateBiomedicalResponse {
    created: boolean
}

export interface TreatingPhysicianInfo {
    firstName: string
    lastName: string
    phoneNumber: string
    exequatur: string
    specialty: string
    pss: string
    healthRegion: string
    healthArea: string
    healthZone: string
    reportDate: string
}

export interface IBioMedicalPayload {
    requestUUID: string;
    perinatalDiseaseHistoryUUIDs: string[];
    maternalDiseaseHistoryUUIDs: string[];
    healthIssueUUIDs: string[];
    classificationDiseaseUUID: string;
    descriptionDiagnose: string;
    relevantFamilyHistory: string;
    ageGestional: string;
    birthWeightPoundsLb: number;
    headCircumferenceCm: number;
    revival: boolean | string;
    apgar: number;
    reasonPerinatal: string;
    reasonMaternal: string;
    descriptionTherapeutic: string;
    optionsExhausted: boolean | string;
    permanentOrLongTerm: boolean | string;
    degenerativeCondition: boolean | string;
    anosognosia: boolean | string;
    deafblindnessDiagnosis: boolean | string;
    dementiaDiagnosis: boolean | string;
    emotionalLability: boolean | string;

    treatingPhysician_firstName: string
    treatingPhysician_lastName: string
    treatingPhysician_phoneNumber: string
    treatingPhysician_exequatur: string
    treatingPhysician_specialty: string
    treatingPhysician_pss: string
    treatingPhysician_healthRegion: string
    treatingPhysician_healthArea: string
    treatingPhysician_healthZone: string
    treatingPhysician_reportDate: string

    treatingPhysicianInfo: TreatingPhysicianInfo
}