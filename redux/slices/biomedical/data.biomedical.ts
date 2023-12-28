import { IBioMedicalPayload } from '@providers/biomedical/biomedical.interface'
import { BiomedicalSliceI } from './biomedical.interface'

export const initialPayloadBiomedical: IBioMedicalPayload = {
    requestUUID: "",
    descriptionDiagnose: "",
    relevantFamilyHistory: "",
    healthIssueUUIDs: [],
    classificationDiseaseUUID: "",
    maternalDiseaseHistoryUUIDs: [],
    perinatalDiseaseHistoryUUIDs: [],
    ageGestional: "",
    birthWeightPoundsLb: 0,
    headCircumferenceCm: 0,
    revival: "",
    apgar: 0,
    reasonPerinatal: "",
    reasonMaternal: "",
    descriptionTherapeutic: "",

    optionsExhausted: false,
    permanentOrLongTerm: false,
    degenerativeCondition: false,
    anosognosia: false,
    deafblindnessDiagnosis: false,
    dementiaDiagnosis: false,
    emotionalLability: false,

    // Teaching Physician Info
    treatingPhysician_firstName: "",
    treatingPhysician_lastName: "",
    treatingPhysician_phoneNumber: "",
    treatingPhysician_exequatur: "",
    treatingPhysician_specialty: "",
    treatingPhysician_pss: "",
    treatingPhysician_healthRegion: "",
    treatingPhysician_healthArea: "",
    treatingPhysician_healthZone: "",
    treatingPhysician_reportDate: "",

    treatingPhysicianInfo: {
        firstName: "",
        lastName: "",
        phoneNumber: "",
        reportDate: "",
        exequatur: "",
        specialty: "",
        pss: "",
        healthRegion: "",
        healthArea: "",
        healthZone: "",
    }
}

export const biomedicalSliceInitialState: BiomedicalSliceI = {
    payload: initialPayloadBiomedical,
}