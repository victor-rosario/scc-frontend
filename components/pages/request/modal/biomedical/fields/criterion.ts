import { FieldConfig } from '@components/app/modal/FormModal/FormModal.interface'

const questions = [
    '¿Se han agotado las opciones terapéuticas?',
    'Las alteraciones en estructuras y/o función corporal ¿son permanentes o de largo plazo?',
    'La condición de salud que presenta ¿es degenerativa?',
    '¿El cuadro clínico del usuario incluye anosognosia?',
    '¿La sordoceguera es parte del diagnóstico?',
    '¿El cuadro clínico incluye demencia?',
    '¿El cuadro clínico incluye labilidad emocional?'
]

export const criterion: FieldConfig<any>[] = questions.map(question => ({
    label: question,
    type: "switch",
    name: question,
    responsive: {
        xs: 12
    }
}))
