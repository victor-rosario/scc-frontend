import { FieldConfig } from '@components/app/modal/FormModal/FormModal.interface'
import { IBioMedicalPayload } from '@providers/biomedical/biomedical.interface'

const questions = [
    {
        label: '¿Se han agotado las opciones terapéuticas?',
        name: 'optionsExhausted',
    },
    {
        label: 'Las alteraciones en estructuras y/o función corporal ¿son permanentes o de largo plazo?',
        name: 'permanentOrLongTerm',
    },
    {
        label: 'La condición de salud que presenta ¿es degenerativa?',
        name: 'degenerativeCondition',
    },
    {
        label: '¿El cuadro clínico del usuario incluye anosognosia?',
        name: 'anosognosia',
    },
    {
        label: '¿La sordoceguera es parte del diagnóstico?',
        name: 'deafblindnessDiagnosis',
    },
    {
        label: '¿El cuadro clínico incluye demencia?',
        name: 'dementiaDiagnosis',
    },
    {
        label: '¿El cuadro clínico incluye labilidad emocional?',
        name: 'emotionalLability',
    },
]

export const criterion: FieldConfig<IBioMedicalPayload>[] = questions.map(({ label, name }) => ({
    label,
    type: "switch",
    name,
    responsive: {
        xs: 12
    }
} as FieldConfig<IBioMedicalPayload>))
